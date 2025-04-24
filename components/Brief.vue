<script setup lang="ts">
import useBrief from '~/composables/useBrief'
import { vOnClickOutside } from '@vueuse/components'
import Radio from '~/components/Radio.vue'
import Button from '~/components/Button.vue'
import {
  servicesOptions as _servicesOptions,
  budgetOptions as _budgetOptions,
  sourcesOptions as _sourcesOptions,
} from '~/constants'

const { briefIsOpen } = useBrief()

const briefRef = useTemplateRef('briefRef')

const formData = ref({
  service: undefined,
  file: undefined,
  source: undefined
})

const servicesOptions = ref(_servicesOptions)
const budgetOptions = ref(_budgetOptions)
const sourcesOptions = ref(_sourcesOptions)

const closeBrief = () => {
  briefIsOpen.value = false
}

const onFormSubmit = () => {
  alert('TODO')
}
</script>

<template>
  <div
      ref="briefRef"
      v-on-click-outside="closeBrief"
      class="brief"
      :class="{'--is-open': briefIsOpen}"
  >
    <svg class="brief__close" @click="closeBrief"><use href='/sprite.svg#plus' /></svg>
    <h3>Заполнить бриф</h3>
    <p>Чтобы мы сориентировали вас по стоимости работ, расскажите нам о своих задачах через форму ниже или свяжитесь с нами  другим способом.</p>
    <form class="brief__form form" @submit.prevent="onFormSubmit">
      <div class="form__group">
        <div>Услуги</div>
        <Radio style="width: 540px; flex-wrap: wrap;" v-model="formData.service" :options="servicesOptions" />
      </div>
      <div class="form__group">
        <div>Описание задачи</div>
        <Input label="Напишите о вашей задаче в двух словах"/>
        <InputFile v-model="formData.file"/>
      </div>
      <div class="form__group">
        <div>Бюджет</div>
        <Radio v-model="formData.budget" :options="budgetOptions" />
      </div>
      <div class="form__group">
        <div>Контактные данные</div>
        <Input label="Название компании"/>
        <Input label="Имя"/>
        <Input label="Телефон"/>
        <Input label="Email"/>
      </div>
      <div class="form__group">
        <div>Откуда вы о нас узнали?</div>
        <Radio v-model="formData.source" :options="sourcesOptions" />
      </div>
      <div class="form__action">
        <Button type="submit" class="--white">Отправить</Button>
      </div>
    </form>
  </div>
</template>