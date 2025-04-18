<script setup lang="ts">
import type { Ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'

const answerRef = useTemplateRef('answerRef')
const answerHeights = []

const questions = ref([
  {
    question: 'Почему нужно заказать разработку сайта в Web Canape?',
    answer: [
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        'Lorem Ipsum has been the industry\'s standard dummy text.'
    ]
  },
  {
    question: 'Что, если мне не понравится результат?',
    answer: [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'Lorem Ipsum has been the industry\'s standard dummy text.'
    ]
  },
  {
    question: 'Где гарантии, что вы не пропадете после предоплаты?',
    answer: [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'Lorem Ipsum has been the industry\'s standard dummy text.'
    ]
  },
  {
    question: 'Почему у вас такая дорогая разработка? На фрилансе дешевле',
    answer: [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'Lorem Ipsum has been the industry\'s standard dummy text.'
    ]
  },
  {
    question: 'Где гарантии, что сайт для моей компании будет продавать?',
    answer: [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'Lorem Ipsum has been the industry\'s standard dummy text.'
    ]
  },
  {
    question: 'Что нужно будет от меня, чтобы заказать создание сайта?',
    answer: [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'Lorem Ipsum has been the industry\'s standard dummy text.'
    ]
  }
])

const selectedQuestion: Ref<number|undefined> = ref(undefined)

const onClickOutside = (e) => {
  if (selectedQuestion.value !== undefined) {
    answerRef.value[selectedQuestion.value].style.height = 0
  }
  selectedQuestion.value = undefined
}

const onClickQuestion = (index: number) => {
  if (index === selectedQuestion.value) {
    selectedQuestion.value = undefined
    answerRef.value[index].style.height = 0
    return
  }

  if (selectedQuestion.value !== undefined) {
    answerRef.value[selectedQuestion.value].style.height = 0
  }

  selectedQuestion.value = index
  answerRef.value[index].style.height = answerHeights[index] + 'px'
}

onMounted(() => {
  answerRef.value.forEach(answer => {
    answerHeights.push(answer.getBoundingClientRect().height)
    answer.style.height = 0
    answer.style.overflow = 'hidden'
    answer.classList.remove('--init')
  })
})
</script>

<template>
  <section id="faq" class="faq">
    <h2>Часто задаваемые вопросы</h2>
    <div class="faq__questions" v-on-click-outside="onClickOutside">
      <div
          v-for="(question, index) in questions"
          :key="index"
          class="faq__question-wrapper"
          :class="{'--open': index === selectedQuestion}"
          @click="onClickQuestion(index)"
      >
        <div class="faq__question">
          <div>
            <div>
              <svg><use href="/sprite.svg#bracket" /></svg>
              <span>{{ '0' + (index + 1) }}</span>
              <svg><use href="/sprite.svg#bracket" /></svg>
            </div>
            <div>
              {{ question.question }}
            </div>
          </div>
          <div class="faq__question-button">
            <svg><use href="/sprite.svg#plus" /></svg>
          </div>
        </div>
        <div class="faq__question-answer --init" ref="answerRef">
          <p v-for="row in question.answer">
            {{ row }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>