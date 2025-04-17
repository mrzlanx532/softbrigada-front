<script setup lang="ts">
const items = ref([
  {
    title: 'Сбер',
  },
  {
    title: 'ПСБ',
  },
  {
    title: 'Нетмонет',
  },
  {
    title: 'ЛитРес',
  },
  {
    title: 'Webflow',
  },
  {
    title: 'Ozon',
  },
])
</script>

<template>
  <section id="trust-us" class="trust-us">
    <h2>Нам доверяют</h2>
    <div class="trust-us__wrapper">
      <div class="trust-us__item" v-for="(item, index) in items">
        <img :src="'/images/trust-us/' + (index + 1) + '.png'" width="60" alt="image">
        <div>{{ item.title }}</div>
      </div>
    </div>
  </section>
</template>