<script setup lang="ts">
import Input from '~/components/Input.vue'
import Button from '~/components/Button.vue'
import apiContacts, {
  type FormDataCreateSmallForm,
  type FormDataCreateErrorsSmallForm
} from '~/api/contacts'

const props = defineProps<{
  isSecondBlock?: boolean
}>()

const device = useDevice()

let io: IntersectionObserver | undefined = undefined

const readyToDiscussRef = useTemplateRef('readyToDiscussRef')
const animationIsActive = ref(false)

const formData = ref<FormDataCreateSmallForm>({
  name: undefined,
  phone: undefined,
  email: undefined,
  form_type_id: 'SMALL_FORM'
})

const errors = ref<FormDataCreateErrorsSmallForm>({} as FormDataCreateErrorsSmallForm)

const onFormSubmit = async () => {
  try {
    await apiContacts().create(formData.value)
  } catch (error) {
    errors.value = error
    return
  }
}

onMounted(() => {
  io = new IntersectionObserver((entries) => {
    entries[0].isIntersecting ?
        animationIsActive.value = true :
        animationIsActive.value = false
  })
  io.observe(readyToDiscussRef.value)
})

onUnmounted(() => {
  io.disconnect()
})
</script>

<template>
  <section ref="readyToDiscussRef" :id="isSecondBlock ? 'ready-to-discuss' : undefined" class="ready-to-discuss">
    <div class="ready-to-discuss__gradient" :class="{'--is-active': animationIsActive}" v-if="device.isDesktop && isSecondBlock" />
    <h2>Готовы обсудить проект?</h2>
    <form class="form" @submit.prevent="onFormSubmit">
      <h3>Получить консультацию прямо сейчас</h3>
      <div class="input__wrapper">
        <Input v-model="formData.name" label="Имя" />
        <InputPhone v-model="formData.phone" label="Номер телефона" />
      </div>
      <Input v-model="formData.email" name="email" label="Email" />
      <Button type="submit" class="ready-to-discuss__button --without-icon-on-mobile" :class="{'--blue': props.isSecondBlock}" icon="send">Заказать консультацию</Button>
    </form>
  </section>
</template>