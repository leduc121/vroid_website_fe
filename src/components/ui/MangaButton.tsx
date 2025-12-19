import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
interface MangaButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}
const MangaButton = forwardRef<HTMLButtonElement, MangaButtonProps>(({
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}, ref) => {
  const variants = {
    primary: 'bg-anime-red text-white hover:bg-red-500',
    secondary: 'bg-anime-blue text-white hover:bg-blue-600',
    accent: 'bg-anime-yellow text-black hover:bg-yellow-400',
    outline: 'bg-white text-black hover:bg-gray-50'
  };
  const sizes = {
    sm: 'px-4 py-1 text-sm border-2',
    md: 'px-6 py-2 text-base border-3',
    lg: 'px-8 py-4 text-xl font-black border-4'
  };
  return <motion.button ref={ref} whileHover={{
    scale: 1.05,
    rotate: -2
  }} whileTap={{
    scale: 0.95,
    rotate: 0
  }} className={cn('relative font-bold uppercase tracking-wider border-anime-black shadow-pop transition-colors', variants[variant], sizes[size], className)} {...props}>
        {children}
      </motion.button>;
});
MangaButton.displayName = 'MangaButton';
export { MangaButton };