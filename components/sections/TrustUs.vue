<script setup lang="ts">
const videoRef = useTemplateRef('videoRef')
const device = useDevice()

const sliderOptions = ref({
  rewind : false,
  loop : true,
  type   : 'loop',
  arrows: false,
  autoWidth: true,
  focus: 'center',
  gap: 16
})

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

const enableItem = (index) => {
  videoRef.value[index].style.opacity = 1

  try {
    videoRef.value[index].play()
  } catch (e) {
    alert(e)
  }
}

const disableItem = (index) => {
  videoRef.value[index].style.opacity = 0
  videoRef.value[index].pause()
}

const onPointerOver = (index) => {
  enableItem(index)
}

const onPointerOut = (index) => {
  disableItem(index)
}

const activeSlideChanged = (el, newIndex, prevIndex) => {
  enableItem(newIndex)
  disableItem(prevIndex)
}

const onMountedSplide = () => {
  if (device.isMobile) {
    videoRef.value[0].addEventListener('canplay', () => enableItem(0))
  }

  videoRef.value.forEach(_videoRef => {
    _videoRef.load()
  })
}
</script>

<template>
  <section id="trust-us" class="trust-us">
    <h2>Нам доверяют</h2>
    <div class="trust-us__wrapper">
      <ClientOnly v-if="device.isMobile">
        <splide @splide:mounted="onMountedSplide" @splide:moved="activeSlideChanged" class="--splide-custom-2" :options="sliderOptions">
          <splide-slide v-for="(item, index) in items" :key="index">
            <div class="trust-us__item">
              <img :src="'/images/trust-us/' + (index + 1) + '.png'" width="60" alt="image">
              <video preload="none" ref="videoRef" :class="{[item.class]: true}" muted loop playsinline>
                <source src="/videos/trust-us-background.webm" type="video/webm">
                <source src="/videos/trust-us-background.mp4" type="video/mp4">
              </video>
              <div>{{ item.title }}</div>
            </div>
          </splide-slide>
        </splide>
      </ClientOnly>
      <div v-else class="trust-us__item" v-for="(item, index) in items" :key="index"  @pointerover="onPointerOver(index)" @pointerleave="onPointerOut(index)">
        <img :src="'/images/trust-us/' + (index + 1) + '.png'" width="60" alt="image">
        <video preload="none" ref="videoRef" :class="{[item.class]: true}" muted loop playsinline>
          <source src="/videos/trust-us-background.webm" type="video/webm">
          <source src="/videos/trust-us-background.mp4" type="video/mp4">
        </video>
        <div>{{ item.title }}</div>
      </div>
    </div>
  </section>
</template>