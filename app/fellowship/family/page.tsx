import { Heart, Users, Handshake } from 'lucide-react'

import { FellowshipPage } from '@/components/fellowship/FellowshipPage'

export default function FellowshipFamilyPage() {
  return (
    <FellowshipPage
      title="Family"
      subtitle="Belonging that forms faith—students support one another through discipleship, prayer, and care."
      heroIcon={<Heart className="text-focus-yellow" />}
      cards={[
        {
          title: 'Mentorship & Discipleship',
          body: 'Small groups and mentors help students grow spiritually, make wise decisions, and strengthen their walk with Christ.',
          icon: <Users size={20} />,
        },
        {
          title: 'Prayer & Community Care',
          body: 'We build a culture of prayer and practical support—showing up for one another in seasons of joy and need.',
          icon: <Handshake size={20} />,
        },
      ]}
    />
  )
}

