'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  CheckCircle, User, Landmark, Sparkles, PenTool, 
  GraduationCap, Briefcase, Church, Phone, Mail
} from 'lucide-react'
import { submitPartnerApplication } from '@/lib/api/content'
import { Button } from '@/components/ui/button'

export default function FocusFamilyForm() {
  const [formData, setFormData] = useState({
    fullName: '', gender: '', phone: '', email: '',
    university: '', batchFrom: '', batchTo: '',
    occupation: '', organization: '', localChurch: '',
    serviceType: '', paymentMethod: '', otherPayment: '',
    membershipFee: false, 
    declarationName: '', declarationSignature: '', declarationDate: new Date().toISOString().split('T')[0],
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await submitPartnerApplication(formData)
      setIsSubmitted(true)
    } finally {
      setIsLoading(false)
    }
  }

  const inputClass = "w-full bg-gray-50 border-2 border-gray-100 rounded-xl px-4 py-3 text-sm text-focus-navy placeholder:text-gray-400 focus:bg-white focus:border-focus-yellow transition-all outline-none font-medium"
  const labelClass = "block text-[10px] font-black uppercase tracking-widest text-focus-navy/40 mb-1.5 ml-1"

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-focus-yellow selection:text-black">
      <Header />

      <main className="pt-16 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* Compact Hero Section */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-black text-focus-navy tracking-tight mb-3">
              FOCUS Family <span className="text-focus-yellow">Subscription</span>
            </h1>
            <p className="text-gray-500 font-bold text-sm max-w-2xl mx-auto leading-relaxed italic">
              "Providing holistic service for students, proclaiming the Gospel of Jesus Christ for all nation and Multiplying Disciples."
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Section 1: Personal & Academic (3 Fields per Row) */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-8 border-b border-gray-50 pb-4">
                <User size={20} className="text-focus-yellow" />
                <h2 className="font-bold text-focus-navy uppercase tracking-wider text-sm">Personal & Academic Profile</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-5">
                <div className="md:col-span-2">
                  <label className={labelClass}>Full Name *</label>
                  <input name="fullName" required value={formData.fullName} onChange={handleInputChange} className={inputClass} placeholder="John Doe" />
                </div>
                <div>
                  <label className={labelClass}>Gender *</label>
                  <select name="gender" required value={formData.gender} onChange={handleInputChange} className={inputClass}>
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Phone *</label>
                  <input name="phone" required value={formData.phone} onChange={handleInputChange} className={inputClass} placeholder="+251..." />
                </div>
                <div>
                  <label className={labelClass}>Email *</label>
                  <input name="email" type="email" required value={formData.email} onChange={handleInputChange} className={inputClass} placeholder="email@example.com" />
                </div>
                <div>
                  <label className={labelClass}>University</label>
                  <input name="university" value={formData.university} onChange={handleInputChange} className={inputClass} />
                </div>

                <div>
                  <label className={labelClass}>Batch From</label>
                  <input name="batchFrom" value={formData.batchFrom} onChange={handleInputChange} className={inputClass} placeholder="Year" />
                </div>
                <div>
                  <label className={labelClass}>Batch To</label>
                  <input name="batchTo" value={formData.batchTo} onChange={handleInputChange} className={inputClass} placeholder="Year" />
                </div>
                <div>
                  <label className={labelClass}>Local Church</label>
                  <input name="localChurch" value={formData.localChurch} onChange={handleInputChange} className={inputClass} />
                </div>

                <div>
                  <label className={labelClass}>Occupation</label>
                  <input name="occupation" value={formData.occupation} onChange={handleInputChange} className={inputClass} />
                </div>
                <div className="md:col-span-2">
                  <label className={labelClass}>Organization / Institution</label>
                  <input name="organization" value={formData.organization} onChange={handleInputChange} className={inputClass} />
                </div>
              </div>
            </motion.div>

            {/* Section 2: Commitment & Payment */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-8 border-b border-gray-50 pb-4">
                <Landmark size={20} className="text-focus-yellow" />
                <h2 className="font-bold text-focus-navy uppercase tracking-wider text-sm">Ministry & Fees</h2>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['General Leader', 'Team Leader', 'Member', 'Partner'].map((type) => (
                    <label key={type} className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 cursor-pointer transition-all ${formData.serviceType === type ? 'border-focus-yellow bg-focus-yellow/5' : 'border-gray-50 bg-gray-50'}`}>
                      <input type="radio" name="serviceType" value={type} className="sr-only" onChange={handleInputChange} />
                      <span className="text-[10px] font-bold uppercase tracking-tighter text-focus-navy">{type}</span>
                    </label>
                  ))}
                </div>

                <div className="p-5 rounded-2xl bg-focus-navy text-white text-sm">
                  <label className="flex items-center gap-4 cursor-pointer">
                    <input type="checkbox" name="membershipFee" checked={formData.membershipFee} onChange={handleInputChange} className="w-5 h-5 rounded text-focus-yellow" />
                    <span>I commit to contribute <b className="text-focus-yellow">2000 ETB yearly</b> for ministry sustainability.</span>
                  </label>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Bank Transfer', 'Mobile', 'Cash', 'Other'].map((method) => (
                    <label key={method} className={`flex items-center justify-center p-3 rounded-xl border-2 cursor-pointer transition-all ${formData.paymentMethod === method ? 'border-focus-navy bg-focus-navy text-white' : 'border-gray-50 bg-gray-50 text-gray-400'}`}>
                      <input type="radio" name="paymentMethod" value={method} className="sr-only" onChange={handleInputChange} />
                      <span className="text-[10px] font-bold uppercase">{method}</span>
                    </label>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Section 3: Declaration */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <PenTool size={18} className="text-focus-yellow" />
                <h2 className="font-bold text-focus-navy text-sm uppercase tracking-wider">Declaration</h2>
              </div>
              <p className="text-[12px] text-gray-400 mb-6 italic leading-relaxed">
                "I affirm my membership in the FOCUS FAMILY and commit to stand alongside the ministry by contributing, praying, and participating faithfully for the advancement the mission."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className={labelClass}>Print Name</label>
                  <input name="declarationName" value={formData.declarationName} onChange={handleInputChange} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Digital Signature</label>
                  <input name="declarationSignature" placeholder="Type Name" value={formData.declarationSignature} onChange={handleInputChange} className={`${inputClass} italic font-serif`} />
                </div>
                <div>
                  <label className={labelClass}>Date</label>
                  <input type="date" name="declarationDate" value={formData.declarationDate} onChange={handleInputChange} className={inputClass} />
                </div>
              </div>
            </motion.div>

            <Button
              type="submit"
              disabled={isLoading || !formData.fullName || !formData.membershipFee}
              className="w-full h-16 rounded-2xl bg-focus-yellow text-black font-black uppercase tracking-widest hover:scale-[1.01] transition-transform shadow-lg shadow-focus-yellow/20"
            >
              {isLoading ? 'Processing...' : 'Complete Subscription'}
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}