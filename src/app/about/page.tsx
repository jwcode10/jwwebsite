"use client";

import { PageHeader } from "@/components/ui/page-header";
import { motion } from "framer-motion";
import {
  IconTarget,
  IconHeart,
  IconBulb,
  IconUsers,
} from "@tabler/icons-react";

const values = [
  {
    icon: IconTarget,
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, setting high standards and consistently delivering exceptional results.",
  },
  {
    icon: IconHeart,
    title: "Integrity",
    description:
      "We operate with honesty and transparency, building trust through ethical practices and genuine relationships.",
  },
  {
    icon: IconBulb,
    title: "Innovation",
    description:
      "We embrace creativity and forward-thinking, constantly seeking new ways to solve problems and add value.",
  },
  {
    icon: IconUsers,
    title: "Collaboration",
    description:
      "We believe in the power of teamwork, working closely with clients and partners to achieve shared goals.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About JourneyWell"
        subtitle="Empowering businesses and individuals to reach their full potential"
      />

      {/* Story Section */}
      <section className="section">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold font-heading text-gray-900 dark:text-gray-50">
                Our Story
              </h2>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                Founded with a vision to transform how businesses approach
                growth and innovation, JourneyWell has become a trusted partner
                for organizations seeking excellence. Our journey began with a
                simple belief: that every business deserves access to
                world-class expertise and guidance.
              </p>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Over the years, we've helped hundreds of clients achieve their
                goals, from startups finding their footing to established
                enterprises scaling new heights. Our approach combines strategic
                thinking with practical execution, ensuring that every solution
                is tailored to your unique needs and circumstances.
              </p>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Today, we're proud to be recognized as leaders in our field,
                but we never lose sight of what matters most: your success. Your
                journey is our journey, and we're committed to being there every
                step of the way.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold font-heading text-gray-900 dark:text-gray-50 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="rounded-2xl border bg-white p-8 text-center shadow-sm dark:bg-gray-950"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mx-auto inline-flex rounded-lg bg-brand-100 p-4 dark:bg-brand-950">
                  <value.icon className="h-8 w-8 text-brand-600 dark:text-brand-400" />
                </div>
                <h3 className="mt-6 text-xl font-semibold font-heading text-gray-900 dark:text-gray-50">
                  {value.title}
                </h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container-custom">
          <motion.div
            className="grid gap-8 sm:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "10+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold font-heading text-brand-600 dark:text-brand-400">
                  {stat.value}
                </div>
                <div className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
















