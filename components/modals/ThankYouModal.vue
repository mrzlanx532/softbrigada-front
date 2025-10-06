<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import BaseModal from '~/components/modals/BaseModal.vue'

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <BaseModal>
    <div>Привет</div>
  </BaseModal>
</template>