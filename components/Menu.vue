<script setup lang="ts">
import Button from '~/components/form/Button.vue'

const props = withDefaults(defineProps<{
  isHeader?: boolean
}>(), {
  isHeader: true
})

const { goToAnchor } = useAnchor()
const { burgerMenuIsOpen, widgetIsVisible } = useGlobalState()
const config = useConfig()
const { getY, setY } = useScrollLock()

const onClickLink = (id: string, isMobile: boolean) => {
  if (isMobile) {
    closeBurgerMenu()
  }

  goToAnchor(id)
}

const onClickLookCases = () => {
  closeBurgerMenu()

  const { goToAnchor } = useAnchor()

  goToAnchor('cases')
}

const openBrief = () => {
  const { briefIsOpen, widgetIsVisible } = useGlobalState()

  widgetIsVisible.value = false
  briefIsOpen.value = true
}

const openBurgerMenu = () => {
  setY()
  setTimeout(() => {
    document.documentElement.style.position = 'fixed'
  }, 200)

  burgerMenuIsOpen.value = true
  widgetIsVisible.value = false
}

const closeBurgerMenu = () => {
  burgerMenuIsOpen.value = false
  widgetIsVisible.value = true

  document.documentElement.style.position = ''
  document.documentElement.style.scrollBehavior = 'auto';
  document.documentElement.scrollTop = getY()
  document.documentElement.style.scrollBehavior = 'smooth';
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
          <a :href="config.telegram"><svg><use href="/sprite.svg#telegram" /></svg></a>
          <a :href="config.whatsapp"><svg><use href="/sprite.svg#whatsapp" /></svg></a>
        </div>
        <a v-if="props.isHeader" :href="'mailto:' + config.email">{{ config.email }}</a>
        <a v-if="props.isHeader" class="menu-desktop__phone">{{ config.formattedPhone }}</a>
      </div>
      <Button class="menu-desktop__button" @click="openBrief">Заполнить бриф</Button>
    </div>
  </div>
  <div class="menu-mobile --fixed">
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
    <div class="menu-open-burger__container">
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
        <a @click="onClickLink('dev-types', true)">что мы делаем</a>
        <a @click="onClickLink('cases', true)">наши кейсы</a>
      </div>
      <div class="menu-open-burger__buttons">
        <Button icon="lightning" class="--white">Получить решение</Button>
        <Button @click="onClickLookCases">Смотреть кейсы</Button>
      </div>
      <div class="menu-open-burger__contacts">
        <div>
          <a :href="config.telegram"><svg><use href="/sprite.svg#telegram" /></svg></a>
          <a :href="config.whatsapp"><svg><use href="/sprite.svg#whatsapp" /></svg></a>
        </div>
        <div>
          <div><a :href="'mailto:' + config.email">{{ config.email }}</a></div>
          <div><a :href="'tel:+' + config.phone">{{ config.formattedPhone }}</a></div>
        </div>
      </div>
    </div>
  </div>
</template>