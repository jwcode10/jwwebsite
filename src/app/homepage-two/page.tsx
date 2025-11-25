"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  IconLock, 
  IconShield, 
  IconUser, 
  IconChevronDown, 
  IconChevronUp,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandDiscord,
  IconBrandApple,
  IconBrandWindows
} from "@tabler/icons-react";

export default function HomepageTwo() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("daily-summaries");

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Abstract gradient background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/bg-img/65b226bb6bd2cce6a9eb412e_bg-blue-03_laptop.webp" 
            alt="" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black"></div>
        </div>

        <div className="container-custom relative z-10 text-center py-32">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-8 max-w-5xl mx-auto">
            Never be unprepared again, with AI that works everywhere you do.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Capture every important insight, discussion, or task from effortlessly and get a powerful AI assistant that works for you, every day.
          </p>
          <button className="bg-[#FDC449] text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#FDC449]/90 transition-colors mb-16">
            Get Started
          </button>

          {/* Trusted By Logos */}
          <div className="mt-20">
            <p className="text-sm text-gray-400 mb-8">Trusted by</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 grayscale">
              <div className="text-2xl font-bold text-white">Google</div>
              <div className="text-2xl font-bold text-white">Snapchat</div>
              <div className="text-2xl font-bold text-white">Roblox</div>
              <div className="text-2xl font-bold text-white">Amazon</div>
              <div className="text-2xl font-bold text-white">Microsoft</div>
              <div className="text-2xl font-bold text-white">Salesforce</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase - Overview */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/bg-img/65b226bb6bd2cce6a9eb412e_bg-blue-03_laptop.webp" 
            alt="" 
            className="w-full h-full object-cover opacity-20 blur-3xl"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="relative max-w-6xl mx-auto">
            <div className="bg-black/80 backdrop-blur-md rounded-2xl border border-white/10 p-8 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-[#FDC449] rounded-full mx-auto mb-4 animate-pulse"></div>
                  <p className="text-gray-400 text-sm">Timeline Interface</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 1: Capturing Important Information */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-20 max-w-4xl mx-auto">
            Your day is overwhelming - Highlight captures everything that matters for you.
          </h2>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column */}
            <div>
              <div className="relative mb-6">
                <div className="bg-black/80 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-2xl">
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center relative">
                    <div className="absolute top-4 left-4 bg-black/60 rounded-lg px-4 py-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-white text-sm font-mono">21:02</span>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 border-2 border-white/30 rounded-full mx-auto mb-2"></div>
                      <p className="text-gray-400 text-xs">Recording Interface</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-xs text-white">GM</span>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-xs text-white">Z</span>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-xs text-white">S</span>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-xs text-white">MS</span>
                </div>
              </div>
              <p className="text-white text-center md:text-left">
                Record meetings, calls & everything else. Highlight captures all your conversations, so you can focus on them.
              </p>
            </div>

            {/* Right Column */}
            <div>
              <div className="relative mb-6">
                <div className="bg-black/80 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-2xl">
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/90 rounded-lg p-6 w-80 border border-white/20">
                        <h3 className="text-white font-semibold mb-4">Add Note to My Day</h3>
                        <textarea 
                          className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white text-sm mb-4 resize-none"
                          placeholder="What's on your mind?"
                          rows={3}
                        ></textarea>
                        <div className="flex gap-3">
                          <button className="flex-1 bg-[#FDC449] text-black px-4 py-2 rounded-lg font-medium text-sm hover:bg-[#FDC449]/90">
                            Add to My Day
                          </button>
                          <button className="px-4 py-2 text-gray-400 text-sm hover:text-white">
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-xs text-white">GD</span>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-xs text-white">N</span>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-xs text-white">F</span>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-xs text-white">VS</span>
                </div>
              </div>
              <p className="text-white text-center md:text-left">
                Effortlessly capture what's on your mind. Quickly capture notes, ideas, and tasks from any app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-20 bg-black">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            We're serious about privacy.
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Highlight is built with privacy at its core. Your data is yours, and we'll never share it.
          </p>
          <button className="bg-[#FDC449] text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#FDC449]/90 transition-colors mb-16">
            Learn more
          </button>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconLock className="w-8 h-8 text-[#FDC449]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Encrypted data</h3>
              <p className="text-gray-400">
                All your data is encrypted at rest and in transit.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconUser className="w-8 h-8 text-[#FDC449]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Private by design</h3>
              <p className="text-gray-400">
                Highlight is built to be private by default. You control your data.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconShield className="w-8 h-8 text-[#FDC449]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Secure infrastructure</h3>
              <p className="text-gray-400">
                We use industry-leading security practices to protect your data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Summary Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/bg-img/65b226bb6bd2cce6a9eb412e_bg-blue-03_laptop.webp" 
            alt="" 
            className="w-full h-full object-cover opacity-20 blur-3xl"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <p className="text-[#FDC449] text-sm font-semibold uppercase tracking-wide mb-4">Your day, in one place.</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 max-w-4xl mx-auto">
              Everything you need to know about your day, in one place.
            </h2>
          </div>

          {/* Tabbed Interface */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab("daily-summaries")}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeTab === "daily-summaries"
                  ? "bg-[#FDC449] text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              Daily summaries
            </button>
            <button
              onClick={() => setActiveTab("meeting-recaps")}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeTab === "meeting-recaps"
                  ? "bg-[#FDC449] text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              Meeting recaps
            </button>
            <button
              onClick={() => setActiveTab("insights")}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeTab === "insights"
                  ? "bg-[#FDC449] text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              Insights
            </button>
          </div>

          {/* UI Overlay */}
          <div className="relative max-w-6xl mx-auto">
            <div className="bg-black/80 backdrop-blur-md rounded-2xl border border-white/10 p-8 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-8 flex flex-col">
                <h3 className="text-white text-2xl font-semibold mb-6">Daily Summary</h3>
                <div className="flex-1 space-y-4 overflow-y-auto">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FDC449] rounded-full mt-2"></div>
                    <p className="text-white">Meetings attended: 4</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FDC449] rounded-full mt-2"></div>
                    <p className="text-white">Tasks completed: 12</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FDC449] rounded-full mt-2"></div>
                    <p className="text-white">Key decisions made: 3</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FDC449] rounded-full mt-2"></div>
                    <p className="text-white">Action items: 8</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote/Testimonial Section */}
      <section className="py-20 bg-black text-center">
        <div className="container-custom max-w-4xl mx-auto">
          <p className="text-2xl md:text-3xl text-white italic mb-4">
            "Highlight's combination of automation and on-screen content allows users to utilize AI better"
          </p>
          <p className="text-gray-400">TC TechCrunch</p>
        </div>
      </section>

      {/* Search Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/bg-img/65b226bb6bd2cce6a9eb412e_bg-blue-03_laptop.webp" 
            alt="" 
            className="w-full h-full object-cover opacity-20 blur-3xl"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <p className="text-[#FDC449] text-sm font-semibold uppercase tracking-wide mb-4">Find what matters.</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 max-w-4xl mx-auto">
              Effortlessly search through everything Highlight captures.
            </h2>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="bg-black/80 backdrop-blur-md rounded-2xl border border-white/10 p-8 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-8 flex flex-col">
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Search for anything..."
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FDC449]"
                  />
                </div>
                <div className="flex-1 space-y-3 overflow-y-auto">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-1">Meeting Notes - Q4 Planning</h4>
                    <p className="text-gray-400 text-sm mb-2">Dec 15, 2023</p>
                    <p className="text-gray-300 text-sm">Discussed quarterly goals and team objectives...</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-1">Project Update - Feature Launch</h4>
                    <p className="text-gray-400 text-sm mb-2">Dec 14, 2023</p>
                    <p className="text-gray-300 text-sm">Reviewed launch timeline and marketing strategy...</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h4 className="text-white font-semibold mb-1">Client Call - Requirements</h4>
                    <p className="text-gray-400 text-sm mb-2">Dec 13, 2023</p>
                    <p className="text-gray-300 text-sm">Gathered feedback and discussed next steps...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ChatGPT Integration Section */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-[#FDC449] text-sm font-semibold uppercase tracking-wide mb-4">Use cases.</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 max-w-4xl mx-auto">
              Get answers to questions ChatGPT can't answer
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Cards */}
            <div className="space-y-6">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">What did I miss in yesterday's meeting?</h3>
                <p className="text-gray-400 mb-4">Get a quick summary of any meeting you couldn't attend.</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                    <span className="text-xs text-white">GM</span>
                  </div>
                  <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                    <span className="text-xs text-white">Z</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Catch up on a long thread in Slack</h3>
                <p className="text-gray-400 mb-4">Quickly understand context from lengthy conversations.</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                    <span className="text-xs text-white">S</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Get a summary of a 3-hour podcast</h3>
                <p className="text-gray-400 mb-4">Extract key insights from long-form content instantly.</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                    <span className="text-xs text-white">P</span>
                  </div>
                  <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                    <span className="text-xs text-white">YT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Screenshot */}
            <div>
              <div className="bg-black/80 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="bg-black/90 rounded-lg p-6 w-full max-w-md border border-white/20">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-[#FDC449] rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-black font-bold text-sm">AI</span>
                          </div>
                          <div className="flex-1 bg-white/5 rounded-lg p-3">
                            <p className="text-white text-sm">Here's what you missed in yesterday's meeting...</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">U</span>
                          </div>
                          <div className="flex-1 bg-white/5 rounded-lg p-3">
                            <p className="text-white text-sm">Thanks! Can you also summarize the action items?</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof Section */}
      <section className="py-20 bg-black text-center">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Loved by 500,000+ users and teams worldwide!
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join our growing community of users and teams who are using Highlight to stay on top of their day.
          </p>
          <button className="bg-[#FDC449] text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#FDC449]/90 transition-colors mb-20">
            Join our community
          </button>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <p className="text-white mb-6 italic">
                "Highlight has been a game-changer for my productivity. I can't imagine going back to how I used to work."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">SC</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Sarah Chen</p>
                  <p className="text-gray-400 text-sm">Product Manager</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <p className="text-white mb-6 italic">
                "The ability to quickly search through all my conversations and notes is invaluable. It saves me so much time."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">DL</span>
                </div>
                <div>
                  <p className="text-white font-semibold">David Lee</p>
                  <p className="text-gray-400 text-sm">Software Engineer</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <p className="text-white mb-6 italic">
                "I love how Highlight integrates with all the tools I use daily. It's truly an all-in-one solution."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">EW</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Emily White</p>
                  <p className="text-gray-400 text-sm">Marketing Specialist</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <p className="text-white mb-6 italic">
                "Highlight helps me stay organized and focused. I'm always prepared for meetings and never miss an important detail."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">JS</span>
                </div>
                <div>
                  <p className="text-white font-semibold">John Smith</p>
                  <p className="text-gray-400 text-sm">CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Common Questions
          </h2>

          <div className="space-y-4">
            {[
              { question: "Does Highlight work on Linux?", answer: "Currently, Highlight is available for Mac and Windows. Linux support is coming soon." },
              { question: "Pricing, plans & trials", answer: "We offer flexible pricing plans to suit teams of all sizes. Start with a free trial to see how Highlight works for you." },
              { question: "Is Highlight HIPAA compliant?", answer: "Yes, Highlight is HIPAA compliant and follows industry-leading security practices to protect your data." },
              { question: "Is my data secure?", answer: "Absolutely. All your data is encrypted at rest and in transit, and we never share your information with third parties." }
            ].map((faq, index) => (
              <div key={index} className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/10 transition-colors"
                >
                  <span className="text-white font-medium">{faq.question}</span>
                  {openFaq === index ? (
                    <IconChevronUp className="w-5 h-5 text-white flex-shrink-0" />
                  ) : (
                    <IconChevronDown className="w-5 h-5 text-white flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Download Section */}
      <section className="bg-[#FDC449] py-16">
        <div className="container-custom text-center">
          <p className="text-black text-2xl font-semibold mb-8">Available on Mac & Windows</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 hover:bg-gray-900 transition-colors">
              <IconBrandApple className="w-6 h-6" />
              Download for Mac
            </button>
            <button className="bg-black text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 hover:bg-gray-900 transition-colors">
              <IconBrandWindows className="w-6 h-6" />
              Download for Windows
            </button>
          </div>
        </div>
      </section>

      {/* Footer - Navigation and Copyright */}
      <footer className="bg-black py-16 border-t border-white/10">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-12">Highlight</h3>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12 max-w-5xl mx-auto">
            <div>
              <h4 className="text-white font-semibold mb-4">Highlight</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Legal Information</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Integrations</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Security</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Press Kit</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mb-8">
            <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <IconBrandTwitter className="w-5 h-5 text-white" />
            </Link>
            <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <IconBrandLinkedin className="w-5 h-5 text-white" />
            </Link>
            <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <IconBrandDiscord className="w-5 h-5 text-white" />
            </Link>
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm">© 2023 Highlight. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
