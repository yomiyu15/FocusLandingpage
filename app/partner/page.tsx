'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CheckCircle, Send, User, FileText, Landmark } from 'lucide-react'

export default function FocusFamilyForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    phone: '',
    email: '',
    university: '',
    batchFrom: '',
    batchTo: '',
    occupation: '',
    organization: '',
    localChurch: '',
    serviceType: '',
    paymentMethod: '',
    otherPayment: '',
    membershipFee: false,
    declarationName: '',
    declarationSignature: '',
    declarationDate: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const genders = ['Male', 'Female']

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
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

  const isFormValid =
    formData.fullName &&
    formData.gender &&
    formData.phone &&
    formData.email &&
    formData.membershipFee &&
    formData.serviceType &&
    formData.paymentMethod

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/40">
      <Header />

      <section className="pt-10 pb-16 px-4 flex-1">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-3xl md:text-4xl font-bold text-center text-focus-navy mb-8">
            FOCUS Family Subscription Form
          </h1>

          <form
            className="bg-white rounded-3xl p-6 md:p-12 shadow-lg"
            onSubmit={handleSubmit}
          >

            {/* PERSONAL INFO */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <User />
                <h2 className="text-sm font-bold text-[#001E6B]">
                  Personal Information
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <input name="fullName" placeholder="Full Name *" required value={formData.fullName} onChange={handleInputChange} className="input" />

                <select name="gender" required value={formData.gender} onChange={handleInputChange} className="input">
                  <option value="">Gender *</option>
                  {genders.map((g) => <option key={g}>{g}</option>)}
                </select>

                <input name="phone" placeholder="Phone *" required value={formData.phone} onChange={handleInputChange} className="input" />

                <input name="email" placeholder="Email *" required value={formData.email} onChange={handleInputChange} className="input" />

                <input name="university" placeholder="University" value={formData.university} onChange={handleInputChange} className="input" />

                <div className="flex gap-2">
                  <input name="batchFrom" placeholder="Batch From" value={formData.batchFrom} onChange={handleInputChange} className="input w-1/2" />
                  <input name="batchTo" placeholder="Batch To" value={formData.batchTo} onChange={handleInputChange} className="input w-1/2" />
                </div>

                <input name="occupation" placeholder="Occupation" value={formData.occupation} onChange={handleInputChange} className="input" />

                <input name="organization" placeholder="Organization" value={formData.organization} onChange={handleInputChange} className="input" />

                <input name="localChurch" placeholder="Local Church" value={formData.localChurch} onChange={handleInputChange} className="input" />

              </div>
            </div>

            {/* SERVICE TYPE */}
            <div className="mb-12">
              <h2 className="font-bold text-[#001E6B] mb-4">
                Type of Service in Ministry
              </h2>

              {['General Leader', 'Team Leader', 'Member', 'Partner'].map((type) => (
                <label key={type} className="flex gap-2 mb-2">
                  <input type="radio" name="serviceType" value={type} onChange={handleInputChange} />
                  {type}
                </label>
              ))}
            </div>

            {/* MEMBERSHIP */}
            <div className="mb-12">
              <label className="flex gap-3">
                <input type="checkbox" name="membershipFee" checked={formData.membershipFee} onChange={handleInputChange} />
                <span>
                  I commit to contribute 2000 ETB yearly to support the ministry *
                </span>
              </label>
            </div>

            {/* PAYMENT */}
            <div className="mb-12">
              <h2 className="font-bold text-[#001E6B] mb-4">
                Preferred Payment Method
              </h2>

              {['Bank Transfer', 'Mobile Transfer', 'Cash', 'Other'].map((m) => (
                <label key={m} className="flex gap-2 mb-2">
                  <input type="radio" name="paymentMethod" value={m} onChange={handleInputChange} />
                  {m}
                </label>
              ))}

              {formData.paymentMethod === 'Other' && (
                <input
                  name="otherPayment"
                  placeholder="Specify other method"
                  value={formData.otherPayment}
                  onChange={handleInputChange}
                  className="input mt-3"
                />
              )}
            </div>

            {/* DECLARATION */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <FileText />
                <h2 className="font-bold text-[#001E6B]">Declaration</h2>
              </div>

              <p className="text-sm mb-4">
                I affirm my membership in the FOCUS FAMILY and commit to support
                the mission through contribution, prayer, and participation.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <input name="declarationName" placeholder="Name" value={formData.declarationName} onChange={handleInputChange} className="input" />
                <input name="declarationSignature" placeholder="Signature" value={formData.declarationSignature} onChange={handleInputChange} className="input" />
                <input type="date" name="declarationDate" value={formData.declarationDate} onChange={handleInputChange} className="input" />
              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={!isFormValid || isLoading}
              className="w-full py-4 bg-yellow-400 font-bold rounded-full"
            >
              {isLoading ? 'Processing...' : 'Submit'}
            </button>

          </form>
        </div>
      </section>

      <Footer />

      {isSubmitted && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-[#001E6B] text-white px-6 py-3 rounded-xl">
          Success! Submitted.
        </div>
      )}
    </div>
  )
}