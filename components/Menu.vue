<script setup lang="ts">
import Button from '~/components/Button.vue'

const { goToAnchor } = useAnchor()

const onClickLink = (id: string) => {
  goToAnchor(id)
}
</script>

<template>
  <div class="menu">
    <div class="menu__container">
      <div class="menu__logo">logo</div>
      <div class="menu__menu">
        <a @click="onClickLink('dev-types')">что мы делаем</a>
        <a @click="onClickLink('cases')">наши кейсы <span>+3</span></a>
      </div>
    </div>
    <div class="menu__container --right">
      <div class="menu__contacts">
        <div class="menu__contacts-social">
          <svg><use href="/sprite.svg#telegram" /></svg>
          <svg><use href="/sprite.svg#whatsapp" /></svg>
        </div>
        <a>info@gmail.com</a>
        <a>+7 (910) 292-03-10</a>
      </div>
      <Button class="menu__button">Заполнить бриф</Button>
    </div>
  </div>
</template>