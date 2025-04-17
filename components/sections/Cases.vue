<script setup lang="ts">
import Button from '~/components/Button.vue'

const cases = ref([
  {
    title: 'Мобильное приложение Альфа-банк',
    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.',
    isFull: true
  },
  {
    title: 'Веб-сайт жилого комплекса',
    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.',
    isFull: false
  },
  {
    title: 'Виджет для Алисы',
    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.',
    isFull: false
  },
])
</script>

<template>
  <section id="cases" class="cases">
    <h2>Наши кейсы</h2>
    <div class="cases__wrapper">
      <div
          v-for="(_case, index) in cases"
          :style="{'background': 'linear-gradient(180deg, rgba(20, 21, 24, 0.8) 0%, rgba(20, 21, 24, 0) 100%), url(/images/cases/' + (index + 1) + '.png) no-repeat center / cover'}"
          class="cases__case"
          :class="{'--full': _case.isFull}"
      >
        <h3>{{ _case.title }}</h3>
        <p>{{ _case.subtitle }}</p>
      </div>
    </div>
    <div class="cases__button-wrapper">
      <Button class="cases__button --white" icon="chat">Обсудить проект</Button>
    </div>
  </section>
</template>
