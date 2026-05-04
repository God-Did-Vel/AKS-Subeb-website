'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MenuIcon, XIcon, SchoolIcon, ChevronDownIcon,
  BookOpenIcon, UsersIcon, FileTextIcon, BellIcon,
  MapPinIcon, PhoneIcon,
} from './Icons';

const navGroups = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    href: '/about',
    children: [
      { name: 'About SUBEB', href: '/about', icon: SchoolIcon },
      { name: 'Departments', href: '/departments', icon: UsersIcon },
      { name: 'Leadership', href: '/about#leadership', icon: UsersIcon },
    ],
  },
  {
    name: 'Education',
    href: '/schools',
    children: [
      { name: 'Schools Directory', href: '/schools', icon: SchoolIcon },
      { name: 'Projects & Programs', href: '/projects', icon: BookOpenIcon },
      { name: 'Resources', href: '/resources', icon: FileTextIcon },
    ],
  },
  {
    name: 'Portals',
    href: '/teachers',
    children: [
      { name: 'Teachers Portal', href: '/teachers', icon: UsersIcon },
      { name: 'Students & Parents', href: '/students', icon: BookOpenIcon },
    ],
  },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
  { name: 'FAQ', href: '/faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Government Identity Strip */}
      <div className="bg-[#0a1628] text-white/60 text-[11px] font-medium tracking-widest uppercase">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-9 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            {/* Nigerian Flag */}
            <div className="flex items-center gap-0.5 flex-shrink-0">
              <div className="w-3.5 h-2.5 bg-[#008751]" />
              <div className="w-3.5 h-2.5 bg-white" />
              <div className="w-3.5 h-2.5 bg-[#008751]" />
            </div>
            <span className="hidden sm:inline">Federal Republic of Nigeria</span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="text-white/70">Akwa Ibom State Government</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <PhoneIcon size={11} />
              (+234) 803-000-0000
            </span>
            <span className="text-white/20">|</span>
            <span className="text-[#f0c040]">Official Government Website</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-[0_2px_24px_rgba(10,22,40,0.10)]' : 'border-b border-gray-100'}`}
      >
        {/* Gold accent line */}
        <div className="h-[3px] bg-gradient-to-r from-[#1a6b3a] via-[#c8960c] to-[#1a6b3a]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-[68px] flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="relative w-15 h-15 flex-shrink-0">
               <img
              src="https://res.cloudinary.com/duweg8kpv/image/upload/ak-removebg-preview_cuhg4u.png"
              alt="AKS Logo"
              className="h-8 w-auto object-contain grayscale brightness-50 contrast-200"
            />
            </div>
            <div>
              <div className="font-bold text-[#0a1628] text-sm leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                Akwa Ibom State SUBEB
              </div>
              <div className="text-[#1a6b3a] text-[10px] font-semibold tracking-[0.18em] uppercase">
                Universal Basic Education Board
              </div>
              <div className="h-[2px] w-full bg-gradient-to-r from-[#c8960c] to-[#1a6b3a] rounded-full mt-0.5 transition-transform duration-300 group-hover:scale-x-105 origin-left" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navGroups.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="group flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-[#0a1628] hover:text-[#1a6b3a] transition-colors rounded-md hover:bg-gray-50">
                    {item.name}
                    <ChevronDownIcon
                      size={14}
                      className={`transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.97 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="flex items-center gap-3 px-4 py-3 text-[13px] text-gray-700 hover:bg-[#f0f9f4] hover:text-[#1a6b3a] transition-colors group border-b border-gray-50 last:border-0"
                          >
                            <child.icon size={16} className="text-[#c8960c] flex-shrink-0" />
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-3 py-2 text-[13px] font-medium text-[#0a1628] hover:text-[#1a6b3a] transition-colors rounded-md hover:bg-gray-50 group"
                >
                  {item.name}
                  <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-gradient-to-r from-[#c8960c] to-[#1a6b3a] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2 bg-[#0a1628] text-white text-[12px] font-semibold rounded-lg hover:bg-[#1e3a5f] transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-[#0a1628] hover:bg-gray-50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
              className="lg:hidden border-t border-gray-100"
            >
              <div className="px-4 py-4 space-y-1 bg-white max-h-[80vh] overflow-y-auto">
                {navGroups.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.2 }}
                  >
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => setMobileExpanded(mobileExpanded === item.name ? null : item.name)}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-[#0a1628] hover:bg-gray-50"
                        >
                          {item.name}
                          <ChevronDownIcon
                            size={16}
                            className={`transition-transform ${mobileExpanded === item.name ? 'rotate-180' : ''}`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileExpanded === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 border-l-2 border-[#c8960c]/30 pl-3 space-y-1 mt-1"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  className="flex items-center gap-2 px-3 py-2.5 text-sm text-gray-600 hover:text-[#1a6b3a] hover:bg-[#f0f9f4] rounded-lg transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <child.icon size={15} className="text-[#c8960c]" />
                                  {child.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center px-4 py-3 rounded-lg text-sm font-medium text-[#0a1628] hover:bg-gray-50 hover:text-[#1a6b3a] transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}

                <div className="pt-3 pb-2 border-t border-gray-100 space-y-2">
                  <Link
                    href="/admin"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 border border-[#1a6b3a] text-[#1a6b3a] text-sm font-semibold rounded-lg hover:bg-[#f0f9f4] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <BellIcon size={16} />
                    Admin Dashboard
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center w-full px-4 py-3 bg-[#0a1628] text-white text-sm font-semibold rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}