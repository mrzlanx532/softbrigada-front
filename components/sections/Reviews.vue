<script setup lang="ts">
import { type Ref } from 'vue'

const device = useDevice()
const reviewRef = useTemplateRef('reviewRef')

const selectedReview: Ref<number | undefined> = ref(undefined)
const sliderOptions = ref(device.isMobile ? {
  perPage: 1,
  rewind : true,
  arrows: false,
  gap: '16px'
} : {
  perPage: 3,
  rewind : true,
  arrows: false,
  gap: '16px'
})

const reviews = ref([
  {
    title: 'Андрей Бейдер, операционный директор',
    description: `Когда мы искали подрядчика для разработки внутреннего сервиса, выбор пал на команду SoftBrigada. Ребята с самого начала погрузились в задачу, предложили грамотные решения и чётко вели проект на всех этапах.

        Понравилось, что команда не просто выполняла ТЗ, а действительно включилась в процесс и предлагала улучшения. Было видно, что им важно сделать не «как-нибудь», а по-настоящему удобно и эффективно для наших сотрудников`
  },
  {
    title: 'Евгений Коган, технический директор',
    description: `Мы искали подрядчика, который сможет не просто «написать код», а глубоко разобраться в задаче и предложить устойчивое техническое решение. Эта команда справилась на отлично.

С самого начала они показали высокий уровень экспертизы: задали правильные вопросы, предложили архитектуру с прицелом на масштабирование и внимательно подошли к деталям.`
  },
  {
    title: 'Дарья Мельникова, директор по развитию',
    description: `Работать с этой командой было легко и надёжно. Процесс прозрачный, всегда понимали, что происходит и на каком этапе проект.

Порадовала вовлечённость — команда вникала в бизнес-контекст, а не просто делала по ТЗ.`
  },
  {
    title: 'Тимур Головин, директор по операционной деятельности',
    description: `Команда гибко подстроилась под наши внутренние процессы и работала в удобном для нас ритме. Внимательно относились к деталям — это видно в результате.

Проект прошёл спокойно и без проблем. Надёжные специалисты, с которыми приятно сотрудничать.`
  },
  {
    title: 'Кристина Белова, учредитель бизнеса',
    description: `Сотрудничество с нашим техническим отделом прошло на высоком уровне. Совместная работа позволила быстро согласовывать решения и эффективно двигаться вперёд. Благодаря слаженному взаимодействию проект был выполнен точно и в срок.`
  },
  {
    title: 'Игорь Рубцов, креативный директор',
    description: `Команда проявила высокий уровень креативности и инициативы, предлагая идеи, которые улучшили конечный продукт. Проактивный подход и внимательность к нашим нуждам сделали сотрудничество лёгким и продуктивным.`
  }
])
const onClickReview = (index: number) => {
  if (selectedReview.value === index) {
    reviewRef.value[index].scrollTop = 0
    selectedReview.value = undefined
    return
  }

  if (selectedReview.value !== undefined) {
    reviewRef.value[selectedReview.value].scrollTop = 0
  }

  selectedReview.value = index
}
</script>

<template>
  <section id="reviews" class="reviews">
    <h2>Отзывы</h2>
    <div class="reviews__reviews">
      <ClientOnly>
        <splide class="--splide-custom" :options="sliderOptions">
          <splide-slide v-for="(review, index) in reviews" :key="index" @click="onClickReview(index)">
            <div
                class="reviews__review"
                ref="reviewRef"
                :class="{'--open': selectedReview === index}"
            >
              <div class="reviews__review-filter" />
              <div class="reviews__review-head">
                <img :src="'/images/reviews/' + (index + 1) + '.png'" alt="review-1">
                <div>{{ review.title }}</div>
              </div>
              <div class="reviews__review-description">{{ review.description }}</div>
            </div>
          </splide-slide>
        </splide>
      </ClientOnly>
    </div>
  </section>
</template>