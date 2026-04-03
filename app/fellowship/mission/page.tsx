import { PillarPage } from '@/components/fellowship/PillarPage'

export default function FellowshipMissionPage() {
  return (
    <PillarPage
      title="Mission"
      subtitle="Preparing campus leaders to serve with purpose, build impact, and advance the Gospel locally and globally."
      imageUrl="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
      paragraphs={[
        'Mission is where discipleship becomes action. FOCUS trains student leaders to serve with clear purpose and gospel-centered motivation across campuses.',
        'We support mission-driven events that connect students, strengthen fellowship, and create lasting community—so faith becomes visible through service and outreach.',
        'As leaders grow, we multiply capacity through mentoring, consistent training, and cross-campus collaboration that sustains impact beyond semesters.',
      ]}
      keyPoints={[
        'Campus leadership development',
        'Mission-driven gospel outreach',
        'Cross-campus coordination and collaboration',
        'Multiplication through mentoring and training',
      ]}
      accentLabel="Leadership Development"
    />
  )
}

