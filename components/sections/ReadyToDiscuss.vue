<script setup lang="ts">
const props = defineProps<{
  isSecondBlock?: boolean
}>()

import Input from '~/components/Input.vue'
import Button from '~/components/Button.vue'
import Gradient from '~/assets/svg/ready-to-discuss-section-gradient.svg'

const onFormSubmit = () => {
  alert('TODO')
}
</script>

<template>
  <section id="ready-to-discuss" class="ready-to-discuss">
    <Gradient v-if="isSecondBlock" filled />
    <h2>Готовы обсудить проект?</h2>
    <form class="form" @submit.prevent="onFormSubmit">
      <h3>Получить консультацию прямо сейчас</h3>
      <div class="input__wrapper">
        <Input name="name" label="Имя" />
        <Input name="phone" label="Номер телефона" />
      </div>
      <Input name="email" label="Email" />
      <Button type="submit" class="ready-to-discuss__button" :class="{'--blue': props.isSecondBlock}" icon="send">Заказать консультацию</Button>
    </form>
  </section>
</template>