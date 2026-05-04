'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { mockNews } from '@/lib/mockData';
import NewsCard from '@/components/NewsCard';
import { SearchIcon, CalendarIcon, ArrowRightIcon } from '@/components/Icons';

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const allNews = [
  ...mockNews,
  { id: 5, title: 'SUBEB Releases 2026 Academic Calendar', excerpt: 'The board has officially published the 2026/2027 academic session calendar for all public schools.', date: '2026-04-10', category: 'Announcement', image: 'https://res.cloudinary.com/duweg8kpv/image/upload/ak5_rqffcz.jpg' },
  { id: 6, title: 'Scholarship Applications Now Open', excerpt: 'Over 2,000 scholarship slots available for outstanding students across the 31 LGAs.', date: '2026-04-05', category: 'Announcement', image: 'https://res.cloudinary.com/duweg8kpv/image/upload/ak24_zby6lh.jpg' },
  { id: 7, title: 'New Partnership with UNICEF on Inclusive Education', excerpt: 'SUBEB and UNICEF sign MOU to support inclusive education for children with disabilities.', date: '2026-03-28', category: 'Policy', image: 'https://res.cloudinary.com/duweg8kpv/image/upload/ak25_unuhor.jpg' },
  { id: 8, title: 'Construction of 50 New Classrooms Begins', excerpt: 'Governor commissions construction of 50 new classrooms across the most underserved LGAs.', date: '2026-03-15', category: 'Infrastructure', image: 'https://res.cloudinary.com/duweg8kpv/image/upload/ak26_p0lrpv.jpg' },
];

const categories = ['All', 'Policy', 'Training', 'Technology', 'Infrastructure', 'Announcement'];

export default function NewsPage() {
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('All');

  const filtered = allNews.filter((n) => {
    const ms = n.title.toLowerCase().includes(search.toLowerCase()) || n.excerpt.toLowerCase().includes(search.toLowerCase());
    const mc = cat === 'All' || n.category === cat;
    return ms && mc;
  });

  const featured = allNews[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#f0c040] text-xs font-semibold tracking-[0.18em] uppercase mb-6">News & Announcements</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'Georgia, serif' }}>News & Announcements</h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">Stay informed with the latest updates, policies, and developments from SUBEB Akwa Ibom State.</p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-6 flex items-center gap-2">
            <div className="h-px w-8 bg-[#c8960c]" />
            <span className="text-[#c8960c] text-xs font-bold tracking-[0.2em] uppercase">Featured Story</span>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-full min-h-[280px] overflow-hidden">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/40 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-[#c8960c] text-white text-xs font-bold rounded-md uppercase">{featured.category}</span>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-4">
                  <CalendarIcon size={13} className="text-[#c8960c]" />
                  {new Date(featured.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                </div>
                <h2 className="text-2xl font-bold text-[#0a1628] mb-3 group-hover:text-[#1a6b3a] transition-colors" style={{ fontFamily: 'Georgia, serif' }}>{featured.title}</h2>
                <p className="text-gray-500 leading-relaxed mb-6">{featured.excerpt} SUBEB continues to push forward on its mandate to improve educational outcomes for all children across Akwa Ibom State.</p>
                <Link href="/news" className="inline-flex items-center gap-2 text-[#1a6b3a] font-semibold text-sm hover:gap-3 transition-all">
                  Read Full Story <ArrowRightIcon size={15} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-[68px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <SearchIcon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search news..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6b3a] bg-gray-50" />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${cat === c ? 'bg-[#0a1628] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{c}</button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <p className="text-sm text-gray-500 mb-6">Showing <span className="font-semibold text-[#0a1628]">{filtered.length}</span> article{filtered.length !== 1 ? 's' : ''}</p>
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <div className="text-5xl mb-4">📰</div>
              <h3 className="text-xl font-bold text-[#0a1628] mb-2">No Articles Found</h3>
              <p className="text-gray-500">Try adjusting your search or category filter.</p>
            </div>
          ) : (
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((n) => (
                <motion.div key={n.id} variants={fadeUp}><NewsCard {...n} /></motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#0a1628]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Georgia, serif' }}>Stay Updated</h2>
            <p className="text-white/60 mb-7 text-sm">Subscribe to receive the latest news and announcements directly in your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input type="email" required placeholder="Your email address" className="flex-1 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#c8960c] bg-white/10 border border-white/20 text-white placeholder-white/40" />
              <button type="submit" className="px-6 py-3 bg-[#c8960c] text-white font-semibold text-sm rounded-xl hover:bg-[#b07f08] transition-all flex-shrink-0">Subscribe</button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
