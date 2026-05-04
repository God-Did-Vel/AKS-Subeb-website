'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon, ChevronRightIcon } from './Icons';

const slides = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/duweg8kpv/image/upload/1112_m4nl5h.jpg',
    tag: 'Quality Education',
    title: 'Transforming Basic Education in Akwa Ibom State',
    subtitle: 'The State Universal Basic Education Board is committed to delivering world-class primary and junior secondary education to every child in Akwa Ibom State.',
    cta: { label: 'Explore Schools', href: '/schools' },
    cta2: { label: 'Learn About Us', href: '/about' },
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/duweg8kpv/image/upload/ak3_ce6q1k.jpg',
    tag: 'Teacher Excellence',
    title: 'Empowering Educators, Inspiring Futures',
    subtitle: 'We invest in our teachers through continuous professional development, training programmes, and modern teaching resources across all local government areas.',
    cta: { label: 'Teachers Portal', href: '/teachers' },
    cta2: { label: 'View Programs', href: '/projects' },
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/duweg8kpv/image/upload/ak5_imab0e.jpg',
    tag: 'Student Success',
    title: 'Every Child Deserves Quality Education',
    subtitle: 'SUBEB ensures that no child is left behind through targeted scholarship programmes, inclusive education policies, and infrastructure development statewide.',
    cta: { label: 'Student Centre', href: '/students' },
    cta2: { label: 'Our Projects', href: '/projects' },
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/duweg8kpv/image/upload/ak8_quy3mk.jpg',
    tag: 'Modern Infrastructure',
    title: 'Building Schools That Inspire Learning',
    subtitle: 'From renovated classrooms to digital learning centres, SUBEB is constructing the future of education through world-class facilities across Akwa Ibom.',
    cta: { label: 'View Projects', href: '/projects' },
    cta2: { label: 'Contact Us', href: '/contact' },
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = slides.length;

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative w-full overflow-hidden" style={{ height: 'min(90vh, 760px)' }}>
      {/* Background Images */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          initial={{ opacity: 0, x: direction * 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -80 }}
          transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Multi-layer overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/70 via-transparent to-[#0a1628]/20" />
        </motion.div>
      </AnimatePresence>

      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c8960c] via-[#f0c040] to-[#1a6b3a] z-20" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              className="max-w-2xl xl:max-w-3xl"
            >
              {/* Tag */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-5"
              >
                <div className="h-px w-8 bg-[#c8960c]" />
                <span className="text-[#f0c040] text-xs font-semibold tracking-[0.2em] uppercase font-sans">
                  {slide.tag}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}
              >
                {slide.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-xl"
              >
                {slide.subtitle}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href={slide.cta.href}
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#c8960c] hover:bg-[#b07f08] text-white font-semibold text-sm rounded-lg transition-all duration-300 hover:shadow-[0_0_24px_rgba(200,150,12,0.45)] hover:scale-[1.03]"
                >
                  {slide.cta.label}
                  <ArrowRightIcon size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href={slide.cta2.href}
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/40 text-white font-semibold text-sm rounded-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/70 transition-all duration-300"
                >
                  {slide.cta2.label}
                  <ChevronRightIcon size={16} />
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 hidden md:block">
        <div className="bg-[#0a1628]/85 backdrop-blur-md border-t border-white/10">
          <div className="max-w-7xl mx-auto px-8 lg:px-16 py-4 flex items-center gap-10">
            {[
              { value: '1,247', label: 'Schools' },
              { value: '450K+', label: 'Students' },
              { value: '18,500+', label: 'Teachers' },
              { value: '31 LGAs', label: 'Covered' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <span className="text-[#f0c040] font-bold text-xl leading-none">{stat.value}</span>
                <span className="text-white/50 text-xs uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Controls */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
            className={`transition-all duration-300 rounded-full ${i === current ? 'w-1.5 h-10 bg-[#c8960c]' : 'w-1.5 h-4 bg-white/30 hover:bg-white/60'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Prev / Next Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/25 transition-all duration-200"
        aria-label="Previous slide"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15,18 9,12 15,6" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 sm:right-16 lg:right-14 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/25 transition-all duration-200"
        aria-label="Next slide"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9,18 15,12 9,6" />
        </svg>
      </button>

      {/* Slide counter */}
      <div className="absolute bottom-20 right-6 z-20 text-white/50 text-xs font-mono hidden lg:block">
        {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>
    </section>
  );
}
