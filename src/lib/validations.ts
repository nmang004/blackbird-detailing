import { z } from 'zod'

// Vehicle condition options
export const vehicleConditions = [
  { value: 'excellent', label: 'Excellent - Like new, well maintained' },
  { value: 'good', label: 'Good - Minor wear, regular maintenance' },
  { value: 'fair', label: 'Fair - Some wear and tear, needs attention' },
  { value: 'poor', label: 'Poor - Heavy wear, requires restoration' }
] as const

// Service options
export const serviceOptions = [
  {
    id: 'ceramic-coating',
    name: 'Ceramic Coating',
    description: 'Long-lasting paint protection',
    category: 'exterior'
  },
  {
    id: 'paint-correction',
    name: 'Paint Correction',
    description: 'Remove swirls and scratches',
    category: 'exterior'
  },
  {
    id: 'interior-detailing',
    name: 'Interior Detailing',
    description: 'Deep clean and protect interior',
    category: 'interior'
  },
  {
    id: 'exterior-wash',
    name: 'Exterior Detail',
    description: 'Complete exterior cleaning',
    category: 'exterior'
  },
  {
    id: 'wheel-coating',
    name: 'Wheel Coating',
    description: 'Ceramic coating for wheels',
    category: 'exterior'
  },
  {
    id: 'glass-coating',
    name: 'Glass Coating',
    description: 'Hydrophobic glass treatment',
    category: 'exterior'
  }
] as const

// Package options
export const packageOptions = [
  {
    id: 'sport',
    name: 'Sport Package',
    price: 799,
    description: 'Perfect for daily drivers and enthusiasts'
  },
  {
    id: 'grand-tourer',
    name: 'Grand Tourer Package',
    price: 1299,
    description: 'Enhanced protection for luxury vehicles'
  },
  {
    id: 'trackhawk',
    name: 'Trackhawk Package',
    price: 1999,
    description: 'Ultimate protection for exotic vehicles'
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