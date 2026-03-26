"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  CheckCircle,
  Heart,
  Zap,
  Building2,
  Copy,
  Lock,
  Globe,
  CreditCard,
  Check,
  Shield,
  Users,
  ArrowRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";

type DonationFrequency = "one-time" | "monthly" | "quarterly" | "annually";

export default function DonatePage() {
  const [frequency, setFrequency] = useState<DonationFrequency>("one-time");
  const [intAmount, setIntAmount] = useState<string>("100");
  const [locAmount, setLocAmount] = useState<string>("1000");
  const [donorType, setDonorType] = useState<"individual" | "organization">(
    "individual",
  );
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"International" | "Local">(
    "Local",
  );

  const InternationalAmounts = [50, 100, 200, 500, 1000, 2000];
  const LocalAmounts = [100, 500, 1000, 5000, 10000];

  const bankAccounts = [
    { bank: "Awash Bank", acc: "01322233344555", logo: "/assets/Awash.png" },
    {
      bank: "Commercial Bank of Ethiopia",
      acc: "1000022233447",
      logo: "/assets/cbe.png",
    },
    {
      bank: "Cooperative Bank of Oromia",
      acc: "102221160001350",
      logo: "/assets/coop.png",
    },
    { bank: "Dashen Bank", acc: "00254455566", logo: "/assets/dashen.png" },
    { bank: "Berhan Bank", acc: "2678899999", logo: "/assets/birhan.png" },
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-focus-yellow/30 text-focus-navy">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-12 md:py-20">
        {/* hero section */}
        <div className="text-center mb-8 space-y-3">
          <h1 className="text-2xl md:text-3xl font-black tracking-tight text-focus-navy">
            Support Focus
          </h1>
          <p className="text-black-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            your generosity empowers christian student fellowships across
            ethiopia and beyond
          </p>
        </div>

        {/* glassmorphism tab switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200 shadow-sm">
            <button
              onClick={() => setActiveTab("International")}
              className={`flex items-center gap-2.5 px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                activeTab === "International"
                  ? "bg-focus-navy text-white shadow-lg shadow-focus-navy/20 scale-105"
                  : "text-slate-400 hover:text-focus-navy"
              }`}
            >
              <Globe size={18} />
              <span>International</span>
            </button>
            <button
              onClick={() => setActiveTab("Local")}
              className={`flex items-center gap-2.5 px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                activeTab === "Local"
                  ? "bg-focus-navy text-white shadow-lg shadow-focus-navy/20 scale-105"
                  : "text-slate-400 hover:text-focus-navy"
              }`}
            >
              <CreditCard size={18} />
              <span>Local (ETB)</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* main Donation card */}
          <div className="lg:col-span-7 group">
            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden h-full">
              {/* dynamic header */}
              {/* ultra-clean header with solid focus-navy bg */}
              <div className="relative h-32 flex items-center justify-center bg-focus-navy">
                <div className="relative text-center">
                  <h2 className="text-2xl font-bold text-white mb-1">
                    {activeTab === "International"
                      ? "International Donation"
                      : "Local Donation"}
                  </h2>
                  <p className="text-slate-300 text-[10px] tracking-[0.2em] uppercase font-black">
                    {activeTab === "International"
                      ? "support from anywhere in the world"
                      : "fast & secure via chapa"}
                  </p>
                </div>
              </div>

              <div className="p-8 md:p-10 space-y-8">
                {/* frequency chips - only for International */}
                {activeTab === "International" && (
                  <div className="space-y-4">
                    <span className="text-[10px] font-black text-black-400 uppercase tracking-widest">
                      01. frequency
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {["one-time", "monthly", "quarterly", "annually"].map(
                        (f) => (
                          <button
                            key={f}
                            onClick={() => setFrequency(f as DonationFrequency)}
                            className={`px-5 py-2.5 text-xs font-bold rounded-full border transition-all ${
                              frequency === f
                                ? "bg-focus-navy border-focus-navy text-white shadow-md"
                                : "bg-slate-50 border-slate-200 text-black-500 hover:border-focus-navy/30"
                            }`}
                          >
                            {f}
                          </button>
                        ),
                      )}
                    </div>
                  </div>
                )}

                {/* amount selector */}
                <div className="space-y-4">
                  <span className="text-[10px] font-black text-black-400 uppercase tracking-widest">
                    {activeTab === "International"
                      ? "02. amount (usd)"
                      : "01. amount (etb)"}
                  </span>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                    {(activeTab === "International"
                      ? InternationalAmounts
                      : LocalAmounts
                    ).map((amt) => {
                      const isSelected =
                        (activeTab === "International"
                          ? intAmount
                          : locAmount) === amt.toString();
                      return (
                        <button
                          key={amt}
                          onClick={() =>
                            activeTab === "International"
                              ? setIntAmount(amt.toString())
                              : setLocAmount(amt.toString())
                          }
                          className={`py-4 text-sm font-black rounded-2xl border-2 transition-all ${
                            isSelected
                              ? "border-focus-navy bg-focus-navy/5 text-focus-navy shadow-inner"
                              : "border-slate-100 hover:border-slate-200 text-black-400"
                          }`}
                        >
                          {activeTab === "International" && "$"}
                          {amt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* form inputs */}
                <div className="space-y-4">
                  <span className="text-[10px] font-black text-black-400 uppercase tracking-widest">
                    {activeTab === "International"
                      ? "03. your info"
                      : "02. your info"}
                  </span>
                  <div className="grid gap-4">
                    <input
                      type="text"
                      placeholder="full name *"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:bg-white focus:border-focus-navy focus:ring-4 focus:ring-focus-navy/5 transition-all"
                    />
                    {activeTab === "International" ? (
                      <input
                        type="email"
                        placeholder="email address *"
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:bg-white focus:border-focus-navy focus:ring-4 focus:ring-focus-navy/5 transition-all"
                      />
                    ) : (
                      <textarea
                        placeholder="message of encouragement (optional)"
                        rows={3}
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:bg-white focus:border-focus-navy transition-all resize-none"
                      />
                    )}
                  </div>
                </div>

                <button className="w-full py-5 bg-focus-navy text-white font-black rounded-[1.25rem] hover:bg-slate-800 transition-all shadow-xl shadow-focus-navy/20 flex items-center justify-center gap-3 group active:scale-[0.98]">
                  <span className="uppercase tracking-[0.15em] text-sm">
                    {activeTab === "International"
                      ? "complete Donation"
                      : "donate via chapa"}
                  </span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* bank transfer sidebar - always visible */}
          <div className="lg:col-span-5 h-full">
            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl p-8 h-full">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-focus-yellow/10 flex items-center justify-center text-focus-navy">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <h3 className="font-black uppercase tracking-wider text-sm">
                      bank transfer
                    </h3>
                    <p className="text-[10px] text-black-400 font-bold uppercase tracking-tight">
                      direct ethiopian accounts
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {bankAccounts.map((account, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleCopy(account.acc, idx)}
                    className="w-full flex items-center justify-between p-5 rounded-2xl border border-slate-50 bg-slate-50/50 hover:bg-white hover:border-focus-yellow hover:shadow-lg hover:shadow-focus-yellow/10 transition-all text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={account.logo}
                        alt={account.bank}
                        className="w-10 h-10 object-contain rounded-lg bg-white "
                      />

                      <div>
                        <p className="text-[9px] font-black text-black-400 uppercase mb-1 tracking-widest">
                          {account.bank}
                        </p>
                        <p className="font-mono font-bold text-focus-navy tracking-wider text-sm">
                          {account.acc}
                        </p>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white border border-slate-100 text-black-300 group-hover:text-focus-navy group-hover:border-focus-navy/20 transition-colors shadow-sm">
                      {copiedIndex === idx ? (
                        <Check size={14} className="text-green-500" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-10 p-5 rounded-2xl bg-slate-900 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform duration-700">
                  <Shield size={60} />
                </div>
                <p className="text-[11px] font-bold text-focus-yellow uppercase mb-2 flex items-center gap-2">
                  <Sparkles size={12} /> tracker note
                </p>
                <p className="text-xs text-black-300 leading-relaxed font-medium">
                  after transfer, please use your name as reference. you can
                  also share a screenshot with our team to help us process your
                  gift faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
