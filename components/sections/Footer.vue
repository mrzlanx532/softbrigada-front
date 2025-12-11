<script setup lang="ts">
import Menu from '~/components/special/Menu.vue'

const config = useConfig()

const { goToAnchor } = useAnchor()

const onClickLink = (id: string) => {
  goToAnchor(id)
}

const onClickPhone = () => {
  const a = document.createElement('a')
  a.href = 'tel:+' + config.phone
  a.click()
  a.remove()
}
</script>

<template>
  <section id="footer" class="footer">
    <Menu :is-header="false" />
    <div class="footer__row --part-of-menu">
      <a href="#dev-types" @click.prevent="onClickLink('dev-types')">что мы делаем</a>
      <a href="#cases" @click.prevent="onClickLink('cases')">наши кейсы <span>+3</span></a>
    </div>
    <div class="footer__row">
      <div>{{ config.address }}</div>
      <div><a :href="'mailto:' + config.email">{{ config.email }}</a></div>
      <div @click="onClickPhone">{{ config.formattedPhone }}</div>
    </div>
    <div class="footer__row --contacts-social">
      <a :href="config.telegram"><svg><use href="/sprite.svg#telegram" /></svg></a>
      <a :href="config.whatsapp"><svg><use href="/sprite.svg#whatsapp" /></svg></a>
    </div>
    <div class="footer__row">
      <div>{{ config.legal.organization}}<br> ОГРН: {{ config.legal.ogrn }} ИНН: {{ config.legal.inn }}</div>
      <div><a href="/docs/privacy-policy.pdf">Политика конфиценциальности</a></div>
      <div><a href="/docs/user-agreement.pdf">Пользовательское соглашение</a></div>
    </div>
  </section>
</template>