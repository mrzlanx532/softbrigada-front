<script setup lang="ts">
import { type Ref } from 'vue'

const _file: Ref<File | undefined> = ref()

const props = defineProps<{
  modelValue: File
}>()

const emit = defineEmits<{
  'update:modelValue': [value: (string | number)]
}>()

watch(
    () => props.modelValue,
    (file: File | undefined) => {
      _file.value = file
    }
)

const onClick = () => {

  if (_file.value) {
    emit('update:modelValue', undefined)
    return
  }

  const input = document.createElement('input')

  input.type = 'file'
  input.click()
  input.addEventListener('change', (e) => {
    emit('update:modelValue', input.files[0])
  })
  input.remove()
}
</script>

<template>
  <div class="input-file" :class="{'--attached': _file}" @click="onClick">
    <svg><use href="/sprite.svg#clip" /></svg>
    <div>
      <template v-if="_file">
        <div>Файл прикреплен</div>
        <div :title="_file.name">{{ _file.name }}</div>
      </template>
      <template v-else>
        Прикрепить файл
      </template>
    </div>
  </div>
</template>