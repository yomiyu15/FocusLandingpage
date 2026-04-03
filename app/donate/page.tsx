"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import {
  Building2,
  Copy,
  Globe,
  CreditCard,
  Check,
  Shield,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type DonationFrequency = "one-time" | "monthly" | "quarterly" | "annually";

export default function DonatePage() {
  const [frequency, setFrequency] = useState<DonationFrequency>("one-time");
  const [intAmount, setIntAmount] = useState<string>("100");
  const [locAmount, setLocAmount] = useState<string>("1000");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"International" | "Local">("Local");

  const InternationalAmounts = [50, 100, 200, 500, 1000, 2000];
  const LocalAmounts = [100, 500, 1000, 5000, 10000, 20000];

  const bankAccounts = [
    { bank: "Commercial Bank of Ethiopia", acc: "1000360547168", logo: "/assets/cbe.png" },
    { bank: "Awash Bank", acc: "013521704779401", logo: "/assets/Awash.png" },
    { bank: "Cooperative Bank of Oromia", acc: "1010400265428", logo: "/assets/coop.png" },
    { bank: "Oromia Bank", acc: "1100330900002", logo: "/assets/oromia.png" },
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const inputClass = "w-full bg-gray-50 border-2 border-gray-100 rounded-xl px-4 py-3 text-sm text-focus-navy placeholder:text-gray-400 focus:bg-white focus:border-focus-yellow transition-all outline-none font-medium";
  const labelClass = "block text-[10px] font-black uppercase tracking-widest text-focus-navy/40 mb-1.5 ml-1";

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-focus-yellow selection:text-black">
      <Header />

      <main className="pt-16 pb-20 px-4 max-w-6xl mx-auto">
        {/* Compact Hero Section */}
        <div className="text-center mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-focus-yellow/10 border border-focus-yellow/20 mb-4"
          >
            <Sparkles size={12} className="text-focus-yellow" />
            <span className="text-[10px] font-black tracking-widest text-focus-navy uppercase">Support the Mission</span>
          </motion.div>
          <h1 className="text-3xl md:text-5xl font-black text-focus-navy tracking-tight mb-3">
            Your Donation <span className="text-focus-yellow">Matters</span>
          </h1>
          <p className="text-gray-500 font-bold text-sm max-w-2xl mx-auto leading-relaxed">
            Your generosity empowers Christian student fellowships across Ethiopia and beyond.
          </p>
        </div>

        {/* Unified Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-white rounded-2xl border border-gray-100 shadow-sm">
            {["Local", "International"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                  activeTab === tab 
                    ? "bg-focus-navy text-white shadow-lg" 
                    : "text-gray-400 hover:text-focus-navy"
                }`}
              >
                {tab === "Local" ? <CreditCard size={14} /> : <Globe size={14} />}
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Donation Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden"
          >
            <div className="bg-focus-navy p-8 text-center">
              <h2 className="text-xl font-bold text-white uppercase tracking-widest">
                {activeTab === "Local" ? "Secure Chapa Payment" : "International Giving"}
              </h2>
              <p className="text-focus-yellow/60 text-[10px] font-black uppercase tracking-[0.2em] mt-1">
                Step-by-step contribution
              </p>
            </div>

            <div className="p-8 space-y-8">
              {/* 01. Frequency (International Only) */}
              {activeTab === "International" && (
                <div>
                  <label className={labelClass}>01. Frequency</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {["one-time", "monthly", "quarterly", "annually"].map((f) => (
                      <button
                        key={f}
                        onClick={() => setFrequency(f as any)}
                        className={`py-2 text-[10px] font-black uppercase rounded-lg border-2 transition-all ${
                          frequency === f ? "border-focus-yellow bg-focus-yellow/5 text-focus-navy" : "border-gray-50 bg-gray-50 text-gray-400"
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* 02. Amount Selector (3 Columns per row) */}
              <div>
                <label className={labelClass}>{activeTab === "Local" ? "01. Amount (ETB)" : "02. Amount (USD)"}</label>
                <div className="grid grid-cols-3 gap-3">
                  {(activeTab === "Local" ? LocalAmounts : InternationalAmounts).map((amt) => {
                    const isSelected = (activeTab === "Local" ? locAmount : intAmount) === amt.toString();
                    return (
                      <button
                        key={amt}
                        onClick={() => activeTab === "Local" ? setLocAmount(amt.toString()) : setIntAmount(amt.toString())}
                        className={`py-4 text-sm font-black rounded-xl border-2 transition-all ${
                          isSelected ? "border-focus-navy bg-focus-navy text-white" : "border-gray-50 bg-gray-50 text-gray-400 hover:border-gray-200"
                        }`}
                      >
                        {activeTab === "International" && "$ "}{amt.toLocaleString()}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 03. Personal Info */}
              <div className="space-y-4">
                <label className={labelClass}>{activeTab === "Local" ? "02. Donor Details" : "03. Donor Details"}</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input placeholder="Full Name *" className={inputClass} />
                  <input placeholder="Email Address *" className={inputClass} />
                </div>
                {activeTab === "Local" && (
                  <textarea placeholder="Message of Encouragement (Optional)" rows={2} className={`${inputClass} resize-none`} />
                )}
              </div>

              <Button className="w-full h-16 rounded-2xl bg-focus-yellow text-black font-black uppercase tracking-widest hover:scale-[1.01] transition-transform shadow-lg shadow-focus-yellow/20">
                {activeTab === "Local" ? "Donate via Chapa" : "Process Donation"}
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </motion.div>

          {/* Bank Transfer Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-6 border-b border-gray-50 pb-4">
                <Building2 size={20} className="text-focus-yellow" />
                <h2 className="font-bold text-focus-navy uppercase tracking-wider text-sm">Direct Bank Transfer</h2>
              </div>

              <div className="space-y-3">
                {bankAccounts.map((acc, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleCopy(acc.acc, idx)}
                    className="w-full flex items-center justify-between p-4 rounded-xl border-2 border-gray-50 bg-gray-50/50 hover:bg-white hover:border-focus-yellow transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-lg p-1 border border-gray-100">
                        <img src={acc.logo} alt={acc.bank} className="w-full h-full object-contain" />
                      </div>
                      <div className="text-left">
                        <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{acc.bank}</p>
                        <p className="font-mono font-bold text-focus-navy text-xs">{acc.acc}</p>
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-white border border-gray-100 group-hover:border-focus-navy transition-colors">
                      {copiedIndex === idx ? <Check size={14} className="text-green-600" /> : <Copy size={14} className="text-gray-400" />}
                    </div>
                  </button>
                ))}
              </div>

              {/* Safety Note */}
              <div className="mt-8 p-5 rounded-2xl bg-focus-navy text-white relative overflow-hidden group">
                <Shield size={40} className="absolute -right-2 -bottom-2 opacity-10 group-hover:scale-110 transition-transform" />
                <p className="text-[10px] font-black text-focus-yellow uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Sparkles size={12} /> Verification Note
                </p>
                <p className="text-[11px] text-gray-300 leading-relaxed font-medium">
                  After transfer, please use your name as a reference. You may share a screenshot with our finance team for faster processing.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}