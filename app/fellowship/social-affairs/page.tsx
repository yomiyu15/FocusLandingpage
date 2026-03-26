import { Users, CalendarDays, HandHeart } from 'lucide-react'

import { FellowshipPage } from '@/components/fellowship/FellowshipPage'

export default function FellowshipSocialAffairsPage() {
  return (
    <FellowshipPage
      title="Social Affairs"
      subtitle="Intentional events and service that strengthen relationships and build unity."
      heroIcon={<Users className="text-focus-yellow" />}
      cards={[
        {
          title: 'Community Events',
          body: 'From celebrations to academic support and mentorship days, social affairs help students connect and grow together.',
          icon: <CalendarDays size={20} />,
        },
        {
          title: 'Service in Action',
          body: 'Social affairs also include practical outreach—encouraging students to serve Locally and impact their communities.',
          icon: <HandHeart size={20} />,
        },
      ]}
    />
  )
}

