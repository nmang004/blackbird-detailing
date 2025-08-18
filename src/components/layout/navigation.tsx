'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const services = [
  {
    title: 'Ceramic Coating',
    href: '/services/ceramic-coating',
    description: 'Ultimate paint protection with long-lasting shine and hydrophobic properties.',
  },
  {
    title: 'Paint Correction',
    href: '/services/paint-correction',
    description: 'Professional swirl removal and paint restoration for showroom finish.',
  },
  {
    title: 'Interior Detailing',
    href: '/services/interior-detailing',
    description: 'Deep cleaning and protection for leather, fabric, and trim surfaces.',
  },
  {
    title: 'Full Detail Packages',
    href: '/services/packages',
    description: 'Complete automotive care combining exterior and interior services.',
  },
]

const serviceAreas = [
  {
    title: 'Virginia Beach',
    href: '/service-areas/virginia-beach',
    description: 'Premier detailing services for the Virginia Beach community.',
  },
  {
    title: 'Chesapeake',
    href: '/service-areas/chesapeake',
    description: 'Professional automotive care serving Chesapeake residents.',
  },
  {
    title: 'Norfolk',
    href: '/service-areas/norfolk',
    description: 'Expert detailing services for Norfolk vehicle owners.',
  },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-blackbird-charcoal/20 bg-blackbird-black/95 backdrop-blur supports-[backdrop-filter]:bg-blackbird-black/75">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <Link href="/" className="mr-8 flex items-center space-x-2">
          <div className="relative h-8 w-8">
            <div className="h-full w-full rounded-full bg-gradient-to-br from-blackbird-ignition-blue to-blackbird-charcoal" />
            <div className="absolute inset-1 rounded-full bg-blackbird-black" />
            <div className="absolute inset-2 rounded-full bg-blackbird-ignition-blue" />
          </div>
          <span className="hidden font-heading text-xl font-bold text-blackbird-off-white sm:inline-block">
            Blackbird Detailing
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-blackbird-off-white hover:text-blackbird-ignition-blue">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {services.map((service) => (
                    <ListItem
                      key={service.title}
                      title={service.title}
                      href={service.href}
                    >
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/#portfolio" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Portfolio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-blackbird-off-white hover:text-blackbird-ignition-blue">
                Service Areas
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px]">
                  {serviceAreas.map((area) => (
                    <ListItem
                      key={area.title}
                      title={area.title}
                      href={area.href}
                    >
                      {area.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/#about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/#contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Contact Info */}
        <div className="ml-auto hidden items-center space-x-4 lg:flex">
          <a
            href="tel:+1-757-123-4567"
            className="flex items-center space-x-2 text-sm text-blackbird-off-white/80 hover:text-blackbird-ignition-blue transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>(757) 123-4567</span>
          </a>
          <Button size="sm" className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90">
            Get Estimate
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              className="ml-auto px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              <Menu className="h-6 w-6 text-blackbird-off-white" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-blackbird-black border-blackbird-charcoal">
            <div className="flex flex-col space-y-6 pt-6">
              <Link
                href="/"
                className="text-lg font-semibold text-blackbird-off-white hover:text-blackbird-ignition-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-blackbird-off-white/60 uppercase tracking-wider">
                  Services
                </h3>
                {services.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="block text-blackbird-off-white hover:text-blackbird-ignition-blue transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>

              <Link
                href="/#portfolio"
                className="text-lg font-semibold text-blackbird-off-white hover:text-blackbird-ignition-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>

              <div className="space-y-4">
                <h3 className="text-sm font-medium text-blackbird-off-white/60 uppercase tracking-wider">
                  Service Areas
                </h3>
                {serviceAreas.map((area) => (
                  <Link
                    key={area.title}
                    href={area.href}
                    className="block text-blackbird-off-white hover:text-blackbird-ignition-blue transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {area.title}
                  </Link>
                ))}
              </div>

              <Link
                href="/#about"
                className="text-lg font-semibold text-blackbird-off-white hover:text-blackbird-ignition-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <Link
                href="/#contact"
                className="text-lg font-semibold text-blackbird-off-white hover:text-blackbird-ignition-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-6 border-t border-blackbird-charcoal">
                <Button 
                  size="sm" 
                  className="w-full bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90"
                  onClick={() => setIsOpen(false)}
                >
                  Get Estimate
                </Button>
                <a
                  href="tel:+1-757-123-4567"
                  className="flex items-center justify-center space-x-2 mt-4 text-sm text-blackbird-off-white/80"
                >
                  <Phone className="h-4 w-4" />
                  <span>(757) 123-4567</span>
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

const ListItem = ({ title, href, children }: { title: string; href: string; children: React.ReactNode }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blackbird-charcoal/50 hover:text-blackbird-ignition-blue focus:bg-blackbird-charcoal/50 focus:text-blackbird-ignition-blue"
        >
          <div className="text-sm font-medium leading-none text-blackbird-off-white">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-blackbird-off-white/60">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

const navigationMenuTriggerStyle = () =>
  cn(
    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-blackbird-charcoal/50 hover:text-blackbird-ignition-blue focus:bg-blackbird-charcoal/50 focus:text-blackbird-ignition-blue focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-blackbird-charcoal/50 data-[state=open]:bg-blackbird-charcoal/50 text-blackbird-off-white"
  )