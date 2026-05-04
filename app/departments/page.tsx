'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { mockDepartments } from '@/lib/mockData';
import { ArrowRightIcon, BookOpenIcon, CheckCircleIcon, UsersIcon, ShieldIcon, ZapIcon, SchoolIcon } from '@/components/Icons';

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const deptSVGs: Record<string, React.ReactNode> = {
  '📚': <BookOpenIcon size={28} className="text-white" />,
  '✅': <CheckCircleIcon size={28} className="text-white" />,
  '💰': <ShieldIcon size={28} className="text-white" />,
  '👥': <UsersIcon size={28} className="text-white" />,
  '💻': <ZapIcon size={28} className="text-white" />,
  '📊': <SchoolIcon size={28} className="text-white" />,
};

const deptColors = [
  'from-blue-600 to-blue-800',
  'from-emerald-600 to-emerald-800',
  'from-amber-500 to-amber-700',
  'from-purple-600 to-purple-800',
  'from-cyan-600 to-cyan-800',
  'from-rose-600 to-rose-800',
];

const responsibilities = [
  'Curriculum development and review',
  'Teacher recruitment and training',
  'School infrastructure development',
  'Quality assurance and inspection',
  'Student enrollment and welfare',
  'Federal and state budget management',
  'Educational data collection and analysis',
  'Community and stakeholder engagement',
];

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#f0c040] text-xs font-semibold tracking-[0.18em] uppercase mb-6">Departments</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'Georgia, serif' }}>Our Departments</h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">Specialised units working in harmony to deliver quality basic education across Akwa Ibom State.</p>
            <div className="flex items-center justify-center gap-2 mt-6 text-white/40 text-sm">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/80">Departments</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockDepartments.map((dept, i) => (
              <motion.div key={dept.id} variants={fadeUp} whileHover={{ y: -8 }} className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 group">
                {/* Top colored header */}
                <div className={`bg-gradient-to-br ${deptColors[i % deptColors.length]} p-6`}>
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    {deptSVGs[dept.icon] || <span className="text-3xl">{dept.icon}</span>}
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug" style={{ fontFamily: 'Georgia, serif' }}>{dept.name}</h3>
                </div>
                {/* Body */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{dept.description}</p>
                  <div className="space-y-2 text-sm border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-xs uppercase tracking-wider font-medium">Department Head</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold text-xs flex-shrink-0">
                        {dept.head.split(' ').pop()?.charAt(0)}
                      </div>
                      <span className="text-[#0a1628] font-semibold text-sm">{dept.head}</span>
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                      <span className="text-gray-500 text-xs">{dept.staff} Staff Members</span>
                      <span className="px-2 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full">Active</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp}>
              <span className="text-[#c8960c] text-xs font-bold tracking-[0.2em] uppercase">Core Functions</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mt-3 mb-6" style={{ fontFamily: 'Georgia, serif' }}>What Our Departments Do</h2>
              <p className="text-gray-600 leading-relaxed mb-8">Each department within SUBEB plays a critical role in ensuring the delivery of quality basic education. Together, they form a cohesive system focused on student outcomes and institutional excellence.</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircleIcon size={16} className="text-[#1a6b3a] flex-shrink-0 mt-0.5" />
                    {r}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeUp}>
              <img src="https://res.cloudinary.com/duweg8kpv/image/upload/ak22_zok8zw.jpg" alt="Department meeting" className="w-full h-[420px] object-cover rounded-2xl shadow-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-[#0a1628] mb-3">Want to Reach a Specific Department?</h2>
            <p className="text-gray-500 mb-7">Contact us and we will direct you to the right team.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0a1628] text-white font-semibold rounded-xl hover:bg-[#1e3a5f] transition-all hover:shadow-lg group">
              Contact Us <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
