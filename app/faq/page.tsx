'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { mockFAQs } from '@/lib/mockData';
import { SearchIcon, ChevronDownIcon, ArrowRightIcon } from '@/components/Icons';

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const allFaqs = [
  ...mockFAQs,
  { id: 7, question: 'How do I report a school infrastructure problem?', answer: 'Infrastructure issues can be reported through the Contact page, by calling our helpline, or visiting the nearest SUBEB zonal office. All reports are reviewed by the Planning & Development department.' },
  { id: 8, question: 'What languages are taught in Akwa Ibom public schools?', answer: 'Core subjects are taught in English. Efik, Ibibio, and other local languages are taught as subjects to promote cultural heritage alongside the national curriculum.' },
  { id: 9, question: 'How does SUBEB ensure teacher quality?', answer: 'SUBEB employs a rigorous teacher certification process, regular classroom inspections by Quality Assurance officers, and ongoing professional development programmes throughout the year.' },
  { id: 10, question: 'Are there feeding programmes in public schools?', answer: 'Yes, the National Home Grown School Feeding Programme is active in selected primary schools. SUBEB works with the state government to expand coverage annually.' },
];

const categories = [
  { name: 'All', ids: allFaqs.map((f) => f.id) },
  { name: 'Enrollment', ids: [1, 2] },
  { name: 'Teachers', ids: [3, 9] },
  { name: 'Students', ids: [4, 5, 10] },
  { name: 'Resources', ids: [6, 7, 8] },
];

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(null);
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('All');

  const catIds = categories.find((c) => c.name === cat)?.ids || [];
  const filtered = allFaqs.filter((f) => {
    const ms = f.question.toLowerCase().includes(search.toLowerCase()) || f.answer.toLowerCase().includes(search.toLowerCase());
    const mc = cat === 'All' || catIds.includes(f.id);
    return ms && mc;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#f0c040] text-xs font-semibold tracking-[0.18em] uppercase mb-6">FAQ</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'Georgia, serif' }}>Frequently Asked Questions</h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">Find quick answers to common questions about SUBEB services, enrollment, and education in Akwa Ibom State.</p>
            {/* Search in hero */}
            <div className="relative max-w-lg mx-auto mt-8">
              <SearchIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search questions..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-12 pr-4 py-4 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#c8960c] bg-white text-[#0a1628] shadow-xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category tabs */}
      <div className="bg-white border-b border-gray-100 sticky top-[68px] z-40 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((c) => (
              <button key={c.name} onClick={() => setCat(c.name)} className={`flex-shrink-0 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${cat === c.name ? 'bg-[#0a1628] text-white' : 'text-gray-600 hover:bg-gray-100'}`}>{c.name}</button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <p className="text-sm text-gray-500 mb-8">Showing <span className="font-semibold text-[#0a1628]">{filtered.length}</span> question{filtered.length !== 1 ? 's' : ''}</p>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-[#0a1628] mb-2">No Results Found</h3>
              <p className="text-gray-500 text-sm">Try a different search term or browse all categories.</p>
              <button onClick={() => { setSearch(''); setCat('All'); }} className="mt-4 text-[#1a6b3a] text-sm font-semibold hover:underline">Clear search</button>
            </div>
          ) : (
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3">
              {filtered.map((faq) => (
                <motion.div key={faq.id} variants={fadeUp} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <button onClick={() => setOpen(open === faq.id ? null : faq.id)} className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left group">
                    <span className="font-semibold text-[#0a1628] text-sm leading-relaxed group-hover:text-[#1a6b3a] transition-colors">{faq.question}</span>
                    <ChevronDownIcon size={20} className={`text-gray-400 flex-shrink-0 mt-0.5 transition-transform duration-300 ${open === faq.id ? 'rotate-180 text-[#c8960c]' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {open === faq.id && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }}>
                        <div className="px-6 pb-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16 bg-gradient-to-br from-[#0a1628] to-[#1e3a5f]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Georgia, serif' }}>Still Have Questions?</h2>
            <p className="text-white/60 mb-8 text-sm">Our team is ready to assist you. Reach out directly and we will get back to you within 24 hours.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#c8960c] text-white font-bold rounded-xl hover:bg-[#b07f08] transition-all hover:shadow-lg group">
                Contact Us <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:+2348030000000" className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                Call Helpline
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
