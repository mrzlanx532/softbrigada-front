<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components'
import Button from '~/components/Button.vue'

let io: IntersectionObserver | undefined = undefined
const isOpen = ref(false)
const liteMode = ref(true)

const { widgetIsVisible } = useGlobalState()

const onClickButton = () => {
  isOpen.value = !isOpen.value
}

const closeWidget = () => {
  isOpen.value = false
}

onMounted(() => {
  io = new IntersectionObserver((entries) => {
    entries[0].isIntersecting ?
        liteMode.value = true :
        liteMode.value = false
  })
  io.observe(document.querySelector('#hero'))
})

onUnmounted(() => {
  io.disconnect()
})
</script>

<template>
  <div class="widget-discuss" :class="{'--visible': widgetIsVisible}" v-on-click-outside="closeWidget">
    <div class="widget-discuss__content" :class="{'--is-open': isOpen }">
      <div class="widget-discuss__header">
        <img src="/images/reviews/1.png" alt="me" />
        <svg @click="closeWidget"><use href="/sprite.svg#close" /></svg>
      </div>
      <div class="widget-discuss__header-content">Обсудить проект</div>
      <div class="widget-discuss__group">
        <div>По телефону</div>
        <div>+7 (910) 292-03-10</div>
      </div>
      <div class="widget-discuss__group">
        <div>По почте</div>
        <div>info@gmail.com</div>
      </div>
      <Button>Написать в телеграм</Button>
    </div>
    <button
        class="widget-discuss__button"
        @click="onClickButton"
        :class="{'--lite-mode': liteMode}"
    >
      <div class="widget-discuss__online" />
      <div>Обсудить проект</div>
    </button>
  </div>
</template>