import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BookOpen, Megaphone, Target, Users } from 'lucide-react'

export default function MinistriesPage() {
  const programs = [
    {
      title: 'Campus Ministry',
      description:
        'Weekly fellowship meetings, Bible studies, worship gatherings, and prayer sessions that build Christian community on campus.',
      icon: Users,
    },
    {
      title: 'Leadership Development',
      description:
        'Workshops, mentorship tracks, and student retreats that equip leaders for campus ministry and lifelong service.',
      icon: Target,
    },
    {
      title: 'Evangelism / Outreach',
      description:
        'Campus outreach events, Gospel conversations, and community service projects that demonstrate faith in action.',
      icon: Megaphone,
    },
    {
      title: 'Discipleship Programs',
      description:
        'Mentoring pathways, small groups, and prayer teams that support personal spiritual growth and accountability.',
      icon: BookOpen,
    },
  ]

  const testimonies = [
    {
      title: 'Growth in Leadership',
      text: 'Through mentorship and workshops, I learned to lead my fellowship team with confidence and faith.',
    },
    {
      title: 'Faith Strengthened',
      text: 'Bible study and prayer groups gave me a strong spiritual foundation during university life.',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="py-10 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="md:col-span-2 text-center mb-2">
            <h1 className="text-3xl md:text-4xl font-bold text-focus-navy">Ministries & Programs</h1>
            <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
              How FOCUS Ministry serves students through fellowship, leadership, discipleship, and outreach.
            </p>
          </div>
          {programs.map((program) => (
            <article key={program.title} className="rounded-2xl border border-gray-100 bg-focus-light p-7 hover:shadow-md transition-shadow">
              <div className="inline-flex p-3 rounded-xl bg-focus-yellow/20 text-focus-blue mb-4">
                <program.icon size={20} />
              </div>
              <h2 className="text-xl font-bold text-focus-navy">{program.title}</h2>
              <p className="text-gray-600 mt-3 leading-relaxed">{program.description}</p>
            </article>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mt-12">
          <h2 className="text-2xl font-bold text-focus-navy text-center mb-6">Student Testimonies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonies.map((item) => (
              <blockquote key={item.title} className="rounded-xl border border-gray-100 bg-white p-6">
                <h3 className="text-lg font-bold text-focus-navy">{item.title}</h3>
                <p className="text-gray-600 mt-2">"{item.text}"</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

