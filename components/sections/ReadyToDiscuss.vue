<script setup lang="ts">
import Input from '~/components/Input.vue'
import Button from '~/components/Button.vue'
</script>

<template>
  <section id="ready-to-discuss" class="ready-to-discuss">
    <h2>Готовы обсудить проект?</h2>
    <div>
      <h3>Получить консультацию прямо сейчас</h3>
      <form>
        <div class="ready-to-discuss__input-container">
          <Input name="name" label="Имя" />
          <Input name="phone" label="Номер телефона" />
        </div>
        <Input name="email" label="Email" />
        <Button class="ready-to-discuss__button" icon="send">Заказать консультацию</Button>
      </form>
    </div>
  </section>
</template>