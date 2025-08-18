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