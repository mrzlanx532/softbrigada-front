<script setup lang="ts">
import Button from '~/components/Button.vue'

const props = withDefaults(defineProps<{
  isHeader?: boolean
}>(), {
  isHeader: true
})

const { goToAnchor } = useAnchor()
const { burgerMenuIsOpen } = useGlobalState()

const onClickLink = (id: string) => {
  goToAnchor(id)
}

const openBrief = () => {
  const { briefIsOpen } = useGlobalState()

  briefIsOpen.value = true
}

const openBurgerMenu = () => {
  burgerMenuIsOpen.value = true
}

const closeBurgerMenu = () => {
  burgerMenuIsOpen.value = false
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
      <Button v-if="props.isHeader" class="menu-mobile__button" @click="openBurgerMenu">
        <svg><use href="/sprite.svg#burger" /></svg>
      </Button>
    </div>
  </div>
  <div class="menu-open-burger" :class="{'--is-open': burgerMenuIsOpen}">
    <div style="flex-direction: column; justify-content: space-between; display: flex; height: 100%;">
      <div class="menu-mobile">
        <div class="menu-mobile__logo">
          <img height="35" src="/images/logo/43.svg" alt="logo">
        </div>
        <div>
          <Button class="menu-mobile__button" @click="openBrief">Заполнить бриф</Button>
          <Button class="menu-mobile__button" @click="closeBurgerMenu">
            <svg><use href="/sprite.svg#plus" /></svg>
          </Button>
        </div>
      </div>
      <div class="menu-open-burger__anchor-links">
        <a @click="onClickLink('dev-types')">что мы делаем</a>
        <a @click="onClickLink('cases')">наши кейсы <span>+3</span></a>
      </div>
      <div class="menu-open-burger__buttons">
        <Button icon="lightning" class="--white">Получить решение</Button>
        <Button @click="onClickLookCases">Смотреть кейсы</Button>
      </div>
      <div class="menu-open-burger__contacts">

      </div>
    </div>
  </div>
</template>