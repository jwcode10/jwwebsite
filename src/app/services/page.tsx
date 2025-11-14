"use client";

import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  IconMicrophone,
  IconBrandYoutube,
  IconVideo,
  IconBrandInstagram,
  IconPalette,
  IconChartBar,
  IconArrowRight,
} from "@tabler/icons-react";

const services = [
  {
    icon: IconMicrophone,
    title: "Podcast Production",
    slug: "podcast-production-baton-rouge",
    description:
      "Professional podcast production services in Baton Rouge. From recording to editing, we handle everything so you can focus on creating great content.",
    features: [
      "Professional Recording Setup",
      "Audio Editing & Mixing",
      "Show Notes & Transcriptions",
      "Distribution & Publishing",
    ],
    mainKeyword: "podcast production Baton Rouge",
  },
  {
    icon: IconBrandYoutube,
    title: "YouTube Production & Optimization",
    slug: "youtube-production-baton-rouge",
    description:
      "Expert YouTube video editing and optimization in Baton Rouge. We help your channel grow with polished videos and strategic optimization.",
    features: [
      "Video Editing & Post-Production",
      "Thumbnail Design",
      "SEO Optimization",
      "Evergreen Clip Creation",
    ],
    mainKeyword: "YouTube video editing Baton Rouge",
  },
  {
    icon: IconVideo,
    title: "Short-Form Video",
    slug: "short-form-video-baton-rouge",
    description:
      "Engaging short-form video content for Instagram Reels, TikTok, and YouTube Shorts. We create scroll-stopping clips that drive engagement.",
    features: [
      "Reels & TikTok Creation",
      "Content Batching",
      "Trend Integration",
      "Multi-Platform Optimization",
    ],
    mainKeyword: "short-form video Baton Rouge",
  },
  {
    icon: IconBrandInstagram,
    title: "Social Media Management",
    slug: "social-media-management-baton-rouge",
    description:
      "Complete social media management services in Baton Rouge. We handle your posting, engagement, and strategy so you can focus on your business.",
    features: [
      "Content Calendar Management",
      "Multi-Platform Posting",
      "Community Engagement",
      "Performance Analytics",
    ],
    mainKeyword: "social media management Baton Rouge",
  },
  {
    icon: IconPalette,
    title: "Branding & Creative Design",
    slug: "branding-and-creative-baton-rouge",
    description:
      "Comprehensive branding and creative design services. From brand identity to custom graphics, we help you stand out with cohesive visual branding.",
    features: [
      "Brand Identity Design",
      "Custom Graphics & Templates",
      "Carousel & Post Design",
      "YouTube Banner & Thumbnails",
    ],
    mainKeyword: "branding & creative Baton Rouge",
  },
  {
    icon: IconChartBar,
    title: "Content Strategy & Analytics",
    slug: "content-strategy-baton-rouge",
    description:
      "Data-driven content strategy and analytics services. We help you plan, measure, and optimize your content for maximum impact and growth.",
    features: [
      "Quarterly Analytics Reports",
      "Content Calendar Planning",
      "Link & Offer Portal",
      "Performance Optimization",
    ],
    mainKeyword: "content strategy Baton Rouge",
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-white to-[#EEF1FF] dark:from-[#0B1020] dark:to-[#1F2430]">
        <div className="container-custom">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold font-heading text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Our Content Services
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 sm:text-xl max-w-2xl mx-auto">
              Full-service content production and strategy in Baton Rouge. From podcasts to YouTube to social media, we handle it all.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-[#4F6DF5] to-[#9C6CFF] hover:from-[#3E54C8] hover:to-[#7C5CFF] text-white border-0">
                  Get Started
                  <IconArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white dark:bg-[#0B1020]">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 dark:border-gray-800 dark:bg-[#1F2430]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="inline-flex rounded-lg bg-[#EEF1FF] p-3 dark:bg-[#1F2430] group-hover:bg-[#4F6DF5] transition-colors">
                  <service.icon className="h-6 w-6 text-[#4F6DF5] group-hover:text-white transition-colors" />
                </div>
                <h3 className="mt-6 text-2xl font-bold font-heading text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-gray-600 dark:text-gray-300"
                    >
                      <IconArrowRight className="mr-2 h-4 w-4 text-[#4F6DF5] mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href={`/services/${service.slug}`}>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-[#4F6DF5] group-hover:text-white group-hover:border-[#4F6DF5] transition-colors"
                    >
                      Learn More
                      <IconArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-[#F5F7FF] to-[#EEF1FF] dark:from-[#1F2430] dark:to-[#0B1020]">
        <div className="container-custom">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold font-heading text-gray-900 dark:text-white sm:text-4xl">
              Ready to Elevate Your Content?
            </h2>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              Whether you need podcast production, YouTube editing, or comprehensive social media management in Baton Rouge, we're here to help. Let's discuss your content goals.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-[#4F6DF5] to-[#9C6CFF] hover:from-[#3E54C8] hover:to-[#7C5CFF] text-white border-0">
                  Book a Consultation
                  <IconArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/packages">
                <Button size="lg" variant="outline">
                  View Packages
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
