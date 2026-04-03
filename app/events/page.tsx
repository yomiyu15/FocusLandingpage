import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Sparkles, Calendar, MapPin, ArrowRight } from 'lucide-react'
import { getEvents } from '@/lib/api/content'

export default async function EventsPage() {
  const upcomingEvents = await getEvents()

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
                Gatherings & Calendar
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-focus-navy mb-4">
              Events
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Join our upcoming ministry events, campus registrations, and highlights 
              from our vibrant student gatherings across Ethiopia.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            {/* Upcoming Events List */}
            <div className="lg:col-span-8">
              <h2 className="text-2xl font-bold text-focus-navy mb-6 flex items-center gap-3">
                Upcoming Events
                <span className="h-px flex-1 bg-gray-100" />
              </h2>
              
              <div className="space-y-6">
                {upcomingEvents.map((event) => (
                  <article 
                    key={event.title} 
                    className="group rounded-2xl border border-gray-100 bg-white p-6 md:p-8 hover:shadow-md transition-all border-l-4 border-l-focus-yellow"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <h3 className="text-xl font-bold text-focus-navy group-hover:text-focus-blue transition-colors">
                        {event.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-[11px] font-bold uppercase tracking-wider">
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-focus-light text-focus-blue">
                          <Calendar size={12} />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-focus-yellow/20 text-focus-navy">
                          <MapPin size={12} />
                          {event.location}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar / Info Box */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 rounded-2xl bg-focus-navy p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Annual Themes</h3>
                <p className="text-sm text-white/70 leading-relaxed mb-6">
                  Every academic year, we center our events around a core spiritual 
                  theme to deepen our impact and focus.
                </p>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs italic">
                    "Empowering the next generation for holistic transformation."
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <section className="pt-10 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-focus-navy mb-8">Past Event Gallery</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Prayer Night', 'Outreach Service', 'Leadership Workshop'].map((item) => (
                <div 
                  key={item} 
                  className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-focus-light aspect-video flex flex-col items-center justify-center p-6 text-center hover:bg-white transition-all hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Sparkles size={20} className="text-focus-yellow" />
                  </div>
                  <h4 className="text-lg font-bold text-focus-navy">{item}</h4>
                  <span className="text-[10px] font-bold text-focus-blue uppercase tracking-widest mt-2">
                    Highlight
                  </span>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}