'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CheckCircle, Send, User, Building2, Globe } from 'lucide-react'

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    organizationName: '', organizationType: '', partnerType: '',
    website: '', description: '', country: '', message: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const partnerTypes = ['Individual', 'Church', 'Organization']
  const countries = ['Ethiopia', 'United States', 'Canada', 'United Kingdom', 'Kenya', 'Other']
  const organizationTypes = ['Non-profit', 'Church', 'Business', 'Education', 'Other']

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  const isFormValid = formData.firstName && formData.lastName && formData.email && formData.country && formData.partnerType

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/40 overflow-x-hidden selection:bg-focus-blue selection:text-white">
      <Header />

      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-5xl mx-auto">
          {/* Header Area */}
          <div className="text-center mb-2">
            <h3 className="text-3xl md:text-3xl font-black text-[#001E6B] mb-3 tracking-tight">
              Partner with FOCUS
            </h3>
           
          </div>

          {/* Form Container */}
          <form className="bg-white rounded-[2rem] border border-slate-200 p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.04)]" onSubmit={handleSubmit}>
            
            {/* Group 1: Identity */}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-3">
                <User size={16} className="text-focus-blue" />
                <h2 className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">Section 01 — Identity</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#001E6B] ml-1">First Name *</label>
                  <input type="text" name="firstName" required value={formData.firstName} onChange={handleInputChange} className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-focus-blue/10 focus:border-focus-blue focus:bg-white outline-none transition-all" placeholder="John" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#001E6B] ml-1">Last Name *</label>
                  <input type="text" name="lastName" required value={formData.lastName} onChange={handleInputChange} className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-focus-blue/10 focus:border-focus-blue focus:bg-white outline-none transition-all" placeholder="Doe" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#001E6B] ml-1">Partner Type *</label>
                  <select name="partnerType" required value={formData.partnerType} onChange={handleInputChange} className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-focus-blue/10 outline-none transition-all cursor-pointer">
                    <option value="">Choose category</option>
                    {partnerTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>
            </div>

            {/* Group 2: Contact */}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-3">
                <Globe size={16} className="text-focus-blue" />
                <h2 className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">Section 02 — Contact</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#001E6B] ml-1">Email Address *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-focus-blue/10 focus:border-focus-blue focus:bg-white outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#001E6B] ml-1">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-focus-blue/10 focus:border-focus-blue focus:bg-white outline-none transition-all" placeholder="+251 ..." />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#001E6B] ml-1">Country *</label>
                  <select name="country" required value={formData.country} onChange={handleInputChange} className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-focus-blue/10 outline-none transition-all cursor-pointer">
                    <option value="">Select location</option>
                    {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>
            </div>

            {/* Group 3: Organization */}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-3">
                <Building2 size={16} className="text-focus-blue" />
                <h2 className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">Section 03 — Organization</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#001E6B] ml-1">Organization Name</label>
                  <input type="text" name="organizationName" value={formData.organizationName} onChange={handleInputChange} className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-focus-blue/10 focus:border-focus-blue outline-none transition-all" placeholder="Optional" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#001E6B] ml-1">Org Type</label>
                  <select name="organizationType" value={formData.organizationType} onChange={handleInputChange} className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-focus-blue/10 outline-none transition-all cursor-pointer">
                    <option value="">Select type</option>
                    {organizationTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              
              </div>
            </div>

            {/* Submit Section */}
            <div className="flex flex-col items-center gap-4 pt-6 border-t border-slate-100">
              <button 
                type="submit" 
                disabled={isLoading || !isFormValid} 
                className="w-full md:w-64 py-3.5 bg-[#001E6B] text-white text-[12px] font-bold uppercase tracking-widest rounded-full hover:bg-focus-blue active:scale-95 transition-all disabled:opacity-20 shadow-lg shadow-focus-blue/20 flex items-center justify-center gap-2"
              >
                {isLoading ? 'Sending...' : <>Submit Application <Send size={14} /></>}
              </button>
              <p className="text-[10px] text-slate-400 font-medium tracking-tight">
                Typically responds within 2-3 business days
              </p>
            </div>
          </form>
        </div>
      </section>

      <Footer />

      {/* Success Notification - Minimalist Toast Style */}
      {isSubmitted && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-[#001E6B] text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 animate-bounce">
          <CheckCircle size={18} className="text-focus-yellow" />
          <span className="text-sm font-bold">Application Sent Successfully</span>
        </div>
      )}
    </div>
  )
}