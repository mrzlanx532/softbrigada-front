<script setup lang="ts">
import Header from '~/components/Header.vue'
import Button from '~/components/Button.vue'
</script>

<template>
  <Header />
  <section id="hero" class="hero">
    <h1>
      <span>Разрабатываем</span>
      <span>IT-решения для бизнеса</span>
      <span>— от идеи до запуска</span>
    </h1>
    <div class="hero__buttons">
      <Button class="--white">Получить решение</Button>
      <Button>Смотреть кейсы</Button>
    </div>
  </section>
</template>