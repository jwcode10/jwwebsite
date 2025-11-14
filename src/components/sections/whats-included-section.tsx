"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function WhatsIncludedSection() {
  return (
    <section className="bg-[#0A0D1E] py-8">
      <div className="container-custom">
        <motion.div
          className="text-center"
          {...fadeInUp}
        >
          <h2 className="text-3xl font-semibold">
            <span className="text-[#FDC449]">What's included</span>
            <span className="text-white"> in every plan</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
