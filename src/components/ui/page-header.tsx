"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="section bg-gradient-to-br from-brand-50 to-accent-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom text-center">
        <motion.h1
          className="text-4xl font-bold font-heading tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="mt-6 text-lg text-gray-600 dark:text-gray-300 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
















