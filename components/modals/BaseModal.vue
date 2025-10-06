<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <VueFinalModal
      class="modal"
      overlay-transition="vfm-fade"
      content-transition="vfm-fade"
      @closed="emit('close')"
  >
    <!-- @vue-ignore -->
    <template #default="{ close }">
      <div class="modal__container" @click="(e) => e.target === e.currentTarget && close()">
        <div class="modal__close" @click="(e) => e.target === e.currentTarget && close()">
          <svg><use :href="'/sprite.svg#plus'" /></svg>
        </div>
        <div class="modal__content">
          <slot :close=close />
        </div>
      </div>
    </template>
  </VueFinalModal>
</template>