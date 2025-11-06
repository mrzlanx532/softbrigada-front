<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components'
import Radio from '~/components/shared/form/Radio.vue'
import Button from '~/components/shared/form/Button.vue'
import InputPhone from '~/components/shared/form/InputPhone.vue'
import Input from '~/components/shared/form/Input.vue'
import TaskDescription from '~/components/shared/form/TaskDescription.vue'
import apiContacts, {
  type FormDataCreateBrief,
  type FormDataCreateErrorsBrief,
  getDefaultFormDataCreateBrief,
} from '~/api/contacts'
import { useModal } from 'vue-final-modal'
import ThankYouModal from '~/components/modals/ThankYouModal.vue'
import Checkbox from '~/components/shared/form/Checkbox.vue'
import ProcessingPersonalDataAgree from '~/components/shared/form/ProcessingPersonalDataAgree.vue'

const definitions = useState('definitions')

const { briefIsOpen, widgetIsVisible } = useGlobalState()

const briefRef = useTemplateRef('briefRef')

const formData = ref<FormDataCreateBrief>({
  name: undefined,
  phone: undefined,
  email: undefined,
  messenger: undefined,
  form_type_id: 'BRIEF',
  is_agree_to_receive_ads: true
})

const errors = ref<FormDataCreateErrorsBrief>({} as FormDataCreateErrorsBrief)

const closeBrief = () => {
  briefIsOpen.value = false
  widgetIsVisible.value = true

  setTimeout(() => {
    briefRef.value.scrollTop = 0
  }, 500)
}

const onFormSubmit = async () => {
  try {
    await apiContacts().create(formData.value)

    errors.value = {} as FormDataCreateErrorsBrief
    formData.value = getDefaultFormDataCreateBrief()

    closeBrief()

    setTimeout(() => {
      const thankYouModal = useModal({
        component: ThankYouModal,
        attrs: {
          onConfirm: () => {
            thankYouModal.close()
          }
        }
      })
      thankYouModal.open()
    }, 501)

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
        <Input v-model="formData.messenger" :errors="errors.messenger" label="Telegram или WhatsApp" />
      </div>
      <Radio v-model="formData.source_id" :is-required="true" label="Откуда вы о нас узнали?" :errors="errors.source_id" :options="definitions.ContactsContactSourceDefinition" />
      <div class="form__action">
        <Button type="submit">Отправить</Button>
      </div>
      <ProcessingPersonalDataAgree />
      <Checkbox :errors="errors.is_agree_to_receive_ads" class="--contrast" v-model="formData.is_agree_to_receive_ads">
        <a target="_blank" href="/docs/consent-to-receive-advertising.pdf">Я согласен получить рекламу и звонки</a>
      </Checkbox>
    </form>
  </div>
</template>