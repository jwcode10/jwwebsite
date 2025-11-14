"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { IconBolt } from "@tabler/icons-react";
import { useState, useEffect } from "react";
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
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  const phrases = [
    {
      text: "YOUR CONTENT ENGINE—PROFESSIONALLY BUILT.",
      accent: "CONTENT ENGINE"
    },
    {
      text: "BATCH IT ONCE. STAY RELEVANT ALL MONTH.",
      accent: "BATCH IT ONCE"
    },
    {
      text: "CONSISTENCY IS THE NEW MARKETING.",
      accent: "CONSISTENCY"
    }
  ];

  // Typing animation effect with phrase cycling
  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;
    
    const startTyping = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      setDisplayedText("");
      currentIndex = 0;
      
      const typingInterval = setInterval(() => {
        if (currentIndex < currentPhrase.text.length) {
          setDisplayedText(currentPhrase.text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          // Wait 4 seconds before starting to erase
          timeoutId = setTimeout(() => {
            startErasing();
          }, 4000);
        }
      }, 100); // Adjust speed here (100ms per character)
    };

    const startErasing = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      let eraseIndex = currentPhrase.text.length;
      
      const erasingInterval = setInterval(() => {
        if (eraseIndex > 0) {
          setDisplayedText(currentPhrase.text.slice(0, eraseIndex - 1));
          eraseIndex--;
        } else {
          clearInterval(erasingInterval);
          // Move to next phrase
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }, 50); // Faster erasing speed
    };

    startTyping();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentPhraseIndex]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500); // Blink every 500ms

    return () => clearInterval(cursorInterval);
  }, []);

  const toggleCard = (cardIndex: number) => {
    setExpandedCards(prev => 
      prev.includes(cardIndex) 
        ? prev.filter(index => index !== cardIndex)
        : [...prev, cardIndex]
    );
  };

  return (
    <div>
      {/* Blank Hero Section */}
      <section className="py-32 flex items-center justify-center" style={{ backgroundColor: '#02021D' }}>
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight">
              <span className="whitespace-pre-line">
                {(() => {
                  const currentPhrase = phrases[currentPhraseIndex];
                  const accentText = currentPhrase.accent;
                  const fullText = currentPhrase.text;
                  
                  // Split the displayed text by the accent text
                  const parts = displayedText.split(accentText);
                  
                  return parts.map((part, index) => {
                    if (index === 0) {
                      return part;
                    }
                    return (
                      <span key={index}>
                        <span className="text-[#FDC449]">{accentText}</span>
                        {part}
                      </span>
                    );
                  });
                })()}
                {showCursor && <span className="animate-pulse">|</span>}
              </span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
              A full-service team producing your podcasts, YouTube, and social presence under one roof. Seamless. Strategic. Scalable.
            </p>
          </div>
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
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8 tracking-tighter">
                Your <span className="font-accent text-[#FDC449]">creative team's</span><br />
                creative team™
              </h1>
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
