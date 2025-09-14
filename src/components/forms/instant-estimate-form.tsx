'use client'

import { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChevronLeft, ChevronRight, Car, Phone, Mail, Clock, CheckCircle, Sparkles, Shield, Zap } from 'lucide-react'
import {
  EstimateFormData,
  estimateFormSchema,
  step1Schema,
  step2Schema,
  step3Schema,
  step4Schema,
  vehicleConditions,
  serviceOptions,
  packageOptions
} from '@/lib/validations'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

// Import our new premium components
import { PremiumInput } from '@/components/ui/premium-input'
import { ProgressIndicator } from '@/components/ui/progress-indicator'
import { FormServiceCard, PackageCard } from '@/components/ui/form-service-card'
import { PricePreview } from '@/components/ui/price-preview'
import { VehicleAutocomplete } from '@/components/ui/vehicle-autocomplete'

const steps = [
  { id: 1, title: 'Vehicle Details', description: 'Tell us about your vehicle' },
  { id: 2, title: 'Service Selection', description: 'Choose your detailing services' },
  { id: 3, title: 'Package Options', description: 'Optimize with our packages' },
  { id: 4, title: 'Contact & Scheduling', description: 'Complete your request' },
]

export function InstantEstimateForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null)
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({})
  const progressRef = useRef<HTMLDivElement>(null)

  const form = useForm<EstimateFormData>({
    resolver: zodResolver(estimateFormSchema),
    defaultValues: {
      selectedServices: [],
      preferredContactMethod: 'phone',
      timeframe: 'flexible'
    },
    mode: 'onChange' // Real-time validation
  })

  const { watch, formState: { errors } } = form
  const selectedServices = watch('selectedServices') || []
  const packageSelection = watch('packageSelection')
  const vehicleMake = watch('vehicleMake')
  const vehicleCondition = watch('vehicleCondition')

  // Auto-save functionality
  useEffect(() => {
    const subscription = watch((data) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('blackbird-estimate-form', JSON.stringify(data))
      }
    })
    return () => subscription.unsubscribe()
  }, [watch])

  // Load saved data on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('blackbird-estimate-form')
      if (saved) {
        try {
          const parsedData = JSON.parse(saved)
          Object.keys(parsedData).forEach(key => {
            if (parsedData[key] !== undefined) {
              form.setValue(key as any, parsedData[key])
            }
          })
        } catch (e) {
          console.log('Could not restore form data')
        }
      }
    }
  }, [])

  // Calculate estimated price
  const calculateEstimate = () => {
    let basePrice = 0

    if (packageSelection) {
      const selectedPackage = packageOptions.find(pkg => pkg.id === packageSelection)
      if (selectedPackage) {
        basePrice = selectedPackage.price
      }
    } else {
      selectedServices.forEach(serviceId => {
        const service = serviceOptions.find(s => s.id === serviceId)
        if (service) {
          basePrice += service.price
        }
      })
    }

    return basePrice
  }

  // Get smart service recommendations based on vehicle
  const getRecommendedServices = () => {
    const recommendations = [...serviceOptions]

    // Prioritize ceramic coating for luxury vehicles
    const luxuryMakes = ['BMW', 'Mercedes-Benz', 'Audi', 'Lexus', 'Tesla', 'Porsche']
    if (vehicleMake && luxuryMakes.includes(vehicleMake)) {
      recommendations.sort((a, b) => {
        if (a.id === 'ceramic-coating') return -1
        if (b.id === 'ceramic-coating') return 1
        return 0
      })
    }

    // Recommend paint correction for older vehicles
    const vehicleYear = watch('vehicleYear')
    if (vehicleYear && vehicleYear < 2020) {
      recommendations.sort((a, b) => {
        if (a.id === 'paint-correction') return -1
        if (b.id === 'paint-correction') return 1
        return 0
      })
    }

    return recommendations
  }

  const validateCurrentStep = async () => {
    const currentData = form.getValues()
    setFormErrors({})

    try {
      switch (currentStep) {
        case 1:
          await step1Schema.parseAsync(currentData)
          break
        case 2:
          await step2Schema.parseAsync(currentData)
          break
        case 3:
          // Step 3 is optional
          break
        case 4:
          await step4Schema.parseAsync(currentData)
          break
      }
      return true
    } catch (error: any) {
      if (error.errors) {
        const stepErrors: { [key: string]: string } = {}
        error.errors.forEach((err: any) => {
          stepErrors[err.path[0]] = err.message
        })
        setFormErrors(stepErrors)
      }
      return false
    }
  }

  const nextStep = async () => {
    let isValid = true

    // Validate only current step fields
    switch (currentStep) {
      case 1:
        isValid = await form.trigger(['vehicleYear', 'vehicleMake', 'vehicleModel', 'vehicleColor', 'vehicleCondition'])
        break
      case 2:
        isValid = await form.trigger(['selectedServices'])
        // Check if at least one service is selected
        const services = form.getValues('selectedServices')
        if (!services || services.length === 0) {
          setFormErrors({ selectedServices: 'Please select at least one service' })
          isValid = false
        }
        break
      case 3:
        // Package selection is optional
        isValid = true
        break
      default:
        isValid = await form.trigger()
    }

    if (isValid && currentStep < 4) {
      setFormErrors({}) // Clear any previous errors
      setCurrentStep(currentStep + 1)

      // Smooth scroll to progress indicator on mobile
      if (window.innerWidth < 768 && progressRef.current) {
        progressRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        })
      }
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)

      // Smooth scroll to progress indicator on mobile
      if (window.innerWidth < 768 && progressRef.current) {
        progressRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        })
      }
    }
  }

  const onSubmit = async (data: EstimateFormData) => {
    setIsSubmitting(true)
    
    try {
      const estimate = calculateEstimate()
      setEstimatedPrice(estimate)
      
      const submissionData = {
        ...data,
        estimated_price: estimate,
        status: 'pending'
      }

      const { error } = await supabase
        .from('estimate_submissions')
        .insert([submissionData])

      if (error) {
        console.error('Error submitting form:', error)
        // Handle error (show toast, etc.)
      } else {
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-6">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-4xl font-heading font-bold text-blackbird-off-white mb-4">
            Request Submitted Successfully
          </h2>
          <p className="text-lg text-blackbird-off-white/80 max-w-2xl mx-auto">
            Thank you for choosing Blackbird Detailing. Your precision detailing request is now in our system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Price Summary */}
          {estimatedPrice && (
            <Card className="bg-gradient-to-br from-blackbird-ignition-blue/15 via-blackbird-charcoal/30 to-blackbird-charcoal/50 border-blackbird-ignition-blue/20">
              <CardHeader>
                <CardTitle className="text-blackbird-off-white flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-blackbird-ignition-blue" />
                  Your Estimate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-blackbird-ignition-blue mb-2">
                    ${estimatedPrice.toLocaleString()}
                  </div>
                  <p className="text-blackbird-off-white/70">
                    Estimated investment in your vehicle's protection
                  </p>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-blackbird-off-white/80">
                    <Shield className="h-4 w-4 text-blackbird-ignition-blue" />
                    Professional-grade products and techniques
                  </div>
                  <div className="flex items-center gap-2 text-blackbird-off-white/80">
                    <Clock className="h-4 w-4 text-blackbird-ignition-blue" />
                    100% mobile service at your location
                  </div>
                  <div className="flex items-center gap-2 text-blackbird-off-white/80">
                    <Zap className="h-4 w-4 text-blackbird-ignition-blue" />
                    Satisfaction guaranteed
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Next Steps */}
          <Card className="bg-blackbird-charcoal/30 border-blackbird-charcoal">
            <CardHeader>
              <CardTitle className="text-blackbird-off-white">What Happens Next</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blackbird-ignition-blue rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-blackbird-off-white mb-1">Personal Consultation</h4>
                    <p className="text-sm text-blackbird-off-white/70">Our detailing specialist will contact you within 2 hours to discuss your vehicle's specific needs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blackbird-ignition-blue rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-blackbird-off-white mb-1">Precision Scheduling</h4>
                    <p className="text-sm text-blackbird-off-white/70">We'll coordinate a convenient time and location for your mobile detailing service.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blackbird-ignition-blue rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-blackbird-off-white mb-1">Motorsport-Grade Service</h4>
                    <p className="text-sm text-blackbird-off-white/70">Our certified technicians deliver precision results using premium products and techniques.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-blackbird-charcoal/50">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="sm"
                    className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 flex-1"
                    onClick={() => window.open('tel:+1-757-123-4567')}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call (757) 123-4567
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blackbird-off-white/30 text-blackbird-off-white flex-1"
                    onClick={() => window.open('mailto:info@blackbirddetailing.com')}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-blackbird-off-white/60">
            Have questions? Our team is standing by to provide personalized recommendations
            and ensure your vehicle receives the precision it deserves.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Enhanced Progress Indicator */}
      <div ref={progressRef} className="mb-12">
        <ProgressIndicator
          steps={steps.map(step => ({
            ...step,
            isCompleted: currentStep > step.id,
            isActive: currentStep === step.id
          }))}
          currentStep={currentStep}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Form Content */}
        <div className="lg:col-span-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Step 1: Vehicle Details */}
              {currentStep === 1 && (
                <Card className="bg-gradient-to-br from-blackbird-charcoal/20 via-blackbird-charcoal/30 to-blackbird-charcoal/40 backdrop-blur-sm border-blackbird-charcoal/50">
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-blackbird-ignition-blue/20 rounded-xl mb-4">
                        <Car className="h-8 w-8 text-blackbird-ignition-blue" />
                      </div>
                      <h2 className="text-3xl font-heading font-bold text-blackbird-off-white mb-3">
                        Your Vehicle Details
                      </h2>
                      <p className="text-blackbird-off-white/70 max-w-md mx-auto">
                        Help us understand your vehicle to provide the most accurate estimate and recommendations.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <FormField
                        control={form.control}
                        name="vehicleYear"
                        render={({ field }) => (
                          <FormItem>
                            <PremiumInput
                              label="Year"
                              type="number"
                              placeholder="2020"
                              error={formErrors.vehicleYear || errors.vehicleYear?.message}
                              {...field}
                              onChange={(e) => field.onChange(parseInt(e.target.value))}
                            />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="vehicleMake"
                        render={({ field }) => (
                          <FormItem>
                            <VehicleAutocomplete
                              field="make"
                              value={field.value || ''}
                              onValueChange={field.onChange}
                              label="Make"
                              placeholder="Select or type make"
                              error={formErrors.vehicleMake || errors.vehicleMake?.message}
                            />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <FormField
                        control={form.control}
                        name="vehicleModel"
                        render={({ field }) => (
                          <FormItem>
                            <VehicleAutocomplete
                              field="model"
                              value={field.value || ''}
                              onValueChange={field.onChange}
                              vehicleMake={vehicleMake}
                              label="Model"
                              placeholder="Select or type model"
                              error={formErrors.vehicleModel || errors.vehicleModel?.message}
                            />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="vehicleColor"
                        render={({ field }) => (
                          <FormItem>
                            <PremiumInput
                              label="Color"
                              placeholder="White, Black, Silver, etc."
                              error={formErrors.vehicleColor || errors.vehicleColor?.message}
                              {...field}
                            />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="vehicleCondition"
                      render={({ field }) => (
                        <FormItem>
                          <label className="text-sm font-medium text-blackbird-off-white mb-3 block">
                            Vehicle Condition
                          </label>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className={cn(
                                "h-12 bg-blackbird-charcoal/20 backdrop-blur-sm border-blackbird-charcoal/50 text-blackbird-off-white",
                                "hover:border-blackbird-ignition-blue/30 focus:border-blackbird-ignition-blue focus:ring-2 focus:ring-blackbird-ignition-blue/20"
                              )}>
                                <SelectValue placeholder="Select condition" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-blackbird-charcoal/90 backdrop-blur-md border-blackbird-charcoal">
                              {vehicleConditions.map((condition) => (
                                <SelectItem
                                  key={condition.value}
                                  value={condition.value}
                                  className="text-blackbird-off-white focus:bg-blackbird-ignition-blue/20"
                                >
                                  <div className="font-medium">{condition.label}</div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <p className="text-xs text-blackbird-off-white/60 mt-2">
                            This helps us recommend the right services for your vehicle
                          </p>
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Service Selection */}
              {currentStep === 2 && (
                <Card className="bg-gradient-to-br from-blackbird-charcoal/20 via-blackbird-charcoal/30 to-blackbird-charcoal/40 backdrop-blur-sm border-blackbird-charcoal/50">
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-blackbird-ignition-blue/20 rounded-xl mb-4">
                        <Sparkles className="h-8 w-8 text-blackbird-ignition-blue" />
                      </div>
                      <h2 className="text-3xl font-heading font-bold text-blackbird-off-white mb-3">
                        Choose Your Services
                      </h2>
                      <p className="text-blackbird-off-white/70 max-w-md mx-auto">
                        Select the detailing services that best match your vehicle's needs. Our smart recommendations are based on your vehicle information.
                      </p>
                    </div>

                    <FormField
                      control={form.control}
                      name="selectedServices"
                      render={({ field }) => (
                        <FormItem>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {getRecommendedServices().map((service) => (
                              <FormServiceCard
                                key={service.id}
                                service={service}
                                isSelected={field.value?.includes(service.id) || false}
                                onToggle={(serviceId) => {
                                  const current = field.value || []
                                  const updated = current.includes(serviceId)
                                    ? current.filter(id => id !== serviceId)
                                    : [...current, serviceId]
                                  field.onChange(updated)
                                }}
                              />
                            ))}
                          </div>
                          {formErrors.selectedServices && (
                            <p className="text-xs text-red-400 flex items-center gap-1 mt-2">
                              <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                              {formErrors.selectedServices}
                            </p>
                          )}
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Package Selection */}
              {currentStep === 3 && (
                <Card className="bg-gradient-to-br from-blackbird-charcoal/20 via-blackbird-charcoal/30 to-blackbird-charcoal/40 backdrop-blur-sm border-blackbird-charcoal/50">
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-blackbird-ignition-blue/20 rounded-xl mb-4">
                        <Shield className="h-8 w-8 text-blackbird-ignition-blue" />
                      </div>
                      <h2 className="text-3xl font-heading font-bold text-blackbird-off-white mb-3">
                        Upgrade to a Package
                      </h2>
                      <p className="text-blackbird-off-white/70 max-w-md mx-auto">
                        Save money and get comprehensive protection with our curated service packages. Or continue with individual services.
                      </p>
                    </div>

                    <FormField
                      control={form.control}
                      name="packageSelection"
                      render={({ field }) => (
                        <FormItem>
                          <div className="space-y-6">
                            {/* Option to stick with individual services */}
                            <div className="text-center">
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                className={cn(
                                  "border-blackbird-charcoal/50 text-blackbird-off-white bg-blackbird-charcoal/20",
                                  "hover:bg-blackbird-charcoal/40 hover:border-blackbird-ignition-blue/30",
                                  !field.value && "border-blackbird-ignition-blue bg-blackbird-ignition-blue/10"
                                )}
                                onClick={() => field.onChange(undefined)}
                              >
                                Continue with Individual Services
                              </Button>
                            </div>

                            <div className="relative">
                              <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-blackbird-charcoal/30" />
                              </div>
                              <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-blackbird-black text-blackbird-off-white/60">or choose a package</span>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                              {packageOptions.map((pkg) => (
                                <PackageCard
                                  key={pkg.id}
                                  package={pkg}
                                  isSelected={field.value === pkg.id}
                                  onSelect={(packageId) => {
                                    field.onChange(field.value === packageId ? undefined : packageId)
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              )}

              {/* Step 4: Contact Information */}
              {currentStep === 4 && (
                <Card className="bg-gradient-to-br from-blackbird-charcoal/20 via-blackbird-charcoal/30 to-blackbird-charcoal/40 backdrop-blur-sm border-blackbird-charcoal/50">
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-blackbird-ignition-blue/20 rounded-xl mb-4">
                        <Phone className="h-8 w-8 text-blackbird-ignition-blue" />
                      </div>
                      <h2 className="text-3xl font-heading font-bold text-blackbird-off-white mb-3">
                        Contact & Scheduling Preferences
                      </h2>
                      <p className="text-blackbird-off-white/70 max-w-md mx-auto">
                        How would you prefer to be contacted? Our team will reach out to finalize
                        your service details and coordinate the perfect time.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <FormField
                        control={form.control}
                        name="customerName"
                        render={({ field }) => (
                          <FormItem>
                            <PremiumInput
                              label="Full Name"
                              placeholder="Enter your full name"
                              error={formErrors.customerName || errors.customerName?.message}
                              {...field}
                            />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="customerPhone"
                        render={({ field }) => (
                          <FormItem>
                            <PremiumInput
                              label="Phone Number"
                              type="tel"
                              placeholder="(757) 555-0123"
                              hint="For scheduling and service updates"
                              error={formErrors.customerPhone || errors.customerPhone?.message}
                              {...field}
                            />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="mb-6">
                      <FormField
                        control={form.control}
                        name="customerEmail"
                        render={({ field }) => (
                          <FormItem>
                            <PremiumInput
                              label="Email Address"
                              type="email"
                              placeholder="your.email@example.com"
                              hint="For service confirmations and follow-ups"
                              error={formErrors.customerEmail || errors.customerEmail?.message}
                              {...field}
                            />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <FormField
                        control={form.control}
                        name="preferredContactMethod"
                        render={({ field }) => (
                          <FormItem>
                            <label className="text-sm font-medium text-blackbird-off-white mb-3 block">
                              Preferred Contact Method
                            </label>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className={cn(
                                  "h-12 bg-blackbird-charcoal/20 backdrop-blur-sm border-blackbird-charcoal/50 text-blackbird-off-white",
                                  "hover:border-blackbird-ignition-blue/30 focus:border-blackbird-ignition-blue focus:ring-2 focus:ring-blackbird-ignition-blue/20"
                                )}>
                                  <SelectValue />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-blackbird-charcoal/90 backdrop-blur-md border-blackbird-charcoal">
                                <SelectItem value="phone" className="text-blackbird-off-white focus:bg-blackbird-ignition-blue/20">Phone Call (Preferred)</SelectItem>
                                <SelectItem value="email" className="text-blackbird-off-white focus:bg-blackbird-ignition-blue/20">Email</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="timeframe"
                        render={({ field }) => (
                          <FormItem>
                            <label className="text-sm font-medium text-blackbird-off-white mb-3 block">
                              Service Timeframe
                            </label>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className={cn(
                                  "h-12 bg-blackbird-charcoal/20 backdrop-blur-sm border-blackbird-charcoal/50 text-blackbird-off-white",
                                  "hover:border-blackbird-ignition-blue/30 focus:border-blackbird-ignition-blue focus:ring-2 focus:ring-blackbird-ignition-blue/20"
                                )}>
                                  <SelectValue />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-blackbird-charcoal/90 backdrop-blur-md border-blackbird-charcoal">
                                <SelectItem value="asap" className="text-blackbird-off-white focus:bg-blackbird-ignition-blue/20">ASAP</SelectItem>
                                <SelectItem value="week" className="text-blackbird-off-white focus:bg-blackbird-ignition-blue/20">Within a week</SelectItem>
                                <SelectItem value="month" className="text-blackbird-off-white focus:bg-blackbird-ignition-blue/20">Within a month</SelectItem>
                                <SelectItem value="flexible" className="text-blackbird-off-white focus:bg-blackbird-ignition-blue/20">Flexible scheduling</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="additionalNotes"
                      render={({ field }) => (
                        <FormItem>
                          <label className="text-sm font-medium text-blackbird-off-white mb-3 block">
                            Additional Requirements (Optional)
                          </label>
                          <Textarea
                            placeholder="Any specific concerns, special requirements, or questions about your vehicle's condition..."
                            className={cn(
                              "min-h-[120px] bg-blackbird-charcoal/20 backdrop-blur-sm border-blackbird-charcoal/50 text-blackbird-off-white placeholder:text-blackbird-off-white/40",
                              "hover:border-blackbird-ignition-blue/30 focus:border-blackbird-ignition-blue focus:ring-2 focus:ring-blackbird-ignition-blue/20"
                            )}
                            {...field}
                          />
                          <p className="text-xs text-blackbird-off-white/60 mt-2">
                            Help us prepare the perfect service plan for your vehicle
                          </p>
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              )}

              {/* Enhanced Navigation */}
              <div className="flex justify-between items-center pt-8 gap-4">
                {currentStep > 1 ? (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className={cn(
                      "h-10 md:h-12 px-4 md:px-6 text-sm md:text-base",
                      "border-blackbird-charcoal/50 text-blackbird-off-white bg-blackbird-charcoal/20 backdrop-blur-sm",
                      "hover:bg-blackbird-charcoal/40 hover:border-blackbird-ignition-blue/30"
                    )}
                  >
                    <ChevronLeft className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                    <span className="hidden sm:inline">Previous</span>
                    <span className="sm:hidden">Back</span>
                  </Button>
                ) : (
                  <div />
                )}

                {currentStep < 4 ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className={cn(
                      "h-10 md:h-12 px-4 md:px-6 text-sm md:text-base",
                      "bg-gradient-to-r from-blackbird-ignition-blue to-blackbird-ignition-blue/80 hover:from-blackbird-ignition-blue/90 hover:to-blackbird-ignition-blue/70 shadow-lg shadow-blackbird-ignition-blue/25"
                    )}
                  >
                    Continue
                    <ChevronRight className="h-3 w-3 md:h-4 md:w-4 ml-1 md:ml-2" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "h-10 md:h-12 px-4 md:px-6 text-sm md:text-base min-w-[160px] md:min-w-[200px]",
                      "bg-gradient-to-r from-blackbird-ignition-blue to-blackbird-ignition-blue/80 hover:from-blackbird-ignition-blue/90 hover:to-blackbird-ignition-blue/70 shadow-lg shadow-blackbird-ignition-blue/25"
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3 h-3 md:w-4 md:h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-1 md:mr-2" />
                        <span className="hidden sm:inline">Submitting...</span>
                        <span className="sm:hidden">Sending...</span>
                      </>
                    ) : (
                      <>
                        <Zap className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                        <span className="hidden sm:inline">Get My Precision Estimate</span>
                        <span className="sm:hidden">Get Estimate</span>
                      </>
                    )}
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </div>

        {/* Price Preview Sidebar */}
        <div className="lg:col-span-1">
          <PricePreview
            selectedServices={selectedServices}
            selectedPackage={packageSelection}
            packages={packageOptions}
          />
        </div>
      </div>
    </div>
  )
}