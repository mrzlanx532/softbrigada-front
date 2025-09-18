<script setup lang="ts">
type IOption = {
  id: number | string,
  name: string
}

const props = withDefaults(defineProps<{
  options: IOption[]
  modelValue?: string | number
  label: string,
  isRequired?: boolean,
  errors?: string[]
}>(), {
  isRequired: false
})

const emit = defineEmits<{
  'update:modelValue': [value: (string | number)]
}>()

const onClick = (value) => {
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="radio">
    <div class="radio__label" :class="{'--has-error': props.errors}">
      {{ props.label }}
      <span v-if="props.isRequired">*</span>
    </div>
    <div class="radio__list">
      <div
          class="radio__list-item"
          v-for="item in props.options"
          :key="item.id"
          @click="onClick(item.id)"
          :class="{'--active': item.id === props.modelValue}"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>