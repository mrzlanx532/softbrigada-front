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
    title: 'Егор Шугаев, ex-Дизайн-директор в Газпром нефть',
    description: 'Я, как человек с художественным образованием, вижу большие проблемы с композицией и цветоведением. К сожалению, стало проще научить UX, чем UI, так как экспертизы в UX стало больше. Если бы можно было нанять дизайнера с хорошей головой в UX в штат, потом отдать на платный курс для апгрейда UI-скилла. Я, как человек с художественным образованием, вижу большие проблемы с композицией и цветоведением. К сожалению, стало проще научить UX, чем UI, так как экспертизы в UX стало больше. Если бы можно было нанять дизайнера с хорошей головой в UX в штат, потом отдать на платный курс для апгрейда UI-скилла.'
  },
  {
    title: 'Егор Шугаев, ex-Дизайн-директор в Газпром нефть',
    description: 'Я, как человек с художественным образованием, вижу большие проблемы с композицией и цветоведением. К сожалению, стало проще научить UX, чем UI, так как экспертизы в UX стало больше. Если бы можно было нанять дизайнера с хорошей головой в UX в штат, потом отдать на платный курс для апгрейда UI-скилла.'
  },
  {
    title: 'Егор Шугаев, ex-Дизайн-директор в Газпром нефть',
    description: 'Я, как человек с художественным образованием, вижу большие проблемы с композицией и цветоведением. К сожалению, стало проще научить UX, чем UI, так как экспертизы в UX стало больше. Если бы можно было нанять дизайнера с хорошей головой в UX в штат, потом отдать на платный курс для апгрейда UI-скилла.'
  },
  {
    title: 'Егор Шугаев, ex-Дизайн-директор в Газпром нефть',
    description: 'Я, как человек с художественным образованием, вижу большие проблемы с композицией и цветоведением. К сожалению, стало проще научить UX, чем UI, так как экспертизы в UX стало больше. Если бы можно было нанять дизайнера с хорошей головой в UX в штат, потом отдать на платный курс для апгрейда UI-скилла.'
  },
  {
    title: 'Егор Шугаев, ex-Дизайн-директор в Газпром нефть',
    description: 'Я, как человек с художественным образованием, вижу большие проблемы с композицией и цветоведением. К сожалению, стало проще научить UX, чем UI, так как экспертизы в UX стало больше. Если бы можно было нанять дизайнера с хорошей головой в UX в штат, потом отдать на платный курс для апгрейда UI-скилла.'
  },
  {
    title: 'Егор Шугаев, ex-Дизайн-директор в Газпром нефть',
    description: 'Я, как человек с художественным образованием, вижу большие проблемы с композицией и цветоведением. К сожалению, стало проще научить UX, чем UI, так как экспертизы в UX стало больше. Если бы можно было нанять дизайнера с хорошей головой в UX в штат, потом отдать на платный курс для апгрейда UI-скилла.'
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