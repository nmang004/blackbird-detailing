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
      <div className="container flex h-20 items-center">
        {/* Logo - Left side, larger */}
        <Link href="/" className="mr-8 flex items-center space-x-2">
          <div className="relative h-12 w-12 sm:h-14 sm:w-14">
            <Image
              src="/blackbirdlogo.jpeg"
              alt="Blackbird Detailing"
              width={56}
              height={56}
              className="rounded-full object-cover"
            />
          </div>
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
              <Link href="/membership" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Membership
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/portfolio" legacyBehavior passHref>
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
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Contact Info - positioned on far right */}
        <div className="ml-auto hidden items-center space-x-4 lg:flex">
          <a
            href="tel:+1-757-123-4567"
            className="flex items-center space-x-2 text-sm text-blackbird-off-white/80 hover:text-blackbird-ignition-blue transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>(757) 123-4567</span>
          </a>
          <Link href="/contact">
            <Button size="sm" className="bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 font-semibold">
              Get Estimate
            </Button>
          </Link>
        </div>

        {/* Mobile Logo */}
        <Link href="/" className="lg:hidden flex items-center">
          <div className="relative h-10 w-10">
            <Image
              src="/blackbirdlogo.jpeg"
              alt="Blackbird Detailing"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
          </div>
        </Link>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              <Menu className="h-6 w-6 text-blackbird-off-white" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-blackbird-black border-blackbird-charcoal w-72 overflow-y-auto">
            <div className="flex flex-col space-y-4 pt-4">
              <Link
                href="/"
                className="text-lg font-semibold text-blackbird-off-white hover:text-blackbird-ignition-blue transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              <div className="space-y-3">
                <h3 className="text-xs font-medium text-blackbird-off-white/60 uppercase tracking-wider border-b border-blackbird-charcoal/30 pb-1">
                  Services
                </h3>
                <div className="space-y-2 pl-3">
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="block text-sm text-blackbird-off-white hover:text-blackbird-ignition-blue transition-colors py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/membership"
                className="text-lg font-semibold text-blackbird-off-white hover:text-blackbird-ignition-blue transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Membership
              </Link>

              <Link
                href="/portfolio"
                className="text-lg font-semibold text-blackbird-off-white hover:text-blackbird-ignition-blue transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>

              <div className="space-y-3">
                <h3 className="text-xs font-medium text-blackbird-off-white/60 uppercase tracking-wider border-b border-blackbird-charcoal/30 pb-1">
                  Service Areas
                </h3>
                <div className="space-y-2 pl-3">
                  {serviceAreas.map((area) => (
                    <Link
                      key={area.title}
                      href={area.href}
                      className="block text-sm text-blackbird-off-white hover:text-blackbird-ignition-blue transition-colors py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {area.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/about"
                className="text-lg font-semibold text-blackbird-off-white hover:text-blackbird-ignition-blue transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-lg font-semibold text-blackbird-off-white hover:text-blackbird-ignition-blue transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-4 border-t border-blackbird-charcoal/30 space-y-3 mt-4">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button 
                    size="sm" 
                    className="w-full bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90 py-3 text-sm"
                  >
                    Get Estimate
                  </Button>
                </Link>
                <a
                  href="tel:+1-757-123-4567"
                  className="flex items-center justify-center space-x-2 text-sm text-blackbird-off-white/80 py-2"
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