"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    title: "Evangelism",
    href: "/fellowship/evangelism",
    desc: "Large-scale outreach sharing the Gospel with compassion and clarity.",
  },
  {
    title: "Girls Ministry",
    href: "/fellowship/girls-ministry",
    desc: "Empowerment nurturing identity, faith, and purpose in young women.",
  },
  {
    title: "Leadership Development",
    href: "/fellowship/leadership-development",
    desc: "Equipping students to lead with integrity, vision, and service.",
  },
  {
    title: "Spiritual Nurturing",
    href: "/fellowship/spiritual-nurturing",
    desc: "Deep discipleship through Scripture, prayer, and community.",
  },
  {
    title: "Social Service",
    href: "/fellowship/social-service-community-development",
    desc: "Meeting real needs and strengthening campus communities.",
  },
];

export function FocusPillarsSection() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Subtle Glows to match Hero's "Floating Shapes" */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-focus-yellow/5 blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-focus-blue/5 blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Styled like Hero Text */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b border-gray-100 pb-12">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-focus-light border border-focus-blue/5 px-4 py-1.5 mb-6"
            >
              <Sparkles size={14} className="text-focus-yellow" />
              <span className="text-[11px] font-black tracking-[0.25em] text-focus-navy uppercase">
                Ministry Pillars
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-focus-navy tracking-tighter leading-[0.95]">
              Transforming campuses through <br />
              <span className="text-focus-yellow italic">faith in action.</span>
            </h2>
          </div>
          <p className="text-gray-500 text-lg max-w-sm leading-relaxed border-l-4 border-focus-yellow pl-6 italic">
            Five strategic focus areas dedicated to building Christ-like leaders across Ethiopia.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
            >
              <Link 
                href={p.href}
                className="group relative flex flex-col justify-between min-h-[300px] bg-slate-50/50 border border-gray-100 p-8 rounded-[2.5rem] transition-all duration-500 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2"
              >
                <div>
                  <h3 className="text-xl font-black text-focus-navy leading-tight mb-4 group-hover:text-focus-blue transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {p.desc}
                  </p>
                </div>
                
                <div className="pt-6">
                  {/* Modern Interaction Line */}
                  <div className="h-[2px] w-8 bg-focus-yellow mb-4 group-hover:w-full transition-all duration-700 ease-in-out rounded-full" />
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-focus-navy opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                    Explore Pillar <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}