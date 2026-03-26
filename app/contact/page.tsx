'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-focus-blue to-focus-navy text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Contact Focus Ministry</h1>
          <p className="text-base text-white/85 mt-3 max-w-3xl mx-auto">
            We would love to hear from students, campus fellowship leaders, partners, and supporters.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-gray-100 p-8 bg-focus-light">
            <h2 className="text-2xl font-bold text-focus-navy">Get in touch</h2>
            <p className="text-gray-600 mt-3">
              Send us a message and our team will follow up as soon as possible.
            </p>

            <form className="mt-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="First name" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-focus-blue" />
                <input type="text" placeholder="Last name" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-focus-blue" />
              </div>
              <input type="email" placeholder="Email address" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-focus-blue" />
              <input type="text" placeholder="Subject" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-focus-blue" />
              <textarea rows={5} placeholder="Your message" className="w-full rounded-lg border border-gray-300 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-focus-blue" />
              <button type="button" className="w-full rounded-lg bg-focus-yellow text-focus-navy font-bold py-3 hover:bg-focus-yellow/90 transition-colors">
                Send Message
              </button>
            </form>
          </div>

          <div className="rounded-2xl border border-gray-100 p-8 bg-white">
            <h2 className="text-2xl font-bold text-focus-navy">Contact details</h2>
            <p className="text-gray-600 mt-3">
              This page is UI-ready and can be connected to your backend contact API when ready.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-3">
                <Mail className="text-focus-blue mt-1" size={18} />
                <div>
                  <p className="font-semibold text-focus-navy">Email</p>
                  <p className="text-gray-600">info@focusministry.org</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-focus-blue mt-1" size={18} />
                <div>
                  <p className="font-semibold text-focus-navy">Phone</p>
                  <p className="text-gray-600">+251 900 000 000</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-focus-blue mt-1" size={18} />
                <div>
                  <p className="font-semibold text-focus-navy">Address</p>
                  <p className="text-gray-600">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

