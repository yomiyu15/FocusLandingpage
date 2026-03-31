import { Heart, Sparkles, MessageCircle } from 'lucide-react'

import { FellowshipPage } from '@/components/fellowship/FellowshipPage'

export default function FellowshipGirlsMinistryPage() {
  return (
    <FellowshipPage
      title="Girls Ministry"
      subtitle="Nurturing young women in Christ—growing in identity, faith, and purpose together."
      heroIcon={<Sparkles className="text-focus-yellow" />}
      cards={[
        {
          title: 'Identity in Christ',
          body: 'We help girls discover their true worth and identity in Christ—rooted in God’s love, truth, and purpose for their lives.',
          icon: <Heart size={20} />,
        },
        {
          title: 'Community & Discipleship',
          body: 'Through small groups, mentorship, and honest conversations, we build a safe space for growth, encouragement, and spiritual maturity.',
          icon: <MessageCircle size={20} />,
        },
      ]}
    />
  )
}