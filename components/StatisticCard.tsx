'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface StatisticCardProps {
  label: string;
  value: number;
  icon: string;
  suffix?: string;
  color?: string;
}

function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const iconMap: Record<string, React.ReactNode> = {
  '🏫': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  ),
  '👨‍🎓': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  '👨‍🏫': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  '🌍': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  ),
};

const colorThemes = [
  { bg: 'from-blue-600 to-blue-800', light: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  { bg: 'from-emerald-600 to-emerald-800', light: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
  { bg: 'from-amber-500 to-amber-700', light: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  { bg: 'from-violet-600 to-violet-800', light: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200' },
];

export default function StatisticCard({ label, value, icon, suffix = '+' }: StatisticCardProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCounter(value, 2200, inView);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const idx = ['🏫', '👨‍🎓', '👨‍🏫', '🌍'].indexOf(icon);
  const theme = colorThemes[idx >= 0 ? idx : 0];

  const formatNumber = (n: number) =>
    n >= 1000 ? `${(n / 1000).toFixed(n >= 100000 ? 0 : 1)}K` : n.toString();

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
      className="bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden transition-all duration-300"
    >
      {/* Top gradient bar */}
      <div className={`h-1.5 bg-gradient-to-r ${theme.bg}`} />

      <div className="p-7 text-center">
        {/* Icon container */}
        <div className={`w-16 h-16 ${theme.light} rounded-2xl flex items-center justify-center mx-auto mb-5 ${theme.text}`}>
          {iconMap[icon] || <span className="text-3xl">{icon}</span>}
        </div>

        {/* Counter */}
        <div className="text-4xl font-bold text-[#0a1628] mb-1 tabular-nums leading-none" style={{ fontFamily: 'Georgia, serif' }}>
          {inView ? formatNumber(count) : '0'}{inView && value >= 1000 ? '' : ''}{suffix}
        </div>

        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mt-2">{label}</p>
      </div>
    </motion.div>
  );
}
