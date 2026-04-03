import { PillarPage } from '@/components/fellowship/PillarPage'

export default function FellowshipSocialServicePage() {
  return (
    <PillarPage
      title="Social Service & Community Development"
      subtitle="Practical engagement through love, service, and development initiatives that meet real needs."
      imageUrl="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
      paragraphs={[
        'Social Service and Community Development is faith in action. We mobilize students to serve with compassion, support community needs, and advocate for justice with integrity.',
        'Through volunteerism, outreach programs, and community partnerships, FOCUS helps communities experience practical transformation that reflects the Gospel.',
        'Our goal is not only short-term service but also long-term stewardship—building trust, empowering people, and strengthening local relationships.',
      ]}
      keyPoints={[
        'Serving with compassion and practical care',
        'Community outreach and volunteer mobilization',
        'Environmental stewardship and social outreach',
        'Development support for tangible community needs',
      ]}
      accentLabel="Social Service"
    />
  )
}