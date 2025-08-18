-- Blackbird Detailing Database Schema
-- This file contains the SQL commands to set up the database tables

-- Create the estimate_submissions table
CREATE TABLE IF NOT EXISTS public.estimate_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Vehicle Information
  vehicle_year INTEGER NOT NULL,
  vehicle_make VARCHAR(50) NOT NULL,
  vehicle_model VARCHAR(50) NOT NULL,
  vehicle_color VARCHAR(30) NOT NULL,
  vehicle_condition VARCHAR(20) NOT NULL CHECK (vehicle_condition IN ('excellent', 'good', 'fair', 'poor')),
  
  -- Service Selection
  selected_services TEXT[] NOT NULL DEFAULT '{}',
  package_selection VARCHAR(50),
  
  -- Customer Information
  customer_name VARCHAR(100) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  customer_phone VARCHAR(20) NOT NULL,
  
  -- Additional Information
  additional_notes TEXT,
  preferred_contact_method VARCHAR(10) DEFAULT 'phone' CHECK (preferred_contact_method IN ('phone', 'email')),
  timeframe VARCHAR(20) DEFAULT 'flexible' CHECK (timeframe IN ('asap', 'week', 'month', 'flexible')),
  
  -- Business Data
  estimated_price DECIMAL(10,2),
  final_price DECIMAL(10,2),
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'scheduled', 'in_progress', 'completed', 'cancelled')),
  
  -- Internal Notes
  internal_notes TEXT,
  assigned_to VARCHAR(100),
  scheduled_date TIMESTAMP WITH TIME ZONE,
  completed_date TIMESTAMP WITH TIME ZONE
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_estimate_submissions_created_at ON public.estimate_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_estimate_submissions_status ON public.estimate_submissions(status);
CREATE INDEX IF NOT EXISTS idx_estimate_submissions_customer_email ON public.estimate_submissions(customer_email);
CREATE INDEX IF NOT EXISTS idx_estimate_submissions_scheduled_date ON public.estimate_submissions(scheduled_date);

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create the trigger
DROP TRIGGER IF EXISTS update_estimate_submissions_updated_at ON public.estimate_submissions;
CREATE TRIGGER update_estimate_submissions_updated_at
  BEFORE UPDATE ON public.estimate_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE public.estimate_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for RLS
-- Allow anonymous inserts (for the contact form)
CREATE POLICY "Allow anonymous inserts" ON public.estimate_submissions
  FOR INSERT WITH CHECK (true);

-- Allow service role to do everything (for admin dashboard)
CREATE POLICY "Allow service role all operations" ON public.estimate_submissions
  FOR ALL USING (auth.role() = 'service_role');

-- Create a view for analytics (optional)
CREATE OR REPLACE VIEW public.estimate_analytics AS
SELECT 
  DATE_TRUNC('day', created_at) as date,
  COUNT(*) as total_submissions,
  COUNT(CASE WHEN status = 'completed' THEN 1 END) as completed_submissions,
  AVG(estimated_price) as avg_estimated_price,
  AVG(final_price) as avg_final_price,
  COUNT(CASE WHEN package_selection IS NOT NULL THEN 1 END) as package_selections,
  COUNT(CASE WHEN array_length(selected_services, 1) > 1 THEN 1 END) as multi_service_requests
FROM public.estimate_submissions
GROUP BY DATE_TRUNC('day', created_at)
ORDER BY date DESC;

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon;
GRANT INSERT ON public.estimate_submissions TO anon;
GRANT SELECT ON public.estimate_analytics TO authenticated;

-- Comments for documentation
COMMENT ON TABLE public.estimate_submissions IS 'Stores all estimate form submissions from the website';
COMMENT ON COLUMN public.estimate_submissions.selected_services IS 'Array of service IDs selected by the customer';
COMMENT ON COLUMN public.estimate_submissions.vehicle_condition IS 'Customer-reported condition: excellent, good, fair, or poor';
COMMENT ON COLUMN public.estimate_submissions.estimated_price IS 'System-calculated estimated price in USD';
COMMENT ON COLUMN public.estimate_submissions.final_price IS 'Final quoted price after consultation';
COMMENT ON COLUMN public.estimate_submissions.status IS 'Current status of the estimate request';

-- Create the portfolio_items table
CREATE TABLE IF NOT EXISTS public.portfolio_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Project Information
  title VARCHAR(200) NOT NULL,
  description TEXT NOT NULL,
  completion_date TIMESTAMP WITH TIME ZONE NOT NULL,
  featured BOOLEAN DEFAULT FALSE,
  
  -- Vehicle Information
  vehicle_year INTEGER NOT NULL,
  vehicle_make VARCHAR(50) NOT NULL,
  vehicle_model VARCHAR(50) NOT NULL,
  vehicle_color VARCHAR(30) NOT NULL,
  vehicle_type VARCHAR(20) NOT NULL CHECK (vehicle_type IN ('sedan', 'suv', 'truck', 'coupe', 'convertible', 'hatchback', 'wagon', 'van', 'exotic', 'motorcycle')),
  
  -- Images (stored as JSON arrays of URLs)
  before_images JSONB NOT NULL DEFAULT '[]',
  after_images JSONB NOT NULL DEFAULT '[]',
  process_images JSONB DEFAULT '[]',
  thumbnail_image VARCHAR(500) NOT NULL,
  
  -- Service Information
  services_performed TEXT[] NOT NULL DEFAULT '{}',
  primary_service VARCHAR(50) NOT NULL CHECK (primary_service IN ('ceramic-coating', 'paint-correction', 'interior-detailing', 'full-detail', 'maintenance')),
  package_used VARCHAR(20) CHECK (package_used IN ('sport', 'grand-tourer', 'trackhawk')),
  
  -- Project Details
  duration_hours DECIMAL(4,1) NOT NULL,
  price_range VARCHAR(20) NOT NULL CHECK (price_range IN ('under-500', '500-1000', '1000-2000', 'over-2000')),
  difficulty_level VARCHAR(20) NOT NULL CHECK (difficulty_level IN ('basic', 'intermediate', 'advanced', 'expert')),
  
  -- Customer Information (optional for display)
  customer_testimonial TEXT,
  customer_name VARCHAR(100),
  customer_location VARCHAR(100),
  
  -- SEO and Display
  tags TEXT[] DEFAULT '{}',
  slug VARCHAR(200) UNIQUE NOT NULL,
  meta_description TEXT
);

-- Create indexes for portfolio_items
CREATE INDEX IF NOT EXISTS idx_portfolio_items_created_at ON public.portfolio_items(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_portfolio_items_completion_date ON public.portfolio_items(completion_date DESC);
CREATE INDEX IF NOT EXISTS idx_portfolio_items_featured ON public.portfolio_items(featured);
CREATE INDEX IF NOT EXISTS idx_portfolio_items_primary_service ON public.portfolio_items(primary_service);
CREATE INDEX IF NOT EXISTS idx_portfolio_items_vehicle_make ON public.portfolio_items(vehicle_make);
CREATE INDEX IF NOT EXISTS idx_portfolio_items_vehicle_type ON public.portfolio_items(vehicle_type);
CREATE INDEX IF NOT EXISTS idx_portfolio_items_slug ON public.portfolio_items(slug);
CREATE INDEX IF NOT EXISTS idx_portfolio_items_tags ON public.portfolio_items USING GIN(tags);
CREATE INDEX IF NOT EXISTS idx_portfolio_items_services ON public.portfolio_items USING GIN(services_performed);

-- Create trigger for portfolio_items updated_at
DROP TRIGGER IF EXISTS update_portfolio_items_updated_at ON public.portfolio_items;
CREATE TRIGGER update_portfolio_items_updated_at
  BEFORE UPDATE ON public.portfolio_items
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security for portfolio_items
ALTER TABLE public.portfolio_items ENABLE ROW LEVEL SECURITY;

-- Create policies for portfolio_items
-- Allow public read access (for portfolio display)
CREATE POLICY "Allow public read access" ON public.portfolio_items
  FOR SELECT USING (true);

-- Allow service role to do everything (for admin)
CREATE POLICY "Allow service role all operations on portfolio" ON public.portfolio_items
  FOR ALL USING (auth.role() = 'service_role');

-- Grant necessary permissions for portfolio_items
GRANT SELECT ON public.portfolio_items TO anon;
GRANT ALL ON public.portfolio_items TO authenticated;

-- Comments for portfolio_items documentation
COMMENT ON TABLE public.portfolio_items IS 'Stores completed project portfolio items for display on website';
COMMENT ON COLUMN public.portfolio_items.before_images IS 'JSONB array of before image URLs';
COMMENT ON COLUMN public.portfolio_items.after_images IS 'JSONB array of after image URLs';
COMMENT ON COLUMN public.portfolio_items.services_performed IS 'Array of service IDs performed on this project';
COMMENT ON COLUMN public.portfolio_items.tags IS 'Array of searchable tags for filtering and SEO';
COMMENT ON COLUMN public.portfolio_items.slug IS 'URL-friendly unique identifier for SEO-friendly URLs';

-- Sample data for testing (optional - remove in production)
/*
INSERT INTO public.estimate_submissions (
  vehicle_year, vehicle_make, vehicle_model, vehicle_color, vehicle_condition,
  selected_services, customer_name, customer_email, customer_phone,
  estimated_price, status
) VALUES 
(2020, 'BMW', 'M3', 'Alpine White', 'good', 
 ARRAY['ceramic-coating', 'paint-correction'], 
 'John Smith', 'john@example.com', '(757) 555-0123', 
 1498.00, 'pending'),
(2018, 'Porsche', '911', 'Guards Red', 'excellent', 
 ARRAY['ceramic-coating'], 
 'Jane Doe', 'jane@example.com', '(757) 555-0124', 
 899.00, 'contacted');
*/