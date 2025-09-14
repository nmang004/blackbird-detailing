import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { TrendingUp, Clock, Shield } from "lucide-react"

interface ServicePricing {
  [key: string]: number
}

interface PackageOption {
  id: string
  name: string
  price: number
  description: string
  features?: readonly string[]
  popular?: boolean
  savings?: number
}

interface PricePreviewProps {
  selectedServices: string[]
  selectedPackage?: string
  packages: readonly PackageOption[]
  className?: string
}

const servicePricing: ServicePricing = {
  'ceramic-coating': 899,
  'paint-correction': 599,
  'interior-detailing': 299,
  'exterior-wash': 199,
  'wheel-coating': 299,
  'glass-coating': 199
}

const serviceNames: { [key: string]: string } = {
  'ceramic-coating': 'Ceramic Coating',
  'paint-correction': 'Paint Correction',
  'interior-detailing': 'Interior Detailing',
  'exterior-wash': 'Exterior Detail',
  'wheel-coating': 'Wheel Coating',
  'glass-coating': 'Glass Coating'
}

export function PricePreview({ selectedServices, selectedPackage, packages, className }: PricePreviewProps) {
  const [animatedPrice, setAnimatedPrice] = useState(0)
  const [previousPrice, setPreviousPrice] = useState(0)

  const calculateTotal = () => {
    if (selectedPackage) {
      const selectedPkg = packages.find(pkg => pkg.id === selectedPackage)
      return selectedPkg?.price || 0
    }

    return selectedServices.reduce((total, serviceId) => {
      return total + (servicePricing[serviceId] || 0)
    }, 0)
  }

  const totalPrice = calculateTotal()
  const individualServicesPrice = selectedServices.reduce((total, serviceId) => {
    return total + (servicePricing[serviceId] || 0)
  }, 0)

  const packageSavings = selectedPackage && individualServicesPrice > totalPrice
    ? individualServicesPrice - totalPrice
    : 0

  // Animate price changes
  useEffect(() => {
    if (totalPrice !== previousPrice) {
      setPreviousPrice(animatedPrice)

      const duration = 800
      const startTime = Date.now()
      const startPrice = animatedPrice
      const endPrice = totalPrice

      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3)
        const currentPrice = startPrice + (endPrice - startPrice) * easeOut

        setAnimatedPrice(Math.round(currentPrice))

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [totalPrice, animatedPrice, previousPrice])

  if (selectedServices.length === 0 && !selectedPackage) {
    return null
  }

  return (
    <div className={cn(
      "sticky top-4 space-y-4",
      className
    )}>
      {/* Main Price Display */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blackbird-ignition-blue/10 via-blackbird-charcoal/30 to-blackbird-charcoal/50 backdrop-blur-sm border border-blackbird-ignition-blue/20 p-6">
        {/* Background animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blackbird-ignition-blue/5 to-transparent animate-pulse" />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blackbird-ignition-blue/20 rounded-lg">
              <TrendingUp className="w-5 h-5 text-blackbird-ignition-blue" />
            </div>
            <div>
              <h3 className="font-semibold text-blackbird-off-white">
                Estimated Total
              </h3>
              <p className="text-xs text-blackbird-off-white/60">
                Subject to vehicle inspection
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-4xl font-bold text-blackbird-off-white flex items-baseline gap-2">
              ${animatedPrice.toLocaleString()}
              {totalPrice > animatedPrice && (
                <span className="text-sm text-blackbird-ignition-blue animate-pulse">
                  ↗
                </span>
              )}
              {totalPrice < animatedPrice && (
                <span className="text-sm text-green-400 animate-pulse">
                  ↘
                </span>
              )}
            </div>

            {packageSavings > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-green-400">
                  You save ${packageSavings} with this package
                </span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Service Breakdown */}
      {selectedServices.length > 0 && (
        <div className="rounded-xl bg-blackbird-charcoal/20 backdrop-blur-sm border border-blackbird-charcoal/50 p-4">
          <h4 className="font-semibold text-blackbird-off-white mb-3 flex items-center gap-2">
            <div className="w-2 h-2 bg-blackbird-ignition-blue rounded-full" />
            Selected Services
          </h4>
          <div className="space-y-2">
            {selectedServices.map((serviceId) => (
              <div key={serviceId} className="flex justify-between items-center text-sm">
                <span className="text-blackbird-off-white/80">
                  {serviceNames[serviceId] || serviceId}
                </span>
                <span className="text-blackbird-ignition-blue font-medium">
                  ${servicePricing[serviceId]?.toLocaleString() || 0}
                </span>
              </div>
            ))}

            {!selectedPackage && selectedServices.length > 1 && (
              <div className="border-t border-blackbird-charcoal/50 pt-2 mt-3">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-blackbird-off-white">Subtotal</span>
                  <span className="text-blackbird-ignition-blue">
                    ${individualServicesPrice.toLocaleString()}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Package Info */}
      {selectedPackage && (
        <div className="rounded-xl bg-gradient-to-br from-blackbird-ignition-blue/5 via-blackbird-charcoal/20 to-blackbird-charcoal/30 backdrop-blur-sm border border-blackbird-ignition-blue/30 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-4 h-4 text-blackbird-ignition-blue" />
            <span className="font-semibold text-blackbird-off-white">
              Package Selected
            </span>
          </div>
          <p className="text-blackbird-off-white/80 text-sm">
            {packages.find(pkg => pkg.id === selectedPackage)?.name || 'Selected Package'}
          </p>
        </div>
      )}

      {/* Value Propositions */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-sm text-blackbird-off-white/70">
          <Clock className="w-4 h-4 text-blackbird-ignition-blue flex-shrink-0" />
          <span>Professional mobile service at your location</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-blackbird-off-white/70">
          <Shield className="w-4 h-4 text-blackbird-ignition-blue flex-shrink-0" />
          <span>Fully insured with satisfaction guarantee</span>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="text-xs text-blackbird-off-white/50 leading-relaxed">
        * Final pricing may vary based on vehicle size, condition, and specific requirements.
        All estimates include professional-grade products and expert application.
      </div>
    </div>
  )
}