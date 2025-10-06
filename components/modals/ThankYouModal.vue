<script setup lang="ts">
import BaseModal from '~/components/modals/BaseModal.vue'

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <BaseModal>
    <div>
      <div>Заявка отправлена</div>
      <div>Мы свяжемся с вами в близжайшее время</div>
    </div>
  </BaseModal>
</template>