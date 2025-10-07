<script setup lang="ts">
import BaseModal from '~/components/modals/BaseModal.vue'
import Input from '~/components/shared/form/Input.vue'
import InputPhone from '~/components/shared/form/InputPhone.vue'
import Button from '~/components/shared/form/Button.vue'
import Checkbox from '~/components/shared/form/Checkbox.vue'
import apiContacts, {
  type FormDataCreateSmallForm,
  type FormDataCreateErrorsSmallForm,
} from '~/api/contacts'
import ProcessingPersonalDataAgree from '~/components/shared/form/ProcessingPersonalDataAgree.vue'

const props = defineProps<{
  title: string,
  buttonText: string
}>()

const emit = defineEmits<{
  (e: 'confirm'): void
}>()

const formData = ref<FormDataCreateSmallForm>({
  name: undefined,
  phone: undefined,
  email: undefined,
  form_type_id: 'SMALL_FORM',
  is_agree_to_receive_ads: true
})

const errors = ref<FormDataCreateErrorsSmallForm>({} as FormDataCreateErrorsSmallForm)

const onFormSubmit = async () => {
  try {
    await apiContacts().create(formData.value)

    errors.value = {} as FormDataCreateErrorsSmallForm
    emit('confirm')

  } catch (error) {
    errors.value = error
    return
  }
}
</script>

<template>
  <BaseModal>
    <form class="form-modal" @submit.prevent="onFormSubmit">
      <h3 v-html="props.title" />
      <div class="input__wrapper">
        <Input v-model="formData.name" :is-required="true" :errors="errors.name" label="Имя" />
        <InputPhone v-model="formData.phone" :is-required="true" :errors="errors.phone" label="Номер телефона" />
      </div>
      <Input v-model="formData.email" :is-required="true" :errors="errors.email" label="Email" />
      <Button type="submit" class="ready-to-discuss__button --without-icon-on-mobile"  icon="send">{{ props.buttonText }}</Button>
      <ProcessingPersonalDataAgree />
      <Checkbox :errors="errors.is_agree_to_receive_ads" class="--contrast" v-model="formData.is_agree_to_receive_ads">
        <a target="_blank" href="/docs/consent-to-receive-advertising.pdf">Я согласен получить рекламу и звонки</a>
      </Checkbox>
    </form>
  </BaseModal>
</template>