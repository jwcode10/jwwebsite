"use client";

import { motion } from "framer-motion";
import { IconCheck, IconMinus, IconInfoCircle } from "@tabler/icons-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

interface PlanFeature {
  price?: string;
  originalPrice?: string;
  hasStrike?: boolean;
  text?: string;
  checkmark?: boolean;
  dash?: boolean;
}

interface ComparisonRow {
  feature: string;
  contentLaunch: PlanFeature;
  professionalGrowth: PlanFeature;
  industryLeader: PlanFeature;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "Monthly Price",
    contentLaunch: { price: "$3,750", originalPrice: "$4,167", hasStrike: true },
    professionalGrowth: { price: "$5,500", originalPrice: "$6,111", hasStrike: true },
    industryLeader: { price: "$7,500", originalPrice: "$8,824", hasStrike: true }
  },
  {
    feature: "Platforms Managed",
    contentLaunch: { text: "2 (YouTube + 1 social)" },
    professionalGrowth: { text: "All (YouTube, Instagram, Facebook, LinkedIn)" },
    industryLeader: { text: "All (YouTube, Instagram, Facebook, LinkedIn)" }
  },
  {
    feature: "Minimum Term",
    contentLaunch: { text: "3 months" },
    professionalGrowth: { text: "3 months" },
    industryLeader: { text: "4 months" }
  },
  {
    feature: "Long-Form Content",
    contentLaunch: { text: "1 YouTube video (≤7 min)" },
    professionalGrowth: { text: "2 podcast episodes or 5 YouTube videos" },
    industryLeader: { text: "4 podcast episodes or 5 YouTube videos" }
  },
  {
    feature: "Repurposed Clips",
    contentLaunch: { text: "Up to 5" },
    professionalGrowth: { text: "Up to 10" },
    industryLeader: { text: "Up to 15" }
  },
  {
    feature: "Short-Form Studio Shoot",
    contentLaunch: { text: "1 (15 clips)" },
    professionalGrowth: { text: "1 (12–15 clips)" },
    industryLeader: { text: "1 (20 clips)" }
  },
  {
    feature: "In-Studio Photography",
    contentLaunch: { text: "✅" },
    professionalGrowth: { text: "✅" },
    industryLeader: { text: "✅" }
  },
  {
    feature: "Social Posts per Month",
    contentLaunch: { text: "–" },
    professionalGrowth: { text: "20 total (up to 8 graphics/carousels)" },
    industryLeader: { text: "20 total (up to 8 graphics/carousels)" }
  },
  {
    feature: "YouTube Videos Published per Month",
    contentLaunch: { text: "1" },
    professionalGrowth: { text: "Up to 5" },
    industryLeader: { text: "Up to 20" }
  },
  {
    feature: "Authority Audit & Quick Win",
    contentLaunch: { text: "✅" },
    professionalGrowth: { text: "–" },
    industryLeader: { text: "–" }
  },
  {
    feature: "Brand Suite",
    contentLaunch: { text: "–" },
    professionalGrowth: { text: "–" },
    industryLeader: { text: "✅" }
  },
  {
    feature: "Strategy Call",
    contentLaunch: { text: "–" },
    professionalGrowth: { text: "Monthly" },
    industryLeader: { text: "Monthly + Quarterly Deep Dive" }
  },
  {
    feature: "Analytics Report",
    contentLaunch: { text: "–" },
    professionalGrowth: { text: "Monthly" },
    industryLeader: { text: "Quarterly" }
  },
  {
    feature: "Link & Offer Portal",
    contentLaunch: { text: "–" },
    professionalGrowth: { text: "✅" },
    industryLeader: { text: "✅" }
  },
  {
    feature: "Competitor Analysis",
    contentLaunch: { text: "–" },
    professionalGrowth: { text: "✅" },
    industryLeader: { text: "–" }
  }
];

export default function CompareSection() {
  return (
    <section className="bg-[#0A0D1E] py-16">
      <div className="container-custom">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          {...fadeInUp}
        >
          <h2 className="text-6xl font-semibold leading-tight mb-5">
            <span className="text-[#FDC449]">Compare</span>
            <span className="text-white">, contrast,</span>
            <br />
            <span className="text-white">consider</span>
          </h2>
          <p className="text-lg text-white">
            Select the best fit for your finances.
          </p>
        </motion.div>

        {/* Pricing Comparison Table */}
        <motion.div
          className="bg-[#02021D] rounded-2xl overflow-hidden border border-gray-700"
          {...fadeInUp}
        >
          {/* Desktop Table */}
          <div className="hidden lg:block">
            {/* Table Header */}
            <div className="bg-gray-800/50 border-b border-gray-700">
              <div className="grid grid-cols-4 gap-4 p-6">
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white">Features</h3>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-white font-semibold">Content Launch</span>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">$3,750</div>
                    <div className="text-sm text-gray-400 line-through">$4,167</div>
                    <div className="text-xs text-gray-500">/month</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-white font-semibold">Authority Builder</span>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">$5,500</div>
                    <div className="text-sm text-gray-400 line-through">$6,111</div>
                    <div className="text-xs text-gray-500">/month</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-white font-semibold">Industry Leader</span>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">$7,500</div>
                    <div className="text-sm text-gray-400 line-through">$8,824</div>
                    <div className="text-xs text-gray-500">/month</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-700">
              {comparisonData.map((row, index) => (
                <div key={index} className="grid grid-cols-4 gap-4 p-6 hover:bg-gray-800/30 transition-colors">
                  {/* Feature Name */}
                  <div className="text-left flex items-center">
                    <span className="text-white text-sm">{row.feature}</span>
                  </div>

                  {/* Content Launch Column */}
                  <div className="text-center flex items-center justify-center">
                    {row.contentLaunch.checkmark && (
                      <IconCheck className="w-5 h-5 text-[#FDC449]" />
                    )}
                    {row.contentLaunch.dash && (
                      <IconMinus className="w-5 h-5 text-gray-500" />
                    )}
                    {row.contentLaunch.text && (
                      <span className="text-white text-sm">{row.contentLaunch.text}</span>
                    )}
                    {row.contentLaunch.price && (
                      <div className="text-center">
                        <div className="text-white text-sm font-semibold">{row.contentLaunch.price}</div>
                        {row.contentLaunch.hasStrike && (
                          <div className="text-xs text-gray-400 line-through">{row.contentLaunch.originalPrice}</div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Professional Growth Column */}
                  <div className="text-center flex items-center justify-center">
                    {row.professionalGrowth.checkmark && (
                      <IconCheck className="w-5 h-5 text-[#FDC449]" />
                    )}
                    {row.professionalGrowth.dash && (
                      <IconMinus className="w-5 h-5 text-gray-500" />
                    )}
                    {row.professionalGrowth.text && (
                      <span className="text-white text-sm">{row.professionalGrowth.text}</span>
                    )}
                    {row.professionalGrowth.price && (
                      <div className="text-center">
                        <div className="text-white text-sm font-semibold">{row.professionalGrowth.price}</div>
                        {row.professionalGrowth.hasStrike && (
                          <div className="text-xs text-gray-400 line-through">{row.professionalGrowth.originalPrice}</div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Industry Leader Column */}
                  <div className="text-center flex items-center justify-center">
                    {row.industryLeader.checkmark && (
                      <IconCheck className="w-5 h-5 text-[#FDC449]" />
                    )}
                    {row.industryLeader.dash && (
                      <IconMinus className="w-5 h-5 text-gray-500" />
                    )}
                    {row.industryLeader.text && (
                      <span className="text-white text-sm">{row.industryLeader.text}</span>
                    )}
                    {row.industryLeader.price && (
                      <div className="text-center">
                        <div className="text-white text-sm font-semibold">{row.industryLeader.price}</div>
                        {row.industryLeader.hasStrike && (
                          <div className="text-xs text-gray-400 line-through">{row.industryLeader.originalPrice}</div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Scrollable Table */}
          <div className="lg:hidden">
            <div className="overflow-x-auto">
              <div className="min-w-[600px]">
                {/* Table Header */}
                <div className="bg-gray-800/50 border-b border-gray-700">
                  <div className="grid grid-cols-4 gap-4 p-4">
                    <div className="text-left">
                      <h3 className="text-base font-semibold text-white">Features</h3>
                    </div>
                    <div className="text-center">
                      <div className="mb-2">
                        <span className="text-white font-semibold text-sm">Content Launch</span>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">$3,750</div>
                        <div className="text-xs text-gray-400 line-through">$4,167</div>
                        <div className="text-xs text-gray-500">/month</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="mb-2">
                        <span className="text-white font-semibold text-sm">Authority Builder</span>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">$5,500</div>
                        <div className="text-xs text-gray-400 line-through">$6,111</div>
                        <div className="text-xs text-gray-500">/month</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="mb-2">
                        <span className="text-white font-semibold text-sm">Industry Leader</span>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">$7,500</div>
                        <div className="text-xs text-gray-400 line-through">$8,824</div>
                        <div className="text-xs text-gray-500">/month</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Table Body */}
                <div className="divide-y divide-gray-700">
                  {comparisonData.map((row, index) => (
                    <div key={index} className="grid grid-cols-4 gap-4 p-4 hover:bg-gray-800/30 transition-colors">
                      {/* Feature Name */}
                      <div className="text-left flex items-center">
                        <span className="text-white text-sm">{row.feature}</span>
                      </div>

                      {/* Content Launch Column */}
                      <div className="text-center flex items-center justify-center">
                        {row.contentLaunch.checkmark && (
                          <IconCheck className="w-4 h-4 text-[#FDC449]" />
                        )}
                        {row.contentLaunch.dash && (
                          <IconMinus className="w-4 h-4 text-gray-500" />
                        )}
                        {row.contentLaunch.text && (
                          <span className="text-white text-sm">{row.contentLaunch.text}</span>
                        )}
                        {row.contentLaunch.price && (
                          <div className="text-center">
                            <div className="text-white text-sm font-semibold">{row.contentLaunch.price}</div>
                            {row.contentLaunch.hasStrike && (
                              <div className="text-xs text-gray-400 line-through">{row.contentLaunch.originalPrice}</div>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Professional Growth Column */}
                      <div className="text-center flex items-center justify-center">
                        {row.professionalGrowth.checkmark && (
                          <IconCheck className="w-4 h-4 text-[#FDC449]" />
                        )}
                        {row.professionalGrowth.dash && (
                          <IconMinus className="w-4 h-4 text-gray-500" />
                        )}
                        {row.professionalGrowth.text && (
                          <span className="text-white text-sm">{row.professionalGrowth.text}</span>
                        )}
                        {row.professionalGrowth.price && (
                          <div className="text-center">
                            <div className="text-white text-sm font-semibold">{row.professionalGrowth.price}</div>
                            {row.professionalGrowth.hasStrike && (
                              <div className="text-xs text-gray-400 line-through">{row.professionalGrowth.originalPrice}</div>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Industry Leader Column */}
                      <div className="text-center flex items-center justify-center">
                        {row.industryLeader.checkmark && (
                          <IconCheck className="w-4 h-4 text-[#FDC449]" />
                        )}
                        {row.industryLeader.dash && (
                          <IconMinus className="w-4 h-4 text-gray-500" />
                        )}
                        {row.industryLeader.text && (
                          <span className="text-white text-sm">{row.industryLeader.text}</span>
                        )}
                        {row.industryLeader.price && (
                          <div className="text-center">
                            <div className="text-white text-sm font-semibold">{row.industryLeader.price}</div>
                            {row.industryLeader.hasStrike && (
                              <div className="text-xs text-gray-400 line-through">{row.industryLeader.originalPrice}</div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Table Footer */}
          <div className="bg-gray-800/50 border-t border-gray-700 p-4 lg:p-6">
            <div className="text-center text-xs lg:text-sm text-gray-400">
              <p className="mb-2">*Savings compared to regular monthly price of each service. Terms apply.</p>
              <p className="mb-2">**All content deliverables include unlimited revisions within scope</p>
              <p>†Custom strategy calls available for Industry Leader plan subscribers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
