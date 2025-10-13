<script setup lang="ts">
import Button from '~/components/shared/form/Button.vue'
import { useModal } from 'vue-final-modal'
import FormModal from '~/components/modals/FormModal.vue'
import ThankYouModal from '~/components/modals/ThankYouModal.vue'

const sliderOptions = ref({
  perPage: 1,
  rewind : true,
  arrows: false,
  gap: '16px'
})

const linearGradientValue = 'linear-gradient(180deg, rgba(20, 21, 24, 0.8) 0%, rgba(20, 21, 24, 0) 100%)'

const cases = ref([
  {
    title: 'Сайт агенства по управлению репутацией',
    subtitle: `Мы разработали проект с фирменным современным дизайном и оригинальными элементами, подчеркнув уникальность бренда. Архитектура гибкая и готова к расширению в медиа-платформу с SEO-контентом. Разработана удобная админ. панель для простого управления сайтом и контентом.`,
    isFull: true,
    img: '1.jpg',
    link: 'https://digitaldyatel.ru'
  },
  {
    title: 'Веб-сайт жилого комплекса',
    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.',
    isFull: false,
    img: '2.png'
  },
  {
    title: 'Виджет для Алисы',
    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.',
    isFull: false,
    img: '3.png'
  },
])

const openCase = (href: string) => {
  const a = document.createElement('a')

  a.href = href
  a.target = '_blank'
  a.click()
  a.remove()
}

const onClickDiscussProject = () => {
  const { open, close } = useModal({
    component: FormModal,
    attrs: {
      title: `Обсудить проект прямо сейчас`,
      buttonText: 'Заказать консультацию',
      onConfirm: () => {
        close()

        const thankYouModal = useModal({
          component: ThankYouModal,
          attrs: {
            onConfirm: () => {
              thankYouModal.close()
            }
          }
        })
        thankYouModal.open()
      }
    },
  })

  open()
}
</script>

<template>
  <section id="cases" class="cases">
    <h2>Наши кейсы</h2>
    <div class="cases__wrapper --desktop">
      <div
          v-for="(_case, index) in cases"
          :style="{'background-image': `${linearGradientValue}, url(/images/cases/${_case.img})`}"
          class="cases__case"
          :class="{'--full': _case.isFull}"
      >
        <div>
          <h3>{{ _case.title }}</h3>
          <p>{{ _case.subtitle }}</p>
        </div>
        <Button v-if="_case.link" icon="send" @click="openCase(_case.link)">Посмотреть</Button>
      </div>
    </div>
    <div class="cases__wrapper --mobile">
      <ClientOnly>
        <splide class="--splide-custom" :options="sliderOptions">
          <splide-slide v-for="(_case, index) in cases" :key="index">
            <div class="cases__case">
              <h3>{{ _case.title }}</h3>
              <p>{{ _case.subtitle }}</p>
              <div :style="{'background-image': `${linearGradientValue}, url(/images/cases/${_case.img})`}"/>
              <Button v-if="_case.link" icon="send" @click="openCase(_case.link)">Посмотреть</Button>
            </div>
          </splide-slide>
        </splide>
      </ClientOnly>
    </div>
    <div class="cases__button-wrapper">
      <Button class="cases__button --white" icon="chat" @click="onClickDiscussProject">Обсудить проект</Button>
    </div>
  </section>
</template>
