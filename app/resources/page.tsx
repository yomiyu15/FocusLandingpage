'use client'

import Link from 'next/link'
import { BookOpen, Download, FileText, PlayCircle } from 'lucide-react'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function ResourcesPage() {
  const resources = [
    {
      title: 'Campus Fellowship Starter Guide',
      type: 'PDF Guide',
      description: 'A practical guide for student leaders starting or strengthening fellowship groups.',
      action: 'Download guide',
      icon: FileText,
    },
    {
      title: 'Bible Study Series Plan',
      type: 'Study Pack',
      description: 'Sample Bible study outlines and facilitation notes for weekly student gatherings.',
      action: 'View plan',
      icon: BookOpen,
    },
    {
      title: 'Student Leadership Toolkit',
      type: 'Toolkit',
      description: 'Planning templates, team structure samples, and event checklists for ministries.',
      action: 'Open toolkit',
      icon: Download,
    },
    {
      title: 'Mentorship Training Session',
      type: 'Video Session',
      description: 'Foundational training video for mentors serving university students in fellowship.',
      action: 'Watch session',
      icon: PlayCircle,
    },
  ]

  const quickGroups = [
    {
      title: 'Bible Study Materials',
      items: ['Weekly study notes', 'Devotional guides', 'Small-group discussion outlines'],
    },
    {
      title: 'Sermons / Talks',
      items: ['Campus sermon recordings', 'Leadership talks', 'Audio and downloadable summaries'],
    },
    {
      title: 'Training Materials',
      items: ['Leadership training modules', 'Mentoring handbooks', 'Evangelism guides'],
    },
    {
      title: 'Downloads / Forms',
      items: ['Membership form', 'Volunteer sign-up', 'Event participation form'],
    },
    {
      title: 'Volunteer Opportunities',
      items: ['Mentorship support', 'Outreach teams', 'Campus service roles'],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-focus-blue to-focus-navy text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Resources</h1>
          <p className="text-base text-white/85 mt-3 max-w-3xl mx-auto">
            Practical resources for student fellowship leaders, campus servants, and ministry teams.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-6xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-focus-navy text-center mb-6">Resource Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickGroups.map((group) => (
              <article key={group.title} className="rounded-xl border border-gray-100 bg-white p-5">
                <h3 className="text-lg font-bold text-focus-navy mb-2">{group.title}</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-focus-yellow" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {resources.map((resource) => (
            <article key={resource.title} className="rounded-2xl border border-gray-100 p-7 bg-focus-light hover:shadow-md transition-shadow">
              <div className="inline-flex p-3 rounded-xl bg-focus-yellow/25 text-focus-blue mb-4">
                <resource.icon size={22} />
              </div>
              <p className="text-sm font-semibold text-focus-blue">{resource.type}</p>
              <h2 className="text-xl font-bold text-focus-navy mt-2">{resource.title}</h2>
              <p className="text-gray-600 mt-3 leading-relaxed">{resource.description}</p>
              <button
                type="button"
                className="mt-5 inline-flex items-center px-4 py-2 rounded-lg bg-white border border-gray-200 text-focus-navy font-semibold hover:border-focus-blue transition-colors"
              >
                {resource.action}
              </button>
            </article>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mt-12 rounded-2xl border border-gray-100 bg-white p-8 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-focus-navy">Need a custom resource pack?</h3>
          <p className="text-gray-600 mt-2">
            Reach out and we can prepare campus-specific materials for your student fellowship team.
          </p>
          <Link href="/contact" className="inline-flex mt-5 px-6 py-3 rounded-xl bg-focus-yellow text-focus-navy font-bold hover:bg-focus-yellow/90 transition-colors">
            Contact Focus Ministry
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

