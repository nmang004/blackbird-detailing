import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown, Search, Car } from "lucide-react"

// Popular vehicle makes for the luxury market
const vehicleMakes = [
  // Luxury brands
  'Audi', 'BMW', 'Mercedes-Benz', 'Lexus', 'Acura', 'Infiniti', 'Cadillac',
  'Lincoln', 'Volvo', 'Jaguar', 'Land Rover', 'Porsche', 'Tesla', 'Genesis',

  // Ultra-luxury and exotic brands
  'Alfa Romeo', 'Maserati', 'Bentley', 'Rolls-Royce', 'Ferrari', 'Lamborghini',
  'McLaren', 'Aston Martin', 'Bugatti', 'Koenigsegg', 'Pagani', 'Lotus',

  // Popular mainstream brands
  'Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'Hyundai', 'Kia',
  'Volkswagen', 'Subaru', 'Mazda', 'Dodge', 'Jeep', 'Ram', 'GMC', 'Buick',
  'Chrysler', 'Mitsubishi', 'Scion', 'Isuzu', 'Suzuki',

  // Additional popular brands
  'Mini', 'Smart', 'Saab', 'Pontiac', 'Saturn', 'Mercury', 'Oldsmobile',
  'Hummer', 'Plymouth', 'Fiat', 'Peugeot', 'Citroën', 'Renault', 'Škoda',
  'Seat', 'Opel', 'Holden', 'Vauxhall'
].sort()

// Popular luxury and sports models by make
const vehicleModels: { [key: string]: string[] } = {
  'Audi': ['A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q3', 'Q5', 'Q7', 'Q8', 'e-tron', 'RS3', 'RS4', 'RS5', 'RS6', 'RS7', 'R8', 'TT'],
  'BMW': ['2 Series', '3 Series', '4 Series', '5 Series', '6 Series', '7 Series', '8 Series', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'Z4', 'i3', 'i4', 'iX', 'M2', 'M3', 'M4', 'M5', 'M8'],
  'Mercedes-Benz': ['A-Class', 'C-Class', 'E-Class', 'S-Class', 'GLA', 'GLB', 'GLC', 'GLE', 'GLS', 'G-Class', 'SL', 'AMG GT', 'EQC', 'EQS', 'EQE'],
  'Tesla': ['Model S', 'Model 3', 'Model X', 'Model Y', 'Cybertruck', 'Roadster'],
  'Lexus': ['ES', 'IS', 'GS', 'LS', 'RC', 'LC', 'UX', 'NX', 'RX', 'GX', 'LX'],
  'Porsche': ['911', '718 Boxster', '718 Cayman', 'Panamera', 'Cayenne', 'Macan', 'Taycan'],
  'Toyota': ['Camry', 'Corolla', 'Avalon', 'Prius', 'RAV4', 'Highlander', 'Sequoia', 'Tundra', 'Tacoma', '4Runner', 'Land Cruiser', 'Sienna', 'Supra'],
  'Honda': ['Civic', 'Accord', 'Insight', 'CR-V', 'Pilot', 'Passport', 'Ridgeline', 'Odyssey'],
  'Ford': ['F-150', 'Mustang', 'Explorer', 'Escape', 'Edge', 'Expedition', 'Bronco', 'Maverick', 'Ranger'],
  'Chevrolet': ['Corvette', 'Camaro', 'Silverado', 'Tahoe', 'Suburban', 'Equinox', 'Traverse', 'Blazer', 'Malibu']
}

interface VehicleAutocompleteProps {
  field: 'make' | 'model'
  value: string
  onValueChange: (value: string) => void
  placeholder?: string
  vehicleMake?: string // For model suggestions
  className?: string
  label?: string
  error?: string
}

export function VehicleAutocomplete({
  field,
  value,
  onValueChange,
  placeholder,
  vehicleMake,
  className,
  label,
  error
}: VehicleAutocompleteProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [filteredOptions, setFilteredOptions] = useState<string[]>([])
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const options = field === 'make'
    ? vehicleMakes
    : vehicleMake && vehicleModels[vehicleMake]
      ? vehicleModels[vehicleMake]
      : []

  useEffect(() => {
    if (value.length === 0) {
      setFilteredOptions(options.slice(0, 12)) // Show more options initially
    } else {
      const filtered = options.filter(option =>
        option.toLowerCase().includes(value.toLowerCase())
      )
      setFilteredOptions(filtered) // Show all matches when typing
    }
    setHighlightedIndex(-1)
  }, [value, options])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    onValueChange(newValue)
    setIsOpen(true)
  }

  const handleOptionClick = (option: string) => {
    onValueChange(option)
    setIsOpen(false)
    inputRef.current?.blur()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'Enter' || e.key === 'ArrowDown') {
        setIsOpen(true)
        return
      }
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setHighlightedIndex(prev =>
          prev < filteredOptions.length - 1 ? prev + 1 : 0
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setHighlightedIndex(prev =>
          prev > 0 ? prev - 1 : filteredOptions.length - 1
        )
        break
      case 'Enter':
        e.preventDefault()
        if (highlightedIndex >= 0 && filteredOptions[highlightedIndex]) {
          handleOptionClick(filteredOptions[highlightedIndex])
        }
        break
      case 'Escape':
        setIsOpen(false)
        inputRef.current?.blur()
        break
      case 'Tab':
        setIsOpen(false)
        break
    }
  }

  const handleFocus = () => {
    setIsOpen(true)
  }

  const handleBlur = () => {
    // Delay closing to allow option clicks
    setTimeout(() => setIsOpen(false), 150)
  }

  return (
    <div className={cn("relative space-y-2", className)}>
      {label && (
        <label className="text-sm font-medium text-blackbird-off-white">
          {label}
        </label>
      )}

      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
          {field === 'make' ? (
            <Car className="w-4 h-4 text-blackbird-off-white/40" />
          ) : (
            <Search className="w-4 h-4 text-blackbird-off-white/40" />
          )}
        </div>

        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={cn(
            "flex h-12 w-full rounded-lg border border-blackbird-charcoal/50 bg-blackbird-charcoal/20 backdrop-blur-sm pl-10 pr-10 py-3 text-base text-blackbird-off-white placeholder:text-blackbird-off-white/40",
            "transition-all duration-300 ease-out",
            "hover:border-blackbird-ignition-blue/30 hover:bg-blackbird-charcoal/30",
            "focus:border-blackbird-ignition-blue focus:bg-blackbird-charcoal/40 focus:outline-none focus:ring-2 focus:ring-blackbird-ignition-blue/20 focus:ring-offset-2 focus:ring-offset-blackbird-black",
            error && "border-red-500/50 focus:border-red-500 focus:ring-red-500/20",
            isOpen && "border-blackbird-ignition-blue"
          )}
        />

        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <ChevronDown className={cn(
            "w-4 h-4 text-blackbird-off-white/40 transition-transform duration-200",
            isOpen && "rotate-180"
          )} />
        </div>

        {/* Dropdown */}
        {isOpen && filteredOptions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-1 z-50">
            <ul
              ref={listRef}
              className="max-h-60 overflow-auto rounded-lg border border-blackbird-charcoal/50 bg-blackbird-charcoal/90 backdrop-blur-md shadow-xl shadow-blackbird-black/20"
            >
              {filteredOptions.map((option, index) => (
                <li
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className={cn(
                    "px-4 py-3 cursor-pointer text-blackbird-off-white transition-colors duration-150 flex items-center gap-3",
                    "hover:bg-blackbird-ignition-blue/20 hover:text-blackbird-ignition-blue",
                    highlightedIndex === index && "bg-blackbird-ignition-blue/10 text-blackbird-ignition-blue",
                    index === 0 && "rounded-t-lg",
                    index === filteredOptions.length - 1 && "rounded-b-lg"
                  )}
                >
                  <div className="w-2 h-2 bg-blackbird-ignition-blue rounded-full flex-shrink-0" />
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* No options message */}
        {isOpen && filteredOptions.length === 0 && value.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-1 z-50">
            <div className="rounded-lg border border-blackbird-charcoal/50 bg-blackbird-charcoal/90 backdrop-blur-md shadow-xl shadow-blackbird-black/20 p-4 text-center">
              <p className="text-blackbird-off-white/60 text-sm">
                No {field === 'make' ? 'makes' : 'models'} found matching "{value}"
              </p>
              <p className="text-blackbird-off-white/40 text-xs mt-1">
                You can still type your custom {field}
              </p>
            </div>
          </div>
        )}
      </div>

      {error && (
        <p className="text-xs text-red-400 flex items-center gap-1">
          <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  )
}