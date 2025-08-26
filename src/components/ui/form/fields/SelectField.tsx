import { FieldRoot } from "./FieldRoot"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./../Select"

export interface OptionList {
  label: string
  value: string
}

interface SelectFieldProps {
  label: string
  options: OptionList[]
  placeholder?: string
  value?: string
  onValueChange?: (value: string) => void
  error?: string
  description?: string
  required?: boolean
  htmlFor?: string
}

export function SelectField({
  label,
  options,
  placeholder = "Selecione...",
  value,
  onValueChange,
  error,
  description,
  required,
  htmlFor,
}: SelectFieldProps) {
  return (
    <FieldRoot
      label={label}
      error={error}
      description={description}
      required={required}
      htmlFor={htmlFor}
    >
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger id={htmlFor}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FieldRoot>
  )
}
