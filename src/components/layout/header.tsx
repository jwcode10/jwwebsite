"use client";

import Link from "next/link";
import { IconMenu2, IconX, IconSend, IconChevronDown, IconArrowRight, IconMicrophone, IconBook, IconRefresh, IconBrandYoutube, IconPalette, IconVideo, IconBrandInstagram, IconChartBar } from "@tabler/icons-react";
import { useState, useEffect, useRef } from "react";

type NavItem = {
  name: string;
  href: string;
  hasDropdown?: boolean;
};

const navigation: NavItem[] = [
  { name: "ABOUT", href: "#about" },
  { name: "SERVICES", href: "#services", hasDropdown: true },
  { name: "PORTFOLIO", href: "#portfolio" },
  { name: "BLOG", href: "/blog", hasDropdown: true },
  { name: "PRICING", href: "#pricing" },
];

// Services dropdown data
const servicesData = {
  creativeDesign: {
    title: "Creative design services",
    color: "bg-[#4F6DF5]",
    services: [
      { title: "Branding & Creative Design", description: "Comprehensive branding and visual identity", href: "/services/branding-and-creative-baton-rouge", icon: IconPalette },
      { title: "Social Media Creative", description: "Engaging assets for all platforms", href: "/services/social-media-management-baton-rouge", icon: IconBrandInstagram },
      { title: "YouTube Thumbnails", description: "Eye-catching designs that perform", href: "/services/youtube-production-baton-rouge", icon: IconBrandYoutube },
    ],
  },
  production: {
    title: "Specialized production services",
    color: "bg-[#3E54C8]",
    services: [
      { title: "Podcast Production", description: "Professional recording to publishing", href: "/services/podcast-production-baton-rouge", icon: IconMicrophone },
      { title: "YouTube Production", description: "Expert video editing and optimization", href: "/services/youtube-production-baton-rouge", icon: IconBrandYoutube },
      { title: "Short-Form Video", description: "Scroll-stopping clips for Reels & TikTok", href: "/services/short-form-video-baton-rouge", icon: IconVideo },
      { title: "Social Media Management", description: "Complete social media strategy", href: "/services/social-media-management-baton-rouge", icon: IconBrandInstagram },
    ],
  },
  strategy: {
    title: "Strategy & Analytics",
    color: "bg-[#5b5fd8]",
    services: [
      { title: "Content Strategy", description: "Data-driven planning and optimization", href: "/services/content-strategy-baton-rouge", icon: IconChartBar },
    ],
  },
};

// Blog dropdown data
const learningCenterItems = [
  { title: "Events & Summits", description: "Our upcoming events and recordings", icon: IconMicrophone },
  { title: "Guides", description: "Insights from marketing leaders", icon: IconBook },
  { title: "Reports", description: "Data for smarter decisions", icon: IconRefresh },
  { title: "Video library", description: "JourneyWell's latest videos", icon: IconBrandYoutube },
  { title: "Playbooks", description: "Quick ways to step up your game", icon: IconPalette },
];

const blogPosts = [
  { title: "How to Build a Content System That Scales", image: "/images/section4/card1.jpg" },
  { title: "7 Ways to Build a Design System Teams Actually Want to Use", image: "/images/section4/card2.jpg" },
];

const customerStories = [
  { title: "How JourneyWell Brought Content Strategy to Life", image: "/images/section4/card8.jpeg" },
  { title: "How Our Clients Leverage JourneyWell for High-Impact Content", image: "/images/section4/card10.jpeg" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"services" | "blog" | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const blogDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled 
          ? "bg-white/80 dark:bg-[#0A0F2C]/80 backdrop-blur-md border-b border-gray-200/50 dark:border-[#1a1f3a]/50" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container-custom flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img 
            src="/images/jw-logo/jw-icon.png" 
            alt="JourneyWell Content Agency Logo" 
            className="w-8 h-8"
          />
          <span className="text-xl font-bold text-gray-900 dark:text-white tracking-wide">JourneyWell Content Agency</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => {
            const isAnchor = item.href.startsWith("#");
            const isServices = item.name === "SERVICES";
            const isBlog = item.name === "BLOG";

            if (isServices) {
              return (
                <div
                  key={item.name}
                  ref={servicesRef}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("services")}
                  onMouseLeave={() => {
                    if (!servicesDropdownRef.current?.matches(":hover")) {
                      setActiveDropdown(null);
                    }
                  }}
                >
                  <a
                    href={item.href}
                    className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                      activeDropdown === "services"
                        ? "text-gray-900 dark:text-white bg-gray-100 dark:bg-[#1a1f3a] px-3 py-2 rounded-lg"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    {item.name}
                    <IconChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`} />
                  </a>
                  
                  {activeDropdown === "services" && (
                    <div
                      ref={servicesDropdownRef}
                      className="fixed left-0 right-0 top-20 w-screen bg-white dark:bg-[#0A0F2C] border-t border-gray-200 dark:border-[#1a1f3a] shadow-xl animate-[fadeIn_0.2s_ease-in-out_forwards] z-40"
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="container-custom py-8">
                        <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* Column 1: Creative Design Services */}
                        <div>
                          <Link
                            href="/services"
                            className={`${servicesData.creativeDesign.color} text-white px-4 py-2 rounded-lg font-medium text-sm flex items-center justify-between mb-6 hover:opacity-90 transition-opacity`}
                          >
                            {servicesData.creativeDesign.title}
                            <IconArrowRight className="w-4 h-4" />
                          </Link>
                          <div className="space-y-4">
                            {servicesData.creativeDesign.services.map((service, idx) => (
                              <Link
                                key={idx}
                                href={service.href}
                                className="block group hover:bg-gray-50 dark:hover:bg-[#1a1f3a] p-3 rounded-lg transition-colors"
                              >
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-[#4F6DF5] transition-colors">
                                      {service.title}
                                    </h4>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">
                                      {service.description}
                                    </p>
                                  </div>
                                  <service.icon className="w-5 h-5 text-gray-400 dark:text-gray-500 ml-3 flex-shrink-0" />
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Column 2: Production Services */}
                        <div>
                          <Link
                            href="/services"
                            className={`${servicesData.production.color} text-white px-4 py-2 rounded-lg font-medium text-sm flex items-center justify-between mb-6 hover:opacity-90 transition-opacity`}
                          >
                            {servicesData.production.title}
                            <IconArrowRight className="w-4 h-4" />
                          </Link>
                          <div className="space-y-4">
                            {servicesData.production.services.map((service, idx) => (
                              <Link
                                key={idx}
                                href={service.href}
                                className="block group hover:bg-gray-50 dark:hover:bg-[#1a1f3a] p-3 rounded-lg transition-colors"
                              >
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-[#4F6DF5] transition-colors">
                                      {service.title}
                                    </h4>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">
                                      {service.description}
                                    </p>
                                  </div>
                                  <service.icon className="w-5 h-5 text-gray-400 dark:text-gray-500 ml-3 flex-shrink-0" />
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Column 3: Strategy & Analytics */}
                        <div>
                          <Link
                            href="/services"
                            className={`${servicesData.strategy.color} text-white px-4 py-2 rounded-lg font-medium text-sm flex items-center justify-between mb-6 hover:opacity-90 transition-opacity`}
                          >
                            {servicesData.strategy.title}
                            <IconArrowRight className="w-4 h-4" />
                          </Link>
                          <div className="space-y-4">
                            {servicesData.strategy.services.map((service, idx) => (
                              <Link
                                key={idx}
                                href={service.href}
                                className="block group hover:bg-gray-50 dark:hover:bg-[#1a1f3a] p-3 rounded-lg transition-colors"
                              >
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-[#4F6DF5] transition-colors">
                                      {service.title}
                                    </h4>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">
                                      {service.description}
                                    </p>
                                  </div>
                                  <service.icon className="w-5 h-5 text-gray-400 dark:text-gray-500 ml-3 flex-shrink-0" />
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            if (isBlog) {
              return (
                <div
                  key={item.name}
                  ref={blogRef}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("blog")}
                  onMouseLeave={() => {
                    if (!blogDropdownRef.current?.matches(":hover")) {
                      setActiveDropdown(null);
                    }
                  }}
                >
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                      activeDropdown === "blog"
                        ? "text-gray-900 dark:text-white bg-gray-100 dark:bg-[#1a1f3a] px-3 py-2 rounded-lg"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    {item.name}
                    <IconChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "blog" ? "rotate-180" : ""}`} />
                  </Link>
                  
                  {activeDropdown === "blog" && (
                    <div
                      ref={blogDropdownRef}
                      className="fixed left-0 right-0 top-20 w-screen bg-white dark:bg-[#0A0F2C] border-t border-gray-200 dark:border-[#1a1f3a] shadow-xl animate-[fadeIn_0.2s_ease-in-out_forwards] z-40"
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="container-custom py-8">
                        <div className="grid grid-cols-2 gap-8 max-w-7xl mx-auto">
                        {/* Left Column: Learning Center */}
                        <div>
                          <Link
                            href="/blog"
                            className="text-gray-900 dark:text-white font-semibold text-base mb-6 flex items-center gap-2 hover:text-[#4F6DF5] transition-colors"
                          >
                            Learning Center
                            <IconArrowRight className="w-4 h-4" />
                          </Link>
                          <div className="space-y-3">
                            {learningCenterItems.map((item, idx) => (
                              <Link
                                key={idx}
                                href="/blog"
                                className="block group hover:bg-gray-50 dark:hover:bg-[#1a1f3a] p-3 rounded-lg transition-colors"
                              >
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1 group-hover:text-[#4F6DF5] transition-colors">
                                      {item.title}
                                    </h4>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">
                                      {item.description}
                                    </p>
                                  </div>
                                  <item.icon className="w-5 h-5 text-gray-400 dark:text-gray-500 ml-3 flex-shrink-0" />
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Right Column: Blog & Customer Stories Grid */}
                        <div>
                          {/* Blog Section */}
                          <div className="mb-8">
                            <Link
                              href="/blog"
                              className="text-gray-900 dark:text-white font-semibold text-base mb-4 flex items-center gap-2 hover:text-[#4F6DF5] transition-colors"
                            >
                              Blog
                              <IconArrowRight className="w-4 h-4" />
                            </Link>
                            <div className="grid grid-cols-2 gap-3">
                              {blogPosts.map((post, idx) => (
                                <Link
                                  key={idx}
                                  href="/blog"
                                  className="group block"
                                >
                                  <div className="relative aspect-video rounded-lg overflow-hidden mb-2 bg-gray-200 dark:bg-[#1a1f3a]">
                                    {post.image && (
                                      <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                      />
                                    )}
                                  </div>
                                  <h4 className="text-xs font-medium text-gray-900 dark:text-white line-clamp-2 group-hover:text-[#4F6DF5] transition-colors">
                                    {post.title}
                                  </h4>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Customer Stories Section */}
                          <div>
                            <Link
                              href="/portfolio"
                              className="text-gray-900 dark:text-white font-semibold text-base mb-4 flex items-center gap-2 hover:text-[#4F6DF5] transition-colors"
                            >
                              Customer Stories
                              <IconArrowRight className="w-4 h-4" />
                            </Link>
                            <div className="grid grid-cols-2 gap-3">
                              {customerStories.map((story, idx) => (
                                <Link
                                  key={idx}
                                  href="/portfolio"
                                  className="group block"
                                >
                                  <div className="relative aspect-video rounded-lg overflow-hidden mb-2 bg-gray-200 dark:bg-[#1a1f3a]">
                                    {story.image && (
                                      <img
                                        src={story.image}
                                        alt={story.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                      />
                                    )}
                                  </div>
                                  <h4 className="text-xs font-medium text-gray-900 dark:text-white line-clamp-2 group-hover:text-[#4F6DF5] transition-colors">
                                    {story.title}
                                  </h4>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            if (isAnchor) {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-white text-gray-600 dark:text-gray-300"
                >
                  {item.name}
                </a>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-white text-gray-600 dark:text-gray-300"
              >
                {item.name}
              </Link>
            );
          })}
          <Link href="/contact">
            <button className="bg-gray-900 text-white dark:bg-white dark:text-[#0A0F2C] px-6 py-3 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
              CONTACT US
              <IconSend className="w-4 h-4" />
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <IconX className="h-6 w-6" />
            ) : (
              <IconMenu2 className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 dark:border-[#1a1f3a] bg-white dark:bg-[#0A0F2C] lg:hidden">
          <div className="container-custom space-y-1 py-4">
            {navigation.map((item) => {
              const isAnchor = item.href.startsWith("#");

              if (isAnchor) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg px-4 py-2 text-base font-medium transition-colors text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {item.name}
                  </a>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-4 py-2 text-base font-medium transition-colors text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {item.name}
                </Link>
              );
            })}
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full bg-gray-900 text-white dark:bg-white dark:text-[#0A0F2C] px-6 py-3 rounded-full font-semibold text-sm flex items-center justify-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors mt-4">
                CONTACT US
                <IconSend className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
