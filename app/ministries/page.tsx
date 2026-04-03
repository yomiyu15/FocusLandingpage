import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BookOpen, Megaphone, Target, Users, Sparkles } from 'lucide-react'
import { getPrograms, getTestimonies } from '@/lib/api/content'

export default async function MinistriesPage() {
  const [programs, testimonies] = await Promise.all([
    getPrograms(),
    getTestimonies(),
  ])

  const iconMap = {
    users: Users,
    target: Target,
    megaphone: Megaphone,
    book: BookOpen,
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
                Our Impact
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-focus-navy mb-4">
              Ministries & Programs
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              How FOCUS Ministry serves students through fellowship, leadership, 
              discipleship, and outreach across higher educational institutions.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {programs.map((program) => {
              const Icon = iconMap[program.icon as keyof typeof iconMap] || Target
              return (
                <article 
                  key={program.title} 
                  className="rounded-2xl border border-gray-100 bg-focus-light p-8 hover:shadow-md transition-shadow"
                >
                  <div className="inline-flex p-3 rounded-xl bg-focus-yellow/20 text-focus-blue mb-5">
                    <Icon size={22} />
                  </div>
                  <h2 className="text-xl font-bold text-focus-navy mb-3">
                    {program.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {program.description}
                  </p>
                </article>
              )
            })}
          </div>

          {/* Testimonies Section */}
          <section className="bg-gray-50/50 rounded-[2.5rem] p-8 md:p-12 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-focus-navy text-center mb-10">
              Student Testimonies
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonies.map((item) => (
                <blockquote 
                  key={item.title} 
                  className="relative rounded-2xl bg-white p-8 shadow-sm border border-gray-100 group hover:border-focus-yellow/40 transition-colors"
                >
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-focus-yellow rounded-full flex items-center justify-center text-focus-navy font-black italic">
                    "
                  </div>
                  <h3 className="text-lg font-bold text-focus-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed italic">
                    {item.text}
                  </p>
                </blockquote>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}