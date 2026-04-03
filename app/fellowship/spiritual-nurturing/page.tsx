import { PillarPage } from '@/components/fellowship/PillarPage'

export default function FellowshipSpiritualNurturingPage() {
  return (
    <PillarPage
      title="Spiritual Nurturing"
      subtitle="Discipleship-driven growth in faith, prayer, and relationship with Christ together."
      imageUrl="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1600&auto=format&fit=crop"
      paragraphs={[
        'Spiritual Nurturing helps students deepen their relationship with Christ through Scripture, prayer, and guided reflection that strengthens faith in everyday campus life.',
        'We build supportive communities where accountability is gentle, growth is consistent, and prayer becomes a shared practice that sustains students through every season.',
        'As disciples grow, they help build the body of Christ—encouraging others, serving faithfully, and living out the Gospel with clarity and love.',
      ]}
      keyPoints={[
        'Scripture-centered discipleship',
        'Prayer teams and reflective practices',
        'Small groups for accountability and growth',
        'Building the body of christ through consistent faith',
      ]}
      accentLabel="Spiritual Nurturing"
    />
  )
}