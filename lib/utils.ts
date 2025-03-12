import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const debounce = (
  func: (num: number) => void,
  delay: number
): ((num: number) => void) => {
  let timeoutId: NodeJS.Timeout;
  return (num: number): void => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(num);
    }, delay);
  };
};
