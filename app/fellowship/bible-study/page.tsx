import { PillarPage } from '@/components/fellowship/PillarPage'

export default function FellowshipBibleStudyPage() {
  return (
    <PillarPage
      title="Bible Study"
      subtitle="Gospel-centered teaching that moves from understanding to transformation."
      imageUrl="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1600&auto=format&fit=crop"
      paragraphs={[
        'Bible Study is where faith becomes clear and practical. Students learn to interpret Scripture faithfully, then apply it to campus life with courage and humility.',
        'We train discussion leaders to teach with accuracy, lead with love, and disciple others through consistent weekly rhythms of study and reflection.',
        'As Scripture shapes hearts, students build lasting discipleship—deepening prayer, integrity, and mission-minded service.',
      ]}
      keyPoints={[
        'Scripture interpretation and application',
        'Leader training for clear teaching',
        'Weekly study rhythms and reflection',
        'Turning knowledge into discipleship',
      ]}
      accentLabel="Spiritual Nurturing"
    />
  )
}

