"use client";

import { motion } from "framer-motion";
import { Target, Heart, Shield, CheckCircle2 } from "lucide-react";

const coreValues = [
  "Faithfulness", "Evangelism", "Prayer", "Love", "Compassion",
  "Harmony", "Servanthood", "Justice", "Discipleship", "Communitarian"
];

export function HomeWhoWeAreSection() {
  return (
  <section className="relative overflow-hidden bg-gray-100/50 py-24 px-6 md:py-32">
      {/* Background Accents */}
      <div className="pointer-events-none absolute -right-32 top-0 h-[400px] w-[400px] rounded-full bg-focus-yellow/5 blur-[120px]" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-[320px] w-[320px] rounded-full bg-focus-blue/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
          
          {/* Left: Introduction Block */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="h-px w-8 bg-focus-yellow" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-focus-navy/40">
                  Who We Are
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-focus-navy leading-[1.1] tracking-tight mb-8">
                A ministry built <br />
                on <span className="text-focus-yellow">faith</span> and purpose.
              </h2>
              <p className="text-lg text-gray-500 max-w-md leading-relaxed">
                Equipping young people for holistic transformation in campuses and communities across Ethiopia since 1998.
              </p>
            </motion.div>
          </div>

          {/* Right: Vision, Mission, Values Cards */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Vision & Mission Row */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Vision Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50/50 border border-gray-100 p-8 rounded-[2.5rem] hover:bg-white hover:shadow-xl transition-all duration-500"
              >
                <div className="h-10 w-10 bg-focus-yellow/10 rounded-2xl flex items-center justify-center text-focus-yellow mb-6">
                  <Target size={22} />
                </div>
                <h3 className="text-xl font-bold text-focus-navy mb-4 uppercase tracking-wider">Vision</h3>
                <p className="text-sm leading-relaxed text-gray-600 font-medium">
                  We envision a generation transformed by Christ, empowered as agents and leaders of positive change.
                </p>
              </motion.div>

              {/* Mission Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gray-50/50 border border-gray-100 p-8 rounded-[2.5rem] hover:bg-white hover:shadow-xl transition-all duration-500"
              >
                <div className="h-10 w-10 bg-focus-blue/10 rounded-2xl flex items-center justify-center text-focus-blue mb-6">
                  <Heart size={22} />
                </div>
                <h3 className="text-xl font-bold text-focus-navy mb-4 uppercase tracking-wider">Mission</h3>
                <p className="text-sm leading-relaxed text-gray-600 font-medium">
                  Providing holistic service for students, proclaiming the Gospel of Jesus Christ for all nations and multiplying disciples.
                </p>
              </motion.div>
            </div>

            {/* Core Values Full Width Card - OPTIMIZED FOR VISIBILITY */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-focus-navy p-10 rounded-[2.5rem] text-white relative overflow-hidden group shadow-2xl shadow-focus-navy/20"
            >
              {/* Decorative Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-focus-yellow/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="flex items-center gap-3 mb-10">
                <Shield className="text-focus-yellow" size={24} />
                <h3 className="text-2xl font-bold tracking-tight uppercase tracking-widest text-white">Core Values</h3>
              </div>

              {/* Optimized Values Grid: Changed to bold, white text for maximum contrast */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-y-6 gap-x-4">
                {coreValues.map((value, idx) => (
                  <div key={idx} className="flex items-center gap-2 group/value cursor-default">
                    <CheckCircle2 size={16} className="text-focus-yellow opacity-60 group-hover/value:opacity-100 group-hover:scale-110 transition-all duration-300" />
                    <span className="text-[12px] font-bold uppercase tracking-widest text-white/90 group-hover/value:text-white transition-colors duration-300">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}