import Link from 'next/link'
import { BookOpen, Download, FileText, PlayCircle, Sparkles, ArrowRight } from 'lucide-react'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { getResourceGroups, getResources } from '@/lib/api/content'

export default async function ResourcesPage() {
  const [resources, quickGroups] = await Promise.all([
    getResources(),
    getResourceGroups(),
  ])

  const iconMap = {
    file: FileText,
    book: BookOpen,
    download: Download,
    play: PlayCircle,
  } as const

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles size={16} className="text-focus-yellow" />
              <span className="text-xs font-bold tracking-widest text-focus-navy/60 uppercase">
                Toolkits & Guides
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-focus-navy mb-4">
              Resources
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Practical materials designed to equip student fellowship leaders, 
              campus servants, and ministry teams for effective service.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {quickGroups.map((group) => (
              <article key={group.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:border-focus-yellow/40 transition-colors">
                <h3 className="text-lg font-bold text-focus-navy mb-4 border-b border-gray-50 pb-2">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-focus-yellow shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* Featured Resources Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {resources.map((resource) => {
              const Icon = iconMap[resource.icon as keyof typeof iconMap] || FileText
              return (
                <article 
                  key={resource.title} 
                  className="group rounded-2xl border border-gray-100 p-8 bg-focus-light hover:shadow-md transition-all"
                >
                  <div className="inline-flex p-3 rounded-xl bg-white text-focus-blue mb-5 shadow-sm group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <span className="block text-[10px] font-bold text-focus-blue uppercase tracking-widest mb-2">
                    {resource.type}
                  </span>
                  <h2 className="text-2xl font-bold text-focus-navy mb-3">
                    {resource.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-8">
                    {resource.description}
                  </p>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-focus-navy text-white text-sm font-bold hover:bg-focus-blue transition-colors"
                  >
                    {resource.action}
                    <Download size={16} />
                  </button>
                </article>
              )
            })}
          </div>

          {/* CTA Section */}
          <section className="rounded-[2.5rem] bg-gray-50 border border-gray-100 p-10 md:p-14 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-focus-navy mb-4">
              Need a custom resource pack?
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed">
              Our team can prepare campus-specific materials and training modules 
              tailored for your specific student fellowship needs.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-focus-yellow text-focus-navy font-bold hover:shadow-lg hover:shadow-focus-yellow/20 transition-all"
            >
              Contact Focus Ministry
              <ArrowRight size={18} />
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}