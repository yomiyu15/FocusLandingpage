'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CheckCircle, Heart, Zap, Building2, Copy, Lock, Globe, CreditCard, Check } from 'lucide-react'

type DonationFrequency = 'One-time' | 'Monthly' | 'Quarterly' | 'Annually'

export default function DonatePage() {
  const [frequency, setFrequency] = useState<DonationFrequency>('One-time')
  const [intAmount, setIntAmount] = useState<string>('100')
  const [locAmount, setLocAmount] = useState<string>('1000')
  const [donorType, setDonorType] = useState<'individual' | 'organization'>('individual')
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [intInputFocus, setIntInputFocus] = useState(false)
  const [locInputFocus, setLocInputFocus] = useState(false)

  const internationalAmounts = [50, 100, 200, 500, 1000, 2000]
  const localAmounts = [100, 500, 1000, 5000, 10000]

  const bankAccounts = [
    { bank: 'Awash Bank', acc: '01322233344555' },
    { bank: 'Commercial Bank of Ethiopia', acc: '1000022233447' },
     { bank: 'Cooperative Bank of Ormia', acc: '102221160001350' },
    { bank: 'Dashen Bank', acc: '00254455566' },
    { bank: 'Berhan Bank', acc: '2678899999' },
    
  ]

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans selection:bg-focus-yellow/30">
      <Header />

      <main className="flex-1 py-16 px-4">
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-extrabold text-focus-navy tracking-tight mb-4">Support FOCUS</h3>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            Your generosity empowers <strong>Christian student fellowships</strong> 
          </p>
       
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
          {/* International Card */}
          <section className="group bg-white rounded-3xl shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-focus-navy/5">
            <div className="bg-focus-navy p-10 text-center relative overflow-hidden">
              <Globe className="absolute -right-4 -top-4 text-white/5 w-32 h-32 rotate-12" />
              <h2 className="text-2xl font-bold mb-2 text-white relative z-10">International Giving</h2>
              <div className="flex items-center justify-center gap-2 text-focus-yellow/80 relative z-10">
                <Lock size={12} />
                <span className="text-[11px] uppercase tracking-widest font-bold">Stripe Secure Encryption</span>
              </div>
            </div>

            <div className="p-8 md:p-10 space-y-10">
              {/* Frequency Toggle */}
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  1. Choose Frequency
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1.5 bg-slate-50 rounded-xl border border-slate-100">
                  {(['One-time', 'Monthly', 'Quarterly', 'Annually'] as DonationFrequency[]).map((f) => (
                    <button
                      key={f}
                      onClick={() => setFrequency(f)}
                      aria-pressed={frequency === f}
                      className={`py-3 text-[13px] font-bold rounded-lg transition-all duration-200 ${
                        frequency === f
                          ? 'bg-white shadow-md text-focus-navy scale-[1.02]'
                          : 'text-slate-500 hover:text-focus-navy'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount Selection */}
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  2. Select Amount (USD)
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {internationalAmounts.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setIntAmount(amt.toString())}
                      className={`py-4 text-lg font-black rounded-xl border-2 transition-all duration-200 ${
                        intAmount === amt.toString()
                          ? 'border-focus-navy bg-focus-navy/5 text-focus-navy'
                          : 'border-slate-100 bg-white text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <span className="text-sm font-medium mr-0.5 opacity-70">$</span>
                      {amt}
                    </button>
                  ))}
                </div>
                <div className={`relative group ${intInputFocus ? 'ring-2 ring-focus-navy/20 rounded-xl' : ''}`}>
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-lg">$</span>
                  <input
                    type="number"
                    onChange={(e) => setIntAmount(e.target.value)}
                    onFocus={() => setIntInputFocus(true)}
                    onBlur={() => setIntInputFocus(false)}
                    placeholder="Enter custom amount"
                    className="w-full pl-10 pr-4 py-4 bg-slate-50 border-2 border-transparent rounded-xl text-base font-semibold outline-none transition-all focus:bg-white focus:border-focus-navy/20"
                  />
                </div>
              </div>

              {/* Donor Details */}
              <div className="space-y-4 pt-4">
                <div className="flex bg-slate-100 p-1 rounded-xl">
                  <button
                    onClick={() => setDonorType('individual')}
                    aria-pressed={donorType === 'individual'}
                    className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${
                      donorType === 'individual' ? 'bg-white text-focus-navy shadow-sm' : 'text-slate-500'
                    }`}
                  >
                    <CheckCircle className="inline w-4 h-4 mr-1 text-focus-navy" /> Individual
                  </button>
                  <button
                    onClick={() => setDonorType('organization')}
                    aria-pressed={donorType === 'organization'}
                    className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${
                      donorType === 'organization' ? 'bg-white text-focus-navy shadow-sm' : 'text-slate-500'
                    }`}
                  >
                    <Building2 className="inline w-4 h-4 mr-1 text-focus-navy" /> Organization
                  </button>
                </div>
                <div className="grid gap-3">
                  <label className="flex flex-col text-sm font-semibold">
                    Full Name *
                    <input
                      placeholder="Enter your full name"
                      className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl text-base outline-none focus:ring-2 focus:ring-focus-navy/10 focus:border-focus-navy transition-all"
                    />
                  </label>
                  <label className="flex flex-col text-sm font-semibold">
                    Email Address *
                    <input
                      placeholder="Enter your email"
                      className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl text-base outline-none focus:ring-2 focus:ring-focus-navy/10 focus:border-focus-navy transition-all"
                    />
                  </label>
                </div>
              </div>

              {/* Total Amount Summary */}
              <div className="text-right text-slate-500 font-semibold text-sm">
                Total Donation: ${intAmount || 0}
              </div>

              <button className="w-full py-5 bg-focus-navy text-white font-bold rounded-2xl hover:bg-slate-900 transition-all shadow-xl shadow-focus-navy/20 hover:shadow-focus-navy/30 active:scale-[0.98] uppercase tracking-[0.2em] text-sm">
                Complete Donation
              </button>
            </div>
          </section>

          {/* Local Card */}
          <section className="group bg-white rounded-3xl shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-focus-yellow/5">
            <div className="bg-focus-navy p-10 text-center relative overflow-hidden border-b-4 border-focus-yellow">
              <CreditCard className="absolute -right-4 -top-4 text-white/5 w-32 h-32 -rotate-12" />
              <h2 className="text-2xl font-bold mb-2 text-white relative z-10">Local Donation (ETB)</h2>
              <p className="text-slate-300 text-[11px] uppercase tracking-widest font-bold">Fast & Secure via Chapa</p>
            </div>

            <div className="p-8 md:p-10 space-y-10">
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Select Amount</label>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                  {localAmounts.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setLocAmount(amt.toString())}
                      className={`py-4 text-base font-black rounded-xl border-2 transition-all ${
                        locAmount === amt.toString()
                          ? 'border-focus-navy bg-focus-navy/5 text-focus-navy'
                          : 'border-slate-100 bg-white text-slate-600'
                      }`}
                    >
                      {amt}
                    </button>
                  ))}
                </div>
                <div className={`flex rounded-xl overflow-hidden border-2 border-slate-100 focus-within:border-focus-navy/20 transition-all ${locInputFocus ? 'ring-2 ring-focus-navy/20' : ''}`}>
                  <div className="bg-slate-50 text-focus-navy px-5 flex items-center font-black text-sm border-r border-slate-100">ETB</div>
                  <input
                    placeholder="Custom amount"
                    className="flex-1 px-5 py-4 text-base font-semibold outline-none"
                    onFocus={() => setLocInputFocus(true)}
                    onBlur={() => setLocInputFocus(false)}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <input placeholder="Full Name *" className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl text-base outline-none focus:border-focus-navy transition-all" />
                <textarea placeholder="Message of encouragement (Optional)" rows={3} className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl text-base outline-none resize-none focus:border-focus-navy transition-all" />
              </div>

              {/* Total Amount Summary */}
              <div className="text-right text-slate-500 font-semibold text-sm">
                Total Donation: {locAmount || 0} ETB
              </div>

              <button className="w-full py-5 bg-focus-navy text-white font-bold rounded-2xl hover:bg-slate-900 transition-all shadow-xl shadow-focus-navy/20 uppercase tracking-[0.2em] text-sm">
                Donate via Chapa
              </button>

              <div className="pt-8 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[2px] flex-1 bg-slate-100"></div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Bank Transfer</span>
                  <div className="h-[2px] flex-1 bg-slate-100"></div>
                </div>
                <div className="grid gap-3">
                  {bankAccounts.map((account, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleCopy(account.acc, idx)}
                      className="group flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-focus-yellow hover:shadow-lg hover:shadow-focus-yellow/10 transition-all cursor-pointer relative"
                    >
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-400 uppercase mb-1">{account.bank}</span>
                        <span className="text-sm font-mono font-bold text-focus-navy">{account.acc}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {copiedIndex === idx ? (
                          <span className="text-[10px] font-bold text-green-600 animate-in fade-in zoom-in">COPIED</span>
                        ) : (
                          <Copy size={16} className="text-slate-300 group-hover:text-focus-navy transition-colors" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}