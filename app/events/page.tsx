import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: 'Weekly Prayer Meeting',
      date: 'Every Friday',
      location: 'Campus Fellowship Hall',
      description: 'A weekly prayer gathering for students and ministry teams.',
    },
    {
      title: 'Campus Outreach Day',
      date: 'April 18, 2026',
      location: 'Main Campus Grounds',
      description: 'Evangelism and community service event led by student volunteers.',
    },
    {
      title: 'Student Leadership Conference',
      date: 'May 10-12, 2026',
      location: 'Addis Ababa',
      description: 'Leadership and discipleship conference for student ministry leaders.',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="py-10 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="lg:col-span-2 text-center mb-2">
            <h1 className="text-3xl md:text-4xl font-bold text-focus-navy">Events & Calendar</h1>
            <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
              Upcoming ministry events, registrations, and highlights from past gatherings.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-focus-navy mb-5">Upcoming Events</h2>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <article key={event.title} className="rounded-xl border border-gray-100 bg-focus-light p-5">
                  <h3 className="text-lg font-bold text-focus-navy">{event.title}</h3>
                  <p className="text-sm text-focus-blue mt-1">{event.date} • {event.location}</p>
                  <p className="text-gray-600 mt-2">{event.description}</p>
                </article>
              ))}
            </div>
          </div>

          {/* Registration section intentionally removed as requested */}
        </div>

        <div className="max-w-6xl mx-auto mt-12">
          <h2 className="text-2xl font-bold text-focus-navy mb-5">Past Event Gallery</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Prayer Night', 'Outreach Service', 'Leadership Workshop'].map((item) => (
              <div key={item} className="rounded-xl border border-gray-100 bg-focus-light h-36 flex items-center justify-center text-focus-navy font-semibold">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

