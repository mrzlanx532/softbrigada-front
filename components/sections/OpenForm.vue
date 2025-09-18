<script setup lang="ts">
import Input from '~/components/Input.vue'
import Radio from '~/components/Radio.vue'
import Button from '~/components/Button.vue'
import InputFile from '~/components/InputFile.vue'
import { budgetOptions as _budgetOptions, deadlineOptions as _deadlineOptions } from '~/constants/index'
import apiContacts, {
  type FormDataCreateBigForm,
  type FormDataCreateErrorsBigForm,
  getDefaultFormDataCreateBigForm,
} from '~/api/contacts'

const device = useDevice()

const h2Text = ref(device.isMobile ?
    '<span>Опишите задачу —</span><span>мы придумаем как</span><span>ее решить</span>' :
    '<span>Опишите</span><span>задачу —</span><span>мы придумаем</span><span>как ее решить</span>'
)

const formData = ref<FormDataCreateBigForm>({
  name: undefined,
  phone: undefined,
  email: undefined,
  description: undefined,
  budget_id: undefined,
  deadline_id: undefined,
  file: undefined,
  form_type_id: 'BIG_FORM'
})

const errors = ref<FormDataCreateErrorsBigForm>({} as FormDataCreateErrorsBigForm)

const budgetOptions = ref(_budgetOptions)
const deadlineOptions = ref(_deadlineOptions)

const onFormSubmit = async () => {
  try {
    await apiContacts().create(formData.value)

    errors.value = {} as FormDataCreateErrorsBigForm
    formData.value = getDefaultFormDataCreateBigForm()

  } catch (error) {
    errors.value = error
    return
  }
}
</script>

<template>
  <section id="open-form" class="open-form">
    <div>
      <h2 v-html="h2Text" />
      <div class="open-form__me">
        <img src="/images/team/me.png" alt="me">
        <h4>Денис Женин, CEO</h4>
        <p>
          Я напишу вам, отвечу на все вопросы и предложу решение для вашей задачи
        </p>
      </div>
    </div>
    <div>
      <div class="form">
        <form @submit.prevent="onFormSubmit">
          <div class="input__wrapper">
            <Input v-model="formData.name" :errors="errors.name" :is-required="true" label="Имя" />
            <InputPhone v-model="formData.phone" :errors="errors.phone" :is-required="true" label="Номер телефона" />
          </div>
          <Input v-model="formData.email" :errors="errors.email" :is-required="true" label="Email" />
          <Input v-model="formData.description" :errors="errors.description" :is-required="true" label="Расскажите о вашем проекте" />
          <div class="form__group">
            <div>Бюджет</div>
            <Radio v-model="formData.budget_id" :options="budgetOptions" />
          </div>
          <div class="form__group">
            <div>Сроки</div>
            <Radio v-model="formData.deadline_id" :options="deadlineOptions" />
          </div>
          <div class="form__group" v-if="device.isMobile">
            <InputFile v-model="formData.file"/>
          </div>
          <div class="form__action">
            <Button type="submit" class="open-form__button" icon="send">Отправить</Button>
            <InputFile v-if="!device.isMobile" class="open-form__input-file" v-model="formData.file"/>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>