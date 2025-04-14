<script setup lang="ts">
const props = defineProps<{
  name: string,
  label: string
}>()
</script>

<template>
  <div class="input">
    <input
        :name="props.name"
        type="text"
        :placeholder="props.label"
        :label="props.name"/>
  </div>
</template>