'use client'

import { useState } from 'react'
import { Filter, X, Grid3X3, List } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { PortfolioFilters } from '@/types/portfolio'

interface PortfolioFilterProps {
  filters: PortfolioFilters
  onFiltersChange: (filters: PortfolioFilters) => void
  totalResults: number
  isLoading?: boolean
}

const serviceTypes = [
  { id: 'all', name: 'All Services', count: 547 },
  { id: 'ceramic-coating', name: 'Ceramic Coating', count: 324 },
  { id: 'paint-correction', name: 'Paint Correction', count: 289 },
  { id: 'interior-detailing', name: 'Interior Detailing', count: 156 },
  { id: 'full-detail', name: 'Full Detail', count: 78 },
  { id: 'maintenance', name: 'Maintenance', count: 45 }
]

const vehicleMakes = [
  { id: 'all', name: 'All Makes', count: 547 },
  { id: 'bmw', name: 'BMW', count: 89 },
  { id: 'mercedes', name: 'Mercedes-Benz', count: 76 },
  { id: 'audi', name: 'Audi', count: 63 },
  { id: 'porsche', name: 'Porsche', count: 45 },
  { id: 'tesla', name: 'Tesla', count: 42 },
  { id: 'lexus', name: 'Lexus', count: 38 },
  { id: 'ford', name: 'Ford', count: 35 },
  { id: 'chevrolet', name: 'Chevrolet', count: 32 },
  { id: 'toyota', name: 'Toyota', count: 28 },
  { id: 'other', name: 'Other', count: 99 }
]

const vehicleTypes = [
  { id: 'all', name: 'All Types', count: 547 },
  { id: 'sedan', name: 'Sedan', count: 187 },
  { id: 'suv', name: 'SUV', count: 145 },
  { id: 'truck', name: 'Truck', count: 89 },
  { id: 'coupe', name: 'Coupe', count: 67 },
  { id: 'exotic', name: 'Exotic', count: 34 },
  { id: 'convertible', name: 'Convertible', count: 25 }
]

const priceRanges = [
  { id: 'all', name: 'All Prices', count: 547 },
  { id: 'under-500', name: 'Under $500', count: 123 },
  { id: '500-1000', name: '$500 - $1,000', count: 189 },
  { id: '1000-2000', name: '$1,000 - $2,000', count: 167 },
  { id: 'over-2000', name: 'Over $2,000', count: 68 }
]

export function PortfolioFilter({ filters, onFiltersChange, totalResults, isLoading }: PortfolioFilterProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const updateFilter = (key: keyof PortfolioFilters, value: string) => {
    const newFilters = { ...filters }
    if (value === 'all' || value === filters[key]) {
      delete newFilters[key]
    } else {
      (newFilters as any)[key] = value
    }
    onFiltersChange(newFilters)
  }

  const clearAllFilters = () => {
    onFiltersChange({})
  }

  const activeFilterCount = Object.keys(filters).length

  return (
    <div className="mb-8">
      {/* Filter Toggle & Results Count */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="border-blackbird-charcoal text-blackbird-off-white hover:bg-blackbird-charcoal"
          >
            <Filter className="mr-2 h-4 w-4" />
            Filters
            {activeFilterCount > 0 && (
              <Badge className="ml-2 bg-blackbird-ignition-blue text-white text-xs">
                {activeFilterCount}
              </Badge>
            )}
          </Button>
          
          <div className="text-blackbird-off-white/70 text-sm">
            {isLoading ? 'Loading...' : `${totalResults.toLocaleString()} ${totalResults === 1 ? 'project' : 'projects'}`}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('grid')}
            className={viewMode === 'grid' ? 'bg-blackbird-ignition-blue' : 'border-blackbird-charcoal text-blackbird-off-white hover:bg-blackbird-charcoal'}
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('list')}
            className={viewMode === 'list' ? 'bg-blackbird-ignition-blue' : 'border-blackbird-charcoal text-blackbird-off-white hover:bg-blackbird-charcoal'}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Active Filters */}
      {activeFilterCount > 0 && (
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-sm text-blackbird-off-white/70">Active filters:</span>
          {Object.entries(filters).map(([key, value]) => (
            <Badge
              key={key}
              variant="outline"
              className="text-blackbird-ignition-blue border-blackbird-ignition-blue/30 pl-3 pr-1"
            >
              {value}
              <button
                onClick={() => updateFilter(key as keyof PortfolioFilters, value)}
                className="ml-2 hover:bg-blackbird-ignition-blue/20 rounded-full p-0.5"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-blackbird-off-white/70 hover:text-blackbird-ignition-blue text-xs"
          >
            Clear all
          </Button>
        </div>
      )}

      {/* Filter Panel */}
      {isFilterOpen && (
        <Card className="bg-blackbird-charcoal/30 border-blackbird-charcoal mb-6">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Service Type Filter */}
              <div>
                <h3 className="font-heading font-bold text-blackbird-off-white mb-3">Service Type</h3>
                <div className="space-y-2">
                  {serviceTypes.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => updateFilter('serviceType', service.id)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors text-sm ${
                        filters.serviceType === service.id || (service.id === 'all' && !filters.serviceType)
                          ? 'bg-blackbird-ignition-blue/20 text-blackbird-ignition-blue'
                          : 'text-blackbird-off-white/70 hover:text-blackbird-ignition-blue hover:bg-blackbird-charcoal/50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{service.name}</span>
                        <span className="text-xs opacity-60">{service.count}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Vehicle Make Filter */}
              <div>
                <h3 className="font-heading font-bold text-blackbird-off-white mb-3">Vehicle Make</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {vehicleMakes.map((make) => (
                    <button
                      key={make.id}
                      onClick={() => updateFilter('vehicleMake', make.id)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors text-sm ${
                        filters.vehicleMake === make.id || (make.id === 'all' && !filters.vehicleMake)
                          ? 'bg-blackbird-ignition-blue/20 text-blackbird-ignition-blue'
                          : 'text-blackbird-off-white/70 hover:text-blackbird-ignition-blue hover:bg-blackbird-charcoal/50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{make.name}</span>
                        <span className="text-xs opacity-60">{make.count}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Vehicle Type Filter */}
              <div>
                <h3 className="font-heading font-bold text-blackbird-off-white mb-3">Vehicle Type</h3>
                <div className="space-y-2">
                  {vehicleTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => updateFilter('vehicleType', type.id)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors text-sm ${
                        filters.vehicleType === type.id || (type.id === 'all' && !filters.vehicleType)
                          ? 'bg-blackbird-ignition-blue/20 text-blackbird-ignition-blue'
                          : 'text-blackbird-off-white/70 hover:text-blackbird-ignition-blue hover:bg-blackbird-charcoal/50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{type.name}</span>
                        <span className="text-xs opacity-60">{type.count}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <h3 className="font-heading font-bold text-blackbird-off-white mb-3">Price Range</h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => updateFilter('priceRange', range.id)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors text-sm ${
                        filters.priceRange === range.id || (range.id === 'all' && !filters.priceRange)
                          ? 'bg-blackbird-ignition-blue/20 text-blackbird-ignition-blue'
                          : 'text-blackbird-off-white/70 hover:text-blackbird-ignition-blue hover:bg-blackbird-charcoal/50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{range.name}</span>
                        <span className="text-xs opacity-60">{range.count}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}