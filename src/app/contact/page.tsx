"use client";

import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { IconMail, IconPhone, IconMapPin, IconSend } from "@tabler/icons-react";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: IconMail,
    title: "Email",
    value: "hello@journeywell.com",
    link: "mailto:hello@journeywell.com",
  },
  {
    icon: IconPhone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: IconMapPin,
    title: "Office",
    value: "123 Business St, San Francisco, CA 94102",
    link: "https://maps.google.com",
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <div>
      <PageHeader
        title="Get in Touch"
        subtitle="We'd love to hear from you. Let's start a conversation."
      />

      <section className="section">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-gray-50">
                Send Us a Message
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900 dark:text-gray-50"
                  >
                    Name *
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-50 dark:placeholder-gray-500"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900 dark:text-gray-50"
                  >
                    Email *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-50 dark:placeholder-gray-500"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-900 dark:text-gray-50"
                  >
                    Phone (Optional)
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    id="phone"
                    className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-50 dark:placeholder-gray-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-900 dark:text-gray-50"
                  >
                    Subject *
                  </label>
                  <input
                    {...register("subject")}
                    type="text"
                    id="subject"
                    className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-50 dark:placeholder-gray-500"
                    placeholder="How can we help?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-900 dark:text-gray-50"
                  >
                    Message *
                  </label>
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={5}
                    className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-50 dark:placeholder-gray-500"
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <IconSend className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg bg-[#FDC449]/10 p-4 text-[#FDC449] dark:bg-[#FDC449]/20 dark:text-[#FDC449]"
                  >
                    Thank you! Your message has been sent successfully. We'll get
                    back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-gray-50">
                Contact Information
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Reach out to us through any of these channels.
              </p>

              <div className="mt-8 space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="rounded-lg bg-brand-100 p-3 dark:bg-brand-950">
                      <info.icon className="h-6 w-6 text-brand-600 dark:text-brand-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-50">
                        {info.title}
                      </h3>
                      <a
                        href={info.link}
                        className="mt-1 text-gray-600 hover:text-brand-600 dark:text-gray-300 dark:hover:text-brand-400"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 rounded-2xl border bg-gradient-to-br from-brand-50 to-accent-50 p-8 dark:from-gray-900 dark:to-gray-800">
                <h3 className="text-xl font-semibold font-heading text-gray-900 dark:text-gray-50">
                  Business Hours
                </h3>
                <div className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}


















