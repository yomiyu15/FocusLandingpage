import { BookOpen, Heart, Users } from 'lucide-react'

import { FellowshipPage } from '@/components/fellowship/FellowshipPage'

export default function FellowshipSpiritualNurturingPage() {
  return (
    <FellowshipPage
      title="Spiritual Nurturing"
      subtitle="Growing in faith, prayer, and relationship with Christ together."
      heroIcon={<BookOpen className="text-focus-yellow" />}
      cards={[
        {
          title: 'Deepen Your Faith',
          body: 'We guide students through Scripture, prayer, and reflection to cultivate a strong, personal relationship with God.',
          icon: <Heart size={20} />,
        },
        {
          title: 'Supportive Community',
          body: 'Small groups, mentorship, and fellowship provide encouragement, accountability, and opportunities for spiritual growth.',
          icon: <Users size={20} />,
        },
      ]}
    />
  )
}