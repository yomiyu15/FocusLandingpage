import { PillarPage } from '@/components/fellowship/PillarPage'

export default function FellowshipFamilyPage() {
  return (
    <PillarPage
      title="Family"
      subtitle="Belonging that forms faith—students support one another through discipleship, prayer, and care."
      imageUrl="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1600&auto=format&fit=crop"
      paragraphs={[
        'FOCUS Family is the heartbeat of campus fellowship. It creates a belonging culture where spiritual growth is consistent and relationships are meaningful.',
        'We connect students through discipleship mentoring, shared prayer rhythms, and practical care—so everyone feels seen, supported, and strengthened.',
        'In every fellowship season, family becomes a testimony: students grow together and learn to serve with love, harmony, and compassion.',
      ]}
      keyPoints={[
        'Mentorship and discipleship support',
        'Prayer culture and community care',
        'Safe space for honest conversations',
        'Unity, love, and harmony on campus',
      ]}
      accentLabel="Fellowship Family"
    />
  )
}

