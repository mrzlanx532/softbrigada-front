<script setup lang="ts">
import { type Ref } from 'vue'

const reviewRef = useTemplateRef('reviewRef')
const reviewsRef = useTemplateRef('reviewsRef')


const selectedReview: Ref<number | undefined> = ref(undefined)
const page = ref(1)

let everyReviewWidth = 0
let everyPageWidth = 0
let totalWidth = 0

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

const onClickPage = (_page) => {
  page.value = _page

  const x = totalWidth * (_page - 1) * -1
  reviewsRef.value.style.transform = 'translateX(' + x + 'px)'
}

onMounted(() => {
  totalWidth = reviewsRef.value.getBoundingClientRect().width
  everyReviewWidth = (totalWidth / 3) - (32 / 3)
  everyPageWidth = everyReviewWidth * 3

  reviewsRef.value.style.width = ((everyReviewWidth * reviews.value.length) + (16 * (reviews.value.length - 1))) + 'px'

  reviewRef.value.forEach(el => {
    el.style.width = everyReviewWidth + 'px'
    el.children[0].style.width = el.offsetWidth + 'px'
  })

  document.querySelector('#reviews').style.opacity = 1
})
</script>

<template>
  <section id="reviews" class="reviews">
    <h2>Отзывы</h2>
    <div class="reviews__reviews" ref="reviewsRef">
      <div
          v-for="(review, index) in reviews"
          @click="onClickReview(index)"
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
    </div>
    <div class="reviews__paginator">
      <div
          v-for="(_, index) in (Math.ceil(reviews.length / 3))"
          class="reviews__paginator-pages"
          :class="{'--active': page === (index + 1)}"
          @click="onClickPage(index + 1)"
      />
    </div>
  </section>
</template>