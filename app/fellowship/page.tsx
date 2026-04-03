'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

type Pillar = {
  title: string
  body: string
}

const pillars: Pillar[] = [
  {
    title: 'Evangelism',
    body: 'Large-scale outreach',
  },
  {
    title: 'Girls Ministry',
    body: 'Focused empowerment',
  },
  {
    title: 'Leadership Development',
    body: 'Capacity building',
  },
  {
    title: 'Spiritual Nurturing',
    body: 'Discipleship and building body of christ',
  },
  {
    title: 'Social Service & Community Development',
    body: 'Practical engagement',
  },
]

export default function FellowshipOverviewPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="relative pt-10 pb-16 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="absolute inset-x-0 top-0 h-[380px] bg-gradient-to-b from-focus-blue/10 via-focus-yellow/10 to-transparent pointer-events-none" />
        <div className="absolute -top-16 -left-24 w-72 h-72 bg-focus-yellow/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-focus-blue/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-focus-navy leading-[1.1]">
                Our Core Ministry Pillars
              </h1>

              <p className="text-gray-600 mt-3 leading-relaxed">
                All core ministry pillars are actively implemented and producing measurable impact.
              </p>

              <p className="text-gray-600 mt-4 leading-relaxed">
                FOCUS Ministry is designed to transform students holistically through disciplined discipleship,
                faith in action, and leadership multiplication across campus communities.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-focus-yellow/25 via-focus-blue/20 to-transparent rounded-[2.25rem] blur-[10px]" />
              <img
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1600&auto=format&fit=crop"
                alt="FOCUS Ministry"
                className="relative w-full h-[360px] object-cover rounded-[2.25rem] shadow-2xl border border-gray-100"
              />
              <div className="absolute -bottom-4 -left-4 rounded-[1.5rem] bg-white/80 backdrop-blur border border-gray-100 px-5 py-3 shadow-lg">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-focus-navy">Since 1998</p>
                <p className="text-sm font-bold text-gray-900 mt-1">Holistic Transformation</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition"
                  type="button"
                >
                  <span className="font-semibold text-focus-navy">
                    {pillar.title}
                  </span>

                  <ChevronDown
                    className={`transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                    {pillar.body}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-focus-light rounded-3xl border border-gray-100 p-8">
            <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-focus-navy">
                  Ready to support the ministry?
                </h3>

                <p className="text-gray-600 mt-2">
                  Partner with FOCUS to advance all ministry pillars and create lasting impact.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/donate"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-focus-yellow text-black hover:bg-focus-navy hover:text-white transition gap-2"
                >
                  Donate <ArrowRight size={18} />
                </Link>

                <Link
                  href="/partner"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-white border border-gray-200 text-focus-navy hover:border-focus-blue hover:text-focus-blue transition"
                >
                  Become a Partner
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

