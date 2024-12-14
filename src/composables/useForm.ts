import { reactive, computed } from 'vue'

type Validator = (value: any) => string | true
type ValidationRules = Record<string, Validator[]>

interface FormOptions<T> {
  initialValues: T
  validationRules?: ValidationRules
  onSubmit?: (values: T) => Promise<void> | void
}

export function useForm<T extends Record<string, any>>({ 
  initialValues, 
  validationRules = {}, 
  onSubmit 
}: FormOptions<T>) {
  const values = reactive({ ...initialValues }) as T
  const errors = reactive<Record<string, string>>({})
  const touched = reactive<Record<string, boolean>>({})

  const validate = (fieldName?: string) => {
    const validateField = (name: string) => {
      const fieldRules = validationRules[name] || []
      for (const rule of fieldRules) {
        const result = rule(values[name])
        if (result !== true) {
          errors[name] = result
          return false
        }
      }
      delete errors[name]
      return true
    }

    if (fieldName) {
      return validateField(fieldName)
    }

    let isValid = true
    for (const field in validationRules) {
      if (!validateField(field)) {
        isValid = false
      }
    }
    return isValid
  }

  const handleSubmit = async (e: Event) => {
    e.preventDefault()
    if (validate() && onSubmit) {
      await onSubmit(values)
    }
  }

  const handleBlur = (fieldName: string) => {
    touched[fieldName] = true
    validate(fieldName)
  }

  const isValid = computed(() => Object.keys(errors).length === 0)

  return {
    values,
    errors,
    touched,
    isValid,
    handleSubmit,
    handleBlur,
    validate
  }
}