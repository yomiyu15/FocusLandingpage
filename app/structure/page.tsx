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
          <article className="rounded-2xl border border-gray-100 bg-focus-light p-7">
            <h1 className="text-3xl md:text-4xl font-bold text-focus-navy mb-4">FOCUS Structure & Status</h1>
            <h2 className="text-2xl font-bold text-focus-navy mb-4">Organizational Status</h2>
            <div className="space-y-4">
              {statusItems.map((item) => (
                <div key={item.title} className="rounded-xl bg-white border border-gray-100 p-4">
                  <h3 className="text-lg font-bold text-focus-navy">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-white border border-gray-100 p-4 mt-4">
              <h3 className="text-lg font-bold text-focus-navy">Core Ministry Pillars</h3>
              <ul className="mt-2 space-y-1 text-gray-700">
                <li>- Evangelism (large-scale outreach)</li>
                <li>- Girls Ministry (focused empowerment)</li>
                <li>- Leadership Development (capacity building)</li>
                <li>- Spiritual Nurturing (discipleship and building body of Christ)</li>
                <li>- Social Service & Community Development (practical engagement)</li>
              </ul>
            </div>
          </article>

          <article className="rounded-2xl border border-gray-100 bg-white p-7">
            <h2 className="text-2xl font-bold text-focus-navy mb-4">Leadership & Hierarchy Flow</h2>
            <ul className="space-y-2">
              {hierarchy.map((level, idx) => (
                <li key={level} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-2 h-2 w-2 rounded-full bg-focus-yellow" />
                  <span>
                    <strong className="text-focus-navy">{idx + 1}.</strong> {level}
                  </span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-focus-navy mt-8 mb-3">Donation Accounts</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <span className="font-semibold text-focus-navy">CBE:</span> 1000360547168
              </li>
              <li>
                <span className="font-semibold text-focus-navy">Awash:</span> 013521704779401
              </li>
              <li>
                <span className="font-semibold text-focus-navy">CBO:</span> 1010400265428
              </li>
              <li>
                <span className="font-semibold text-focus-navy">OB:</span> 1100330900002
              </li>
            </ul>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  )
}
