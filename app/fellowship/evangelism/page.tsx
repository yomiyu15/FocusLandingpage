import { Heart, MessageCircle, Zap, ShieldCheck } from 'lucide-react'
import { FellowshipPage } from '@/components/fellowship/FellowshipPage'

export default function FellowshipEvangelismPage() {
  const imageUrl = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop";

  return (
    <div style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <FellowshipPage
        title="Evangelism"
        subtitle="Sharing Christ with clarity and compassion—inviting students into Gospel hope."
        /* Ensure FellowshipPage uses this prop to render the <img> or background */

        heroClassName="relative py-40 flex flex-col items-center justify-center text-center text-white bg-black/60"
        cards={[
          {
            title: 'Bold Conversations',
            body: 'We equip you to move beyond small talk and engage in meaningful spiritual dialogue with your peers.',
            icon: <MessageCircle size={28} className="text-blue-500" />,
         
          },
          {
            title: 'Compassionate Witness',
            body: 'Sharing the Gospel isn’t a project—it’s an overflow of love. We focus on listening first and speaking second.',
            icon: <Heart size={28} className="text-red-500" />,
            
          },
          {
            title: 'Equipped to Answer',
            body: 'Get the tools you need to answer tough questions about faith, science, and the reliability of Scripture.',
            icon: <ShieldCheck size={28} className="text-emerald-500" />,
          
          },
          {
            title: 'Immediate Impact',
            body: 'Join our weekly campus outreach where we put faith into action through service and open invitation.',
            icon: <Zap size={28} className="text-amber-500" />,
           
          },
        ]}
        layout="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto"
        sectionPadding="px-6 py-24 bg-gray-50/90"
      />
    </div>
  )
}