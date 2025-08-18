'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChevronLeft, ChevronRight, Car, Phone, Mail, Clock, CheckCircle } from 'lucide-react'
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
import { Input } from '@/components/ui/input'
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
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const steps = [
  { id: 1, title: 'Vehicle Info', description: 'Tell us about your vehicle' },
  { id: 2, title: 'Services', description: 'Choose your services' },
  { id: 3, title: 'Package', description: 'Select a package (optional)' },
  { id: 4, title: 'Contact', description: 'Your contact information' },
]

export function InstantEstimateForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null)

  const form = useForm<EstimateFormData>({
    resolver: zodResolver(estimateFormSchema),
    defaultValues: {
      selectedServices: [],
      preferredContactMethod: 'phone',
      timeframe: 'flexible'
    }
  })

  const { watch } = form
  const selectedServices = watch('selectedServices') || []
  const packageSelection = watch('packageSelection')

  // Calculate estimated price
  const calculateEstimate = () => {
    let basePrice = 0
    
    if (packageSelection) {
      const selectedPackage = packageOptions.find(pkg => pkg.id === packageSelection)
      if (selectedPackage) {
        basePrice = selectedPackage.price
      }
    } else {
      // Individual service pricing
      const servicePricing = {
        'ceramic-coating': 899,
        'paint-correction': 599,
        'interior-detailing': 299,
        'exterior-wash': 199,
        'wheel-coating': 299,
        'glass-coating': 199
      }
      
      selectedServices.forEach(serviceId => {
        basePrice += servicePricing[serviceId as keyof typeof servicePricing] || 0
      })
    }
    
    return basePrice
  }

  const validateCurrentStep = async () => {
    const currentData = form.getValues()
    
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
    } catch (error) {
      return false
    }
  }

  const nextStep = async () => {
    const isValid = await validateCurrentStep()
    if (isValid && currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
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
      <Card className="w-full max-w-2xl mx-auto bg-blackbird-charcoal/30 border-blackbird-charcoal">
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-heading font-bold text-blackbird-off-white mb-4">
            Thank You!
          </h2>
          <p className="text-blackbird-off-white/80 mb-6">
            Your estimate request has been received. Here's your preliminary quote:
          </p>
          
          {estimatedPrice && (
            <div className="bg-blackbird-ignition-blue/20 border border-blackbird-ignition-blue/30 rounded-lg p-6 mb-6">
              <p className="text-blackbird-ignition-blue font-semibold mb-2">Estimated Price Range</p>
              <p className="text-3xl font-bold text-blackbird-off-white">
                ${estimatedPrice.toLocaleString()}
              </p>
              <p className="text-sm text-blackbird-off-white/60 mt-2">
                *Final pricing may vary based on vehicle condition and specific requirements
              </p>
            </div>
          )}
          
          <p className="text-blackbird-off-white/70 mb-8">
            A team member from our Virginia Beach shop will contact you within 24 hours 
            to confirm details and schedule your service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-blackbird-off-white/30 text-blackbird-off-white">
              <Phone className="h-4 w-4 mr-2" />
              Call (757) 123-4567
            </Button>
            <Button className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90">
              <Mail className="h-4 w-4 mr-2" />
              Check Your Email
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold",
                currentStep >= step.id 
                  ? "bg-blackbird-ignition-blue text-white" 
                  : "bg-blackbird-charcoal text-blackbird-off-white/60"
              )}>
                {step.id}
              </div>
              {index < steps.length - 1 && (
                <div className={cn(
                  "w-16 h-0.5 mx-2",
                  currentStep > step.id 
                    ? "bg-blackbird-ignition-blue" 
                    : "bg-blackbird-charcoal"
                )} />
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-blackbird-off-white">
            {steps[currentStep - 1].title}
          </h3>
          <p className="text-blackbird-off-white/60">
            {steps[currentStep - 1].description}
          </p>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card className="bg-blackbird-charcoal/30 border-blackbird-charcoal">
            <CardContent className="p-8">
              {/* Step 1: Vehicle Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <Car className="h-12 w-12 text-blackbird-ignition-blue mx-auto mb-4" />
                    <h2 className="text-2xl font-heading font-bold text-blackbird-off-white mb-2">
                      Tell Us About Your Vehicle
                    </h2>
                    <p className="text-blackbird-off-white/70">
                      Help us understand your vehicle so we can provide the most accurate estimate.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="vehicleYear"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-blackbird-off-white">Year</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              placeholder="2020" 
                              {...field}
                              onChange={(e) => field.onChange(parseInt(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="vehicleMake"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-blackbird-off-white">Make</FormLabel>
                          <FormControl>
                            <Input placeholder="BMW" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="vehicleModel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-blackbird-off-white">Model</FormLabel>
                          <FormControl>
                            <Input placeholder="M3" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="vehicleColor"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-blackbird-off-white">Color</FormLabel>
                          <FormControl>
                            <Input placeholder="Alpine White" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="vehicleCondition"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-blackbird-off-white">Vehicle Condition</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-blackbird-charcoal/20 border-blackbird-charcoal text-blackbird-off-white">
                              <SelectValue placeholder="Select condition" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-blackbird-charcoal border-blackbird-charcoal">
                            {vehicleConditions.map((condition) => (
                              <SelectItem 
                                key={condition.value} 
                                value={condition.value}
                                className="text-blackbird-off-white focus:bg-blackbird-ignition-blue/20"
                              >
                                {condition.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Step 2: Service Selection */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-heading font-bold text-blackbird-off-white mb-2">
                      Choose Your Services
                    </h2>
                    <p className="text-blackbird-off-white/70">
                      Select the services you're interested in. You can choose multiple options.
                    </p>
                  </div>

                  <FormField
                    control={form.control}
                    name="selectedServices"
                    render={({ field }) => (
                      <FormItem>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {serviceOptions.map((service) => (
                            <div
                              key={service.id}
                              className={cn(
                                "p-4 rounded-lg border cursor-pointer transition-all duration-200",
                                field.value?.includes(service.id)
                                  ? "border-blackbird-ignition-blue bg-blackbird-ignition-blue/10"
                                  : "border-blackbird-charcoal bg-blackbird-charcoal/20 hover:border-blackbird-ignition-blue/50"
                              )}
                              onClick={() => {
                                const current = field.value || []
                                const newValue = current.includes(service.id)
                                  ? current.filter(id => id !== service.id)
                                  : [...current, service.id]
                                field.onChange(newValue)
                              }}
                            >
                              <div className="flex items-start justify-between">
                                <div>
                                  <h3 className="font-semibold text-blackbird-off-white mb-1">
                                    {service.name}
                                  </h3>
                                  <p className="text-sm text-blackbird-off-white/70">
                                    {service.description}
                                  </p>
                                </div>
                                <div className={cn(
                                  "w-5 h-5 rounded border-2 flex-shrink-0 ml-2",
                                  field.value?.includes(service.id)
                                    ? "border-blackbird-ignition-blue bg-blackbird-ignition-blue"
                                    : "border-blackbird-charcoal"
                                )}>
                                  {field.value?.includes(service.id) && (
                                    <CheckCircle className="h-3 w-3 text-white m-0.5" />
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Step 3: Package Selection */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-heading font-bold text-blackbird-off-white mb-2">
                      Choose a Package (Optional)
                    </h2>
                    <p className="text-blackbird-off-white/70">
                      Get better value with our comprehensive packages, or stick with individual services.
                    </p>
                  </div>

                  <FormField
                    control={form.control}
                    name="packageSelection"
                    render={({ field }) => (
                      <FormItem>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                          {packageOptions.map((pkg) => (
                            <div
                              key={pkg.id}
                              className={cn(
                                "p-6 rounded-lg border cursor-pointer transition-all duration-200",
                                field.value === pkg.id
                                  ? "border-blackbird-ignition-blue bg-blackbird-ignition-blue/10"
                                  : "border-blackbird-charcoal bg-blackbird-charcoal/20 hover:border-blackbird-ignition-blue/50"
                              )}
                              onClick={() => {
                                field.onChange(field.value === pkg.id ? undefined : pkg.id)
                              }}
                            >
                              <div className="text-center">
                                <h3 className="font-heading font-bold text-blackbird-off-white mb-2">
                                  {pkg.name}
                                </h3>
                                <div className="text-2xl font-bold text-blackbird-ignition-blue mb-2">
                                  ${pkg.price.toLocaleString()}
                                </div>
                                <p className="text-sm text-blackbird-off-white/70">
                                  {pkg.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <FormDescription className="text-blackbird-off-white/60 text-center mt-4">
                          Skip this step to get pricing for individual services only
                        </FormDescription>
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Step 4: Contact Information */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-heading font-bold text-blackbird-off-white mb-2">
                      Contact Information
                    </h2>
                    <p className="text-blackbird-off-white/70">
                      How should we reach you with your personalized quote?
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="customerName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-blackbird-off-white">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Smith" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="customerPhone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-blackbird-off-white">Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="(757) 555-0123" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="customerEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-blackbird-off-white">Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="preferredContactMethod"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-blackbird-off-white">Preferred Contact</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-blackbird-charcoal/20 border-blackbird-charcoal text-blackbird-off-white">
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-blackbird-charcoal border-blackbird-charcoal">
                              <SelectItem value="phone" className="text-blackbird-off-white">Phone Call</SelectItem>
                              <SelectItem value="email" className="text-blackbird-off-white">Email</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="timeframe"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-blackbird-off-white">Timeframe</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-blackbird-charcoal/20 border-blackbird-charcoal text-blackbird-off-white">
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-blackbird-charcoal border-blackbird-charcoal">
                              <SelectItem value="asap" className="text-blackbird-off-white">ASAP</SelectItem>
                              <SelectItem value="week" className="text-blackbird-off-white">Within a week</SelectItem>
                              <SelectItem value="month" className="text-blackbird-off-white">Within a month</SelectItem>
                              <SelectItem value="flexible" className="text-blackbird-off-white">Flexible</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="additionalNotes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-blackbird-off-white">Additional Notes (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Any specific concerns, requirements, or questions about your vehicle..."
                            className="bg-blackbird-charcoal/20 border-blackbird-charcoal text-blackbird-off-white"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-8">
                {currentStep > 1 ? (
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={prevStep}
                    className="border-blackbird-charcoal text-blackbird-off-white hover:bg-blackbird-charcoal"
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>
                ) : (
                  <div />
                )}

                {currentStep < 4 ? (
                  <Button 
                    type="button" 
                    onClick={nextStep}
                    className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90"
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get My Estimate'}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </form>
      </Form>
    </div>
  )
}