"use client";

import { motion } from "framer-motion";
import {
  IconCircle,
  IconCircleCheck,
  IconDeviceMobile,
  IconWorld,
  IconBrandWindows,
  IconBrandApple,
  IconBrandYoutube,
  IconMicrophone,
  IconShare,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTiktok,
  IconCheck,
  IconVideo,
} from "@tabler/icons-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};


const pricingPlans = [
  {
    id: 1,
    name: "Content Launch Package",
    logo: IconCircle,
    logoColor: "text-teal-500",
    platforms: ["YouTube", "Facebook", "Instagram"],
    price: "$3750",
    originalPrice: "$4167",
    discount: "10% off",
    billing: "",
    features: [
      "Social media management for 2 platforms",
      "1 long-form YouTube video (up to 7 min)",
      "Up to 5 repurposed clips",
      "Short-form studio shoot (up to 15 reels)",
      "In-Studio Photography",
      "Authority Audit & Quick Win",
    ],
    buttonText: "Get started",
    buttonStyle: "bg-blue-600 text-white hover:bg-blue-700",
    linkStyle: "text-teal-600",
    badge: "Most Popular",
    isPopular: false,
  },
  {
    id: 2,
    name: "Authority Builder Package",
    logo: IconCircle,
    logoColor: "text-teal-500",
    platforms: ["YouTube", "Facebook", "Instagram", "LinkedIn"],
    price: "$5500",
    originalPrice: "$6111",
    discount: "10% off",
    billing: "",
    features: [
      "Social media management for all platforms",
      "Long-form recording session (2 podcasts or 5 YouTube videos)",
      "Up to 10 repurposed clips",
      "Short-form studio shoot (12–15 reels)",
      "In-Studio Photography",
      "20 posts per month (up to 8 graphics/carousels)",
      "Up to 5 YouTube videos published per month",
      "Monthly strategy call + content calendar",
      "Monthly analytics report",
      "Link & Offer Portal",
      "Competitor Authority Analysis",
    ],
    buttonText: "Get started",
    buttonStyle: "bg-blue-600 text-white hover:bg-blue-700",
    linkStyle: "text-teal-600",
    badge: "Best Value",
    isPopular: false,
  },
  {
    id: 3,
    name: "Industry Leader Package",
    logo: IconCircle,
    logoColor: "text-teal-500",
    platforms: ["YouTube", "Facebook", "Instagram", "LinkedIn"],
    price: "$7500",
    originalPrice: "$8824",
    discount: "15% off",
    billing: "",
    features: [
      "Full social management across all platforms",
      "Long-form recording session (4 podcasts or 5 YouTube videos)",
      "Up to 15 repurposed clips",
      "Short-form studio shoot (20 reels)",
      "In-Studio Photography",
      "20 posts per month (up to 8 graphics/carousels)",
      "Up to 20 YouTube videos published per month",
      "Brand Suite (banner, thumbnails, visual assets)",
      "Monthly strategy call + quarterly analytics",
      "Managed Link Portal",
    ],
    buttonText: "Get started",
    buttonStyle: "bg-blue-600 text-white hover:bg-blue-700",
    linkStyle: "text-teal-600",
    badge: "Best Pick",
    isPopular: true,
  },
];

export default function PricingSection({ selectedGoals = [], onGoalSelect }: { selectedGoals?: number[], onGoalSelect?: (goals: number[]) => void }) {
  // JourneyWell Package Finder filtering logic
  const getFilteredPlans = () => {
    if (selectedGoals.length === 0) {
      return pricingPlans; // Show all plans when no goals selected
    }

    // JourneyWell package filtering based on goals
    return pricingPlans.filter(plan => {
      // Goal 1 (Affordability) -> Show Content Launch (Tier 1)
      // Goal 2 (Consistency) -> Show Professional Growth (Tier 2)
      // Goal 3 (Video at Scale) -> Show Industry Leader (Tier 3)
      // Goal 4 (Full Management) -> Show Industry Leader (Tier 3)
      // Goal 5 (Best Value) -> Show Professional Growth or Industry Leader (Tier 2 or 3)
      // Goal 6 (One Time) -> Show A La Carte (handled separately)

      if (selectedGoals.includes(1) && plan.id === 1) return true; // Content Launch
      if (selectedGoals.includes(2) && plan.id === 2) return true; // Professional Growth
      if (selectedGoals.includes(3) && plan.id === 3) return true; // Industry Leader
      if (selectedGoals.includes(4) && plan.id === 3) return true; // Industry Leader
      if (selectedGoals.includes(5) && (plan.id === 2 || plan.id === 3)) return true; // Professional Growth or Industry Leader
      if (selectedGoals.includes(6)) return false; // A La Carte - handled separately

      return false;
    });
  };

  const filteredPlans = getFilteredPlans();

  return (
    <div className="py-10">
      {/* Monthly Packages Section */}
      <div className="container-custom">
        <div className="max-w-6xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-body tracking-tight">
              Packages
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-body">
              Choose the package that fits your content goals and budget
            </p>
          </motion.div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {filteredPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                className={`${
                  plan.isPopular 
                    ? "bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-[#371ACA] pt-12 pb-8 ring-2 ring-[#371ACA]/20 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900" 
                    : "bg-gray-50 border-gray-200 py-8 hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600"
                } rounded-3xl px-10 shadow-xl hover:shadow-2xl transition-all duration-300 relative group`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {/* Badge for first plan only */}
                {plan.badge && index === 0 && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-black px-6 py-3 rounded-lg text-sm text-white">
                      <div className="flex items-center gap-3">
                        <div className="bg-yellow-500 w-6 h-6 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">★</span>
                        </div>
                        <span className="font-semibold text-xs">{plan.badge}</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex flex-col lg:flex-row items-center gap-8">
                  {/* Left side - Main content */}
                  <div className="w-full lg:w-96 flex flex-col justify-between lg:h-80">
                    {/* Top section - Logo and name */}
                    <div>
                      <div className="flex items-center gap-6 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#371ACA] to-[#2A1488] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 flex-shrink-0">
                          <span className="text-white text-2xl font-bold tracking-tight">J</span>
                        </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 font-body tracking-tight">
                          {plan.name}
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                          {plan.platforms.map((platform, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                                {platform === "YouTube" ? (
                                  <IconBrandYoutube className="w-4 h-4 text-gray-600 dark:text-white" />
                                ) : platform === "Podcast" ? (
                                  <IconMicrophone className="w-4 h-4 text-gray-600 dark:text-white" />
                                ) : platform === "Facebook" ? (
                                  <IconBrandFacebook className="w-4 h-4 text-gray-600 dark:text-white" />
                                ) : platform === "Instagram" ? (
                                  <IconBrandInstagram className="w-4 h-4 text-gray-600 dark:text-white" />
                                ) : platform === "LinkedIn" ? (
                                  <IconBrandLinkedin className="w-4 h-4 text-gray-600 dark:text-white" />
                                ) : platform === "TikTok" ? (
                                  <IconBrandTiktok className="w-4 h-4 text-gray-600 dark:text-white" />
                                ) : platform === "Social Media" ? (
                                  <IconShare className="w-4 h-4 text-gray-600 dark:text-white" />
                                ) : (
                                  <IconWorld className="w-4 h-4 text-gray-600 dark:text-white" />
                                )}
                              </div>
                              <span className="text-sm text-gray-900 dark:text-white font-body tracking-tight truncate">{platform}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    </div>

                    {/* Bottom section - Deliverables */}
                    <div>
                      <div className="flex flex-col gap-1">
                        {plan.id === 1 ? (
                          <span className="text-[40px] font-bold text-gray-900 dark:text-white font-body leading-none tracking-tighter">
                            21 videos / 8 posts
                          </span>
                        ) : plan.id === 2 ? (
                          <span className="text-[40px] font-bold text-gray-900 dark:text-white font-body leading-none tracking-tighter">
                            30 videos / 25 posts
                          </span>
                        ) : (
                          <span className="text-[40px] font-bold text-gray-900 dark:text-white font-body leading-none tracking-tighter">
                            40 videos / 40 posts
                          </span>
                        )}
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-body mt-1">
                          per month
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-blue-600 dark:text-blue-400 font-body">
                          • {plan.id === 3 ? "Four month minimum" : "Three month minimum"}
                        </span>
                      </div>
                    </div>

                  </div>

                  {/* Right side - Features with checkmarks */}
                  <div className="flex-1">
                    <div className="border-l border-gray-200 dark:border-gray-600 pl-6">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 font-body tracking-tight">Features</h4>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-6 h-6 flex items-center justify-center mt-0.5">
                              <IconCircleCheck className="w-6 h-6 text-[#371ACA]" />
                            </div>
                            <span className="text-base font-medium text-gray-700 dark:text-gray-300 font-body tracking-tight">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Price section - Above buttons */}
                      <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-600">
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-gray-900 dark:text-white font-body leading-none tracking-tighter">
                            ${parseInt(plan.price.replace('$', '')).toLocaleString()}
                          </span>
                          <span className="text-sm text-gray-600 dark:text-gray-300 opacity-60 line-through font-body">
                            ${parseInt(plan.originalPrice.replace('$', '')).toLocaleString()}
                          </span>
                          <div className="bg-[#FDC449] text-white text-xs px-2 py-1 rounded-full font-body">
                            {plan.discount}†
                          </div>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-body mt-1 block">
                          per month
                        </span>
                      </div>
                      
                      {/* Buttons in right section */}
                      <div className="flex flex-col lg:flex-row gap-4">
                        <button className={`py-3 px-8 rounded-full font-semibold text-lg font-body tracking-tight transition-all duration-200 hover:scale-105 ${plan.buttonStyle}`}>
                          {plan.buttonText}
                        </button>
                        <div className="flex items-center justify-center">
                          <a href="#" className="text-base underline font-body tracking-tight text-[#371ACA] hover:text-[#2A1488] transition-colors">
                            Book a call
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-custom mt-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-body tracking-tight">
              A La Carte Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-body">
              Perfect for one-time projects or testing our services
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Podcast Production */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 px-6 py-4">
                <h3 className="text-xl font-bold text-white font-body tracking-tight flex items-center gap-3">
                  <IconMicrophone className="w-6 h-6" />
                  Podcast Production
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    {
                      option: "Single Episode",
                      deliverables: "Full edit + publish (30–60 min)",
                      price: "$1,250-$1,500"
                    },
                    {
                      option: "Single Episode (Thumbnails/Reels)",
                      deliverables: "Full edit + publish + thumbnails/reels",
                      price: "$2,250-$2,500"
                    }
                  ].map((item, index) => (
                    <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white font-body">{item.option}</h4>
                        <span className="text-lg font-bold text-white dark:text-white font-body">{item.price}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 font-body">{item.deliverables}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-6 bg-gray-900 dark:bg-gray-800 rounded-lg">
                  <p className="text-lg text-white font-body font-semibold">
                    <strong>💡 Clients on monthly plans average $850 per episode</strong> and receive analytics & management included.
                  </p>
                </div>
              </div>
            </div>

            {/* Short-Form Video */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#371ACA] to-[#2A0F9A] px-6 py-4">
                <h3 className="text-xl font-bold text-white font-body tracking-tight flex items-center gap-3">
                  <IconVideo className="w-6 h-6" />
                  Short-Form Video (Reels)
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    {
                      option: "5-Reel Session",
                      deliverables: "5 edited reels (60–90 min shoot)",
                      price: "$900"
                    },
                    {
                      option: "10-Reel Session",
                      deliverables: "10 edited reels (1.5–2 hr shoot)",
                      price: "$1,750"
                    },
                    {
                      option: "20-Reel Session",
                      deliverables: "20 edited reels (2–3 hr shoot)",
                      price: "$3,200"
                    }
                  ].map((item, index) => (
                    <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white font-body">{item.option}</h4>
                        <span className="text-lg font-bold text-white dark:text-white font-body">{item.price}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 font-body">{item.deliverables}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-6 bg-gray-900 dark:bg-gray-800 rounded-lg">
                  <p className="text-lg text-white font-body font-semibold">
                    <strong>💡 Monthly packages bring per-reel cost down 25–30%</strong> and include strategy, posting, and analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add-Ons Section */}
      <div className="container-custom mt-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-body tracking-tight">
              Add-Ons
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-body">
              Enhance your package with additional services
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "In-studio shoot or recording",
                price: "$950 – $1,250",
                description: "Additional filming session"
              },
              {
                name: "Studio photoshoot",
                price: "$450",
                description: "Complete Brand Photography (In-Studio)"
              },
              {
                name: "Off-site photoshoot",
                price: "$1,500 +",
                description: "On-location content shoot"
              },
              {
                name: "Website design & development",
                price: "$3,500",
                description: "5-page custom site design"
              },
              {
                name: "Podcast intro/outro package",
                price: "$250 – $500",
                description: "Branded audio + visual intro/outro"
              }
            ].map((addon, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-200 border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 font-body tracking-tight">
                  {addon.name}
                </h3>
                <div className="text-xl font-bold text-white dark:text-white mb-3 font-body">
                  {addon.price}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-body">
                  {addon.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Messaging Blocks */}
      <div className="container-custom mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-6 bg-gradient-to-br from-[#371ACA]/10 to-[#371ACA]/20 dark:from-[#371ACA]/20 dark:to-[#371ACA]/30 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 font-body">Consistency = Savings</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 font-body">
                "Batching and managing your content monthly allows us to streamline production — so your per-video cost drops while your brand stays consistent."
              </p>
            </motion.div>
            
            <motion.div
              className="text-center p-6 bg-gradient-to-br from-[#371ACA]/10 to-[#371ACA]/20 dark:from-[#371ACA]/20 dark:to-[#371ACA]/30 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 font-body">All-In-One Approach</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 font-body">
                "We film, edit, post, and analyze — making your content creation completely hands-off."
              </p>
            </motion.div>
            
            <motion.div
              className="text-center p-6 bg-gradient-to-br from-[#371ACA]/10 to-[#371ACA]/20 dark:from-[#371ACA]/20 dark:to-[#371ACA]/30 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 font-body">Why Monthly Wins</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 font-body">
                "One-off sessions are perfect for testing, but our monthly plans save 25–40% and include ongoing strategy, posting, and analytics."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
