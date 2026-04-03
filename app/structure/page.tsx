"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LayoutGrid, Activity, MapPin, Sparkles } from "lucide-react";

export default function StructurePage() {
  const statusItems = [
    {
      title: "Legal Status",
      desc: "Recognized and functioning campus ministry, collaborating with stakeholders.",
      icon: Activity,
    },
    {
      title: "Operational Status",
      desc: "Over 30,000 members across Ethiopia engaging in fellowships and evangelism.",
      icon: MapPin,
    },
    {
      title: "Structural Capacity",
      desc: "Structured into 88 fellowships, 11 clusters, and 7 functional departments.",
      icon: LayoutGrid,
    },
  ];

  const hierarchy = [
    { level: "General Assembly", role: "Supreme Authority" },
    { level: "Board of Directorates", role: "Policy & Governance" },
    { level: "National Office", role: "Execution & Management" },
    { level: "Cluster Council", role: "Regional Coordination" },
    { level: "Cluster Coordinator", role: "Operational Leadership" },
    { level: "Fellowship Leaders", role: "Campus Oversight" },
    { level: "Team Leaders", role: "Small Group Leaders" },
    { level: "Members", role: "Foundation Base" },
  ];

  const pillars = [
    "Evangelism",
    "Girls Ministry",
    "Leadership Development",
    "Spiritual Nurturing",
    "Social Service",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={16} className="text-focus-yellow" />
              <span className="text-xs font-bold tracking-widest text-focus-navy/60 uppercase">
                Ministry Blueprint
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-focus-navy">
              Structure of FOCUS
            </h1>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Status Grid */}
            <div className="lg:col-span-7 space-y-8">
              <div className="grid sm:grid-cols-2 gap-5">
                {statusItems.map((item) => (
                  <article
                    key={item.title}
                    className="p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-shadow"
                  >
                    <div className="inline-flex p-2 rounded-lg bg-focus-yellow/20 text-focus-blue mb-4">
                      <item.icon size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-focus-navy mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </article>
                ))}

                {/* Growth Stage Card */}
                <article className="sm:col-span-2 p-8 rounded-2xl bg-focus-navy text-white">
                  <h3 className="text-xl font-bold mb-3">Growth Stage</h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    Strategic expansion phase, scaling outreach while
                    strengthening leadership pipelines and long-term
                    sustainability across the nation.
                  </p>
                </article>
              </div>

              {/* Pillars Section */}
              <div className="p-8 rounded-2xl border border-gray-100 bg-focus-light">
                <h3 className="text-xl font-bold text-focus-navy mb-6">
                  Programmatic Implementation
                </h3>
                <div className="flex flex-wrap gap-3">
                  {pillars.map((pill) => (
                    <span
                      key={pill}
                      className="px-4 py-2 rounded-xl bg-white text-sm font-semibold text-focus-navy border border-gray-100 shadow-sm"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Hierarchy Flow */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-focus-navy mb-2">
                  Governance Flow
                </h2>
                <p className="text-sm text-gray-500 mb-8">
                  Leadership execution from authority to campus level.
                </p>

                <div className="space-y-6 relative">
                  {/* Vertical Connecting Line */}
                  <div className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-gray-100" />

                  {hierarchy.map((item) => (
                    <div
                      key={item.level}
                      className="relative flex items-start gap-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-focus-yellow flex items-center justify-center shrink-0 z-10 border-4 border-white shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-focus-navy" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-focus-navy">
                          {item.level}
                        </span>
                        <span className="text-[11px] uppercase tracking-wider text-gray-500 font-medium">
                          {item.role}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}