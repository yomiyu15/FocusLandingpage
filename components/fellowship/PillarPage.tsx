import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

type PillarPageProps = {
  title: string
  subtitle: string
  imageUrl: string
  paragraphs: string[]
  keyPoints: string[]
  accentLabel?: string
}

export function PillarPage({
  title,
  subtitle,
  imageUrl,
  paragraphs,
  keyPoints,
  accentLabel = 'FOCUS Ministry Pillars',
}: PillarPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Header />

      <section className="relative overflow-hidden pt-10 pb-12 px-4 sm:px-6 lg:px-8">
        {/* Background accents */}
        <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-focus-blue/10 via-focus-yellow/10 to-transparent pointer-events-none" />
        <div className="absolute -top-16 -left-24 w-72 h-72 bg-focus-yellow/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-focus-blue/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div className="lg:pr-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-gray-100 backdrop-blur px-4 py-2 shadow-sm">
              <Sparkles size={14} className="text-focus-yellow" />
              <span className="text-xs font-bold tracking-wide text-focus-navy">
                {accentLabel}
              </span>
              <span className="text-xs font-bold text-focus-navy/60 ml-1">•</span>
              <span className="text-xs font-bold text-focus-navy/70">Since 1998</span>
            </div>

            <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-focus-navy leading-[1.05]">
              {title}
            </h1>

            <p className="mt-4 focus-body text-lg sm:text-xl leading-relaxed">
              {subtitle}
            </p>

            <div className="mt-6 space-y-3">
              {paragraphs.map((p, idx) => (
                <p key={idx} className="focus-body leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-7">
              <h2 className="text-xl font-bold text-focus-navy mb-3">
                Key focus areas
              </h2>

              <ul className="space-y-2">
                {keyPoints.map((item, idx) => (
                  <li
                    key={`${idx}-${item}`}
                    className="flex items-start gap-3 rounded-2xl bg-focus-light/80 border border-gray-100 px-4 py-3 min-w-0"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-focus-yellow" />
                    <span className="focus-body leading-relaxed break-words">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative mt-6 lg:mt-2">
            <div className="absolute -inset-2 bg-gradient-to-br from-focus-yellow/20 via-focus-blue/20 to-transparent blur-[10px] rounded-[2.25rem] pointer-events-none" />
            <div className="relative overflow-hidden rounded-[2.25rem] border border-gray-100 shadow-2xl">
              <img
                src={imageUrl}
                alt={`${title} image`}
                className="w-full h-[260px] sm:h-[300px] lg:h-[360px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-focus-navy/50 via-focus-yellow/10 to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-[1.5rem] bg-white/80 backdrop-blur border border-gray-100 px-5 py-3 shadow-lg">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-focus-navy">
                  Since 1998
                </p>
                <p className="text-sm font-bold text-gray-900 mt-1">Faith in action</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-[2.25rem] bg-focus-navy text-white overflow-hidden border border-white/10">
            <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-12 items-center">
              <div>
                <h2 className="text-3xl font-black leading-tight">
                  Ready to support {title}?
                </h2>
                <p className="mt-3 text-white/80 leading-relaxed">
                  Partner with FOCUS to multiply discipleship, strengthen campus ministry,
                  and see practical transformation in communities.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
                <Link
                  href="/donate"
                  className="inline-flex items-center justify-center gap-2 bg-focus-yellow text-focus-navy font-bold px-7 py-3 rounded-2xl shadow-[0_12px_30px_rgba(255,221,0,0.25)] hover:shadow-[0_18px_45px_rgba(255,221,0,0.35)] transition"
                >
                  Donate
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/partner"
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white font-bold px-7 py-3 rounded-2xl border border-white/15 transition"
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

