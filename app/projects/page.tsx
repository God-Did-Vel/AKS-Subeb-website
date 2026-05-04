'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { mockProjects } from '@/lib/mockData';
import ProjectCard from '@/components/ProjectCard';
import { ArrowRightIcon, CheckCircleIcon, TrendingUpIcon } from '@/components/Icons';

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const allProjects = [
  ...mockProjects,
  { id: 5, title: 'School Feeding Programme', status: 'In Progress', progress: 70, description: 'Providing daily nutritious meals to students in public primary schools to boost attendance and concentration.', startDate: '2026-01-01', endDate: '2026-12-31' },
  { id: 6, title: 'Special Education Initiative', status: 'In Progress', progress: 55, description: 'Expanding inclusive education resources and trained personnel for children with special needs.', startDate: '2025-10-01', endDate: '2026-09-30' },
];

const programs = [
  { title: 'Universal Basic Education (UBE)', desc: 'The flagship federal-state programme ensuring free and compulsory education for all children aged 6–15.', icon: '🎓' },
  { title: 'School-Based Management Committee (SBMC)', desc: 'Community-level committees empowering local stakeholders to co-manage and improve school performance.', icon: '🤝' },
  { title: 'Reading and Numeracy Programme', desc: 'Targeted intervention to boost literacy and numeracy skills among primary school pupils.', icon: '📖' },
  { title: 'Safe Schools Initiative', desc: 'Ensuring all schools are safe, inclusive, and conducive learning environments for every child.', icon: '🛡️' },
];

const impact = [
  { value: '12', label: 'Active Projects', icon: TrendingUpIcon },
  { value: '₦2.4B', label: 'Budget Allocated', icon: CheckCircleIcon },
  { value: '89%', label: 'Completion Rate', icon: CheckCircleIcon },
  { value: '450K+', label: 'Students Impacted', icon: CheckCircleIcon },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a6b3a] to-[#0f4a28] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-[#f0c040] text-xs font-semibold tracking-[0.18em] uppercase mb-6">Projects & Programs</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'Georgia, serif' }}>Projects & Programmes</h1>
            <p className="text-white/75 text-lg max-w-xl mx-auto">Strategic initiatives transforming basic education quality and access across Akwa Ibom State.</p>
          </motion.div>
        </div>
      </section>

      {/* Impact Bar */}
      <div className="bg-[#c8960c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-5 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {impact.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <s.icon size={20} className="text-white/70" />
              <div>
                <div className="text-white font-bold text-lg leading-none">{s.value}</div>
                <div className="text-white/70 text-xs mt-0.5">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <span className="text-[#c8960c] text-xs font-bold tracking-[0.2em] uppercase">Active</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mt-2" style={{ fontFamily: 'Georgia, serif' }}>Current Projects</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allProjects.map((p) => (
              <motion.div key={p.id} variants={fadeUp}><ProjectCard {...p} /></motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Programmes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <span className="text-[#c8960c] text-xs font-bold tracking-[0.2em] uppercase">Programmes</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mt-2" style={{ fontFamily: 'Georgia, serif' }}>Core Education Programmes</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((prog) => (
              <motion.div key={prog.title} variants={fadeUp} whileHover={{ y: -6 }} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 text-center group">
                <div className="text-4xl mb-4">{prog.icon}</div>
                <h3 className="font-bold text-[#0a1628] text-base mb-3 group-hover:text-[#1a6b3a] transition-colors">{prog.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{prog.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0a1628] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Georgia, serif' }}>Want to Partner on a Project?</h2>
            <p className="text-white/60 mb-7 text-sm">We welcome collaborations with organisations, NGOs, and government agencies aligned with our education mission.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#c8960c] text-white font-bold rounded-xl hover:bg-[#b07f08] transition-all hover:shadow-lg group">
              Get in Touch <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
