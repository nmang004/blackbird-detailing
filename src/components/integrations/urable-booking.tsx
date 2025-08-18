'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CalendarDays, CreditCard, Settings, ExternalLink } from 'lucide-react'

interface UrableBookingProps {
  variant?: 'full' | 'compact' | 'membership'
  className?: string
}

export function UrableBooking({ variant = 'full', className = '' }: UrableBookingProps) {
  const [isLoading, setIsLoading] = useState(false)

  // This will be replaced with actual URABLE integration
  const handleBooking = () => {
    setIsLoading(true)
    // For now, redirect to contact page
    // Later: Open URABLE widget or redirect to URABLE booking URL
    window.location.href = '/contact'
  }

  // This will be replaced with actual URABLE widget embed
  const handleUrableWidget = () => {
    // Placeholder for URABLE widget integration
    // This could be:
    // 1. Embedded iframe with URABLE Virtual Shop
    // 2. Direct API integration with custom booking form
    // 3. Popup overlay with URABLE booking system
    console.log('URABLE integration to be implemented')
    handleBooking()
  }

  if (variant === 'compact') {
    return (
      <div className={className}>
        <Button 
          size="lg" 
          className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 text-white w-full"
          onClick={handleUrableWidget}
          disabled={isLoading}
        >
          <CalendarDays className="h-5 w-5 mr-2" />
          {isLoading ? 'Loading...' : 'Book Online'}
        </Button>
      </div>
    )
  }

  if (variant === 'membership') {
    return (
      <Card className={`bg-blackbird-charcoal/30 border-blackbird-charcoal hover:border-blackbird-ignition-blue/50 transition-colors duration-300 ${className}`}>
        <CardHeader>
          <CardTitle className="text-blackbird-off-white flex items-center">
            <Settings className="h-5 w-5 mr-2 text-blackbird-ignition-blue" />
            Member Portal Access
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-blackbird-off-white/70 text-sm">
            Access your exclusive member portal to manage appointments, view service history, and update preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 text-white"
              onClick={handleUrableWidget}
              disabled={isLoading}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Member Portal
            </Button>
            <Button 
              variant="outline" 
              className="border-blackbird-off-white/30 text-blackbird-off-white hover:bg-blackbird-off-white hover:text-blackbird-black"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Support
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={`bg-blackbird-charcoal/30 border-blackbird-charcoal hover:border-blackbird-ignition-blue/50 transition-colors duration-300 ${className}`}>
      <CardHeader>
        <CardTitle className="text-blackbird-off-white">
          Book Your Appointment
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-center text-center p-4 bg-blackbird-black/30 rounded-lg">
            <CalendarDays className="h-8 w-8 text-blackbird-ignition-blue mb-2" />
            <h3 className="font-semibold text-blackbird-off-white mb-1">Schedule</h3>
            <p className="text-xs text-blackbird-off-white/70">Choose date & time</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-blackbird-black/30 rounded-lg">
            <Settings className="h-8 w-8 text-blackbird-ignition-blue mb-2" />
            <h3 className="font-semibold text-blackbird-off-white mb-1">Services</h3>
            <p className="text-xs text-blackbird-off-white/70">Select your package</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-blackbird-black/30 rounded-lg">
            <CreditCard className="h-8 w-8 text-blackbird-ignition-blue mb-2" />
            <h3 className="font-semibold text-blackbird-off-white mb-1">Payment</h3>
            <p className="text-xs text-blackbird-off-white/70">Secure checkout</p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 text-white w-full md:w-auto"
            onClick={handleUrableWidget}
            disabled={isLoading}
          >
            {isLoading ? 'Loading Booking System...' : 'Start Booking Process'}
          </Button>
          <p className="text-xs text-blackbird-off-white/60 mt-3">
            Powered by URABLE • Secure online booking and payment processing
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

// Integration Instructions for URABLE Implementation:
/*
URABLE INTEGRATION IMPLEMENTATION STEPS:

1. WIDGET EMBED APPROACH (Recommended - Faster Implementation):
   - Contact URABLE support to get your unique widget embed code
   - Replace the handleUrableWidget function with:
     ```javascript
     const handleUrableWidget = () => {
       // Option A: Embed URABLE widget in popup/modal
       const urableWidget = document.createElement('iframe');
       urableWidget.src = 'YOUR_URABLE_WIDGET_URL';
       urableWidget.style.width = '100%';
       urableWidget.style.height = '600px';
       urableWidget.style.border = 'none';
       
       // Add to modal or dedicated page
     }
     ```

2. API INTEGRATION APPROACH (Custom Experience):
   - Request API documentation from URABLE
   - Implement custom booking flow using URABLE's REST API
   - Handle authentication, scheduling, and payment processing
   - Maintain consistent brand experience

3. VIRTUAL SHOP CONFIGURATION:
   - Configure URABLE Virtual Shop with Blackbird's services
   - Set up membership-specific pricing and availability
   - Configure automated workflows for different service types

4. MEMBERSHIP INTEGRATION:
   - Set up recurring payment processing in URABLE
   - Configure membership tiers and benefits
   - Implement member portal access

5. WORKFLOW AUTOMATION:
   - Configure URABLE's automated messaging system
   - Set up service reminders and confirmations
   - Implement customer feedback collection

NEXT STEPS:
1. Contact URABLE sales/support team
2. Request demo and integration documentation
3. Obtain widget embed codes or API credentials
4. Configure Virtual Shop with Blackbird's service offerings
5. Test booking flow and payment processing
6. Implement member-specific features and portals
*/