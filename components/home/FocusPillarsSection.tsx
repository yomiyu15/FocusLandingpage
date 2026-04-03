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
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <Sparkles size={14} className="text-focus-yellow" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-focus-navy/50 uppercase">
                Our Strategic Core
              </span>
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-focus-navy tracking-tight leading-[1.15]">
              Transforming campuses <br />
              through <span className="text-focus-yellow">faith in action.</span>
            </h2>
          </div>
          
          <div className="max-w-xs lg:pb-1">
            <p className="text-gray-500 text-sm leading-relaxed border-l-2 border-focus-yellow/20 pl-6 font-medium">
              Five strategic focus areas dedicated to building Christ-like leaders across Ethiopia since 1998.
            </p>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Link 
                href={p.href}
                className="group relative flex flex-col justify-between min-h-[280px] bg-gray-50/50 border border-gray-100 p-7 rounded-[2rem] transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-focus-navy/5 hover:-translate-y-1"
              >
                <div>
                  <div className="mb-5">
                    <span className="text-[9px] font-bold text-focus-blue/40 uppercase tracking-widest group-hover:text-focus-blue transition-colors">
                      Pillar 0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-focus-navy leading-tight mb-3 group-hover:text-focus-blue transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs md:text-sm leading-relaxed text-gray-500 group-hover:text-gray-600 transition-colors">
                    {p.desc}
                  </p>
                </div>
                
                <div className="pt-6">
                  {/* Visual Progress Bar */}
                  <div className="relative h-1 w-full bg-gray-100 rounded-full overflow-hidden mb-4">
                    <div className="absolute inset-0 h-full w-4 bg-focus-yellow rounded-full transition-all duration-700 ease-in-out group-hover:w-full group-hover:bg-focus-blue" />
                  </div>
                  
                  <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-focus-navy/30 group-hover:text-focus-blue transition-all">
                    Learn More <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[400px] h-[400px] bg-focus-yellow/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
}