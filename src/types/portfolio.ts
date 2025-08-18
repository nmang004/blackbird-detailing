export interface PortfolioItem {
  id: string
  created_at: string
  updated_at: string
  
  // Project Information
  title: string
  description: string
  completion_date: string
  featured: boolean
  
  // Vehicle Information
  vehicle_year: number
  vehicle_make: string
  vehicle_model: string
  vehicle_color: string
  vehicle_type: 'sedan' | 'suv' | 'truck' | 'coupe' | 'convertible' | 'hatchback' | 'wagon' | 'van' | 'exotic' | 'motorcycle'
  
  // Images
  before_images: string[]
  after_images: string[]
  process_images?: string[]
  thumbnail_image: string
  
  // Service Information
  services_performed: string[]
  primary_service: 'ceramic-coating' | 'paint-correction' | 'interior-detailing' | 'full-detail' | 'maintenance'
  package_used?: 'sport' | 'grand-tourer' | 'trackhawk'
  
  // Project Details
  duration_hours: number
  price_range: 'under-500' | '500-1000' | '1000-2000' | 'over-2000'
  difficulty_level: 'basic' | 'intermediate' | 'advanced' | 'expert'
  
  // Customer Information (optional for display)
  customer_testimonial?: string
  customer_name?: string
  customer_location?: string
  
  // SEO and Display
  tags: string[]
  slug: string
  meta_description?: string
}

export interface PortfolioFilters {
  serviceType?: string
  vehicleMake?: string
  vehicleType?: string
  priceRange?: string
  featured?: boolean
  year?: number
}

export interface PortfolioStats {
  totalProjects: number
  totalVehicles: number
  averageRating: number
  yearsExperience: number
  servicesOffered: number
}

export type ServiceType = {
  id: string
  name: string
  description: string
  icon: string
  count: number
}

export type VehicleMake = {
  id: string
  name: string
  count: number
  logo?: string
}

export type VehicleType = {
  id: string
  name: string
  count: number
  icon: string
}