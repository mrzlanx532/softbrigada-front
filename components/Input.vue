<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue?: string
  name: string,
  label: string,
  isRequired: boolean
}>(), {
  isRequired: false
})

const inputRef = useTemplateRef('inputRef')

const onClickLabel = () => {
  inputRef.value.focus()
}
</script>

<template>
  <div class="input">
    <label @click="onClickLabel" :for="props.name">
      {{ props.label }}
      <span v-if="props.isRequired">*</span>
    </label>
    <input
        v-model="props.modelValue"
        ref="inputRef"
        :name="props.name"
        :placeholder="props.placeholder"
        :label="props.name"/>
  </div>
</template>