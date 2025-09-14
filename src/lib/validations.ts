import { z } from 'zod'

// Vehicle condition options
export const vehicleConditions = [
  { value: 'excellent', label: 'Excellent - Like new, well maintained' },
  { value: 'good', label: 'Good - Minor wear, regular maintenance' },
  { value: 'fair', label: 'Fair - Some wear and tear, needs attention' },
  { value: 'poor', label: 'Poor - Heavy wear, requires restoration' }
] as const

// Enhanced service options with pricing and features
export const serviceOptions = [
  {
    id: 'ceramic-coating',
    name: 'Ceramic Coating',
    description: 'Professional-grade paint protection with 2-5 year durability',
    category: 'exterior',
    price: 899,
    duration: '6-8 hours',
    recommended: true,
    features: [
      'UV protection and enhanced gloss',
      'Hydrophobic water-repelling properties',
      '2-5 year durability depending on tier',
      'Scratch and chemical resistance'
    ]
  },
  {
    id: 'paint-correction',
    name: 'Paint Correction',
    description: 'Multi-stage process to remove swirls, scratches, and imperfections',
    category: 'exterior',
    price: 599,
    duration: '4-6 hours',
    features: [
      'Removes 80-95% of paint imperfections',
      'Professional multi-stage polishing',
      'Paint thickness monitoring',
      'Dramatic improvement in clarity and gloss'
    ]
  },
  {
    id: 'interior-detailing',
    name: 'Interior Detailing',
    description: 'Comprehensive interior cleaning and protection',
    category: 'interior',
    price: 299,
    duration: '3-4 hours',
    features: [
      'Steam cleaning and sanitization',
      'Leather conditioning and protection',
      'Fabric and carpet deep cleaning',
      'Dashboard and trim conditioning'
    ]
  },
  {
    id: 'exterior-wash',
    name: 'Exterior Detail',
    description: 'Complete exterior cleaning and finishing',
    category: 'exterior',
    price: 199,
    duration: '2-3 hours',
    features: [
      'Hand wash with premium shampoo',
      'Clay bar decontamination',
      'Paint-safe drying techniques',
      'Tire and wheel cleaning'
    ]
  },
  {
    id: 'wheel-coating',
    name: 'Wheel Coating',
    description: 'Ceramic protection for wheels and brake components',
    category: 'exterior',
    price: 299,
    duration: '2-3 hours',
    features: [
      'Brake dust repelling properties',
      'High-temperature resistance',
      'Easy maintenance cleaning',
      '1-2 year protection'
    ]
  },
  {
    id: 'glass-coating',
    name: 'Glass Coating',
    description: 'Hydrophobic treatment for all glass surfaces',
    category: 'exterior',
    price: 199,
    duration: '1-2 hours',
    features: [
      'Rain-repelling hydrophobic effect',
      'Improved visibility in weather',
      'Easy cleaning and maintenance',
      '1 year protection'
    ]
  }
] as const

// Enhanced package options with features
export const packageOptions = [
  {
    id: 'sport',
    name: 'Sport Package',
    price: 799,
    description: 'Perfect for daily drivers and enthusiasts',
    features: [
      'Exterior detail and decontamination',
      'Single-stage paint correction',
      'Entry-level ceramic coating (1 year)',
      'Interior deep clean and protection',
      'Wheel and tire cleaning'
    ]
  },
  {
    id: 'grand-tourer',
    name: 'Grand Tourer Package',
    price: 1299,
    description: 'Enhanced protection for luxury vehicles',
    popular: true,
    features: [
      'Complete exterior detail and decontamination',
      'Multi-stage paint correction',
      'Premium ceramic coating (3 years)',
      'Comprehensive interior detailing',
      'Wheel ceramic coating',
      'Glass hydrophobic treatment',
      '6-month maintenance follow-up'
    ]
  },
  {
    id: 'trackhawk',
    name: 'Trackhawk Package',
    price: 1999,
    description: 'Ultimate protection for exotic and high-end vehicles',
    features: [
      'Full exterior detail and multi-stage decontamination',
      'Professional multi-stage paint correction',
      'Premium ceramic coating (5 years)',
      'Comprehensive interior detailing with leather treatment',
      'Wheel and caliper ceramic coating',
      'Windshield and glass hydrophobic treatment',
      'Paint protection film on high-impact areas',
      'Quarterly maintenance program (1 year)',
      'Priority scheduling and white-glove service'
    ]
  }
] as const

// Zod schema for the multi-step form
export const estimateFormSchema = z.object({
  // Step 1: Vehicle Information
  vehicleYear: z
    .number()
    .min(1990, 'Vehicle must be 1990 or newer')
    .max(new Date().getFullYear() + 1, 'Invalid year'),
  vehicleMake: z
    .string()
    .min(1, 'Vehicle make is required')
    .max(50, 'Vehicle make is too long'),
  vehicleModel: z
    .string()
    .min(1, 'Vehicle model is required')
    .max(50, 'Vehicle model is too long'),
  vehicleColor: z
    .string()
    .min(1, 'Vehicle color is required')
    .max(30, 'Vehicle color is too long'),
  vehicleCondition: z.enum(['excellent', 'good', 'fair', 'poor'], {
    message: 'Please select vehicle condition'
  }),

  // Step 2: Services Selection
  selectedServices: z
    .array(z.string())
    .min(1, 'Please select at least one service'),

  // Step 3: Package Selection (optional)
  packageSelection: z.string().optional(),

  // Step 4: Contact Information
  customerName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),
  customerEmail: z
    .string()
    .email('Please enter a valid email address'),
  customerPhone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .regex(/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number'),

  // Additional fields
  additionalNotes: z.string().optional(),
  preferredContactMethod: z.enum(['phone', 'email']),
  timeframe: z.enum(['asap', 'week', 'month', 'flexible'])
})

export type EstimateFormData = z.infer<typeof estimateFormSchema>

// Individual step schemas for validation
export const step1Schema = estimateFormSchema.pick({
  vehicleYear: true,
  vehicleMake: true,
  vehicleModel: true,
  vehicleColor: true,
  vehicleCondition: true
})

export const step2Schema = estimateFormSchema.pick({
  selectedServices: true
})

export const step3Schema = estimateFormSchema.pick({
  packageSelection: true
})

export const step4Schema = estimateFormSchema.pick({
  customerName: true,
  customerEmail: true,
  customerPhone: true,
  additionalNotes: true,
  preferredContactMethod: true,
  timeframe: true
})

export type Step1Data = z.infer<typeof step1Schema>
export type Step2Data = z.infer<typeof step2Schema>
export type Step3Data = z.infer<typeof step3Schema>
export type Step4Data = z.infer<typeof step4Schema>