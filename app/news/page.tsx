import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function NewsPage() {
  const updates = [
    {
      title: 'Campus Fellowship Expansion in Ethiopia',
      tag: 'Ministry Update',
      excerpt:
        'FOCUS launched new student fellowship groups and mentoring circles in additional campuses this semester.',
    },
    {
      title: 'Faith & Student Leadership: Practical Lessons',
      tag: 'Article',
      excerpt:
        'A practical reflection on leading with humility, consistency, and spiritual conviction in student ministry.',
    },
    {
      title: 'Student Leader Spotlight: Community Impact',
      tag: 'Spotlight',
      excerpt:
        'Highlighting student leaders who mobilized outreach and service projects in their Local communities.',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="py-10 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-focus-navy">News & Updates</h1>
          <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
            Stories, ministry progress, student life reflections, and leadership spotlights.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {updates.map((item) => (
            <article key={item.title} className="rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-md transition-shadow">
              <p className="text-xs font-semibold text-focus-blue uppercase tracking-wide">{item.tag}</p>
              <h2 className="text-xl font-bold text-focus-navy mt-2">{item.title}</h2>
              <p className="text-gray-600 mt-3 leading-relaxed">{item.excerpt}</p>
              <button type="button" className="mt-4 px-4 py-2 rounded-lg bg-focus-yellow text-focus-navy font-semibold hover:bg-focus-yellow/90 transition-colors">
                Read more
              </button>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

