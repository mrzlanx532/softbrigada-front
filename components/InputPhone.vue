<script setup lang="ts">
import type { MaskInputOptions } from "maska"

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const props = withDefaults(defineProps<{
  modelValue?: string
  name: string,
  label: string,
  isRequired?: boolean
}>(), {
  isRequired: false
})

const inputRef = useTemplateRef('inputRef')

const onClickLabel = () => {
  inputRef.value.focus()
}

const options = reactive<MaskInputOptions>({
  mask: (value: string) => value.startsWith('8') ? '8 (###) ###-##-##' : '+7 (###) ###-##-##',
  eager: true,
})
</script>

<template>
  <div class="input">
    <div class="input__label" @click="onClickLabel">
      {{ props.label }}
      <span v-if="props.isRequired">*</span>
    </div>
    <input
        :value="props.modelValue"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        ref="inputRef"
        :name="props.name"
        :placeholder="props.placeholder"
        :label="props.name"
        v-maska="options"
    />
  </div>
</template>