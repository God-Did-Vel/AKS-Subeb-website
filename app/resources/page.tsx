'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { mockResources } from '@/lib/mockData';
import { DownloadIcon, SearchIcon, FileTextIcon, ArrowRightIcon } from '@/components/Icons';

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const allResources = [
  ...mockResources,
  { id: 5, title: 'SUBEB Annual Report 2025', type: 'PDF', size: '4.1 MB', downloads: 2100, image: 'https://res.cloudinary.com/duweg8kpv/image/upload/ak5_rqffcz.jpg', category: 'Reports' },
  { id: 6, title: 'School Registration Guidelines', type: 'PDF', size: '0.6 MB', downloads: 890, image: 'https://res.cloudinary.com/duweg8kpv/image/upload/111_wc8pvv.jpg', category: 'Guidelines' },
  { id: 7, title: 'Early Childhood Education Framework', type: 'PDF', size: '1.8 MB', downloads: 540, image: 'https://res.cloudinary.com/duweg8kpv/image/upload/11117_que9c4.jpg', category: 'Curriculum' },
  { id: 8, title: 'School Health and Safety Manual', type: 'PDF', size: '2.3 MB', downloads: 710, image: 'https://res.cloudinary.com/duweg8kpv/image/upload/ak16_wyzh0s.jpg', category: 'Guidelines' },
];

const categories = ['All', 'Curriculum', 'Guidelines', 'Reports', 'Templates'];
const typeIcon: Record<string, string> = { PDF: '🔴', DOCX: '🔵', Word: '🔵', Excel: '🟢', XLSX: '🟢' };

export default function ResourcesPage() {
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('All');
  const [downloaded, setDownloaded] = useState<number[]>([]);

  const resourcesWithCat = allResources.map((r, i) => ({
    ...r,
    category: (r as any).category || ['Curriculum', 'Guidelines', 'Templates', 'Curriculum'][i % 4],
  }));

  const filtered = resourcesWithCat.filter((r) => {
    const ms = r.title.toLowerCase().includes(search.toLowerCase());
    const mc = cat === 'All' || r.category === cat;
    return ms && mc;
  });

  const handleDownload = (id: number) => {
    setDownloaded((prev) => [...prev, id]);
    setTimeout(() => setDownloaded((prev) => prev.filter((d) => d !== id)), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#f0c040] text-xs font-semibold tracking-[0.18em] uppercase mb-6">Resources & Downloads</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'Georgia, serif' }}>Resources & Downloads</h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">Access official SUBEB documents, curriculum guides, policies, and educational materials — all free to download.</p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <div className="bg-[#c8960c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-wrap gap-6 justify-center sm:justify-between">
          {[{ v: '48+', l: 'Documents' }, { v: '12K+', l: 'Total Downloads' }, { v: 'Free', l: 'Always Free' }, { v: '4', l: 'Categories' }].map((s) => (
            <div key={s.l} className="flex items-center gap-3">
              <span className="text-white font-bold text-xl">{s.v}</span>
              <span className="text-white/70 text-xs uppercase tracking-widest">{s.l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <SearchIcon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search documents..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6b3a] bg-white" />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${cat === c ? 'bg-[#0a1628] text-white shadow-sm' : 'bg-white text-gray-600 border border-gray-200 hover:border-[#0a1628]'}`}>{c}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <p className="text-sm text-gray-500 mb-8">Showing <span className="font-semibold text-[#0a1628]">{filtered.length}</span> document{filtered.length !== 1 ? 's' : ''}</p>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((resource) => (
              <motion.div key={resource.id} variants={fadeUp} whileHover={{ y: -6 }} className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 group">
                <div className="relative h-36 overflow-hidden">
                  <img src={resource.image} alt={resource.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-[#0a1628]/50" />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="text-sm">{typeIcon[resource.type] || '📄'}</span>
                    <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">{resource.type}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#0a1628] text-sm leading-snug mb-2 group-hover:text-[#1a6b3a] transition-colors line-clamp-2">{resource.title}</h3>
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <span>{resource.size}</span>
                    <span>{resource.downloads.toLocaleString()} downloads</span>
                  </div>
                  <button
                    onClick={() => handleDownload(resource.id)}
                    className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${downloaded.includes(resource.id) ? 'bg-green-100 text-green-700' : 'bg-[#0a1628] text-white hover:bg-[#1e3a5f]'}`}
                  >
                    {downloaded.includes(resource.id) ? '✓ Downloaded' : (<><DownloadIcon size={15} /> Download</>)}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <div className="text-5xl mb-4">📂</div>
              <h3 className="text-xl font-bold text-[#0a1628] mb-2">No Documents Found</h3>
              <p className="text-gray-500 text-sm">Try a different search term or category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Request Document */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <FileTextIcon size={40} className="text-[#c8960c] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#0a1628] mb-3" style={{ fontFamily: 'Georgia, serif' }}>Need a Specific Document?</h2>
            <p className="text-gray-500 mb-7 text-sm">If you cannot find the document you need, send us a request and our team will assist you within 48 hours.</p>
            <a href="mailto:info@subebakawaibom.gov.ng" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0a1628] text-white font-semibold rounded-xl hover:bg-[#1e3a5f] transition-all hover:shadow-lg group">
              Request Document <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
