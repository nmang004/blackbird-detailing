'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, Search, X, Image as ImageIcon, Video, Star, Calendar } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { GalleryFilters } from '@/types/portfolio'

interface GalleryFilterProps {
  filters: GalleryFilters
  onFiltersChange: (filters: GalleryFilters) => void
  totalResults: number
  isLoading?: boolean
  className?: string
}

export function GalleryFilter({
  filters,
  onFiltersChange,
  totalResults,
  isLoading = false,
  className = ''
}: GalleryFilterProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  // Quick filter options
  const quickFilters = [
    { label: 'Featured', value: 'featured', icon: Star },
    { label: 'Recent', value: 'recent', icon: Calendar },
    { label: 'Videos', value: 'video', icon: Video },
    { label: 'Images', value: 'image', icon: ImageIcon },
  ]

  const vehicleMakes = [
    'BMW', 'Mercedes-Benz', 'Audi', 'Porsche', 'Tesla', 'Ferrari', 'Lamborghini',
    'McLaren', 'Ford', 'Chevrolet', 'Dodge', 'Toyota', 'Honda', 'Nissan'
  ]

  const vehicleTypes = [
    { value: 'sedan', label: 'Sedan' },
    { value: 'suv', label: 'SUV' },
    { value: 'coupe', label: 'Coupe' },
    { value: 'truck', label: 'Truck' },
    { value: 'exotic', label: 'Exotic' },
    { value: 'convertible', label: 'Convertible' },
  ]

  const serviceTypes = [
    { value: 'ceramic-coating', label: 'Ceramic Coating' },
    { value: 'paint-correction', label: 'Paint Correction' },
    { value: 'interior-detailing', label: 'Interior Detail' },
    { value: 'full-detail', label: 'Full Detail' },
    { value: 'maintenance', label: 'Maintenance' },
  ]

  const priceRanges = [
    { value: 'under-500', label: 'Under $500' },
    { value: '500-1000', label: '$500 - $1,000' },
    { value: '1000-2000', label: '$1,000 - $2,000' },
    { value: 'over-2000', label: 'Over $2,000' },
  ]

  const handleQuickFilter = (filterType: string) => {
    const newFilters = { ...filters }

    switch (filterType) {
      case 'featured':
        newFilters.featured = !filters.featured
        break
      case 'recent':
        // Toggle recent filter logic
        break
      case 'video':
        newFilters.mediaType = filters.mediaType === 'video' ? 'all' : 'video'
        break
      case 'image':
        newFilters.mediaType = filters.mediaType === 'image' ? 'all' : 'image'
        break
    }

    onFiltersChange(newFilters)
  }

  const clearFilters = () => {
    setSearchTerm('')
    onFiltersChange({})
  }

  const hasActiveFilters = Object.keys(filters).some(key => {
    const value = filters[key as keyof GalleryFilters]
    return value !== undefined && value !== 'all' && value !== false && value !== ''
  })

  const activeFilterCount = Object.keys(filters).reduce((count, key) => {
    const value = filters[key as keyof GalleryFilters]
    if (value !== undefined && value !== 'all' && value !== false && value !== '') {
      return count + 1
    }
    return count
  }, 0)

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-blackbird-off-white/40" />
        <Input
          placeholder="Search by vehicle, service, or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 bg-blackbird-charcoal/20 border-blackbird-charcoal/30 text-blackbird-off-white placeholder:text-blackbird-off-white/40"
        />
      </div>

      {/* Quick Filters */}
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap items-center gap-2">
          {quickFilters.map((filter) => {
            const isActive =
              (filter.value === 'featured' && filters.featured) ||
              (filter.value === 'video' && filters.mediaType === 'video') ||
              (filter.value === 'image' && filters.mediaType === 'image')

            const Icon = filter.icon

            return (
              <motion.button
                key={filter.value}
                onClick={() => handleQuickFilter(filter.value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-blackbird-ignition-blue text-white shadow-lg'
                    : 'bg-blackbird-charcoal/30 text-blackbird-off-white/80 hover:bg-blackbird-charcoal/50 hover:text-blackbird-off-white'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{filter.label}</span>
              </motion.button>
            )
          })}
        </div>

        <div className="flex items-center space-x-3">
          {/* Results Count */}
          <div className="text-sm text-blackbird-off-white/60">
            {isLoading ? (
              <span className="animate-pulse">Filtering...</span>
            ) : (
              <span>
                {totalResults} {totalResults === 1 ? 'result' : 'results'}
              </span>
            )}
          </div>

          {/* Advanced Filters Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className={`text-blackbird-off-white/80 hover:text-blackbird-off-white hover:bg-blackbird-charcoal/30 ${
              hasActiveFilters ? 'text-blackbird-ignition-blue' : ''
            }`}
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
            {activeFilterCount > 0 && (
              <Badge className="ml-2 bg-blackbird-ignition-blue text-white text-xs">
                {activeFilterCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>

      {/* Advanced Filters */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.25, 0, 1] }}
            className="overflow-hidden"
          >
            <div className="bg-blackbird-charcoal/20 rounded-lg p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Media Type */}
                <div>
                  <label className="block text-sm font-medium text-blackbird-off-white/80 mb-2">
                    Media Type
                  </label>
                  <Select
                    value={filters.mediaType || 'all'}
                    onValueChange={(value) =>
                      onFiltersChange({ ...filters, mediaType: value as any })
                    }
                  >
                    <SelectTrigger className="bg-blackbird-charcoal/30 border-blackbird-charcoal/50 text-blackbird-off-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Media</SelectItem>
                      <SelectItem value="image">Images Only</SelectItem>
                      <SelectItem value="video">Videos Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-sm font-medium text-blackbird-off-white/80 mb-2">
                    Service Type
                  </label>
                  <Select
                    value={filters.serviceType || 'all'}
                    onValueChange={(value) =>
                      onFiltersChange({ ...filters, serviceType: value })
                    }
                  >
                    <SelectTrigger className="bg-blackbird-charcoal/30 border-blackbird-charcoal/50 text-blackbird-off-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Services</SelectItem>
                      {serviceTypes.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Vehicle Make */}
                <div>
                  <label className="block text-sm font-medium text-blackbird-off-white/80 mb-2">
                    Vehicle Make
                  </label>
                  <Select
                    value={filters.vehicleMake || 'all'}
                    onValueChange={(value) =>
                      onFiltersChange({ ...filters, vehicleMake: value })
                    }
                  >
                    <SelectTrigger className="bg-blackbird-charcoal/30 border-blackbird-charcoal/50 text-blackbird-off-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Makes</SelectItem>
                      {vehicleMakes.map((make) => (
                        <SelectItem key={make} value={make.toLowerCase()}>
                          {make}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Vehicle Type */}
                <div>
                  <label className="block text-sm font-medium text-blackbird-off-white/80 mb-2">
                    Vehicle Type
                  </label>
                  <Select
                    value={filters.vehicleType || 'all'}
                    onValueChange={(value) =>
                      onFiltersChange({ ...filters, vehicleType: value })
                    }
                  >
                    <SelectTrigger className="bg-blackbird-charcoal/30 border-blackbird-charcoal/50 text-blackbird-off-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      {vehicleTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-blackbird-off-white/80 mb-2">
                    Price Range
                  </label>
                  <Select
                    value={filters.priceRange || 'all'}
                    onValueChange={(value) =>
                      onFiltersChange({ ...filters, priceRange: value })
                    }
                  >
                    <SelectTrigger className="bg-blackbird-charcoal/30 border-blackbird-charcoal/50 text-blackbird-off-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Prices</SelectItem>
                      {priceRanges.map((range) => (
                        <SelectItem key={range.value} value={range.value}>
                          {range.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <div className="flex justify-end">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-blackbird-off-white/60 hover:text-blackbird-off-white hover:bg-blackbird-charcoal/30"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center gap-2"
        >
          <span className="text-sm text-blackbird-off-white/60">Active filters:</span>

          {filters.featured && (
            <Badge variant="outline" className="text-blackbird-ignition-blue border-blackbird-ignition-blue/30">
              Featured
              <button
                onClick={() => onFiltersChange({ ...filters, featured: false })}
                className="ml-1 hover:text-red-400"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}

          {filters.mediaType && filters.mediaType !== 'all' && (
            <Badge variant="outline" className="text-blackbird-ignition-blue border-blackbird-ignition-blue/30">
              {filters.mediaType === 'video' ? 'Videos' : 'Images'}
              <button
                onClick={() => onFiltersChange({ ...filters, mediaType: 'all' })}
                className="ml-1 hover:text-red-400"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}

          {filters.serviceType && filters.serviceType !== 'all' && (
            <Badge variant="outline" className="text-blackbird-ignition-blue border-blackbird-ignition-blue/30">
              {serviceTypes.find(s => s.value === filters.serviceType)?.label}
              <button
                onClick={() => onFiltersChange({ ...filters, serviceType: 'all' })}
                className="ml-1 hover:text-red-400"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
        </motion.div>
      )}
    </div>
  )
}