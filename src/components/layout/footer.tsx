import Link from "next/link";
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";

const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "Twitter", href: "#", icon: IconBrandTwitter },
    { name: "LinkedIn", href: "#", icon: IconBrandLinkedin },
    { name: "GitHub", href: "#", icon: IconBrandGithub },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-[#1a1f3a] dark:bg-[#0A0F2C]">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/images/jw-logo/jw-icon.png" 
                alt="JourneyWell Content Agency Logo" 
                className="w-8 h-8"
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-wide">
                JourneyWell Content Agency
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              A creative agency that helps entrepreneurs and brands show up with confidence online. We've mastered the art of storytelling through content—and we're here to help you master yours.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Connect
            </h4>
            <div className="mt-4 flex gap-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-[#1a1f3a]">
          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
            © {currentYear} JourneyWell. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


















