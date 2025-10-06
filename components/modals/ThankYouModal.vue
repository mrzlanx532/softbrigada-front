<script setup lang="ts">
import BaseModal from '~/components/modals/BaseModal.vue'
import Button from '~/components/shared/form/Button.vue'

const props = withDefaults(defineProps<{
  title?: string,
  buttonText?: string,
}>(), {
  title: 'Заявка на консультацию отправлена!',
  buttonText: 'Вернуться на сайт'
})

const emit = defineEmits<{
  (e: 'confirm'): void
}>()

const onClickBack = () => {
  emit('confirm')
}
</script>

<template>
  <BaseModal>
    <div class="thank-you-modal">
      <div>{{ props.title }}</div>
      <Button type="submit" class="--without-icon-on-mobile" @click="onClickBack">{{ props.buttonText }}</Button>
    </div>
  </BaseModal>
</template>