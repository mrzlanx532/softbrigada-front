<script setup lang="ts">
import Brief from '~/components/special/Brief.vue'
import { ModalsContainer } from 'vue-final-modal'
</script>

<template>
  <ModalsContainer />
  <Brief />
  <slot />
</template>