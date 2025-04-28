<script setup lang="ts">
const props = defineProps<{
  modelValue?: string
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
        v-model="props.modelValue"
        ref="inputRef"
        :name="props.name"
        :placeholder="props.placeholder"
        :label="props.name"/>
  </div>
</template>