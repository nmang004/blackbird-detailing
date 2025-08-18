import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types will be added here as we create the schema
export type Database = {
  public: {
    Tables: {
      estimate_submissions: {
        Row: {
          id: string
          created_at: string
          vehicle_year: number
          vehicle_make: string
          vehicle_model: string
          vehicle_color: string
          vehicle_condition: string
          selected_services: string[]
          package_selection?: string
          customer_name: string
          customer_email: string
          customer_phone: string
          estimated_price?: number
          status: 'pending' | 'contacted' | 'scheduled' | 'completed'
        }
        Insert: {
          id?: string
          created_at?: string
          vehicle_year: number
          vehicle_make: string
          vehicle_model: string
          vehicle_color: string
          vehicle_condition: string
          selected_services: string[]
          package_selection?: string
          customer_name: string
          customer_email: string
          customer_phone: string
          estimated_price?: number
          status?: 'pending' | 'contacted' | 'scheduled' | 'completed'
        }
        Update: {
          id?: string
          created_at?: string
          vehicle_year?: number
          vehicle_make?: string
          vehicle_model?: string
          vehicle_color?: string
          vehicle_condition?: string
          selected_services?: string[]
          package_selection?: string
          customer_name?: string
          customer_email?: string
          customer_phone?: string
          estimated_price?: number
          status?: 'pending' | 'contacted' | 'scheduled' | 'completed'
        }
      }
      portfolio_items: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          title: string
          description: string
          completion_date: string
          featured: boolean
          vehicle_year: number
          vehicle_make: string
          vehicle_model: string
          vehicle_color: string
          vehicle_type: 'sedan' | 'suv' | 'truck' | 'coupe' | 'convertible' | 'hatchback' | 'wagon' | 'van' | 'exotic' | 'motorcycle'
          before_images: string[]
          after_images: string[]
          process_images?: string[]
          thumbnail_image: string
          services_performed: string[]
          primary_service: 'ceramic-coating' | 'paint-correction' | 'interior-detailing' | 'full-detail' | 'maintenance'
          package_used?: 'sport' | 'grand-tourer' | 'trackhawk'
          duration_hours: number
          price_range: 'under-500' | '500-1000' | '1000-2000' | 'over-2000'
          difficulty_level: 'basic' | 'intermediate' | 'advanced' | 'expert'
          customer_testimonial?: string
          customer_name?: string
          customer_location?: string
          tags: string[]
          slug: string
          meta_description?: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          title: string
          description: string
          completion_date: string
          featured?: boolean
          vehicle_year: number
          vehicle_make: string
          vehicle_model: string
          vehicle_color: string
          vehicle_type: 'sedan' | 'suv' | 'truck' | 'coupe' | 'convertible' | 'hatchback' | 'wagon' | 'van' | 'exotic' | 'motorcycle'
          before_images: string[]
          after_images: string[]
          process_images?: string[]
          thumbnail_image: string
          services_performed: string[]
          primary_service: 'ceramic-coating' | 'paint-correction' | 'interior-detailing' | 'full-detail' | 'maintenance'
          package_used?: 'sport' | 'grand-tourer' | 'trackhawk'
          duration_hours: number
          price_range: 'under-500' | '500-1000' | '1000-2000' | 'over-2000'
          difficulty_level: 'basic' | 'intermediate' | 'advanced' | 'expert'
          customer_testimonial?: string
          customer_name?: string
          customer_location?: string
          tags?: string[]
          slug: string
          meta_description?: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          title?: string
          description?: string
          completion_date?: string
          featured?: boolean
          vehicle_year?: number
          vehicle_make?: string
          vehicle_model?: string
          vehicle_color?: string
          vehicle_type?: 'sedan' | 'suv' | 'truck' | 'coupe' | 'convertible' | 'hatchback' | 'wagon' | 'van' | 'exotic' | 'motorcycle'
          before_images?: string[]
          after_images?: string[]
          process_images?: string[]
          thumbnail_image?: string
          services_performed?: string[]
          primary_service?: 'ceramic-coating' | 'paint-correction' | 'interior-detailing' | 'full-detail' | 'maintenance'
          package_used?: 'sport' | 'grand-tourer' | 'trackhawk'
          duration_hours?: number
          price_range?: 'under-500' | '500-1000' | '1000-2000' | 'over-2000'
          difficulty_level?: 'basic' | 'intermediate' | 'advanced' | 'expert'
          customer_testimonial?: string
          customer_name?: string
          customer_location?: string
          tags?: string[]
          slug?: string
          meta_description?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}