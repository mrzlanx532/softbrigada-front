<script setup lang="ts">
const activeSvgIndex = ref(undefined)

const videoRef = useTemplateRef('videoRef')

let io: IntersectionObserver | undefined = undefined

const items = ref([
  {
    title: 'Сбер',
    class: ''
  },
  {
    title: 'ПСБ',
    class: '--1'
  },
  {
    title: 'Нетмонет',
    class: '--2'
  },
  {
    title: 'ЛитРес',
    class: '--3'
  },
  {
    title: 'Webflow',
    class: '--4'
  },
  {
    title: 'Ozon',
    class: '--5'
  },
])

const onPointerOver = (index) => {
  activeSvgIndex.value = index

  videoRef.value[index].style.opacity = 1
  videoRef.value[index].play()
}

const onPointerOut = (index) => {
  activeSvgIndex.value = undefined

  videoRef.value[index].style.opacity = 0
  videoRef.value[index].pause()
}

onMounted(async () => {
  io = new IntersectionObserver(async (entries) => {
    if (entries[0].isIntersecting) {
      const video = await fetch('/videos/trust-us-background.webm')
      const videoBlob = await video.blob()

      videoRef.value.forEach(_videoRef => {
        _videoRef.src = URL.createObjectURL(videoBlob)
      })

      io?.disconnect()
    }
  }, {
    rootMargin: '0px 0px 1000px 0px'
  })
  io.observe(document.querySelector('#trust-us'))
})

onUnmounted(() => {
  io?.disconnect()
})
</script>

<template>
  <section id="trust-us" class="trust-us">
    <h2>Нам доверяют</h2>
    <div class="trust-us__wrapper">
      <div class="trust-us__item" v-for="(item, index) in items" :key="index" @pointerover="onPointerOver(index)" @pointerleave="onPointerOut(index)">
        <img :src="'/images/trust-us/' + (index + 1) + '.png'" width="60" alt="image">
        <video preload="none" ref="videoRef" muted :class="{[item.class]: true}" />
        <div>{{ item.title }}</div>
      </div>
    </div>
  </section>
</template>