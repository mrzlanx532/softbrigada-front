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
          :style="{'background-image': `${linearGradientValue}, url(/images/cases/${index + 1}.png)`}"
          class="cases__case"
          :class="{'--full': _case.isFull}"
      >
        <h3>{{ _case.title }}</h3>
        <p>{{ _case.subtitle }}</p>
      </div>
    </div>
    <div class="cases__wrapper --mobile">
      <ClientOnly>
        <splide class="--splide-custom" :options="sliderOptions">
          <splide-slide v-for="(_case, index) in cases" :key="index">
            <div class="cases__case">
              <h3>{{ _case.title }}</h3>
              <p>{{ _case.subtitle }}</p>
              <div :style="{'background-image': `${linearGradientValue}, url(/images/cases/${index + 1}.png)`}"/>
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
