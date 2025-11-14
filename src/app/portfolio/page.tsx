"use client";

import { PageHeader } from "@/components/ui/page-header";
import { motion } from "framer-motion";
import { IconExternalLink } from "@tabler/icons-react";

const projects = [
  {
    title: "E-commerce Platform",
    category: "Web Development",
    description:
      "A modern e-commerce platform with advanced features and seamless user experience.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    link: "#",
  },
  {
    title: "Brand Identity",
    category: "Design",
    description:
      "Complete brand identity redesign for a leading technology company.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    link: "#",
  },
  {
    title: "Marketing Campaign",
    category: "Digital Marketing",
    description:
      "Multi-channel marketing campaign that increased conversions by 300%.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    link: "#",
  },
  {
    title: "Mobile Application",
    category: "Development",
    description:
      "Cross-platform mobile app with over 100K downloads in the first month.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    link: "#",
  },
  {
    title: "Corporate Website",
    category: "Web Design",
    description:
      "Professional corporate website with focus on user experience and conversion.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    link: "#",
  },
  {
    title: "Analytics Dashboard",
    category: "Data Visualization",
    description:
      "Real-time analytics dashboard for business intelligence and reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    link: "#",
  },
];

export default function PortfolioPage() {
  return (
    <div>
      <PageHeader
        title="Our Portfolio"
        subtitle="Showcasing our recent work and success stories"
      />

      <section className="section">
        <div className="container-custom">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all hover:shadow-lg dark:bg-gray-900"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="flex h-full items-center justify-center">
                      <a
                        href={project.link}
                        className="rounded-full bg-white p-3 text-gray-900 shadow-lg transition-transform hover:scale-110"
                        aria-label={`View ${project.title}`}
                      >
                        <IconExternalLink className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-brand-600 dark:text-brand-400">
                    {project.category}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold font-heading text-gray-900 dark:text-gray-50">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-gradient-to-br from-brand-600 to-accent-600 dark:from-brand-700 dark:to-accent-700">
        <div className="container-custom">
          <motion.div
            className="grid gap-8 sm:grid-cols-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              { value: "500+", label: "Projects" },
              { value: "250+", label: "Clients" },
              { value: "15+", label: "Awards" },
              { value: "99%", label: "Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-5xl font-bold font-heading">
                  {stat.value}
                </div>
                <div className="mt-2 text-lg text-brand-100">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
















