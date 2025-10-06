<script setup lang="ts">
import BaseModal from '~/components/modals/BaseModal.vue'
import Button from '~/components/shared/form/Button.vue'

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
      <div>Заявка на консультацию отправлена!</div>
      <Button type="submit" class="--without-icon-on-mobile" @click="onClickBack">Вернуться на сайт</Button>
    </div>
  </BaseModal>
</template>