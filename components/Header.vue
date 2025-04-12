<script setup lang="ts">
import Button from '~/components/Button.vue'
</script>

<template>
  <div class="header">
    <div class="header__container">
      <div class="header__logo">logo</div>
      <div class="header__menu">
        <a>что мы делаем</a>
        <a>наши кейсы <span>+3</span></a>
      </div>
    </div>
    <div class="header__container --right">
      <div class="header__contacts">
        <div class="header__contacts-social">
          <svg><use href="/sprite.svg#telegram" /></svg>
          <svg><use href="/sprite.svg#whatsapp" /></svg>
        </div>
        <a>info@gmail.com</a>
        <a>+7 (910) 292-03-10</a>
      </div>
      <Button class="header__button">Заполнить бриф</Button>
    </div>
  </div>
</template>