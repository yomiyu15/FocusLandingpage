'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Heart, Users, Target, Megaphone, BookOpen, Shield, HandHeart, Scale, Sparkles } from 'lucide-react'

export default function AboutPage() {
  const values = [
    { title: 'Faithfulness', icon: Shield },
    { title: 'Evangelism', icon: Megaphone },
    { title: 'Prayer', icon: Sparkles },
    { title: 'Love', icon: Heart },
    { title: 'Compassion', icon: HandHeart },
    { title: 'Harmony', icon: Users },
    { title: 'Servanthood', icon: Target },
    { title: 'Justice', icon: Scale },
    { title: 'Discipleship', icon: BookOpen },
    { title: 'Communitarian', icon: Users },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <article className="rounded-2xl border border-gray-100 bg-focus-light p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-focus-navy mb-4">About FOCUS Ministry</h1>
            <h2 className="text-2xl font-bold text-focus-navy mb-3">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
              FOCUS Ministry exists to equip and mobilize the young generation for holistic
              transformation, primarily within higher educational institutions. The ministry
              develops spiritually grounded, socially responsible, and leadership-oriented youth who
              actively contribute to the Church, society, and national development.
            </p>
          </article>
          <article id="mission" className="rounded-2xl border border-gray-100 bg-white p-8">
            <h2 className="text-2xl font-bold text-focus-navy mb-3">Mission & Vision</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              <span className="font-semibold text-focus-navy">Vision:</span> We envision a
              generation transformed by Christ, empowered as agents and leaders of positive change.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <span className="font-semibold text-focus-navy">Mission:</span> Providing holistic
              service for students, proclaiming the Gospel of Jesus Christ for all nations, and
              multiplying disciples.
            </p>
          </article>
        </div>
      </section>

      <section className="py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-focus-navy text-center mb-8">Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {values.map((value) => (
              <article key={value.title} className="rounded-xl border border-gray-100 bg-white p-6 hover:shadow-md transition-shadow">
                <div className="inline-flex p-2 rounded-lg bg-focus-yellow/20 text-focus-blue mb-3">
                  <value.icon size={18} />
                </div>
                <h3 className="text-lg font-bold text-focus-navy mb-2">{value.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-focus-light">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-focus-navy text-center mb-10">Community & National Impact</h2>
          <div className="space-y-6">
            <article className="rounded-xl border border-gray-100 bg-white p-6">
              <h3 className="text-xl font-bold text-focus-navy mt-1">Faith in Action</h3>
              <p className="text-gray-600 mt-2">
                FOCUS Ministry is committed to community service and development initiatives through
                volunteerism, environmental stewardship, social outreach, and practical community
                development activities.
              </p>
            </article>
            <article className="rounded-xl border border-gray-100 bg-white p-6">
              <h3 className="text-xl font-bold text-focus-navy mt-1">Summary Statement</h3>
              <p className="text-gray-600 mt-2">
                FOCUS Ministry exists to transform lives and communities by developing Christ-like
                leaders who are spiritually mature, socially engaged, and mission-driven. Through
                holistic youth development, the ministry envisions empowered young leaders positively
                influencing the Church, society, and the nation.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="focus-ministry" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <article className="rounded-2xl border border-gray-100 bg-focus-light p-8">
            <h2 className="text-2xl font-bold text-focus-navy mb-3">Current Organizational Stage</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              FOCUS Ministry is currently in a strategic expansion and growth phase with strong
              organizational capacity and a clear trajectory toward sustainable national impact.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-focus-yellow" /> Scaling membership and outreach</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-focus-yellow" /> Strengthening leadership pipelines</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-focus-yellow" /> Building sustainability and long-term legacy systems</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-gray-100 bg-white p-8">
            <h2 className="text-2xl font-bold text-focus-navy mb-3">Quick Facts</h2>
            <div className="space-y-4">
              <blockquote className="rounded-lg border border-gray-100 bg-focus-light p-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  30,000+ student members reached annually through organized fellowships and
                  ministry programs.
                </p>
              </blockquote>
              <blockquote className="rounded-lg border border-gray-100 bg-focus-light p-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  88 fellowships, 11 clusters, and 7 functional departments actively serving across
                  campuses.
                </p>
              </blockquote>
              <blockquote className="rounded-lg border border-gray-100 bg-focus-light p-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Core ministry pillars include evangelism, girls ministry, leadership development,
                  spiritual nurturing, and social service.
                </p>
              </blockquote>
            </div>
          </article>
        </div>
      </section>

     

      <Footer />
    </div>
  )
}

