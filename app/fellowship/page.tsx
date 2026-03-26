import Link from 'next/link'
import { BookOpen, Megaphone, Heart, Users, ShieldCheck } from 'lucide-react'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function FellowshipOverviewPage() {
  const items = [
    {
      href: '/fellowship/family',
      title: 'Family',
      description: 'Build belonging through shared discipleship, mentoring, and prayer.',
      icon: Heart,
    },
    {
      href: '/fellowship/bible-study',
      title: 'Bible Study',
      description: 'Equip students with Gospel-centered Scripture teaching and practice.',
      icon: BookOpen,
    },
    {
      href: '/fellowship/evangelism',
      title: 'Evangelism',
      description: 'Share the hope of Christ with clarity, compassion, and courage.',
      icon: Megaphone,
    },
    {
      href: '/fellowship/mission',
      title: 'Mission',
      description: 'Prepare campus leaders to serve through Gospel outreach and leadership.',
      icon: ShieldCheck,
    },
    {
      href: '/fellowship/social-affairs',
      title: 'Social Affairs',
      description: 'Strengthen community through intentional events and service in action.',
      icon: Users,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="bg-gradient-to-r from-focus-blue to-focus-navy text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold">FOCUS Fellowship</h1>
          <p className="text-base text-white/90 max-w-3xl mx-auto leading-relaxed">
            A Gospel-rooted system for university students to grow in faith, build community, and live
            missionally on campus.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-focus-navy">Explore Fellowship</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Choose an area to learn how FOCUS supports Christian students across campuses.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-7 hover:shadow-md transition-shadow"
              >
                <div className="inline-flex p-3 bg-focus-yellow/20 rounded-xl mb-4 text-focus-blue">
                  <item.icon size={22} className="group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-focus-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                <div className="mt-5 text-focus-blue font-semibold group-hover:text-focus-navy transition-colors">
                  Learn more
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

