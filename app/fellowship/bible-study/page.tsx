import { BookOpen, GraduationCap } from 'lucide-react'

import { FellowshipPage } from '@/components/fellowship/FellowshipPage'

export default function FellowshipBibleStudyPage() {
  return (
    <FellowshipPage
      title="Bible Study"
      subtitle="Gospel-centered teaching that moves from understanding to transformation."
      heroIcon={<BookOpen className="text-focus-yellow" />}
      cards={[
        {
          title: 'Scripture for Real Life',
          body: 'Students learn to interpret Scripture faithfully and apply it to campus conversations, habits, and decisions.',
          icon: <BookOpen size={20} />,
        },
        {
          title: 'Training for Leaders',
          body: 'We equip discussion leaders to teach clearly, serve humbly, and disciple others through consistent study.',
          icon: <GraduationCap size={20} />,
        },
      ]}
    />
  )
}

