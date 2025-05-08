<script setup lang="ts">
const props = withDefaults(defineProps<{
  isHeader: boolean
}>(), {
  isHeader: true
})

import Button from '~/components/Button.vue'

const { goToAnchor } = useAnchor()

const onClickLink = (id: string) => {
  goToAnchor(id)
}

const openBrief = () => {
  const { briefIsOpen } = useBrief()

  briefIsOpen.value = true
}
</script>

<template>
  <div class="menu-desktop">
    <div class="menu-desktop__container">
      <div class="menu-desktop__logo">
        <img height="40" src="/images/logo/43.svg" alt="logo">
      </div>
      <div class="menu-desktop__menu">
        <a @click="onClickLink('dev-types')">что мы делаем</a>
        <a @click="onClickLink('cases')">наши кейсы <span>+3</span></a>
      </div>
    </div>
    <div class="menu-desktop__container --right">
      <div class="menu-desktop__contacts">
        <div class="menu-desktop__contacts-social">
          <svg><use href="/sprite.svg#telegram" /></svg>
          <svg><use href="/sprite.svg#whatsapp" /></svg>
        </div>
        <a v-if="props.isHeader">info@gmail.com</a>
        <a v-if="props.isHeader">+7 (910) 292-03-10</a>
      </div>
      <Button class="menu-desktop__button" @click="openBrief">Заполнить бриф</Button>
    </div>
  </div>
  <div class="menu-mobile">
    <div class="menu-mobile__logo">
      <img height="35" src="/images/logo/43.svg" alt="logo">
    </div>
    <div>
      <Button class="menu-mobile__button" @click="openBrief">Заполнить бриф</Button>
      <Button v-if="props.isHeader" class="menu-mobile__button">
        <svg><use href="/sprite.svg#burger" /></svg>
      </Button>
    </div>
  </div>
</template>