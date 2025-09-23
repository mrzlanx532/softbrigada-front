<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components'
import Button from '~/components/form/Button.vue'

const config = useConfig()

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

const goToLink = (link: string) => {
  const a = document.createElement('a')
  a.href = link
  a.target = '_blank'
  a.click()
}

const onClickPhone = () => {
  if (window.innerWidth < 767) {
    const a = document.createElement('a')
    a.href = 'tel:+' + config.phone
    a.click()
    a.remove()
  }
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
        <div class="widget-discuss__phone" @click="onClickPhone">{{ config.formattedPhone }}</div>
      </div>
      <div class="widget-discuss__group">
        <div>По почте</div>
        <div><a :href="'mailto:' + config.email">{{ config.email }}</a></div>
      </div>
      <Button @click="goToLink(config.telegram)">Написать в телеграм</Button>
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