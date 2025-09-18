<script setup lang="ts">
import type { MaskInputOptions } from "maska"

const {data: serverTime} = await useAsyncData('server-time', async() => Date.now())

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const props = withDefaults(defineProps<{
  modelValue?: string
  label: string,
  isRequired?: boolean,
  errors?: string[]
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
    <div class="input__label" :class="{'--has-error': props.errors}" @click="onClickLabel">
      {{ props.label }}
      <span v-if="props.isRequired">*</span>
    </div>
    <input
        :value="props.modelValue"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        ref="inputRef"
        :placeholder="props.placeholder"
        :label="props.name"
        :name="'field-' + serverTime"
        v-maska="options"
    />
    <div v-if="props.errors" class="input__error">
      {{ props.errors[0] }}
    </div>
  </div>
</template>