<script setup lang="ts">
const props = defineProps<{
  icon?: string
}>()
</script>

<template>
  <button class="button" :class="{'--with-icon': props.icon}">
    <template v-if="props.icon">
      <div><slot /></div>
      <svg><use :href="'/sprite.svg#' + props.icon" /></svg>
    </template>
    <slot v-else />
  </button>
</template>