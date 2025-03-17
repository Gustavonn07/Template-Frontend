import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina classes CSS condicionalmente e resolve conflitos do TailwindCSS.
 * @param {...ClassValue} inputs - Lista de classes CSS (strings ou expressões condicionais).
 * @returns {string} - Uma string com as classes CSS combinadas e sem conflitos.
 * 
 * @example
 * cn('bg-red-500', { true && 'text-white' }, 'px-4');
 * Retorna: "bg-red-500 text-white px-4"
 * @example
 * 
 * Resolve conflitos do Tailwind
 * cn('text-red-500', 'text-blue-500');
 * Retorna: "text-blue-500"
 */

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}