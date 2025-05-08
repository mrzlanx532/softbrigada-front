<script setup lang="ts">
import Menu from '~/components/Menu.vue'

const { goToAnchor } = useAnchor()

const onClickLink = (id: string) => {
  goToAnchor(id)
}
</script>

<template>
  <section id="footer" class="footer">
    <Menu :is-header="false"/>
    <div class="footer__row --part-of-menu">
      <a @click="onClickLink('dev-types')">что мы делаем</a>
      <a @click="onClickLink('cases')">наши кейсы <span>+3</span></a>
    </div>
    <div class="footer__row">
      <div>г. Москва, Дербеневская набережная, д. 11</div>
      <div>info@gmail.com</div>
      <div>+7 (910) 292-03-10</div>
    </div>
    <div class="footer__row --contacts-social">
      <svg><use href="/sprite.svg#telegram" /></svg>
      <svg><use href="/sprite.svg#whatsapp" /></svg>
    </div>
    <div class="footer__row">
      <div>ИП Дятлова Евгения Александровна<br> ОГРН: 322774600601138 ИНН: 771615282860</div>
      <div>Политика конфиценциальности</div>
      <div>Оферта</div>
      <div>Пользовательское соглашение</div>
    </div>
  </section>
</template>