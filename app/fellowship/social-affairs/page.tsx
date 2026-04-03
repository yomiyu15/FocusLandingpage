import { PillarPage } from '@/components/fellowship/PillarPage'

export default function FellowshipSocialAffairsPage() {
  return (
    <PillarPage
      title="Social Affairs"
      subtitle="Intentional events and service that strengthen relationships and build unity."
      imageUrl="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1600&auto=format&fit=crop"
      paragraphs={[
        'Social Affairs strengthens fellowship through intentional community moments—events that celebrate growth, build friendship, and support students practically.',
        'We combine service and connection. When students show up for one another with kindness, relationships deepen and unity becomes a daily experience.',
        'In Social Affairs, every gathering is missional—creating opportunities for prayer, encouragement, and shared campus transformation.',
      ]}
      keyPoints={[
        'Community events that build belonging',
        'Service in action through practical outreach',
        'Unity, care, and encouragement for students',
        'Missional gatherings that create impact',
      ]}
      accentLabel="Social Affairs"
    />
  )
}

