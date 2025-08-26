import { FieldRoot } from "./FieldRoot"
import { Input } from "./../Input"

interface TextFieldProps {
  label: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  error?: string
  description?: string
  required?: boolean
  htmlFor?: string
  disabled?: boolean
}

export function TextField({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  error,
  description,
  required,
  htmlFor,
  disabled,
}: TextFieldProps) {
  return (
    <FieldRoot
      label={label}
      error={error}
      description={description}
      required={required}
      htmlFor={htmlFor}
    >
      <Input
        id={htmlFor}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </FieldRoot>
  )
}
