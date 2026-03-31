import { Star, Users, Target } from 'lucide-react'

import { FellowshipPage } from '@/components/fellowship/FellowshipPage'

export default function FellowshipLeadershipPage() {
  return (
    <FellowshipPage
      title="Leadership Development"
      subtitle="Equipping students to lead with integrity, vision, and servant hearts."
      heroIcon={<Star className="text-focus-yellow" />}
      cards={[
        {
          title: 'Serve with Vision',
          body: 'We guide students to lead with purpose, clarity, and humility, reflecting Christ in every decision.',
          icon: <Target size={20} />,
        },
        {
          title: 'Empower & Mentor',
          body: 'Leadership includes mentoring others, building strong teams, and fostering a culture of growth and encouragement.',
          icon: <Users size={20} />,
        },
      ]}
    />
  )
}