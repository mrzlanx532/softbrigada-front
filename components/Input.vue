<script setup lang="ts">
const props = defineProps<{
  name: string,
  label: string,
}>()
</script>

<template>
  <div class="input">
    <label :for="props.name">{{ props.label }}</label>
    <input
        :name="props.name"
        :placeholder="props.placeholder"
        :label="props.name"/>
  </div>
</template>