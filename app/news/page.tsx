import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Sparkles, ArrowRight } from 'lucide-react'
import { getNewsItems } from '@/lib/api/content'

export default async function NewsPage() {
  const updates = await getNewsItems()

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
                Latest Updates
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-focus-navy mb-4">
              News & Stories
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Stay connected with ministry progress, student life reflections, 
              and leadership spotlights across our community.
            </p>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {updates.map((item) => (
              <article 
                key={item.title} 
                className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-7 hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="mb-4">
                  <span className="px-3 py-1 rounded-full bg-focus-light text-[10px] font-bold text-focus-blue uppercase tracking-wider border border-focus-blue/10">
                    {item.tag}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold text-focus-navy mb-3 group-hover:text-focus-blue transition-colors">
                  {item.title}
                </h2>
                
                <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                  {item.excerpt}
                </p>

                <button 
                  type="button" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-focus-navy group/btn"
                >
                  <span className="border-b-2 border-focus-yellow group-hover/btn:border-focus-blue transition-colors">
                    Read more
                  </span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}