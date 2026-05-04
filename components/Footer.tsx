'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MapPinIcon, PhoneIcon, MailIcon, ClockIcon,
  FacebookIcon, TwitterIcon, LinkedinIcon, YoutubeIcon,
  SchoolIcon, BookOpenIcon, FileTextIcon, ArrowRightIcon,
} from './Icons';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const footerLinks = {
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'About SUBEB', href: '/about' },
    { label: 'Departments', href: '/departments' },
    { label: 'Schools Directory', href: '/schools' },
    { label: 'News & Announcements', href: '/news' },
    { label: 'FAQ', href: '/faq' },
  ],
  services: [
    { label: 'Teachers Portal', href: '/teachers' },
    { label: 'Students & Parents', href: '/students' },
    { label: 'Projects & Programs', href: '/projects' },
    { label: 'Resources / Downloads', href: '/resources' },
    { label: 'Contact Us', href: '/contact' },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#08101f] text-gray-400">
      {/* Top accent */}
      <div className="h-1 bg-gradient-to-r from-[#1a6b3a] via-[#c8960c] to-[#1a6b3a]" />

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14"
        >
          {/* Brand column */}
          <motion.div variants={itemVariants} className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12 flex-shrink-0">
                <img
              src="https://res.cloudinary.com/duweg8kpv/image/upload/ak-removebg-preview_cuhg4u.png"
              alt="AKS Logo"
              className="h-8 w-auto object-contain grayscale brightness-50 contrast-200"
            />
              </div>
              <div>
                <div className="text-white font-bold text-sm leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
                  Akwa Ibom State SUBEB
                </div>
                <div className="text-[#c8960c] text-[10px] font-semibold tracking-[0.18em] uppercase mt-0.5">
                  Universal Basic Education Board
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-5">
              The State Universal Basic Education Board (SUBEB) is the official government body responsible for the management and improvement of basic education across all 31 Local Government Areas of Akwa Ibom State, Nigeria.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { Icon: FacebookIcon, href: '#', label: 'Facebook' },
                { Icon: TwitterIcon, href: '#', label: 'Twitter/X' },
                { Icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
                { Icon: YoutubeIcon, href: '#', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#c8960c] hover:text-white hover:border-[#c8960c] transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold text-sm mb-5 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#c8960c] inline-block" />
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-[#c8960c] transition-colors duration-200"
                  >
                    <ArrowRightIcon size={13} className="text-gray-600 group-hover:text-[#c8960c] transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold text-sm mb-5 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#1a6b3a] inline-block" />
              Services & Portals
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-[#c8960c] transition-colors duration-200"
                  >
                    <ArrowRightIcon size={13} className="text-gray-600 group-hover:text-[#c8960c] transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold text-sm mb-5 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#c8960c] inline-block" />
              Contact Information
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPinIcon size={16} className="text-[#c8960c] flex-shrink-0 mt-0.5" />
                <span>SUBEB Headquarters, Uyo, Akwa Ibom State, Nigeria</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <PhoneIcon size={16} className="text-[#c8960c] flex-shrink-0" />
                <a href="tel:+2348030000000" className="hover:text-white transition-colors">(+234) 803-000-0000</a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MailIcon size={16} className="text-[#c8960c] flex-shrink-0" />
                <a href="mailto:info@subebakawaibom.gov.ng" className="hover:text-white transition-colors break-all">
                  info@subebakawaibom.gov.ng
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <ClockIcon size={16} className="text-[#c8960c] flex-shrink-0" />
                <span>Mon – Fri: 8:00am – 5:00pm WAT</span>
              </li>
            </ul>

            {/* Emergency Notice */}
            <div className="mt-6 p-3 rounded-lg bg-[#c8960c]/10 border border-[#c8960c]/20">
              <p className="text-[#f0c040] text-xs font-semibold mb-1">Helpline</p>
              <p className="text-gray-300 text-xs">For school registration & enrollment enquiries, call our toll-free line.</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider + Bottom bar */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; {year} SUBEB Akwa Ibom State. All Rights Reserved. Official Government Website.
          </p>
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">Terms of Use</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">Disclaimer</Link>
            <Link href="/admin" className="hover:text-gray-300 transition-colors">Staff Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
