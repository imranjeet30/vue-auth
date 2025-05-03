// composables/useDynamicForm.js
import * as yup from 'yup'

export function useDynamicForm(fields) {
  const schema = fields.reduce((acc, field) => {
    if (field.validation) {
      let validator = yup.string()
      const rules = field.validation.split('|')
      rules.forEach(rule => {
        const [r, val] = rule.split(':')
        if (r === 'required') validator = validator.required('Required')
        if (r === 'min') validator = validator.min(Number(val), `Min ${val}`)
        if (r === 'email') validator = yup.string().email('Invalid email')
        if (r === 'numeric') validator = yup.number().typeError('Must be number')
      })
      acc[field.name] = validator
    }
    return acc
  }, {})

  return yup.object(schema)
}
