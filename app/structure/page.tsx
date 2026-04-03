import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function StructurePage() {
  const statusItems = [
    {
      title: 'Legal / Institutional Status',
      description:
        'FOCUS operates as a recognized and functioning campus ministry, collaborating with students and stakeholders to advance its mission.',
    },
    {
      title: 'Operational Status',
      description:
        'The ministry is fully active and operational, engaging over 30,000 student members annually through fellowships, evangelistic outreach, discipleship, leadership development, Girls Ministry, and community initiatives.',
    },
    {
      title: 'Structural Capacity',
      description:
        'FOCUS is structured into 88 fellowships, 11 clusters, and 7 functional departments for efficient coordination and leadership flow.',
    },
    {
      title: 'Programmatic Status',
      description:
        'Core ministry pillars are actively implemented with measurable impact in evangelism, girls ministry, leadership development, spiritual nurturing, and social service.',
    },
    {
      title: 'Growth & Development Stage',
      description:
        'FOCUS is in a strategic expansion phase, scaling membership and outreach while strengthening leadership pipelines and long-term sustainability systems.',
    },
  ]

  const hierarchy = [
    'General Assembly (Supreme Authority)',
    'Board of Directorates (Policy & Governance)',
    'National Office (Execution & Management)',
    'Cluster Council (Regional Coordination Layer)',
    'Cluster Coordinator (Operational Leadership)',
    'Fellowship Leaders (Campus Oversight)',
    'Team Leaders (Small Group Leaders)',
    'Members (Foundation Base)',
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="py-10 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <article className="rounded-2xl border border-gray-100 bg-focus-light p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-80 h-80 bg-focus-yellow/15 blur-[110px] -translate-x-20 -translate-y-20 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-focus-blue/15 blur-[120px] translate-x-24 translate-y-24 pointer-events-none" />

            <h1 className="text-3xl md:text-4xl font-black text-focus-navy mb-4 relative z-10">
              FOCUS Structure & Status
            </h1>

            <div className="relative z-10 mb-6 rounded-3xl overflow-hidden border border-gray-100 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
                alt="Organizational impact"
                width={1200}
                height={600}
                className="w-full h-[190px] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-focus-navy/60 via-focus-yellow/10 to-transparent" />
              <div className="absolute left-5 bottom-5 right-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur border border-white/60 px-4 py-2 shadow-sm">
                  <span className="text-xs font-bold tracking-widest text-focus-navy uppercase">
                    Active • Expanding • Impact-driven
                  </span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-focus-navy mb-3 relative z-10">
              Organizational Status
            </h2>
            <p className="text-gray-600 relative z-10 mb-6 max-w-xl">
              How FOCUS is structured and operating right now—legally, operationally, structurally, programmatically, and in its current growth stage.
            </p>

            <div className="relative z-10 space-y-4">
              {statusItems.map((item, idx) => (
                <div
                  key={item.title}
                  className="group relative rounded-2xl bg-white/80 backdrop-blur border border-gray-100 p-5 shadow-sm hover:shadow-xl transition-shadow"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-focus-yellow/15 via-transparent to-focus-blue/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="relative flex items-start gap-4">
                    <div className="min-w-[40px] h-10 rounded-xl bg-focus-yellow/15 border border-focus-yellow/30 flex items-center justify-center">
                      <span className="text-sm font-black text-focus-navy">
                        {idx + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-focus-navy">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-white border border-gray-100 p-4 mt-5">
              <h3 className="text-lg font-bold text-focus-navy mb-3">
                Core Ministry Pillars
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Evangelism (large-scale outreach)',
                  'Girls Ministry (focused empowerment)',
                  'Leadership Development (capacity building)',
                  'Spiritual Nurturing (discipleship and building body of Christ)',
                  'Social Service & Community Development (practical engagement)',
                ].map((pill) => (
                  <div
                    key={pill}
                    className="px-3 py-2 rounded-full bg-focus-light border border-gray-100 text-gray-700 text-sm"
                  >
                    {pill}
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-gray-100 bg-white p-7">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-focus-navy">
                Leadership & Hierarchy Flow
              </h2>
              <p className="text-gray-600 mt-2">
                The governance and execution flow that connects the Supreme Authority to campus oversight and members.
              </p>
            </div>

            <ol className="space-y-3">
              {hierarchy.map((level, idx) => (
                <li key={level} className="flex items-start gap-3">
                  <div className="mt-0.5 w-9 h-9 rounded-2xl bg-focus-yellow/15 border border-focus-yellow/30 flex items-center justify-center shrink-0">
                    <span className="text-sm font-black text-focus-navy">
                      {idx + 1}
                    </span>
                  </div>
                  <div className="pt-0.5">
                    <p className="text-gray-700">
                      <span className="font-bold text-focus-navy">
                        Step:
                      </span>{' '}
                      {level}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 rounded-2xl bg-focus-light border border-gray-100 p-5">
              <h3 className="text-xl font-bold text-focus-navy mb-4">
                Donation Accounts
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'CBE', value: '1000360547168' },
                  { label: 'Awash', value: '013521704779401' },
                  { label: 'CBO', value: '1010400265428' },
                  { label: 'OB', value: '1100330900002' },
                ].map((acc) => (
                  <div
                    key={acc.label}
                    className="flex items-center justify-between gap-4 rounded-xl bg-white border border-gray-100 px-4 py-3"
                  >
                    <span className="font-semibold text-focus-navy">
                      {acc.label}:
                    </span>
                    <span className="font-mono text-gray-700 text-sm break-all">
                      {acc.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  )
}
