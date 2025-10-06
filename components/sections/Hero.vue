<script setup lang="ts">
import Menu from '~/components/special/Menu.vue'
import Button from '~/components/shared/form/Button.vue'
import Gradient from '~/assets/svg/hero-section-gradient.svg?component'
import { useModal } from 'vue-final-modal'
import FormModal from '~/components/modals/FormModal.vue'
import ThankYouModal from '~/components/modals/ThankYouModal.vue'

const offerPoints = [
  {
    title: 'Индивидуальная разработка с первого дня',
    subtitle: 'Никаких шаблонов и типовых решений — только то, что нужно именно вашему бизнесу.'
  },
  {
    title: 'Максимальная вовлеченность в ваш проект',
    subtitle: 'Мы становимся частью вашей команды — погружаемся в бизнес-процессы, помогаем с анализом, советуем лучшее.'
  },
  {
    title: 'Прозрачность и контроль',
    subtitle: 'Четкие сроки, понятный процесс, честная стоимость.'
  },
  {
    title: 'Мы не боимся сложных задач',
    subtitle: 'Архитектура, масштабируемость, интеграции — любим сложные кейсы и нестандартные решения.'
  },
  {
    title: 'Сильная техническая экспертиза внутри',
    subtitle: 'Наши разработчики — не просто кодеры, а инженеры с системным мышлением и архитектурным подходом.'
  },
  {
    title: 'Сопровождение после запуска',
    subtitle: 'Не бросаем проект после релиза — остаёмся с вами на техподдержке, улучшаем, обновляем, растём вместе.'
  },
]

const onClickLookCases = () => {
  const { goToAnchor } = useAnchor()

  goToAnchor('cases')
}

const onClickGetSolution = () => {
  const { open, close } = useModal({
    component: FormModal,
    attrs: {
      title: `Получить решение прямо сейчас`,
      buttonText: 'Заказать консультацию',
      onConfirm: () => {
        close()

        const thankYouModal = useModal({component: ThankYouModal})
        thankYouModal.open()
      }
    },
  })

  open()
}
</script>

<template>

  <section id="hero" class="hero">
    <div class="hero__gradient" />
    <Menu />
    <h1>
      <span>Разрабатываем</span>
      <span>IT-решения для бизнеса</span>
      <span>— от идеи до запуска</span>
    </h1>
    <div class="hero__buttons">
      <Button icon="lightning" class="--white" @click="onClickGetSolution">Получить решение</Button>
      <Button @click="onClickLookCases">Смотреть кейсы</Button>
    </div>
    <div class="hero__offer-points-wrapper">
      <div class="hero__offer-points">
        <div class="hero__offer-point" v-for="offerPoint in offerPoints">
          <div>{{ offerPoint.title }}</div>
          <div>{{ offerPoint.subtitle }}</div>
        </div>
      </div>
    </div>
  </section>
</template>