"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  IconMicrophone, 
  IconBrandYoutube, 
  IconVideo, 
  IconBrandInstagram, 
  IconPalette, 
  IconChartBar,
  IconCheck,
  IconArrowRight,
  IconTarget,
  IconTrendingUp,
  IconMapPin,
  IconChevronDown,
  IconChevronUp,
  IconUsers,
  IconFileText,
  IconEdit,
  IconUpload,
  IconWorld
} from "@tabler/icons-react";
import { useState } from "react";
import GoalsSection from "@/components/sections/goals-section";
import PricingSection from "@/components/sections/pricing-section";
import WhatsIncludedSection from "@/components/sections/whats-included-section";
import CompareSection from "@/components/sections/compare-section";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Home() {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const [selectedGoals, setSelectedGoals] = useState<number[]>([]);
  const [expandedFAQs, setExpandedFAQs] = useState<number[]>([]);

  const toggleCard = (cardIndex: number) => {
    setExpandedCards(prev => 
      prev.includes(cardIndex) 
        ? prev.filter(index => index !== cardIndex)
        : [...prev, cardIndex]
    );
  };

  const toggleFAQ = (faqIndex: number) => {
    setExpandedFAQs(prev => 
      prev.includes(faqIndex) 
        ? prev.filter(index => index !== faqIndex)
        : [...prev, faqIndex]
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="py-32 flex items-center justify-center relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1a1c42 0%, #0b0c1e 50%, #02021D 100%)'
        }}
      >
        <div className="container-custom relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
              JourneyWell <span className="font-accent text-[#FDC449]">Content</span> Agency in Baton Rouge, LA
            </h1>
            <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Helping creators and brands in Baton Rouge produce high-performing podcasts, videos, and social content without the guesswork. Journey Well brings strategy, production, and publishing under one roof so you can focus on your message while we handle the rest.
            </p>
            <Link 
              href="https://links.journeywell.io/widget/booking/zhpX7oUADvHcPFEJGOYl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#371ACA] to-[#2A1488] text-[#FDC449] font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Start your content journey <IconArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20" style={{ backgroundColor: '#02021D' }}>
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 text-center">
              What We Do
            </h2>
            
            {/* Main Description with Visual Flow */}
            <div className="max-w-5xl mx-auto mb-16">
              <div className="text-center mb-12">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                  Journey Well is a <span className="text-[#FDC449] font-semibold">full-service content creation agency</span> in Baton Rouge built for busy founders, marketers, and creators.
                </p>
                
                {/* Visual Process Flow */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <motion.div
                    className="bg-gray-800/50 rounded-2xl p-6 border border-white/10"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 bg-[#371ACA]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconFileText className="w-8 h-8 text-[#FDC449]" />
                    </div>
                    <p className="text-lg font-bold text-white mb-2">Plan</p>
                    <p className="text-sm text-gray-400">Content Planning</p>
                  </motion.div>
                  
                  <motion.div
                    className="bg-gray-800/50 rounded-2xl p-6 border border-white/10"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 bg-[#371ACA]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconEdit className="w-8 h-8 text-[#FDC449]" />
                    </div>
                    <p className="text-lg font-bold text-white mb-2">Edit</p>
                    <p className="text-sm text-gray-400">Professional Editing</p>
                  </motion.div>
                  
                  <motion.div
                    className="bg-gray-800/50 rounded-2xl p-6 border border-white/10"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 bg-[#371ACA]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconUpload className="w-8 h-8 text-[#FDC449]" />
                    </div>
                    <p className="text-lg font-bold text-white mb-2">Post</p>
                    <p className="text-sm text-gray-400">Strategic Publishing</p>
                  </motion.div>
                </div>
                
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Our team delivers <span className="text-[#FDC449] font-semibold">consistent output and measurable results</span>.
                </p>
              </div>
            </div>

            {/* Services We Cover - Visual Grid */}
            <div className="max-w-6xl mx-auto mb-12">
              <p className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                Whether you need:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <motion.div
                  className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-xl p-6 border border-white/10 text-center"
                  whileHover={{ y: -5, borderColor: '#FDC449' }}
                  transition={{ duration: 0.3 }}
                >
                  <IconMicrophone className="w-10 h-10 text-[#FDC449] mx-auto mb-3" />
                  <p className="text-sm font-semibold text-white">Launch-ready Podcast</p>
                </motion.div>
                
                <motion.div
                  className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-xl p-6 border border-white/10 text-center"
                  whileHover={{ y: -5, borderColor: '#FDC449' }}
                  transition={{ duration: 0.3 }}
                >
                  <IconBrandYoutube className="w-10 h-10 text-[#FDC449] mx-auto mb-3" />
                  <p className="text-sm font-semibold text-white">Optimized YouTube Channel</p>
                </motion.div>
                
                <motion.div
                  className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-xl p-6 border border-white/10 text-center"
                  whileHover={{ y: -5, borderColor: '#FDC449' }}
                  transition={{ duration: 0.3 }}
                >
                  <IconVideo className="w-10 h-10 text-[#FDC449] mx-auto mb-3" />
                  <p className="text-sm font-semibold text-white">On-brand Reels</p>
                </motion.div>
                
                <motion.div
                  className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-xl p-6 border border-white/10 text-center"
                  whileHover={{ y: -5, borderColor: '#FDC449' }}
                  transition={{ duration: 0.3 }}
                >
                  <IconBrandInstagram className="w-10 h-10 text-[#FDC449] mx-auto mb-3" />
                  <p className="text-sm font-semibold text-white">Social Media Management</p>
                </motion.div>
              </div>
              <p className="text-center text-lg text-gray-300 mt-8 font-semibold">
                We've got you covered.
              </p>
            </div>

            {/* Who We Serve & Location */}
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  className="bg-gray-800/50 rounded-2xl p-8 border border-white/10"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-[#371ACA]/20 rounded-full flex items-center justify-center mb-6">
                    <IconUsers className="w-8 h-8 text-[#FDC449]" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Built For</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <IconCheck className="w-5 h-5 text-[#FDC449] flex-shrink-0" />
                      <p className="text-gray-300">Busy Founders</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <IconCheck className="w-5 h-5 text-[#FDC449] flex-shrink-0" />
                      <p className="text-gray-300">Marketers</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <IconCheck className="w-5 h-5 text-[#FDC449] flex-shrink-0" />
                      <p className="text-gray-300">Creators</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gray-800/50 rounded-2xl p-8 border border-white/10"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-[#371ACA]/20 rounded-full flex items-center justify-center mb-6">
                    <IconWorld className="w-8 h-8 text-[#FDC449]" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Serving</h4>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We also partner with clients in <span className="text-[#FDC449] font-semibold">New York City</span> and surrounding markets, giving your brand the polish of a larger creative agency with the access and agility of a <span className="text-[#FDC449] font-semibold">Baton Rouge team</span>.
                  </p>
                  <div className="flex items-center gap-2 text-gray-400">
                    <IconMapPin className="w-5 h-5" />
                    <span className="text-sm">Baton Rouge, LA & NYC</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Content Services Section */}
      <section className="py-20" style={{ backgroundColor: '#02021D' }}>
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 text-center">
              Our Content Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Service 1: Podcast Production */}
              <motion.div
                className="bg-gray-800/50 rounded-2xl p-8 border border-white/10 hover:border-[#FDC449]/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-[#371ACA]/20 rounded-full flex items-center justify-center mb-6">
                  <IconMicrophone className="w-8 h-8 text-[#FDC449]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Podcast Production</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Plan, record, edit, and publish end to end. We offer single-episode, 2-episode, and 4-episode batches as well as monthly packages for 3–4 episodes. Expect clean audio, professional mixing, show notes, and platform publishing so your message reaches Apple Podcasts, Spotify, and beyond.
                </p>
                <Link 
                  href="/services/podcast-production-baton-rouge"
                  className="text-[#FDC449] font-semibold hover:underline inline-flex items-center gap-2"
                >
                  Learn more <IconArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Service 2: YouTube Production & Optimization */}
              <motion.div
                className="bg-gray-800/50 rounded-2xl p-8 border border-white/10 hover:border-[#FDC449]/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-[#371ACA]/20 rounded-full flex items-center justify-center mb-6">
                  <IconBrandYoutube className="w-8 h-8 text-[#FDC449]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">YouTube Production & Optimization</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Turn raw footage into long-form episodes that retain viewers and grow subscribers. We handle editing, thumbnail design, titles, descriptions, chapters, and upload optimization. We'll also create evergreen clips to extend the life of every upload.
                </p>
                <Link 
                  href="/services/youtube-production-baton-rouge"
                  className="text-[#FDC449] font-semibold hover:underline inline-flex items-center gap-2"
                >
                  Learn more <IconArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Service 3: Short-Form Video */}
              <motion.div
                className="bg-gray-800/50 rounded-2xl p-8 border border-white/10 hover:border-[#FDC449]/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-[#371ACA]/20 rounded-full flex items-center justify-center mb-6">
                  <IconVideo className="w-8 h-8 text-[#FDC449]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Short-Form Video (Reels & Clips)</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Stay consistent with batching sessions that produce 6–25+ edited reels per month. Our team trims, captions, formats, and sequences clips for Instagram, TikTok, LinkedIn, and YouTube Shorts then schedules them for you.
                </p>
                <Link 
                  href="/services/short-form-video-baton-rouge"
                  className="text-[#FDC449] font-semibold hover:underline inline-flex items-center gap-2"
                >
                  Learn more <IconArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Service 4: Social Media Management */}
              <motion.div
                className="bg-gray-800/50 rounded-2xl p-8 border border-white/10 hover:border-[#FDC449]/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-[#371ACA]/20 rounded-full flex items-center justify-center mb-6">
                  <IconBrandInstagram className="w-8 h-8 text-[#FDC449]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Social Media Management</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Hands-off social media management in Baton Rouge across two to three platforms. We build content calendars, write captions, schedule posts, and monitor analytics so you publish with intention; not panic.
                </p>
                <Link 
                  href="/services/social-media-management-baton-rouge"
                  className="text-[#FDC449] font-semibold hover:underline inline-flex items-center gap-2"
                >
                  Learn more <IconArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Service 5: Branding & Creative Design */}
              <motion.div
                className="bg-gray-800/50 rounded-2xl p-8 border border-white/10 hover:border-[#FDC449]/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-[#371ACA]/20 rounded-full flex items-center justify-center mb-6">
                  <IconPalette className="w-8 h-8 text-[#FDC449]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Branding & Creative Design</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Tie your visual identity together with branded carousels, YouTube banners, thumbnail templates, and a cohesive brand suite. Consistency compounds; our creative team ensures your content looks unmistakably "you."
                </p>
                <Link 
                  href="/services/branding-and-creative-baton-rouge"
                  className="text-[#FDC449] font-semibold hover:underline inline-flex items-center gap-2"
                >
                  Learn more <IconArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Service 6: Strategy, Planning & Analytics */}
              <motion.div
                className="bg-gray-800/50 rounded-2xl p-8 border border-white/10 hover:border-[#FDC449]/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-[#371ACA]/20 rounded-full flex items-center justify-center mb-6">
                  <IconChartBar className="w-8 h-8 text-[#FDC449]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Strategy, Planning & Analytics</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Start with clear goals, then track what works. We run strategy calls, map content pillars, and deliver quarterly analytics deep dives on higher tiers. You'll also get a managed link & offer portal so your audience can act quickly when they're ready.
                </p>
                <Link 
                  href="/services/content-strategy-baton-rouge"
                  className="text-[#FDC449] font-semibold hover:underline inline-flex items-center gap-2"
                >
                  Learn more <IconArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
            <div className="text-center">
              <Link 
                href="/packages"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#371ACA] to-[#2A1488] text-[#FDC449] font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                See packages & pricing <IconArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Background Image Wrapper - Extended to include Trust & Founders section */}
      <div className="relative w-full">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img 
            className="w-full h-full object-cover object-center" 
            src="/images/bg-img/65b226bb6bd2cce6a9eb412e_bg-blue-03_laptop.webp" 
            alt="" 
            decoding="async"
            sizes="100vw"
            loading="eager"
            srcSet="/images/bg-img/65b226bb6bd2cce6a9eb412e_bg-blue-03_laptop-p-500.webp 500w, /images/bg-img/65b226bb6bd2cce6a9eb412e_bg-blue-03_laptop-p-800.webp 800w, /images/bg-img/65b226bb6bd2cce6a9eb412e_bg-blue-03_laptop-p-1080.webp 1080w, /images/bg-img/65b226bb6bd2cce6a9eb412e_bg-blue-03_laptop.webp 1440w"
          />
        </div>

        {/* Trust & Founders Section */}
        <section className="relative z-10 py-20">
          <div className="container-custom">
            {/* Trust logos */}
            <div>
              <p className="text-center text-gray-400 text-sm mb-8">
                Trusted by brands & businesses across Louisiana and New York
              </p>
            </div>
          </div>
          
          {/* Full width scrolling logo lanes */}
          <div className="w-full overflow-hidden mb-20">
            {/* Single Continuous Lane */}
            <div className="flex animate-scroll-continuous">
              <img 
                src="/images/logos/LANE 1.png" 
                alt="Brand logos lane 1" 
                className="h-24 object-contain flex-shrink-0"
              />
              <img 
                src="/images/logos/LANE 1.png" 
                alt="Brand logos lane 1" 
                className="h-24 object-contain flex-shrink-0"
              />
              <img 
                src="/images/logos/LANE 1.png" 
                alt="Brand logos lane 1" 
                className="h-24 object-contain flex-shrink-0"
              />
              <div className="w-32 flex-shrink-0"></div>
              <img 
                src="/images/logos/LANE 2.png" 
                alt="Brand logos lane 2" 
                className="h-24 object-contain flex-shrink-0"
              />
              <img 
                src="/images/logos/LANE 2.png" 
                alt="Brand logos lane 2" 
                className="h-24 object-contain flex-shrink-0"
              />
              <img 
                src="/images/logos/LANE 2.png" 
                alt="Brand logos lane 2" 
                className="h-24 object-contain flex-shrink-0"
              />
              <div className="w-32 flex-shrink-0"></div>
            </div>
          </div>
          
          <div className="container-custom">
            {/* Founders section */}
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-4">
                <div className="mb-6 flex justify-start -ml-5">
                  <img 
                    src="/images/founders/founders.png" 
                    alt="Founders of JourneyWell Content Agency" 
                    className="w-auto h-64 object-contain"
                  />
                </div>
                <p className="text-white text-base font-normal tracking-wide leading-none">
                  FOUNDERS<br />
                  OF JOURNEYWELL CONTENT AGENCY
                </p>
              </div>

              <div className="lg:col-span-8">
                <p className="text-lg text-white leading-relaxed">
                  Over the past six years, we've built JourneyWell into a creative agency that helps entrepreneurs and brands show up with confidence online. We've mastered the art of storytelling through content—and we're here to help you master yours. Because success is built together, not alone.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Superside-style Section */}
        <div id="about" className="relative z-10 min-h-screen py-20">
          <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div>
              <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8 tracking-tighter">
                Your <span className="font-accent text-[#FDC449]">creative team's</span><br />
                creative team™
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-xl">
                Scale your in-house creative team with top global talent powered by industry-leading AI workflows, delivering anything you can imagine fast and affordably.
              </p>
              <button className="bg-[#371ACA] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#2A0F9A] transition-colors">
                Book a call
              </button>
            </div>

            {/* Right side - Project grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Row 1 */}
                <div className="rounded-2xl h-56 overflow-hidden bg-gray-800">
                  <img 
                    src="/images/section4/optim-services/card15 copy Large.jpeg" 
                    alt="Project 1" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" style={{ objectPosition: 'center 50%', }}
                  />
                </div>
                <div className="rounded-2xl h-56 overflow-hidden bg-gray-800">
                  <img 
                    src="/images/section4/optim-services/card2 copy Large.jpeg" 
                    alt="OPA Project" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" style={{ objectPosition: 'center 20%', }}
                  />
                </div>
                
                {/* Row 2 */}
                <div className="rounded-2xl h-40 overflow-hidden bg-gray-800">
                  <img 
                    src="/images/section4/optim-services/card8 copy Large.jpeg" 
                    alt="Parma Beach Project" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="rounded-2xl h-40 overflow-hidden bg-gray-800">
                  <img 
                    src="/images/section4/optim-services/card10 copy Large.jpeg" 
                    alt="ANTLER Project" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Row 3 */}
                <div className="rounded-2xl h-40 overflow-hidden bg-gray-800">
                  <img 
                    src="/images/section4/optim-services/card17 copy Large.jpeg" 
                    alt="Zapier Project" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    style={{ objectPosition: 'center 15%' }}
                  />
                </div>
                <div className="rounded-2xl h-40 overflow-hidden bg-gray-800">
                  <img 
                    src="/images/section4/optim-services/card12 copy Large.jpeg" 
                    alt="Oyster Project" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Row 4 */}
                <div className="col-span-2 rounded-2xl h-40 overflow-hidden bg-gray-800">
                  <img 
                    src="/images/section4/optim-services/card13 copy Large.jpeg" 
                    alt="Vimeo Project" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
        </div>
        
        {/* Website Experience Platform Section with Cards - All in one long section */}
        <div className="relative z-10 pt-8 lg:pt-12 pb-20">
          <div className="container-custom">
            {/* Main Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                The website experience platform<br />
                for high-performing brands
              </h2>
            </div>

            {/* Three Cards Grid */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Card 1: Build powerful brand experiences */}
              <div 
                className="rounded-2xl p-8 relative overflow-hidden shadow-lg h-[560px] bg-cover bg-center bg-blue-600"
                style={{ 
                  backgroundImage: "url('/images/section4/optim-services/card15 copy Large.jpeg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
                {/* Text Container - Slides up from bottom */}
                <motion.div 
                  className="absolute bottom-8 left-8 right-8 z-10"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ 
                    y: expandedCards.includes(0) ? 0 : "100%", 
                    opacity: expandedCards.includes(0) ? 1 : 0 
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
                    Content Launch Package
                  </h3>
                  <p className="text-sm text-white mb-6 max-w-md">
                    Build your foundation with consistent short-form visibility and one polished YouTube video per month to educate, build authority, and drive engagement.
                  </p>
                  <a href="#" className="text-sm text-white underline hover:text-gray-200 transition-colors">
                    Book a call →
                  </a>
                </motion.div>

                {/* Toggle Button */}
                <button 
                  onClick={() => toggleCard(0)}
                  className="absolute bottom-6 right-6 w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors z-10"
                >
                  <span className="text-white text-lg font-bold">
                    {expandedCards.includes(0) ? "−" : "+"}
                  </span>
                </button>
              </div>

              {/* Card 2: Manage content that converts */}
              <div 
                className="rounded-2xl p-8 relative overflow-hidden shadow-lg h-[560px] bg-cover bg-center bg-green-600"
                style={{ 
                  backgroundImage: "url('/images/section4/optim-services/card2 copy Large.jpeg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
                {/* Text Container - Slides up from bottom */}
                <motion.div
                  className="absolute bottom-8 left-8 right-8 z-10"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ 
                    y: expandedCards.includes(1) ? 0 : "100%", 
                    opacity: expandedCards.includes(1) ? 1 : 0 
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
                    Authority Builder Package
                  </h3>
                  <p className="text-sm text-white mb-6 max-w-md">
                    Grow across multiple platforms through a blend of educational long-form videos or podcasts, high-volume short-form clips, and consistent branded posting — all built around your expertise.
                  </p>
                  <a href="#" className="text-sm text-white underline hover:text-gray-200 transition-colors">
                    Book a call →
                  </a>
                </motion.div>
                
                {/* Toggle Button */}
                <button 
                  onClick={() => toggleCard(1)}
                  className="absolute bottom-6 right-6 w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors z-10"
                >
                  <span className="text-white text-lg font-bold">
                    {expandedCards.includes(1) ? "−" : "+"}
                  </span>
                </button>
              </div>

              {/* Card 3: Optimize for conversion with AI */}
              <div 
                className="rounded-2xl p-8 relative overflow-hidden shadow-lg h-[560px] bg-cover bg-center bg-gray-900"
                style={{ 
                  backgroundImage: "url('/images/section4/optim-services/card8 copy Large.jpeg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
                {/* Text Container - Slides up from bottom */}
                <motion.div
                  className="absolute bottom-8 left-8 right-8 z-10"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ 
                    y: expandedCards.includes(2) ? 0 : "100%", 
                    opacity: expandedCards.includes(2) ? 1 : 0 
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
                    Industry Leader Package
                  </h3>
                  <p className="text-sm text-white mb-6 max-w-md">
                    Lead your industry with a comprehensive content ecosystem — delivering large-scale YouTube publishing, optimized short-form output, and cohesive branding for maximum reach and authority.
                  </p>
                  <a href="#" className="text-sm text-white underline hover:text-gray-200 transition-colors">
                    Book a call →
                  </a>
                </motion.div>
                
                {/* Toggle Button */}
                <button 
                  onClick={() => toggleCard(2)}
                  className="absolute bottom-6 right-6 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors z-10"
                >
                  <span className="text-white text-lg font-bold">
                    {expandedCards.includes(2) ? "−" : "+"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Why Brands Trust Journey Well Section */}
      <section className="py-20" style={{ backgroundColor: '#02021D' }}>
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 text-center">
              Why Brands Trust Journey Well
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <motion.div
                className="bg-gray-800/50 rounded-2xl p-8 border border-white/10"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-[#371ACA]/20 rounded-full flex items-center justify-center mb-4">
                  <IconCheck className="w-6 h-6 text-[#FDC449]" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">All-in-one content production</h4>
                <p className="text-gray-300">Strategy, recording, editing, and publishing—from one Baton Rouge partner.</p>
              </motion.div>

              <motion.div
                className="bg-gray-800/50 rounded-2xl p-8 border border-white/10"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-[#371ACA]/20 rounded-full flex items-center justify-center mb-4">
                  <IconTarget className="w-6 h-6 text-[#FDC449]" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Proven, repeatable process</h4>
                <p className="text-gray-300">We turn your ideas into a reliable content engine that ships on schedule.</p>
              </motion.div>

              <motion.div
                className="bg-gray-800/50 rounded-2xl p-8 border border-white/10"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-[#371ACA]/20 rounded-full flex items-center justify-center mb-4">
                  <IconTrendingUp className="w-6 h-6 text-[#FDC449]" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Optimization built-in</h4>
                <p className="text-gray-300">From YouTube thumbnails to podcast show notes, every piece is created to perform.</p>
              </motion.div>

              <motion.div
                className="bg-gray-800/50 rounded-2xl p-8 border border-white/10"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-[#371ACA]/20 rounded-full flex items-center justify-center mb-4">
                  <IconMapPin className="w-6 h-6 text-[#FDC449]" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Local access, national polish</h4>
                <p className="text-gray-300">Baton Rouge roots, NYC experience fast communication and agency-level quality.</p>
              </motion.div>

              <motion.div
                className="bg-gray-800/50 rounded-2xl p-8 border border-white/10"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-[#371ACA]/20 rounded-full flex items-center justify-center mb-4">
                  <IconChartBar className="w-6 h-6 text-[#FDC449]" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Data-driven iteration</h4>
                <p className="text-gray-300">Quarterly analytics reviews guide what to double down on and what to refine.</p>
              </motion.div>
            </div>
            <div className="text-center">
              <Link 
                href="https://links.journeywell.io/widget/booking/zhpX7oUADvHcPFEJGOYl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#371ACA] to-[#2A1488] text-[#FDC449] font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                Book a strategy call <IconArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 w-full h-full overflow-hidden opacity-30">
          <img 
            className="w-full h-full object-cover object-center" 
            src="/images/bg-img/65b226bb6bd2cce6a9eb412e_bg-blue-03_laptop.webp" 
            alt="" 
          />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 text-center">
              How We Work
            </h2>
            <p className="text-center text-gray-300 mb-12 text-lg">Simple, Repeatable, Effective</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <motion.div
                className="bg-gray-800/80 rounded-2xl p-8 border border-white/10 backdrop-blur-sm"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-[#371ACA]/30 rounded-full flex items-center justify-center mb-6 text-2xl font-black text-[#FDC449]">
                  1
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Plan</h3>
                <p className="text-gray-300 leading-relaxed">
                  We align on audience, topics, and outcomes. You'll leave with a content roadmap, shoot checklist, and publishing calendar tailored to your goals.
                </p>
              </motion.div>

              <motion.div
                className="bg-gray-800/80 rounded-2xl p-8 border border-white/10 backdrop-blur-sm"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-[#371ACA]/30 rounded-full flex items-center justify-center mb-6 text-2xl font-black text-[#FDC449]">
                  2
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Produce</h3>
                <p className="text-gray-300 leading-relaxed">
                  Studio or remote, we capture clean audio and video, then edit for clarity and engagement. Our editors add captions, hooks, pattern interrupts, and on-brand graphics.
                </p>
              </motion.div>

              <motion.div
                className="bg-gray-800/80 rounded-2xl p-8 border border-white/10 backdrop-blur-sm"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-[#371ACA]/30 rounded-full flex items-center justify-center mb-6 text-2xl font-black text-[#FDC449]">
                  3
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Publish</h3>
                <p className="text-gray-300 leading-relaxed">
                  We upload across your chosen platforms like YouTube, Spotify/Apple Podcasts, Instagram, LinkedIn, TikTok and we are also using best-practice metadata and scheduling tools.
                </p>
              </motion.div>

              <motion.div
                className="bg-gray-800/80 rounded-2xl p-8 border border-white/10 backdrop-blur-sm"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-[#371ACA]/30 rounded-full flex items-center justify-center mb-6 text-2xl font-black text-[#FDC449]">
                  4
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Perform</h3>
                <p className="text-gray-300 leading-relaxed">
                  Quarterly analytics synthesize watch time, retention, CTR, reach, and conversions. We iterate your content pillars and hooks so every cycle performs better than the last.
                </p>
              </motion.div>
            </div>
            <div className="text-center">
              <Link 
                href="https://links.journeywell.io/widget/booking/zhpX7oUADvHcPFEJGOYl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#371ACA] to-[#2A1488] text-[#FDC449] font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                Make my content consistent <IconArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results That Matter Section */}
      <section className="py-20" style={{ backgroundColor: '#02021D' }}>
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-center">
              Results That Matter
            </h2>
            <p className="text-center text-gray-300 mb-12 text-lg">
              Our clients across Baton Rouge and NYC use Journey Well to:
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
              <div className="flex items-start gap-4">
                <IconCheck className="w-6 h-6 text-[#FDC449] flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-300">Launch shows that publish on time, every time.</p>
              </div>
              <div className="flex items-start gap-4">
                <IconCheck className="w-6 h-6 text-[#FDC449] flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-300">Grow YouTube channels with better retention and click-through.</p>
              </div>
              <div className="flex items-start gap-4">
                <IconCheck className="w-6 h-6 text-[#FDC449] flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-300">Multiply long-form content into weeks of short-form clips.</p>
              </div>
              <div className="flex items-start gap-4">
                <IconCheck className="w-6 h-6 text-[#FDC449] flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-300">Maintain a steady presence on Instagram, LinkedIn, and YouTube without hiring internally.</p>
              </div>
            </div>
            <div className="text-center">
              <Link 
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#371ACA] to-[#2A1488] text-[#FDC449] font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                See what's possible: Portfolio <IconArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 w-full h-full overflow-hidden opacity-30">
          <img 
            className="w-full h-full object-cover object-center" 
            src="/images/bg-img/65b226bb6bd2cce6a9eb412e_bg-blue-03_laptop.webp" 
            alt="" 
          />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-center">
              Industries We Serve
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Coaches & consultants, professional services, local businesses, healthcare, real estate, SaaS, financial services, and community organizations. If your audience learns from content, we can help you produce it consistently.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Serving Baton Rouge & Beyond Section */}
      <section className="py-20" style={{ backgroundColor: '#02021D' }}>
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-center">
              Serving Baton Rouge & Beyond
            </h2>
            <div className="max-w-3xl mx-auto text-center mb-8">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                Journey Well is proud to be a content agency in Baton Rouge, serving the metro area and nearby communities such as Gonzales, Prairieville, Denham Springs, and Central. We also collaborate with teams in New York City for bi-coastal production schedules and remote studio support.
              </p>
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-white/10">
                <p className="text-white font-semibold mb-2">Journey Well — Content Agency, Baton Rouge, LA</p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[#FDC449] font-semibold hover:underline"
                >
                  Contact Us <IconArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 w-full h-full overflow-hidden opacity-30">
          <img 
            className="w-full h-full object-cover object-center" 
            src="/images/bg-img/65b226bb6bd2cce6a9eb412e_bg-blue-03_laptop.webp" 
            alt="" 
          />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 text-center">
              FAQs
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: "What makes Journey Well different from a traditional creative agency?",
                  a: "We're a content production partner first built around shipping weekly content that compounds. Strategy, production, and publishing live together so you don't manage multiple vendors."
                },
                {
                  q: "Can you work with our existing brand team?",
                  a: "Absolutely. We can operate as your external production arm or integrate with in-house designers and marketers."
                },
                {
                  q: "Do you provide scripts or prompts for founders?",
                  a: "Yes. We prepare outlines, talking points, and questions to keep recordings clear, confident, and on-brand."
                },
                {
                  q: "How long does it take to launch a podcast or YouTube series?",
                  a: "Most clients launch within 3–6 weeks depending on scope, assets, and scheduling."
                },
                {
                  q: "Do you handle posting and analytics?",
                  a: "Yes. On growth tiers and up, we schedule posts and provide quarterly analytics to guide continuous improvement."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/80 rounded-2xl border border-white/10 backdrop-blur-sm overflow-hidden"
                  whileHover={{ y: -2 }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 flex items-center justify-between text-left"
                  >
                    <h4 className="text-lg font-bold text-white pr-4">{faq.q}</h4>
                    {expandedFAQs.includes(index) ? (
                      <IconChevronUp className="w-5 h-5 text-[#FDC449] flex-shrink-0" />
                    ) : (
                      <IconChevronDown className="w-5 h-5 text-[#FDC449] flex-shrink-0" />
                    )}
                  </button>
                  {expandedFAQs.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#02021D' }}>
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              Ready to Start Your Content Journey?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Whether you're launching a show, optimizing your YouTube channel, or scaling short-form content, Journey Well gives you the team, tools, and process to create with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="https://links.journeywell.io/widget/booking/zhpX7oUADvHcPFEJGOYl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#371ACA] to-[#2A1488] text-[#FDC449] font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                Get a Free Consultation <IconArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/packages"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#FDC449] text-[#FDC449] font-bold text-lg hover:bg-[#FDC449] hover:text-gray-900 transition-all duration-300"
              >
                Explore Packages <IconArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Goals and Pricing Section */}
      <section id="pricing" style={{ backgroundColor: '#02021D' }}>
        <GoalsSection onGoalsChange={setSelectedGoals} />
        <PricingSection selectedGoals={selectedGoals} />
      </section>

      {/* What's Included Section */}
      <div id="services">
        <WhatsIncludedSection />
      </div>

      {/* Compare Section */}
      <div id="portfolio">
        <CompareSection />
      </div>

      {/* Sticky Metallic Booking Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://links.journeywell.io/widget/booking/zhpX7oUADvHcPFEJGOYl"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-4 px-8 py-5 rounded-full bg-gradient-to-r from-[#371ACA] to-[#2A1488] border-2 border-[#1A0F5C] text-[#FDC449] font-bold text-base shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #371ACA 0%, #2A1488 50%, #1A0F5C 100%)',
            boxShadow: '0 8px 32px rgba(55, 26, 202, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
          }}
        >
          {/* Metallic reflection effect */}
          <div 
            className="absolute inset-0 rounded-full opacity-40"
            style={{
              background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)',
              animation: 'metallic-shine 3s ease-in-out infinite',
            }}
          />
          
          {/* Button content */}
          <div className="relative z-10 flex items-center gap-4">
            <div className="w-3 h-3 bg-[#FDC449] rounded-full animate-pulse"></div>
            <span className="font-bold text-lg text-[#FDC449]">Ready to chat?</span>
          </div>
          
          {/* Hover glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
      </div>
    </div> 
  );
}

