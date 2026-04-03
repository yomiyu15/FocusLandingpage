import { PillarPage } from '@/components/fellowship/PillarPage'

export default function FellowshipLeadershipPage() {
  return (
    <PillarPage
      title="Leadership Development"
      subtitle="Capacity building for students to lead with integrity, vision, and servant hearts."
      imageUrl="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
      paragraphs={[
        'Leadership Development trains students to lead in the spirit of Christ—combining clarity, discipline, and humility with a mission mindset for campus transformation.',
        'We build leadership capacity through practical training, mentoring, team coaching, and repeated opportunities to serve in real ministry responsibilities.',
        'As leaders grow, we focus on multiplication: strong teams, consistent fellowship rhythms, and the next generation of student servant leaders.',
      ]}
      keyPoints={[
        'Servant leadership and integrity',
        'Training for planning and team leadership',
        'Mentorship for fellows and teams',
        'Leadership multiplication across campuses',
      ]}
      accentLabel="Leadership Development"
    />
  )
}