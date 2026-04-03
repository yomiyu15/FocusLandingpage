"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, Users, Target, Sparkles, CheckCircle2 } from "lucide-react";

export function HomeWhyPartnerSection() {
  const points = [
    { title: "National Movement", desc: "Structured systems with measurable impact across Ethiopia.", icon: Globe },
    { title: "Leadership Growth", desc: "Multiplying young leaders for Church and society.", icon: Users },
    { title: "Mission Focus", desc: "Evangelism and social service working for transformation.", icon: Target },
  ];

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
        
        {/* Visual Side */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          className="lg:col-span-6 relative"
        >
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
              fill
              alt="community outreach"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-focus-navy/40 to-transparent" />
          </div>

          {/* Floating Badge */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-6 -right-6 bg-white p-6 rounded-[2rem] shadow-xl border border-gray-100 max-w-[180px]"
          >
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={16} className="text-focus-yellow" />
              <p className="text-2xl font-bold text-focus-navy">100%</p>
            </div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight">
              Gospel Centered <br /> Leadership
            </p>
          </motion.div>
        </motion.div>

        {/* Content Side */}
        <div className="lg:col-span-6 space-y-10">
          <div className="relative pl-8">
            {/* Consistent Left Accent Border */}
            <div className="absolute left-0 top-2 bottom-2 w-1 rounded-full bg-gradient-to-b from-focus-yellow via-focus-yellow/70 to-focus-blue/80" />
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="text-[10px] font-bold tracking-[0.3em] text-focus-navy/50 uppercase">
                Collaboration
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold text-focus-navy tracking-tight leading-[1.15] mb-6">
              Why partner with <br />
              <span className="text-focus-yellow">FOCUS Ministry?</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
              Join a strategic effort to empower the next generation of leaders in Ethiopia through holistic campus ministry.
            </p>
          </div>

          <div className="space-y-4">
            {points.map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex gap-5 items-start p-6 rounded-3xl bg-gray-50/50 border border-transparent transition-all hover:bg-white hover:border-gray-100 hover:shadow-xl hover:shadow-focus-navy/5"
              >
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100 group-hover:bg-focus-navy group-hover:text-white transition-all duration-300">
                  <item.icon size={20} className="text-focus-yellow group-hover:text-focus-yellow transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-focus-navy mb-1 transition-colors group-hover:text-focus-blue">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-focus-blue/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
}