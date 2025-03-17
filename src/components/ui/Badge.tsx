import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../utils";

const badgeVariants = cva(
  "inline-flex items-center shadow rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary-300 hover:bg-primary-300/80 text-primary-900",
        red: "bg-red-600 hover:bg-red-600/80 text-white",
        orange: "bg-orange-600 hover:bg-orange-600/80 text-white",
        amber: "bg-amber-600 hover:bg-amber-600/80 text-white",
        yellow: "bg-yellow-600 hover:bg-yellow-600/80 text-white",
        green: "bg-green-600 hover:bg-green-600/80 text-white",
        emerald: "bg-emerald-600 hover:bg-emerald-600/80 text-white",
        teal: "bg-teal-600 hover:bg-teal-600/80 text-white",
        cyan: "bg-cyan-600 hover:bg-cyan-600/80 text-black",
        sky: "bg-sky-600 hover:bg-sky-600/80 text-white",
        blue: "bg-blue-600 hover:bg-blue-600/80 text-white",
        indigo: "bg-indigo-600 hover:bg-indigo-600/80 text-white",
        violet: "bg-violet-600 hover:bg-violet-600/80 text-white",
        purple: "bg-purple-600 hover:bg-purple-600/80 text-white",
        fuchsia: "bg-fuchsia-600 hover:bg-fuchsia-600/80 text-white",
        pink: "bg-pink-600 hover:bg-pink-600/80 text-white",
        rose: "bg-rose-600 hover:bg-rose-600/80 text-white",
        slate: "bg-slate-600 hover:bg-slate-600/80 text-white",
        gray: "bg-gray-600 hover:bg-gray-600/80 text-white",
        zinc: "bg-zinc-600 hover:bg-zinc-600/80 text-white",
        neutral: "bg-neutral-600 hover:bg-neutral-600/80 text-white",
        stone: "bg-stone-600 hover:bg-stone-600/80 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
