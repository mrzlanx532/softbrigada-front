<script setup lang="ts">
const props = defineProps<{
  isSecondBlock?: boolean
}>()

const device = useDevice()

let io: IntersectionObserver | undefined = undefined

const readyToDiscussRef = useTemplateRef('readyToDiscussRef')
const animationIsActive = ref(false)

import Input from '~/components/Input.vue'
import Button from '~/components/Button.vue'
import Gradient from '~/assets/svg/ready-to-discuss-section-gradient.svg'

const onFormSubmit = () => {
  alert('TODO')
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
        <Input name="name" label="Имя" />
        <Input name="phone" label="Номер телефона" />
      </div>
      <Input name="email" label="Email" />
      <Button type="submit" class="ready-to-discuss__button --without-icon-on-mobile" :class="{'--blue': props.isSecondBlock}" icon="send">Заказать консультацию</Button>
    </form>
  </section>
</template>