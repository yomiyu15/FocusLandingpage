"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { donateButtonClass } from "@/lib/ui";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=2000&q=80",
    title: "Holistic Transformation",
    subtitle: "Equipping and mobilizing students for spiritual growth, social responsibility, and mission-driven leadership.",
  },
  {
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=2000&q=80",
    title: "Campus Impact",
    subtitle: "Serving campuses through evangelism, discipleship, leadership development, and social outreach.",
  },
  {
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=2000&q=80",
    title: "Christ-Like Leaders",
    subtitle: "Developing spiritually mature and socially engaged young leaders since 1998 GC.",
  },
];

export function HomeHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[700px] flex items-center overflow-hidden bg-focus-navy">
      {/* Background Image Logic */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Image
              src={slides[currentSlide].image}
              alt="Hero Background"
              fill
              priority
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-focus-navy via-focus-navy/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-focus-navy/80 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-20 w-full px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
                exit: { opacity: 0, y: -15 }
              }}
            >
              {/* Badge */}
              <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                <Badge className="bg-focus-yellow text-focus-navy hover:bg-focus-yellow border-none py-2 px-4 mb-6 rounded-full shadow-lg">
                  <Sparkles size={14} className="mr-2" /> 
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">25+ Years of Ministry</span>
                </Badge>
              </motion.div>

              {/* Reduced & Normalized Heading */}
              <motion.h1 
                variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                className="text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
              >
                FOCUS on <br />
                <span className="text-focus-yellow block mt-1">{slides[currentSlide].title}</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                className="text-base sm:text-lg text-white/70 font-medium max-w-xl mb-10 leading-relaxed"
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              {/* Actions */}
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                className="flex flex-col sm:flex-row gap-4 mb-14"
              >
                <Button asChild size="lg" className={cn("h-14 rounded-2xl px-10 text-base font-bold transition-all hover:shadow-xl hover:shadow-focus-yellow/10", donateButtonClass)}>
                  <Link href="/donate" className="flex items-center gap-2">
                    Donate <Heart size={18} className="fill-current" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-14 rounded-2xl px-10 text-base font-bold border-white/20 text-white bg-white/5 backdrop-blur-md hover:bg-white hover:text-focus-navy transition-all"
                >
                  <Link href="/partner" className="flex items-center gap-2">
                    Partner With Us <ArrowRight size={18} />
                  </Link>
                </Button>
              </motion.div>

              {/* Stats Grid */}
              <motion.div 
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                className="grid grid-cols-3 gap-6 max-w-sm border-t border-white/10 pt-8"
              >
                {[
                  { value: "88+", label: "Fellowships" },
                  { value: "30k", label: "Students" },
                  { value: "11", label: "Clusters" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-focus-yellow font-bold text-2xl mb-0.5">{stat.value}</p>
                    <p className="text-[9px] text-white/40 font-bold uppercase tracking-[0.2em]">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className="relative h-1 w-12 bg-white/10 rounded-full overflow-hidden"
          >
            <div 
              className={cn(
                "absolute inset-0 bg-focus-yellow transition-transform duration-[6000ms] ease-linear origin-left",
                currentSlide === i ? "scale-x-100" : "scale-x-0"
              )} 
            />
          </button>
        ))}
      </div>
    </section>
  );
}