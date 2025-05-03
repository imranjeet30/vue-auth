<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { useDynamicForm } from '@/composables/useDynamicForm'
import { formFields } from '@/formConfig'
import { reactive, computed } from 'vue'

const formValues = reactive({})
const validationSchema = useDynamicForm(formFields, formValues)

const visibleFields = computed(() =>
  formFields.filter(field => {
    if (!field.showIf) return true
    return Object.entries(field.showIf).every(([k, v]) => formValues[k] === v)
  })
)

function onSubmit(values) {
  console.log('Form submitted:', values)
}
</script>

<template>
  <Form :validation-schema="validationSchema" @submit="onSubmit">
    <div v-for="field in visibleFields" :key="field.name" class="mb-4">
      <label :for="field.name">{{ field.label }}</label>

      <Field
        :as="field.type === 'select' ? 'select' : 'input'"
        :type="field.type"
        :name="field.name"
        v-model="formValues[field.name]"
        class="border p-2 w-full"
      >
        <option v-if="field.type === 'select'" disabled value="">Select</option>
        <option v-for="option in field.options" :key="option" :value="option">
          {{ option }}
        </option>
      </Field>

      <ErrorMessage :name="field.name" class="text-red-500 text-sm" />
    </div>

    <button type="submit" class="bg-blue-500 text-white px-4 py-2">Submit</button>
  </Form>
</template>
