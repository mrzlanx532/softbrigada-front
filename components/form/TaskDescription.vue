<script setup lang="ts">
import Input from '~/components/form/Input.vue'
import InputFile from '~/components/form/InputFile.vue'

const props = withDefaults(defineProps<{
  isRequired: boolean,
  errors?: boolean
}>(), {
  isRequired: false
})

const description = defineModel('description')
const file = defineModel('file')
</script>

<template>
  <div class="task_description" :class="{'--has-error': props.errors}">
    <div>Описание задачи <span v-if="props.isRequired">*</span></div>
    <Input name="task_description" v-model="description" label="Напишите о вашей задаче в двух словах"/>
    <div>или прикрепите файл с ТЗ</div>
    <InputFile class="--small" v-model="file" />
  </div>
</template>