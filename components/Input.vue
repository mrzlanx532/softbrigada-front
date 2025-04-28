<script setup lang="ts">
const props = defineProps<{
  name: string,
  label: string,
}>()

const inputRef = useTemplateRef('inputRef')

const onClickLabel = () => {
  inputRef.value.focus()
}
</script>

<template>
  <div class="input">
    <label @click="onClickLabel" :for="props.name">{{ props.label }}</label>
    <input
        ref="inputRef"
        :name="props.name"
        :placeholder="props.placeholder"
        :label="props.name"/>
  </div>
</template>