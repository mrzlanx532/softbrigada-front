<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components'
import Radio from '~/components/form/Radio.vue'
import Button from '~/components/form/Button.vue'
import InputFile from '~/components/form/InputFile.vue'
import InputPhone from '~/components/form/InputPhone.vue'
import Input from '~/components/form/Input.vue'

import {
  servicesOptions as _servicesOptions,
  budgetOptions as _budgetOptions,
  sourcesOptions as _sourcesOptions,
} from '~/constants'
import apiContacts, {
  type FormDataCreateBrief,
  type FormDataCreateErrorsBrief,
  getDefaultFormDataCreateBrief,
} from '~/api/contacts'

const { briefIsOpen } = useGlobalState()

const briefRef = useTemplateRef('briefRef')

const formData = ref<FormDataCreateBrief>({
  name: undefined,
  phone: undefined,
  email: undefined,
  form_type_id: 'BRIEF'
})

const errors = ref<FormDataCreateErrorsBrief>({} as FormDataCreateErrorsBrief)

const servicesOptions = ref(_servicesOptions)
const budgetOptions = ref(_budgetOptions)
const sourcesOptions = ref(_sourcesOptions)

const closeBrief = () => {
  briefIsOpen.value = false
}

const onFormSubmit = async () => {
  try {
    await apiContacts().create(formData.value)

    errors.value = {} as FormDataCreateErrorsBrief
    formData.value = getDefaultFormDataCreateBrief()

  } catch (error) {
    errors.value = error
    return
  }
}
</script>

<template>
  <div class="brief__overlay" :class="{'--is-open': briefIsOpen}"/>
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
      <Radio v-model="formData.service_id" :errors="errors.service_id" :is-required="true" label="Услуга" :options="servicesOptions" />
      <Radio v-model="formData.budget_id" :errors="errors.budget_id" :is-required="true" label="Бюджет" :options="budgetOptions" />
      <div class="form__group --description">
        <div>Описание задачи</div>
        <Input name="task_description" v-model="formData.task_description" label="Напишите о вашей задаче в двух словах"/>
        <div>или прикрепите файл с ТЗ</div>
        <InputFile class="--small" v-model="formData.task_file" />
      </div>
      <div class="form__group --contacts">
        <div>Контактные данные</div>
        <Input :is-required="true" v-model="formData.name" :errors="errors.name" label="Имя"/>
        <InputPhone :is-required="true" v-model="formData.phone" :errors="errors.phone" label="Телефон"/>
        <Input :is-required="true" v-model="formData.email" :errors="errors.email" label="Email"/>
      </div>
      <Radio v-model="formData.source_id" :is-required="true" label="Откуда вы о нас узнали?" :errors="errors.source_id" :options="sourcesOptions" />
      <div class="form__action">
        <Button type="submit">Отправить</Button>
        <div>Нажимая на кнопку вы даете согласие на обработку персональных данных</div>
      </div>
    </form>
  </div>
</template>