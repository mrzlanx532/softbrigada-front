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

const enableItem = (index) => {
  videoRef.value[index].style.opacity = 1
  videoRef.value[index].play()
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

onMounted(async () => {
  io = new IntersectionObserver(async (entries) => {
    if (entries[0].isIntersecting ) {
      Promise.resolve().then(async () => {
        const video = await fetch('/videos/trust-us-background.mp4')
        const videoBlob = await video.blob()

        videoRef.value.forEach(_videoRef => {
          _videoRef.src = URL.createObjectURL(videoBlob)
        })

        if (device.isMobile) {
          enableItem(0)
        }
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
      <ClientOnly v-if="device.isMobile">
        <splide @splide:moved="activeSlideChanged" class="--splide-custom-2" :options="sliderOptions">
          <splide-slide v-for="(item, index) in items" :key="index">
            <div class="trust-us__item">
              <img :src="'/images/trust-us/' + (index + 1) + '.png'" width="60" alt="image">
              <video preload="none" ref="videoRef" :class="{[item.class]: true}" muted loop playsinline />
              <div>{{ item.title }}</div>
            </div>
          </splide-slide>
        </splide>
      </ClientOnly>
      <div v-else class="trust-us__item" v-for="(item, index) in items" :key="index"  @pointerover="onPointerOver(index)" @pointerleave="onPointerOut(index)">
        <img :src="'/images/trust-us/' + (index + 1) + '.png'" width="60" alt="image">
        <video preload="none" ref="videoRef" :class="{[item.class]: true}" muted loop playsinline />
        <div>{{ item.title }}</div>
      </div>
    </div>
  </section>
</template>