import Link from 'next/link'
import { ArrowRight, LucideIcon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  icon: LucideIcon
  features?: string[]
  popular?: boolean
  className?: string
}

export function ServiceCard({
  title,
  description,
  href,
  icon: Icon,
  features = [],
  popular = false,
  className
}: ServiceCardProps) {
  return (
    <Card className={cn(
      "group relative overflow-hidden bg-blackbird-charcoal/50 border-blackbird-charcoal hover:border-blackbird-ignition-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-blackbird-ignition-blue/10",
      className
    )}>
      {popular && (
        <Badge className="absolute top-4 right-4 bg-blackbird-ignition-blue text-white z-10">
          Popular
        </Badge>
      )}
      
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-blackbird-ignition-blue/20 group-hover:bg-blackbird-ignition-blue/30 transition-colors">
            <Icon className="h-6 w-6 text-blackbird-ignition-blue" />
          </div>
          <div>
            <CardTitle className="text-blackbird-off-white group-hover:text-blackbird-ignition-blue transition-colors">
              {title}
            </CardTitle>
          </div>
        </div>
        <CardDescription className="text-blackbird-off-white/70">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        {features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-blackbird-off-white/80">
                <div className="w-1.5 h-1.5 bg-blackbird-ignition-blue rounded-full mr-3 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}
        
        <Button
          asChild
          variant="ghost"
          className="w-full justify-between text-blackbird-off-white hover:text-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/10 group/button"
        >
          <Link href={href}>
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
          </Link>
        </Button>
      </CardContent>

      {/* Hover gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blackbird-ignition-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </Card>
  )
}