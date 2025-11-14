"use client";

import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  IconMicrophone,
  IconHeadphones,
  IconFileText,
  IconRocket,
  IconCheck,
  IconArrowRight,
} from "@tabler/icons-react";
export default function PodcastProductionPage() {
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
            <h1 className="text-4xl font-bold font-heading text-gray-900 dark:text-white sm:text-5xl md:text-6xl leading-tight">
              Podcast Production <span className="text-[#4F6DF5]">Baton Rouge</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 sm:text-xl max-w-2xl mx-auto">
              Professional podcast production services in Baton Rouge. From recording to editing to publishing, we handle everything so you can focus on creating great content.
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

      {/* What We Offer Section */}
      <section className="section bg-white dark:bg-[#0B1020]">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold font-heading text-gray-900 dark:text-white sm:text-4xl">
              Complete Podcast Production Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our podcast production Baton Rouge services cover every aspect of podcast creation, from initial recording to final distribution.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: IconMicrophone,
                title: "Professional Recording",
                description: "State-of-the-art podcast studio Baton Rouge setup with professional microphones and recording equipment.",
              },
              {
                icon: IconHeadphones,
                title: "Audio Editing & Mixing",
                description: "Expert podcast editing Baton Rouge services. We polish your audio for professional-quality episodes.",
              },
              {
                icon: IconFileText,
                title: "Show Notes & Transcriptions",
                description: "Comprehensive show notes and transcriptions to boost SEO and accessibility for your podcast.",
              },
              {
                icon: IconRocket,
                title: "Distribution & Publishing",
                description: "We handle podcast distribution across all major platforms, ensuring your content reaches your audience.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:bg-[#1F2430]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="inline-flex rounded-lg bg-[#EEF1FF] p-3 dark:bg-[#1F2430]">
                  <service.icon className="h-6 w-6 text-[#4F6DF5]" />
                </div>
                <h3 className="mt-4 text-xl font-bold font-heading text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-[#F7F8FC] dark:bg-[#1F2430]">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold font-heading text-gray-900 dark:text-white sm:text-4xl">
                Why Choose Our Podcast Production Services?
              </h2>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                As a leading podcast agency Baton Rouge, we bring years of experience and professional expertise to every project. Our podcast producer Baton Rouge team understands what it takes to create engaging, high-quality content that resonates with audiences.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Experienced podcast producer Baton Rouge team",
                  "Professional podcast studio Baton Rouge equipment",
                  "Batch podcast recording Baton Rouge capabilities",
                  "Comprehensive podcast editing Baton Rouge services",
                  "Multi-platform distribution and publishing",
                  "Ongoing support and strategy consultation",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <IconCheck className="mr-3 h-5 w-5 text-[#4F6DF5] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="rounded-2xl bg-gradient-to-br from-[#4F6DF5] to-[#9C6CFF] p-8 text-white"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Podcast?</h3>
              <p className="mb-6 text-white/90">
                Whether you're launching a new podcast or need help with existing episodes, our podcast production Baton Rouge services are designed to help you succeed. Find podcast production near me services that deliver results.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#4F6DF5] hover:bg-gray-100">
                  Schedule a Consultation
                  <IconArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-white dark:bg-[#0B1020]">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold font-heading text-gray-900 dark:text-white sm:text-4xl">
              Our Podcast Production Process
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From initial consultation to final publication, we guide you through every step of the podcast production process.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Consultation & Planning",
                description: "We discuss your podcast goals, format, and content strategy to create a customized production plan.",
              },
              {
                step: "02",
                title: "Recording Setup",
                description: "Our podcast studio Baton Rouge provides professional recording equipment and a comfortable environment for your sessions.",
              },
              {
                step: "03",
                title: "Editing & Post-Production",
                description: "Our podcast editing Baton Rouge team polishes your audio, removes background noise, and adds music and sound effects.",
              },
              {
                step: "04",
                title: "Publishing & Distribution",
                description: "We handle distribution across all major platforms, including Apple Podcasts, Spotify, and Google Podcasts.",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-6xl font-bold text-[#4F6DF5] opacity-20 mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {process.description}
                </p>
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
              Start Your Podcast Production Journey Today
            </h2>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              Ready to launch or improve your podcast? Our podcast production Baton Rouge services are here to help. Contact us to discuss your podcast needs and learn how we can support your content goals.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-[#4F6DF5] to-[#9C6CFF] hover:from-[#3E54C8] hover:to-[#7C5CFF] text-white border-0">
                  Get Started
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

