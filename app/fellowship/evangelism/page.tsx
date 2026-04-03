import { PillarPage } from '@/components/fellowship/PillarPage'

export default function FellowshipEvangelismPage() {
  const imageUrl =
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop'

  return (
    <PillarPage
      title="Evangelism"
      subtitle="Sharing Christ with clarity, compassion, and courage—inviting students into Gospel hope."
      imageUrl={imageUrl}
      paragraphs={[
        'Evangelism at FOCUS is large-scale outreach through campus conversations, community invitations, and gospel-centered events that help students encounter Jesus with confidence.',
        'We equip Christian students to witness naturally—grounded in Scripture, led by prayer, and expressed with kindness so that every interaction becomes an opportunity for transformation.',
        'Follow-up is intentional: new believers are connected to discipleship pathways and fellowship rhythms so decisions grow into lifelong faith.',
      ]}
      keyPoints={[
        'Large-scale outreach initiatives',
        'Gospel conversations with compassion',
        'Training for courageous and respectful witnessing',
        'Immediate follow-up through fellowships and discipleship',
      ]}
      accentLabel="All core ministry pillars"
    />
  )
}