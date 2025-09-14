import { cn } from "@/lib/utils"

interface ServiceOption {
  id: string
  name: string
  description: string
  category: string
  price?: number
  duration?: string
  recommended?: boolean
  features?: readonly string[]
}

interface FormServiceCardProps {
  service: ServiceOption
  isSelected: boolean
  onToggle: (serviceId: string) => void
  className?: string
}

export function FormServiceCard({ service, isSelected, onToggle, className }: FormServiceCardProps) {
  return (
    <div
      className={cn(
        "relative p-6 rounded-xl border cursor-pointer transition-all duration-300 group",
        "hover:scale-[1.02] hover:shadow-xl hover:shadow-blackbird-ignition-blue/10",
        isSelected
          ? "border-blackbird-ignition-blue bg-gradient-to-br from-blackbird-ignition-blue/10 via-blackbird-charcoal/30 to-blackbird-charcoal/40 shadow-lg shadow-blackbird-ignition-blue/20"
          : "border-blackbird-charcoal/50 bg-blackbird-charcoal/20 backdrop-blur-sm hover:border-blackbird-ignition-blue/30 hover:bg-blackbird-charcoal/30",
        className
      )}
      onClick={() => onToggle(service.id)}
    >
      {/* Recommended badge */}
      {service.recommended && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2">
          <div className="bg-gradient-to-r from-blackbird-ignition-blue to-blackbird-ignition-blue/80 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
            Recommended
          </div>
        </div>
      )}

      {/* Selection indicator */}
      <div className="absolute top-4 right-4">
        <div className={cn(
          "w-6 h-6 rounded-full border-2 transition-all duration-300 flex items-center justify-center",
          isSelected
            ? "border-blackbird-ignition-blue bg-blackbird-ignition-blue shadow-lg shadow-blackbird-ignition-blue/30"
            : "border-blackbird-charcoal group-hover:border-blackbird-ignition-blue/50"
        )}>
          {isSelected && (
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </div>

      {/* Service icon/category indicator */}
      <div className="mb-4">
        <div className={cn(
          "w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300",
          isSelected
            ? "bg-blackbird-ignition-blue/20"
            : "bg-blackbird-charcoal/30 group-hover:bg-blackbird-ignition-blue/10"
        )}>
          {service.category === 'exterior' && (
            <svg className={cn(
              "w-6 h-6 transition-colors duration-300",
              isSelected ? "text-blackbird-ignition-blue" : "text-blackbird-off-white/60"
            )} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          )}
          {service.category === 'interior' && (
            <svg className={cn(
              "w-6 h-6 transition-colors duration-300",
              isSelected ? "text-blackbird-ignition-blue" : "text-blackbird-off-white/60"
            )} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          )}
        </div>
      </div>

      {/* Service details */}
      <div className="space-y-3">
        <div>
          <h3 className={cn(
            "text-lg font-semibold transition-colors duration-300",
            isSelected ? "text-blackbird-ignition-blue" : "text-blackbird-off-white"
          )}>
            {service.name}
          </h3>
          <p className="text-sm text-blackbird-off-white/70 mt-1">
            {service.description}
          </p>
        </div>

        {/* Price and duration */}
        {(service.price || service.duration) && (
          <div className="flex items-center justify-between text-sm">
            {service.price && (
              <span className="text-blackbird-ignition-blue font-semibold">
                From ${service.price}
              </span>
            )}
            {service.duration && (
              <span className="text-blackbird-off-white/60">
                {service.duration}
              </span>
            )}
          </div>
        )}

        {/* Features list */}
        {service.features && (
          <ul className="space-y-1">
            {service.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-xs text-blackbird-off-white/60 flex items-center gap-2">
                <div className="w-1 h-1 bg-blackbird-ignition-blue rounded-full flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Selection glow effect */}
      {isSelected && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blackbird-ignition-blue/5 via-transparent to-blackbird-ignition-blue/5 pointer-events-none" />
      )}

      {/* Hover effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-blackbird-ignition-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  )
}

interface PackageCardProps {
  package: {
    id: string
    name: string
    price: number
    description: string
    features?: readonly string[]
    popular?: boolean
  }
  isSelected: boolean
  onSelect: (packageId: string) => void
  className?: string
}

export function PackageCard({ package: pkg, isSelected, onSelect, className }: PackageCardProps) {
  return (
    <div
      className={cn(
        "relative p-8 rounded-xl border cursor-pointer transition-all duration-300 group",
        "hover:scale-[1.02] hover:shadow-2xl",
        pkg.popular && "border-2",
        isSelected
          ? "border-blackbird-ignition-blue bg-gradient-to-br from-blackbird-ignition-blue/15 via-blackbird-charcoal/40 to-blackbird-charcoal/60 shadow-2xl shadow-blackbird-ignition-blue/25"
          : pkg.popular
          ? "border-blackbird-ignition-blue/50 bg-gradient-to-br from-blackbird-ignition-blue/5 via-blackbird-charcoal/30 to-blackbird-charcoal/40 hover:shadow-blackbird-ignition-blue/20"
          : "border-blackbird-charcoal/50 bg-blackbird-charcoal/20 backdrop-blur-sm hover:border-blackbird-ignition-blue/30 hover:bg-blackbird-charcoal/30 hover:shadow-blackbird-ignition-blue/10",
        className
      )}
      onClick={() => onSelect(pkg.id)}
    >
      {/* Popular badge */}
      {pkg.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <div className="bg-gradient-to-r from-blackbird-ignition-blue to-blackbird-ignition-blue/80 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
            Most Popular
          </div>
        </div>
      )}

      {/* Selection indicator */}
      <div className="absolute top-6 right-6">
        <div className={cn(
          "w-7 h-7 rounded-full border-2 transition-all duration-300 flex items-center justify-center",
          isSelected
            ? "border-blackbird-ignition-blue bg-blackbird-ignition-blue shadow-lg shadow-blackbird-ignition-blue/30"
            : "border-blackbird-charcoal group-hover:border-blackbird-ignition-blue/50"
        )}>
          {isSelected && (
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </div>

      {/* Package content */}
      <div className="text-center space-y-4">
        <div>
          <h3 className={cn(
            "text-2xl font-heading font-bold transition-colors duration-300 mb-2",
            isSelected ? "text-blackbird-ignition-blue" : "text-blackbird-off-white"
          )}>
            {pkg.name}
          </h3>
          <div className={cn(
            "text-4xl font-bold transition-colors duration-300 mb-2",
            isSelected ? "text-blackbird-ignition-blue" : "text-blackbird-off-white"
          )}>
            ${pkg.price.toLocaleString()}
          </div>
          <p className="text-blackbird-off-white/70 text-sm">
            {pkg.description}
          </p>
        </div>

        {/* Package features */}
        {pkg.features && (
          <div className="space-y-3 pt-4 border-t border-blackbird-charcoal/30">
            {pkg.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-sm text-blackbird-off-white/80">
                <div className="w-2 h-2 bg-blackbird-ignition-blue rounded-full flex-shrink-0" />
                {feature}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Selection glow effect */}
      {isSelected && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blackbird-ignition-blue/5 via-transparent to-blackbird-ignition-blue/5 pointer-events-none" />
      )}
    </div>
  )
}