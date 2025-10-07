<script setup lang="ts">
import Input from '~/components/shared/form/Input.vue'
import InputPhone from '~/components/shared/form/InputPhone.vue'
import Button from '~/components/shared/form/Button.vue'
import apiContacts, {
  type FormDataCreateSmallForm,
  type FormDataCreateErrorsSmallForm,
  getDefaultFormDataCreateSmallForm
} from '~/api/contacts'
import { useModal } from 'vue-final-modal'
import ThankYouModal from '~/components/modals/ThankYouModal.vue'
import ProcessingPersonalDataAgree from '~/components/shared/form/ProcessingPersonalDataAgree.vue'
import Checkbox from '~/components/shared/form/Checkbox.vue'

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
  form_type_id: 'SMALL_FORM',
  is_agree_to_receive_ads: true
})

const errors = ref<FormDataCreateErrorsSmallForm>({} as FormDataCreateErrorsSmallForm)

const onFormSubmit = async () => {
  try {
    await apiContacts().create(formData.value)

    errors.value = {} as FormDataCreateErrorsSmallForm
    formData.value = getDefaultFormDataCreateSmallForm()

    const thankYouModal = useModal({
      component: ThankYouModal,
      attrs: {
        onConfirm: () => {
          thankYouModal.close()
        }
      }
    })
    await thankYouModal.open()

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
        <Input v-model="formData.name" :is-required="true" :errors="errors.name" label="Имя" />
        <InputPhone v-model="formData.phone" :is-required="true" :errors="errors.phone" label="Номер телефона" />
      </div>
      <Input v-model="formData.email" :is-required="true" :errors="errors.email" label="Email" />
      <Button type="submit" class="ready-to-discuss__button --without-icon-on-mobile" :class="{'--blue': props.isSecondBlock}" icon="send">Заказать консультацию</Button>
      <ProcessingPersonalDataAgree />
      <Checkbox :errors="errors.is_agree_to_receive_ads" class="--contrast" v-model="formData.is_agree_to_receive_ads">
        <a target="_blank" href="/docs/consent-to-receive-advertising.pdf">Я согласен получить рекламу и звонки</a>
      </Checkbox>
    </form>
  </section>
</template>