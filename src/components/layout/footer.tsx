import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="bg-blackbird-black border-t border-blackbird-charcoal/20">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="relative h-10 w-10">
                <Image
                  src="/blackbirdlogo.jpeg"
                  alt="Blackbird Detailing"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              </div>
              <span className="font-heading text-xl font-bold text-blackbird-off-white">
                Blackbird Detailing
              </span>
            </Link>
            <p className="text-sm text-blackbird-off-white/70 mb-6 max-w-xs">
              Luxury detailing excellence for your automobile. Premium detailing services 
              serving Virginia Beach, Chesapeake, and Norfolk.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-blackbird-off-white/60 hover:text-blackbird-ignition-blue transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-blackbird-off-white/60 hover:text-blackbird-ignition-blue transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-blackbird-off-white/60 hover:text-blackbird-ignition-blue transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-blackbird-off-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/ceramic-coating"
                  className="text-sm text-blackbird-off-white/70 hover:text-blackbird-ignition-blue transition-colors"
                >
                  Ceramic Coating
                </Link>
              </li>
              <li>
                <Link
                  href="/services/paint-correction"
                  className="text-sm text-blackbird-off-white/70 hover:text-blackbird-ignition-blue transition-colors"
                >
                  Paint Correction
                </Link>
              </li>
              <li>
                <Link
                  href="/services/interior-detailing"
                  className="text-sm text-blackbird-off-white/70 hover:text-blackbird-ignition-blue transition-colors"
                >
                  Interior Detailing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/packages"
                  className="text-sm text-blackbird-off-white/70 hover:text-blackbird-ignition-blue transition-colors"
                >
                  Detail Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-sm text-blackbird-off-white/70 hover:text-blackbird-ignition-blue transition-colors"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-blackbird-off-white uppercase tracking-wider mb-4">
              Service Areas
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/service-areas/virginia-beach"
                  className="text-sm text-blackbird-off-white/70 hover:text-blackbird-ignition-blue transition-colors"
                >
                  Virginia Beach
                </Link>
              </li>
              <li>
                <Link
                  href="/service-areas/chesapeake"
                  className="text-sm text-blackbird-off-white/70 hover:text-blackbird-ignition-blue transition-colors"
                >
                  Chesapeake
                </Link>
              </li>
              <li>
                <Link
                  href="/service-areas/norfolk"
                  className="text-sm text-blackbird-off-white/70 hover:text-blackbird-ignition-blue transition-colors"
                >
                  Norfolk
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-blackbird-off-white/70 hover:text-blackbird-ignition-blue transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-blackbird-off-white/70 hover:text-blackbird-ignition-blue transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-blackbird-off-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-blackbird-ignition-blue mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+1-757-123-4567"
                    className="text-sm text-blackbird-off-white/70 hover:text-blackbird-ignition-blue transition-colors"
                  >
                    (757) 123-4567
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-blackbird-ignition-blue mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:info@blackbirddetailing.com"
                    className="text-sm text-blackbird-off-white/70 hover:text-blackbird-ignition-blue transition-colors"
                  >
                    info@blackbirddetailing.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blackbird-ignition-blue mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-blackbird-off-white/70">
                    Virginia Beach, VA<br />
                    Serving Hampton Roads
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-blackbird-ignition-blue mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-blackbird-off-white/70">
                    Mon - Sat: 8am - 6pm<br />
                    Sun: By Appointment
                  </p>
                </div>
              </li>
            </ul>
            <Button
              size="sm"
              className="w-full bg-blackbird-ignition-blue hover:bg-blackbird-ignition-blue/90"
            >
              Get Free Estimate
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-blackbird-charcoal/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-blackbird-off-white/50 mb-4 md:mb-0">
              © {new Date().getFullYear()} Blackbird Detailing. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-blackbird-off-white/50 hover:text-blackbird-ignition-blue transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-blackbird-off-white/50 hover:text-blackbird-ignition-blue transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}