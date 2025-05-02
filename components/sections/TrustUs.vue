<script setup lang="ts">
import Gradient from '~/assets/svg/trust-us-section-gradient.svg'

const activeSvgIndex = ref(undefined)
const gradientRef = useTemplateRef('gradientRef')

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

const onPointerOver = (index) => {
  activeSvgIndex.value = index

  gradientRef.value[index].$el.unpauseAnimations()

}

const onPointerOut = (index) => {
  activeSvgIndex.value = undefined

  gradientRef.value[index].$el.pauseAnimations()
}

onMounted(() => {
  gradientRef.value.forEach(item => {
    item.$el.pauseAnimations()
  })
})
</script>

<template>
  <section id="trust-us" class="trust-us">
    <h2>Нам доверяют</h2>
    <div class="trust-us__wrapper">
      <div class="trust-us__item" v-for="(item, index) in items" @pointerover="onPointerOver(index)" @pointerleave="onPointerOut(index)">
        <img :src="'/images/trust-us/' + (index + 1) + '.png'" width="60" alt="image">
        <Gradient ref="gradientRef" filled />
        <div>{{ item.title }}</div>
      </div>
    </div>
  </section>
</template>