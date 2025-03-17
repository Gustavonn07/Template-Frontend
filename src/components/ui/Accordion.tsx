import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Icon } from '@iconify/react'
import { cn } from "../../utils/"
import '../animations/Accordion.animation.css'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b disabled:opacity-50", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center cursor-pointer justify-between py-4 text-sm font-medium transition-all text-left [&[data-state=open]>svg]:rotate-180 disabled:cursor-not-allowed disabled:opacity-50 gap-4",
        className
      )}
      {...props}
    >
      {children}
      <Icon icon='lucide:chevron-down' className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    {...props}
    className={cn(
      "overflow-hidden text-sm",
      "data-[state=open]:animate-[accordion-down_0.2s_ease-out]",
      "data-[state=closed]:animate-[accordion-up_0.2s_ease-out]",
      className
    )}
  >
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
