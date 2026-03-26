'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowRight, Heart, Users, Target, Megaphone, BookOpen } from 'lucide-react'

export default function AboutPage() {
  const timeline = [
    {
      year: '2016',
      title: 'FOCUS Begins',
      description:
        'FOCUS started with a small group of students committed to prayer, Scripture, and campus fellowship at Oromo Christian University.',
    },
    {
      year: '2019',
      title: 'Program Growth',
      description:
        'Weekly Bible studies, mentorship circles, and evangelism outreach expanded across student groups.',
    },
    {
      year: '2022',
      title: 'Leadership Expansion',
      description:
        'Student leadership training and discipleship programs were formalized for consistency and long-term impact.',
    },
    {
      year: 'Today',
      title: 'Ethiopia Focus',
      description:
        'FOCUS continues to strengthen campus communities and Local outreach through student-led ministry.',
    },
  ]

  const values = [
    {
      title: 'Compassion',
      description: 'We care for students spiritually, emotionally, and practically.',
      icon: Heart,
    },
    {
      title: 'Community',
      description: 'We build healthy fellowship where students grow together.',
      icon: Users,
    },
    {
      title: 'Leadership',
      description: 'We equip students to lead with integrity and service.',
      icon: Target,
    },
    {
      title: 'Evangelism',
      description: 'We share the Gospel with clarity, courage, and love.',
      icon: Megaphone,
    },
  ]

  const testimonies = [
    {
      name: 'Student Leader, Oromo Christian University',
      story:
        'FOCUS helped me move from isolation to purpose. Through Bible study and mentorship, I now lead a small group that supports other students in faith.',
    },
    {
      name: 'Campus Fellowship Member',
      story:
        'The fellowship gave me consistent prayer partners and practical guidance. My spiritual growth and confidence in leadership have grown greatly.',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="bg-gradient-to-r from-focus-blue to-focus-navy text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold">About FOCUS Ministry</h1>
          <p className="text-base text-white/85 mt-3 max-w-3xl mx-auto">
            Fellowship of Oromo Christian University Students (FOCUS) exists to disciple students,
            strengthen campus fellowship, and serve communities through the Gospel.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <article className="rounded-2xl border border-gray-100 bg-focus-light p-8">
            <h2 className="text-2xl font-bold text-focus-navy mb-3">Our Story / History</h2>
            <p className="text-gray-600 leading-relaxed">
              FOCUS began as a student fellowship initiative at Oromo Christian University. A small
              group of students gathered for Bible study, prayer, and peer discipleship, and it
              steadily grew into a structured ministry that serves students across campus life.
            </p>
          </article>
          <article id="mission" className="rounded-2xl border border-gray-100 bg-white p-8">
            <h2 className="text-2xl font-bold text-focus-navy mb-3">Mission & Vision</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              <span className="font-semibold text-focus-navy">Mission:</span> Build Christ-centered
              student fellowship through discipleship, leadership development, and outreach.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <span className="font-semibold text-focus-navy">Vision:</span> A generation of students
              transformed by the Gospel and equipped to influence campuses and communities for Christ.
            </p>
          </article>
        </div>
      </section>

      <section className="py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-focus-navy text-center mb-8">Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value) => (
              <article key={value.title} className="rounded-xl border border-gray-100 bg-white p-6 hover:shadow-md transition-shadow">
                <div className="inline-flex p-2 rounded-lg bg-focus-yellow/20 text-focus-blue mb-3">
                  <value.icon size={18} />
                </div>
                <h3 className="text-lg font-bold text-focus-navy mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-focus-light">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-focus-navy text-center mb-10">Journey / Timeline</h2>
          <div className="space-y-6">
            {timeline.map((item) => (
              <article key={item.year + item.title} className="rounded-xl border border-gray-100 bg-white p-6">
                <p className="text-sm font-semibold text-focus-blue">{item.year}</p>
                <h3 className="text-xl font-bold text-focus-navy mt-1">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="focus-ministry" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <article className="rounded-2xl border border-gray-100 bg-focus-light p-8">
            <h2 className="text-2xl font-bold text-focus-navy mb-3">Ethiopia Focus</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our Local ministry focus includes weekly campus fellowship, student mentoring, community
              service, and evangelism events in Ethiopia.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-focus-yellow" /> Weekly campus ministry meetings and Bible studies</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-focus-yellow" /> Leadership workshops and student mentoring</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-focus-yellow" /> Outreach and community impact projects</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-gray-100 bg-white p-8">
            <h2 className="text-2xl font-bold text-focus-navy mb-3">Student Testimonies</h2>
            <div className="space-y-4">
              {testimonies.map((item) => (
                <blockquote key={item.name} className="rounded-lg border border-gray-100 bg-focus-light p-4">
                  <p className="text-gray-600 text-sm leading-relaxed">"{item.story}"</p>
                  <footer className="text-focus-navy text-xs font-semibold mt-2">- {item.name}</footer>
                </blockquote>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-focus-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join the Focus Ministry movement</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            You can partner, volunteer, pray, and support student fellowship growth across campuses.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <a
              href="/partner"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-focus-yellow text-focus-navy font-bold hover:bg-focus-yellow/90 transition-colors gap-2"
            >
              Become a Partner <ArrowRight size={16} />
            </a>
            <a
              href="/donate"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Support Mission
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
