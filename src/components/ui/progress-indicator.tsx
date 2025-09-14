import { cn } from "@/lib/utils"

interface Step {
  id: number
  title: string
  description: string
  isCompleted?: boolean
  isActive?: boolean
}

interface ProgressIndicatorProps {
  steps: Step[]
  currentStep: number
  className?: string
}

export function ProgressIndicator({ steps, currentStep, className }: ProgressIndicatorProps) {
  const progressPercentage = ((currentStep - 1) / (steps.length - 1)) * 100

  return (
    <div className={cn("space-y-6", className)}>
      {/* Tachometer-style circular progress */}
      <div className="flex justify-center mb-8">
        <div className="relative w-32 h-32">
          {/* Background circle */}
          <svg className="w-32 h-32 -rotate-90 transform" viewBox="0 0 128 128">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-blackbird-charcoal/30"
            />
            {/* Progress circle */}
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              className="text-blackbird-ignition-blue transition-all duration-700 ease-out"
              style={{
                strokeDasharray: "351.86", // 2 * π * 56
                strokeDashoffset: `${351.86 - (351.86 * progressPercentage) / 100}`,
              }}
            />
          </svg>

          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-blackbird-off-white">
                {Math.round(progressPercentage)}%
              </div>
              <div className="text-xs text-blackbird-off-white/60 uppercase tracking-wider">
                Complete
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step indicators */}
      <div className="flex items-center justify-between relative">
        {/* Progress line */}
        <div className="absolute top-5 left-0 w-full h-0.5 bg-blackbird-charcoal/30 -z-10">
          <div
            className="h-full bg-gradient-to-r from-blackbird-ignition-blue to-blackbird-ignition-blue/60 transition-all duration-700 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {steps.map((step) => {
          const isCompleted = currentStep > step.id
          const isActive = currentStep === step.id

          return (
            <div key={step.id} className="flex flex-col items-center space-y-2">
              {/* Step circle */}
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300",
                "border-2 relative overflow-hidden",
                isCompleted && "bg-blackbird-ignition-blue border-blackbird-ignition-blue text-white shadow-lg shadow-blackbird-ignition-blue/25",
                isActive && "border-blackbird-ignition-blue text-blackbird-ignition-blue bg-blackbird-ignition-blue/10",
                !isCompleted && !isActive && "border-blackbird-charcoal text-blackbird-off-white/60 bg-blackbird-charcoal/20"
              )}>
                {isCompleted ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  step.id
                )}

                {/* Subtle glow effect for active step */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blackbird-ignition-blue/10 to-transparent" />
                )}
              </div>

              {/* Step label - Hide on mobile for space */}
              <div className="text-center hidden md:block">
                <div className={cn(
                  "text-sm font-medium transition-colors duration-300",
                  isActive ? "text-blackbird-ignition-blue" : "text-blackbird-off-white"
                )}>
                  {step.title}
                </div>
                <div className="text-xs text-blackbird-off-white/60 mt-1">
                  {step.description}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Current step info for mobile */}
      <div className="text-center md:hidden">
        <h3 className="text-lg font-semibold text-blackbird-off-white">
          {steps[currentStep - 1]?.title}
        </h3>
        <p className="text-blackbird-off-white/60 text-sm">
          {steps[currentStep - 1]?.description}
        </p>
      </div>
    </div>
  )
}