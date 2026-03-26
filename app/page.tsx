"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  ArrowRight,
  Sparkles,
  Globe,
  Users,
  Target,
  Heart,
  Shield,
  BookOpen,
  Megaphone,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=2000&q=80",
    title: "Christian University Students",
    subtitle:
      "Fellowship rooted in the Gospel—discipleship, community, and mission on every campus.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=2000&q=80",
    title: "Campus Impact",
    subtitle:
      "Transforming lives and building leaders in every university we reach.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=2000&q=80",
    title: "Faithful Community",
    subtitle:
      "A legacy of intentional ministry and gospel-centered fellowship.",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const fellowshipItems = [
    {
      href: "/fellowship/family",
      title: "Family",
      description:
        "Belonging through shared discipleship, mentorship, and prayer.",
      icon: Heart,
    },
    {
      href: "/fellowship/bible-study",
      title: "Bible Study",
      description:
        "Gospel-centered Scripture teaching and practical application.",
      icon: BookOpen,
    },
    {
      href: "/fellowship/evangelism",
      title: "Evangelism",
      description: "Share Christ with clarity, compassion, and courage.",
      icon: Megaphone,
    },
    {
      href: "/fellowship/mission",
      title: "Mission",
      description:
        "Train campus leaders to live missionally and serve with purpose.",
      icon: Target,
    },
    {
      href: "/fellowship/social-affairs",
      title: "Social Affairs",
      description: "Intentional events and service that strengthen community.",
      icon: Users,
    },
  ] as const;

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      6000,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* HERO SECTION */}
      <section className="relative h-[90vh] min-h-[650px] flex items-center justify-center overflow-hidden bg-focus-light">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentSlide}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
            >
              <Image
                src={slides[currentSlide].image}
                alt={`Slide ${currentSlide}`}
                fill
                priority
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-focus-navy/10 via-focus-yellow/10 to-white/90 backdrop-blur-[2px]" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Floating shapes */}
        <div className="absolute top-10 left-[-4rem] w-96 h-96 bg-focus-yellow/10 blur-[120px] animate-slow-spin rounded-full" />
        <div className="absolute bottom-20 right-[-6rem] w-80 h-80 bg-focus-blue/10 blur-[100px] animate-spin-slow rounded-full" />

        {/* Content */}
        <div className="relative z-10 w-full px-6 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="text-center lg:text-left">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.65 }}
                  className="space-y-6"
                >
                  <Badge className="bg-white/85 text-focus-navy border-gray-200 backdrop-blur-md py-1.5 px-4">
                    <Sparkles size={12} className="mr-2 text-focus-yellow" />{" "}
                    Since 1998
                  </Badge>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-focus-navy leading-tight tracking-tight">
                    FOCUS
                    <span className="block text-focus-yellow mt-2">
                      {slides[currentSlide].title}
                    </span>
                  </h1>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-lg sm:text-xl text-gray-700 max-w-2xl leading-relaxed"
                  >
                    {slides[currentSlide].subtitle}
                  </motion.p>

                  <div className="flex justify-center lg:justify-start gap-4 pt-4 flex-wrap">
                    <Button
                      asChild
                      className="bg-focus-yellow text-focus-navy font-bold px-8 h-12 rounded-xl hover:bg-focus-yellow/90 hover:scale-[1.02] transition"
                    >
                      <Link href="/donate" className="flex items-center gap-2">
                        Donate <ArrowRight size={18} />
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="border-focus-blue/30 text-focus-navy bg-white/70 hover:bg-white hover:text-focus-navy px-8 h-12 rounded-xl"
                    >
                      <Link href="/partner">Partner</Link>
                    </Button>
                  </div>

                  <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 pt-3">
                    {[
                      { value: "50+", label: "Campuses" },
                      { value: "10K+", label: "Students Reached" },
                      { value: "500+", label: "Student Leaders" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-xl bg-white/80 border border-white/70 px-3 py-3 text-center backdrop-blur-sm"
                      >
                        <p className="text-focus-blue font-black text-lg">
                          {stat.value}
                        </p>
                        <p className="text-[11px] text-gray-600 font-semibold">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 -left-32 w-96 h-96 bg-focus-yellow/10 blur-[120px] rotate-12" />
        <div className="absolute bottom-0 -right-32 w-96 h-96 bg-focus-blue/10 blur-[150px] -rotate-6" />

        <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Who We Are
            </h2>
            <div className="w-20 h-1.5 bg-focus-yellow mx-auto rounded-full" />
            <p className="text-gray-600 text-lg max-w-3xl mx-auto pt-4 leading-relaxed">
              We are a vibrant community of students and professionals dedicated
              to making the gospel visible on every campus. Our mission is
              rooted in fellowship, discipleship, and transformative leadership.
            </p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 relative z-10">
          {[
            {
              title: "Our Mission",
              icon: Heart,
              desc: "To reach every student with the love of Christ and build a foundation for lifelong faith.",
            },
            {
              title: "Our Values",
              icon: Shield,
              desc: "Integrity, community, and excellence in everything we do to honor our calling.",
            },
            {
              title: "Our Method",
              icon: BookOpen,
              desc: "Small groups, campus-wide events, and one-on-one mentorship that changes lives.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03, y: -4 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-shadow group"
            >
              <div className="w-14 h-14 rounded-2xl bg-focus-yellow/15 flex items-center justify-center mb-6 group-hover:bg-focus-yellow transition-colors">
                <item.icon
                  className="text-focus-yellow group-hover:text-focus-navy transition-colors"
                  size={28}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY PARTNER SECTION */}
      <section className="py-24 px-6 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 -left-32 w-96 h-96 bg-focus-yellow/10 blur-[120px] rotate-12" />
        <div className="absolute bottom-0 -right-32 w-96 h-96 bg-focus-blue/10 blur-[150px] -rotate-6" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-focus-yellow/10 rounded-[2rem] -z-10 rotate-2" />
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
              width={600}
              height={500}
              alt="community"
              className="rounded-3xl shadow-2xl object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">
              Why Partner With Us?
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Global Impact",
                  desc: "500+ chapters across 75+ countries.",
                  icon: Globe,
                },
                {
                  title: "Future Leaders",
                  desc: "Equipping students to lead with faith.",
                  icon: Users,
                },
                {
                  title: "Missional Focus",
                  desc: "Every contribution fuels real impact.",
                  icon: Target,
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-focus-yellow" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[3rem] bg-gradient-to-r from-focus-blue/10 via-focus-yellow/15 to-white text-focus-navy p-12 md:p-24 text-center relative overflow-hidden border border-gray-100"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-focus-yellow/10 blur-[120px] -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-focus-yellow/10 blur-[80px] -ml-20 -mb-20" />

            <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10 leading-tight">
              Let’s Build the Future <br />
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 relative z-10">
              Your partnership enables us to support students in their journey
              of faith and leadership. Every gift makes a difference.
            </p>

            <div className="flex justify-center gap-6 flex-wrap relative z-10">
              <Button
                asChild
                className="bg-focus-yellow text-focus-navy font-bold h-14 px-12 rounded-2xl hover:scale-[1.02] transition-transform text-lg shadow-sm"
              >
                <Link href="/donate">Donate</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-focus-blue/30 text-focus-navy bg-white/70 h-14 px-12 rounded-2xl hover:bg-white transition-all text-lg"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
