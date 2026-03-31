import { Globe, Users } from 'lucide-react'

import { FellowshipPage } from '@/components/fellowship/FellowshipPage'

export default function FellowshipSocialServicePage() {
  return (
    <FellowshipPage
      title="Social Service & Community Development"
      subtitle="Impacting our communities with love, service, and practical help."
      heroIcon={<Globe className="text-focus-yellow" />}
      cards={[
        {
          title: 'Serve with Compassion',
          body: 'We mobilize students to meet tangible needs, advocate for justice, and care for the marginalized.',
         
        },
        {
          title: 'Build Community',
          body: 'Through outreach, partnerships, and volunteer projects, we strengthen relationships and empower local communities.',
          icon: <Users size={20} />,
        },
      ]}
    />
  )
}