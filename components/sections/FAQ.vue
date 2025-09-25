<script setup lang="ts">
import type { Ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'

const answerRef = useTemplateRef('answerRef')
const answerHeights = []

const questions = ref([
  {
    question: 'Сколько стоит разработка проекта?',
    answer: `Много`
  },
  {
    question: 'Какие условия оплаты — предоплата, поэтапно или по факту?',
    answer: `Мы работаем по предоплате, разбиваем оплату на этапы:

      1/3 готовности проекта (верстка + дизайн + программирование) - сдача
      2/3 готовности проекта (верстка + дизайн + программирование) - сдача
      3/3 готовности проекта (верстка + дизайн + программирование) - сдача
    `
  },
  {
    question: 'Что может повлиять на сроки?',
    answer: `На сроки может повлиять не обговоренный функционал на этапе проектирования и дизайна`
  },
  {
    question: 'Можно ли сделать проект уже "вчера"? (экспресс-разработка)',
    answer: `Нет, мы не делаем проекты на скорую руку.`
  },
  {
    question: 'Можно ли оптимизировать сайт под SEO?',
    answer: `Да, при необходимости продумываем стратегию под продвижению SEO, обговариваем на этапе проектирования.`
  },
  {
    question: 'Можно ли будет самим управлять сайтом после запуска (CMS)?',
    answer: `Да, мы такое делаем, обговариваем на этапе проектирования.`
  },
  {
    question: 'Оказываете ли вы техническую поддержку после запуска?',
    answer: `Да, при необходимости мы занимаемся дальнейшей поддержкой проекта`
  },
  {
    question: 'Сколько времени займет разработка сайта?',
    answer: `Нужно обсуждать каждый конкретный проект. Зависит от сложности`
  },
  {
    question: 'Вы работаете по договору? Какие гарантии?',
    answer: `Да, мы работаем по договору, несем полную ответственность обговоренную в договоре`
  },
  {
    question: 'Что если мне не понравится результат?',
    answer: `Ситуация маловероятна.
     Каждый этап разработки, мы согласовываем с вами.`
  },
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
              <span>{{ index < 9 ? ('0' + (index + 1)) : index + 1 }}</span>
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
          <p v-html="question.answer" />
        </div>
      </div>
    </div>
  </section>
</template>