"use client"

import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-focus-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> {/* reduced from py-12 to py-8 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6"> {/* reduced mb-8 to mb-6 */}
          
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-3 text-focus-yellow">FOCUS</h3> {/* reduced mb-4 to mb-3 */}
            <p className="text-gray-300 text-sm leading-relaxed">
              Fellowship of Oromo Christian University Students. Empowering Christian student
              fellowship and leadership across campuses in Ethiopia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-focus-yellow mb-3">Quick Links</h4> {/* mb-4 -> mb-3 */}
            <ul className="space-y-1.5 text-sm"> {/* reduced spacing between links */}
              <li>
                <Link href="/" className="text-gray-300 hover:text-focus-yellow transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/partner" className="text-gray-300 hover:text-focus-yellow transition-colors">
                  Become a Partner
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-focus-yellow transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/fellowship" className="text-gray-300 hover:text-focus-yellow transition-colors">
                  FOCUS Fellowship
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-focus-yellow transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/ministries" className="text-gray-300 hover:text-focus-yellow transition-colors">
                  Ministries
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-focus-yellow transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-focus-yellow transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-focus-yellow transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-300 hover:text-focus-yellow transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-focus-yellow mb-3">Contact Info</h4>
            <ul className="space-y-2 text-sm"> {/* reduced space-y-3 to space-y-2 */}
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-focus-yellow mt-0.5 flex-shrink-0" />
                <a href="mailto:info@focusministry.org" className="text-gray-300 hover:text-focus-yellow transition-colors">
                  info@focusministry.org
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-focus-yellow mt-0.5 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-focus-yellow transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-focus-yellow mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">123 Faith Avenue, Hope City, ST 12345</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-focus-yellow mb-3">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-3">Subscribe to get the latest news and updates.</p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-lg bg-focus-blue/20 border border-focus-yellow/30 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-focus-yellow transition-colors"
                required
              />
              <button
                type="submit"
                className="px-3 py-2 bg-focus-yellow text-focus-navy font-semibold rounded-lg hover:bg-white transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-focus-yellow/20 pt-6"> {/* reduced pt-8 to pt-6 */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {currentYear} FOCUS - Fellowship of Oromo Christian University Students. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-focus-yellow transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-focus-yellow transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}