import * as React from "react"
import { cn } from "@/lib/utils"

export interface PremiumInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hint?: string
  error?: string
  success?: boolean
}

const PremiumInput = React.forwardRef<HTMLInputElement, PremiumInputProps>(
  ({ className, label, hint, error, success, type, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-medium text-blackbird-off-white">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            type={type}
            className={cn(
              "flex h-12 w-full rounded-lg border border-blackbird-charcoal/50 bg-blackbird-charcoal/20 backdrop-blur-sm px-4 py-3 text-base text-blackbird-off-white placeholder:text-blackbird-off-white/40",
              "transition-all duration-300 ease-out",
              "hover:border-blackbird-ignition-blue/30 hover:bg-blackbird-charcoal/30",
              "focus:border-blackbird-ignition-blue focus:bg-blackbird-charcoal/40 focus:outline-none focus:ring-2 focus:ring-blackbird-ignition-blue/20 focus:ring-offset-2 focus:ring-offset-blackbird-black",
              "disabled:cursor-not-allowed disabled:opacity-50",
              success && "border-green-500/50 focus:border-green-500 focus:ring-green-500/20",
              error && "border-red-500/50 focus:border-red-500 focus:ring-red-500/20",
              className
            )}
            ref={ref}
            {...props}
          />
          {success && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
          )}
        </div>
        {hint && !error && (
          <p className="text-xs text-blackbird-off-white/60">
            {hint}
          </p>
        )}
        {error && (
          <p className="text-xs text-red-400 flex items-center gap-1">
            <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        )}
      </div>
    )
  }
)
PremiumInput.displayName = "PremiumInput"

export { PremiumInput }