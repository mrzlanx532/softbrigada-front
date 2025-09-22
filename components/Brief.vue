<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components'
import Radio from '~/components/form/Radio.vue'
import Button from '~/components/form/Button.vue'
import InputPhone from '~/components/form/InputPhone.vue'
import Input from '~/components/form/Input.vue'
import TaskDescription from '~/components/form/TaskDescription.vue'
import apiContacts, {
  type FormDataCreateBrief,
  type FormDataCreateErrorsBrief,
  getDefaultFormDataCreateBrief,
} from '~/api/contacts'

const definitions = useState('definitions')

const { briefIsOpen } = useGlobalState()

const briefRef = useTemplateRef('briefRef')

const formData = ref<FormDataCreateBrief>({
  name: undefined,
  phone: undefined,
  email: undefined,
  form_type_id: 'BRIEF'
})

const errors = ref<FormDataCreateErrorsBrief>({} as FormDataCreateErrorsBrief)

const closeBrief = () => {
  briefIsOpen.value = false

  setTimeout(() => {
    briefRef.value.scrollTop = 0
  }, 500)
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
      <Radio v-model="formData.service_id" :errors="errors.service_id" :is-required="true" label="Услуга" :options="definitions.ContactsContactServiceDefinition" />
      <Radio v-model="formData.budget_id" :errors="errors.budget_id" :is-required="true" label="Бюджет" :options="definitions.ContactsContactBudgetDefinition" />
      <TaskDescription
          :is-required="true"
          v-model:description="formData.description"
          v-model:file="formData.file"
          :errors="errors.hasOwnProperty('description') || errors.hasOwnProperty('file')"
      />
      <div class="form__group --contacts">
        <div>Контактные данные</div>
        <Input :is-required="true" v-model="formData.name" :errors="errors.name" label="Имя"/>
        <InputPhone :is-required="true" v-model="formData.phone" :errors="errors.phone" label="Телефон"/>
        <Input :is-required="true" v-model="formData.email" :errors="errors.email" label="Email"/>
      </div>
      <Radio v-model="formData.source_id" :is-required="true" label="Откуда вы о нас узнали?" :errors="errors.source_id" :options="definitions.ContactsContactSourceDefinition" />
      <div class="form__action">
        <Button type="submit">Отправить</Button>
        <div>Нажимая на кнопку вы даете согласие на обработку персональных данных</div>
      </div>
    </form>
  </div>
</template>