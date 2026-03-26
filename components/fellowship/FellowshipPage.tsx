import Link from 'next/link'
import { type ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export type FellowshipPageCard = {
  title: string
  body: string
  icon?: ReactNode
}

export type FellowshipPageProps = {
  title: string
  subtitle: string
  heroIcon?: ReactNode
  cards: FellowshipPageCard[]
}

export function FellowshipPage({ title, subtitle, heroIcon, cards }: FellowshipPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="bg-gradient-to-r from-focus-blue to-focus-navy text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          {heroIcon ? (
            <div className="mx-auto w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
              {heroIcon}
            </div>
          ) : null}
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
          <p className="text-base text-white/90 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-focus-navy">How we show up</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              FOCUS Fellowship helps students grow in faith and live out the Gospel on campus.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 hover:shadow-md transition-shadow"
              >
                {card.icon ? <div className="text-focus-yellow mb-4">{card.icon}</div> : null}
                <h3 className="text-xl font-bold text-focus-navy mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-focus-light rounded-3xl border border-gray-100 p-8">
            <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-focus-navy">Ready to support Fellowship?</h3>
                <p className="text-gray-600">
                  Partner with FOCUS to strengthen campus discipleship, community building, and Gospel outreach.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/donate"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-focus-blue text-white hover:bg-focus-navy transition-colors gap-2"
                >
                  Donate <ArrowRight size={18} />
                </Link>
                <Link
                  href="/partner"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-white border border-gray-200 text-focus-navy hover:border-focus-blue hover:text-focus-blue transition-colors"
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

