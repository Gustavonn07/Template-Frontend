import { ReactNode } from "react"
import { Label } from "./../Label"

interface FieldRootProps {
  label: string
  children: ReactNode
  htmlFor?: string
  required?: boolean
  description?: string
  error?: string
}

export function FieldRoot({
  label,
  children,
  htmlFor,
  required,
  description,
  error,
}: FieldRootProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <Label htmlFor={htmlFor} className="text-sm font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </Label>

      {children}

      {description && !error && (
        <p className="text-xs text-muted-foreground">{description}</p>
      )}

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}
