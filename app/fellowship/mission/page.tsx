import { Target, Compass, Rocket } from 'lucide-react'

import { FellowshipPage } from '@/components/fellowship/FellowshipPage'

export default function FellowshipMissionPage() {
  return (
    <FellowshipPage
      title="Mission"
      subtitle="Preparing campus leaders to serve with purpose, build impact, and advance the Gospel Locally and globally."
      heroIcon={<Target className="text-focus-yellow" />}
      cards={[
        {
          title: 'Campus Leadership Development',
          body: 'Students are trained to plan, lead, and shepherd fellowship activities—growing confidence and responsibility.',
          icon: <Compass size={20} />,
        },
        {
          title: 'Gospel Outreach & Impact',
          body: 'We support mission-driven events that connect students, strengthen faith, and create lasting community on campus.',
          icon: <Rocket size={20} />,
        },
      ]}
    />
  )
}

