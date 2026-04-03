import { PillarPage } from '@/components/fellowship/PillarPage'

export default function FellowshipGirlsMinistryPage() {
  return (
    <PillarPage
      title="Girls Ministry"
      subtitle="Focused empowerment for young women in Christ—growing in identity, faith, and purpose together."
      imageUrl="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1600&auto=format&fit=crop"
      paragraphs={[
        'Girls Ministry focuses on identity and formation—helping girls discover their true worth in Christ and develop spiritually grounded confidence for campus life.',
        'Through small groups, mentorship, and guided discipleship, we build a safe and supportive community where courage grows and faith becomes practical.',
        'Empowerment doesn’t stop at encouragement: girls are equipped to lead, serve, and contribute to fellowships and society with purpose and love.',
      ]}
      keyPoints={[
        'Identity in Christ and spiritual formation',
        'Mentorship circles and community discipleship',
        'Leadership opportunities for young women',
        'Prayer-centered growth and encouragement',
      ]}
      accentLabel="Girls Ministry"
    />
  )
}