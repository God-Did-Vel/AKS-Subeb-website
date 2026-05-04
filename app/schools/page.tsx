'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { mockSchools } from '@/lib/mockData';
import SchoolCard from '@/components/SchoolCard';
import { SearchIcon, ArrowRightIcon, MapPinIcon } from '@/components/Icons';

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const allSchools = [
  ...mockSchools,
  { id: 5, name: 'Abak Grammar School (JSS)', type: 'Junior Secondary', locality: 'Abak', students: 720, teachers: 28, image: 'https://res.cloudinary.com/duweg8kpv/image/upload/ak23_dsn6ed.jpg' },
  { id: 6, name: 'Ibeno Primary School', type: 'Primary', locality: 'Ibeno', students: 310, teachers: 12, image: 'https://res.cloudinary.com/duweg8kpv/image/upload/ak24_zby6lh.jpg' },
  { id: 7, name: 'Ukanafun Model School', type: 'Primary', locality: 'Ukanafun', students: 490, teachers: 19, image: 'https://res.cloudinary.com/duweg8kpv/image/upload/ak25_unuhor.jpg' },
  { id: 8, name: 'Itu Central JSS', type: 'Junior Secondary', locality: 'Itu', students: 550, teachers: 22, image: 'https://res.cloudinary.com/duweg8kpv/image/upload/ak26_p0lrpv.jpg' },
];

const types = ['All', 'Primary', 'Junior Secondary', 'Primary & Junior Secondary'];
const lgas = ['All LGAs', 'Uyo', 'Eket', 'Ikot Ekpene', 'Abak', 'Ibeno', 'Ukanafun', 'Itu'];

export default function SchoolsPage() {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [lgaFilter, setLgaFilter] = useState('All LGAs');

  const filtered = allSchools.filter((s) => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.locality.toLowerCase().includes(search.toLowerCase());
    const matchType = typeFilter === 'All' || s.type.includes(typeFilter);
    const matchLga = lgaFilter === 'All LGAs' || s.locality === lgaFilter;
    return matchSearch && matchType && matchLga;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#f0c040] text-xs font-semibold tracking-[0.18em] uppercase mb-6">Schools Directory</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'Georgia, serif' }}>Schools Directory</h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">Explore all registered primary and junior secondary schools across Akwa Ibom State.</p>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-[#c8960c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-wrap gap-6 justify-center sm:justify-between">
          {[{ v: '1,247', l: 'Total Schools' }, { v: '876', l: 'Primary Schools' }, { v: '371', l: 'Junior Secondary' }, { v: '31', l: 'LGAs' }].map((s) => (
            <div key={s.l} className="flex items-center gap-3">
              <span className="text-white font-bold text-xl leading-none">{s.v}</span>
              <span className="text-white/70 text-xs uppercase tracking-widest">{s.l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Search & Filter */}
      <section className="py-10 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <SearchIcon size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by school name or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6b3a] focus:border-transparent bg-white"
              />
            </div>
            <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6b3a] bg-white min-w-[160px]">
              {types.map((t) => <option key={t}>{t}</option>)}
            </select>
            <select value={lgaFilter} onChange={(e) => setLgaFilter(e.target.value)} className="px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6b3a] bg-white min-w-[140px]">
              {lgas.map((l) => <option key={l}>{l}</option>)}
            </select>
          </div>
          <p className="mt-4 text-sm text-gray-500">Showing <span className="font-semibold text-[#0a1628]">{filtered.length}</span> school{filtered.length !== 1 ? 's' : ''}</p>
        </div>
      </section>

      {/* Schools Grid */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-[#0a1628] mb-2">No Schools Found</h3>
              <p className="text-gray-500">Try adjusting your search or filters.</p>
            </div>
          ) : (
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((school) => (
                <motion.div key={school.id} variants={fadeUp}><SchoolCard {...school} /></motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Enroll CTA */}
      <section className="py-16 bg-[#0a1628] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-white mb-3">Can&apos;t Find Your School?</h2>
            <p className="text-white/60 mb-7">Contact us or visit the nearest SUBEB office to register a school or report information updates.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#c8960c] text-white font-bold rounded-xl hover:bg-[#b07f08] transition-all hover:shadow-lg group">
              Get in Touch <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
