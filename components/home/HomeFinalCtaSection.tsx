"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HomeFinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 px-6 md:py-32">
      {/* 5% Navy Accent at the top to connect with the previous section's footer */}
      <div className="absolute top-0 left-0 right-0 h-[5%] bg-focus-navy" />

      {/* Background Accents */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-focus-yellow/5 blur-[120px]" />
      
      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[3.5rem] border border-gray-100 bg-white p-10 text-center shadow-[0_30px_70px_-20px_rgba(0,0,0,0.08)] md:p-20"
        >
          {/* Decorative Corner Gradients */}
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-focus-yellow/10 blur-3xl" />
          <div className="absolute -left-10 -bottom-10 h-64 w-64 rounded-full bg-focus-blue/10 blur-3xl" />

          <div className="relative z-10">
            {/* Small Label */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-8 inline-flex items-center gap-3 rounded-full bg-gray-50 px-6 py-2 border border-gray-100"
            >
              <Sparkles size={14} className="text-focus-yellow" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-focus-navy/60">
                Support the Mission
              </span>
            </motion.div>

            {/* Normalized Heading Size - Consistent with "Who We Are" */}
            <h2 className="mb-8 text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight text-focus-navy">
              Transforming lives and <br className="hidden md:block" />
              <span className="text-focus-yellow">communities</span> together.
            </h2>

            {/* Subtitle with Left Border Accent */}
            <div className="mx-auto mb-12 flex max-w-xl justify-center">
              <p className="border-l-2 border-focus-yellow/30 pl-6 text-left text-sm md:text-base font-medium leading-relaxed text-gray-500 md:text-center md:border-l-0 md:pl-0">
                Equipping students to become Christ-like leaders making a lasting impact across Ethiopia since 1998.
              </p>
            </div>

            {/* Action Buttons - Optimized for your specific color requests */}
            <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Button 
                asChild 
                className="group h-14 rounded-2xl bg-focus-yellow px-10 text-sm font-bold text-black shadow-xl shadow-focus-yellow/20 transition-all hover:bg-focus-yellow/90 active:scale-95"
              >
                <Link href="/donate" className="flex items-center gap-3">
                 Donate
                  <Heart size={16} className="fill-black text-black transition-transform group-hover:scale-110" />
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                className="h-14 rounded-2xl border-gray-200 bg-white px-10 text-sm font-bold text-focus-navy transition-all hover:bg-gray-50 hover:border-focus-blue/30 active:scale-95 shadow-sm"
              >
                <Link href="/contact" className="flex items-center gap-3">
                  Get in Touch 
                  <ArrowRight size={16} className="text-focus-blue" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Stripe - Matches the "95/5" theme */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-focus-yellow via-focus-blue to-focus-navy opacity-30" />
    </section>
  );
}