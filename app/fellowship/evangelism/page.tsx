import { Megaphone, Heart, MessageCircle } from 'lucide-react'

import { FellowshipPage } from '@/components/fellowship/FellowshipPage'

export default function FellowshipEvangelismPage() {
  return (
    <FellowshipPage
      title="Evangelism"
      subtitle="Sharing Christ with clarity and compassion—inviting students into Gospel hope."
      heroIcon={<Megaphone className="text-focus-yellow" />}
      cards={[
        {
          title: 'Witness with Courage',
          body: 'We help students speak about Christ naturally—grounded in Scripture, respectful dialogue, and real love.',
          icon: <Heart size={20} />,
        },
        {
          title: 'Invitation & Follow-up',
          body: 'Evangelism includes practical next steps: invitations to gatherings, follow-up conversations, and discipleship pathways.',
          icon: <MessageCircle size={20} />,
        },
      ]}
    />
  )
}

