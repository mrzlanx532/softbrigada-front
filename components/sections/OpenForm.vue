<script setup lang="ts">
import Input from '~/components/shared/form/Input.vue'
import Radio from '~/components/shared/form/Radio.vue'
import Button from '~/components/shared/form/Button.vue'
import InputFile from '~/components/shared/form/InputFile.vue'
import InputPhone from '~/components/shared/form/InputPhone.vue'
import apiContacts, {
  type FormDataCreateBigForm,
  type FormDataCreateErrorsBigForm,
  getDefaultFormDataCreateBigForm,
} from '~/api/contacts'
import { useModal } from 'vue-final-modal'
import ThankYouModal from '~/components/modals/ThankYouModal.vue'
import ProcessingPersonalDataAgree from '~/components/shared/form/ProcessingPersonalDataAgree.vue'
import Checkbox from '~/components/shared/form/Checkbox.vue'

const definitions = useState('definitions')

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
  form_type_id: 'BIG_FORM',
  is_agree_to_receive_ads: true
})

const errors = ref<FormDataCreateErrorsBigForm>({} as FormDataCreateErrorsBigForm)

const onFormSubmit = async () => {
  try {
    await apiContacts().create(formData.value)

    errors.value = {} as FormDataCreateErrorsBigForm
    formData.value = getDefaultFormDataCreateBigForm()

    const thankYouModal = useModal({
      component: ThankYouModal,
      attrs: {
        onConfirm: () => {
          thankYouModal.close()
        }
      }
    })
    await thankYouModal.open()

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
        <img src="/images/team/me.jpg" alt="me">
        <h4>Данилов Денис, CEO</h4>
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
          <Radio v-model="formData.budget_id" :errors="errors.budget_id" :is-required="true" label="Бюджет" :options="definitions.ContactsContactBudgetDefinition" />
          <Radio v-model="formData.deadline_id" :errors="errors.deadline_id" :is-required="true" label="Сроки" :options="definitions.ContactsContactDeadlineDefinition" />
          <InputFile v-if="device.isMobile" v-model="formData.file"/>
          <div class="form__action">
            <Button type="submit" class="open-form__button" icon="send">Отправить</Button>
            <InputFile v-if="!device.isMobile" class="open-form__input-file" v-model="formData.file"/>
          </div>
          <ProcessingPersonalDataAgree />
          <Checkbox :errors="errors.is_agree_to_receive_ads" class="--contrast" v-model="formData.is_agree_to_receive_ads">
            <a target="_blank" href="/docs/consent-to-receive-advertising.pdf">Я согласен получить рекламу и звонки</a>
          </Checkbox>
        </form>
      </div>
    </div>
  </section>
</template>