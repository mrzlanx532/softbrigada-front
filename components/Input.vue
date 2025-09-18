<script setup lang="ts">
const {data: serverTime} = await useAsyncData('server-time', async() => Date.now())

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const props = withDefaults(defineProps<{
  modelValue?: string
  label: string,
  isRequired?: boolean
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
    <div class="input__label" @click="onClickLabel">
      {{ props.label }}
      <span v-if="props.isRequired">*</span>
    </div>
    <input
        :value="props.modelValue"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        ref="inputRef"
        :name="'field-' + serverTime"
        :placeholder="props.placeholder"
        :label="props.name"/>
  </div>
</template>