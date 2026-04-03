import Link from 'next/link'
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'
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
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={16} className="text-focus-yellow" />
                <span className="text-xs font-bold tracking-widest text-focus-navy/60 uppercase">
                  {accentLabel}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-focus-navy mb-6 leading-tight">
                {title}
              </h1>

              <p className="text-lg font-medium text-gray-700 leading-relaxed mb-6">
                {subtitle}
              </p>

              <div className="space-y-4">
                {paragraphs.map((p, idx) => (
                  <p key={idx} className="text-sm text-gray-600 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl aspect-[4/3] lg:aspect-square">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-focus-navy/40 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white shadow-lg">
                    <div className="w-10 h-10 rounded-xl bg-focus-yellow/20 flex items-center justify-center text-focus-blue">
                      <Sparkles size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-focus-navy/50 uppercase tracking-widest">Established</p>
                      <p className="text-sm font-bold text-focus-navy">Since 1998</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-12 gap-12">
              
              <div className="md:col-span-8">
                <h2 className="text-2xl font-bold text-focus-navy mb-8 flex items-center gap-3">
                  Strategic Impact Areas
                  <span className="h-px flex-1 bg-gray-100" />
                </h2>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {keyPoints.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-focus-yellow/40 transition-colors shadow-sm"
                    >
                      <CheckCircle2 size={18} className="text-focus-yellow shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-gray-700 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-4">
                <div className="bg-focus-light rounded-[2rem] p-8 border border-gray-100">
                  <h3 className="text-lg font-bold text-focus-navy mb-4">Our Commitment</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    We believe in holistic transformation that begins in the heart and extends to the community.
                  </p>
                  <ul className="space-y-3 text-xs font-bold text-focus-navy/70 uppercase tracking-wider">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-focus-blue" />
                      Spiritual Growth
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-focus-blue" />
                      Social Responsibility
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-focus-blue" />
                      Leadership Excellence
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-[2.5rem] bg-focus-navy p-10 md:p-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-focus-yellow/10 blur-[80px] rounded-full -mr-20 -mt-20" />
              
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                <div className="max-w-xl">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to support {title}?
                  </h2>
                  <p className="text-white/70 leading-relaxed">
                    Partner with FOCUS to multiply discipleship, strengthen campus ministry, 
                    and see practical transformation in communities across the nation.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/donate"
                    className="inline-flex items-center gap-2 bg-focus-yellow text-focus-navy font-bold px-8 py-4 rounded-2xl hover:shadow-lg hover:shadow-focus-yellow/20 transition-all"
                  >
                    Donate
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/partner"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-bold px-8 py-4 rounded-2xl border border-white/20 transition-all"
                  >
                    Become a Partner
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}