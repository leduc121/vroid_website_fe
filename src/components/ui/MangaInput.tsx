import React from 'react';
import { AlertCircle } from 'lucide-react';
interface MangaInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
}
export function MangaInput({
  label,
  error,
  icon,
  className = '',
  ...props
}: MangaInputProps) {
  return <div className="flex flex-col gap-1.5 w-full group">
      <label className="font-black uppercase tracking-wider text-sm text-black ml-1 group-focus-within:text-[#3742FA] transition-colors">
        {label}
      </label>
      <div className="relative">
        <input className={`
            w-full p-3 bg-white text-black font-bold
            border-4 border-black rounded-lg
            focus:outline-none focus:border-[#3742FA] focus:shadow-[4px_4px_0px_0px_#3742FA]
            placeholder:text-gray-400 placeholder:font-normal
            transition-all duration-200
            ${error ? 'border-[#FF4757] focus:border-[#FF4757] focus:shadow-[4px_4px_0px_0px_#FF4757]' : ''}
            ${className}
          `} {...props} />
        {icon && <div className="absolute right-4 top-1/2 -translate-y-1/2 text-black pointer-events-none">
            {icon}
          </div>}
      </div>
      {error && <div className="flex items-center gap-1 text-[#FF4757] font-bold text-sm ml-1 animate-pulse">
          <AlertCircle size={16} strokeWidth={3} />
          <span>{error}</span>
        </div>}
    </div>;
}