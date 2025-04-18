<script setup lang="ts">
type IOption = {
  id: number | string,
  name: string
}

const props = defineProps<{
  options: IOption[]
  modelValue: string | number
}>()

const emit = defineEmits<{
  'update:modelValue': [value: (string | number)]
}>()

const onClick = (value) => {
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="radio">
    <div
        v-for="item in props.options"
        :key="item.id"
        @click="onClick(item.id)"
        :class="{'--active': item.id === props.modelValue}"
    >
      {{ item.name }}
    </div>
  </div>
</template>