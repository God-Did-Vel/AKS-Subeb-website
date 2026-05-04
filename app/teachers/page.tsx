'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon, BookOpenIcon, UsersIcon, AwardIcon, CheckCircleIcon, CalendarIcon, DownloadIcon } from '@/components/Icons';

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const programs = [
  { title: 'Teacher Induction Programme', duration: '3 Months', mode: 'In-Person', status: 'Open', desc: 'Comprehensive onboarding for newly recruited teachers covering pedagogy, classroom management, and curriculum delivery.' },
  { title: 'Professional Development Workshops', duration: '2 Days', mode: 'Hybrid', status: 'Open', desc: 'Regular skill-upgrade workshops covering modern teaching strategies, assessment methods, and digital tools.' },
  { title: 'Subject Mastery Seminars', duration: '1 Week', mode: 'Online', status: 'Ongoing', desc: 'Intensive subject-specific training to deepen content knowledge for Maths, English, Science, and other core subjects.' },
  { title: 'Leadership in Education', duration: '6 Months', mode: 'Blended', status: 'Upcoming', desc: 'Leadership training for school heads, department coordinators, and potential future administrators.' },
];

const resources = [
  { name: 'Teacher Registration Form', type: 'PDF', icon: '📄' },
  { name: 'Professional Development Calendar 2026', type: 'PDF', icon: '📅' },
  { name: 'Lesson Plan Templates', type: 'DOCX', icon: '📝' },
  { name: 'Classroom Assessment Guide', type: 'PDF', icon: '📊' },
];

const statusColor: Record<string, string> = {
  Open: 'bg-green-100 text-green-700',
  Ongoing: 'bg-blue-100 text-blue-700',
  Upcoming: 'bg-amber-100 text-amber-700',
};

export default function TeachersPage() {
  const [tab, setTab] = useState<'register' | 'login'>('register');
  const [form, setForm] = useState({ name: '', email: '', school: '', pass: '' });
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a6b3a] to-[#0f4a28] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-[#f0c040] text-xs font-semibold tracking-[0.18em] uppercase mb-6">
              <UsersIcon size={12} /> Teachers Portal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'Georgia, serif' }}>Teachers Portal</h1>
            <p className="text-white/75 text-lg max-w-xl mx-auto">Empowering educators with professional development, resources, and administrative tools.</p>
          </motion.div>
        </div>
      </section>

      {/* Quick stats */}
      <div className="bg-[#c8960c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-wrap gap-6 justify-center sm:justify-between">
          {[{ v: '18,500+', l: 'Registered Teachers' }, { v: '31', l: 'LGAs' }, { v: '4', l: 'Active Programs' }, { v: '92%', l: 'Satisfaction Rate' }].map((s) => (
            <div key={s.l} className="flex items-center gap-3">
              <span className="text-white font-bold text-xl">{s.v}</span>
              <span className="text-white/70 text-xs uppercase tracking-widest">{s.l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <span className="text-[#c8960c] text-xs font-bold tracking-[0.2em] uppercase">Development</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mt-2" style={{ fontFamily: 'Georgia, serif' }}>Professional Development Programmes</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((p) => (
              <motion.div key={p.title} variants={fadeUp} whileHover={{ y: -5 }} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl p-6 transition-all duration-300 group">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-bold text-[#0a1628] text-base group-hover:text-[#1a6b3a] transition-colors">{p.title}</h3>
                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${statusColor[p.status]}`}>{p.status}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400 pt-3 border-t border-gray-100">
                  <span className="flex items-center gap-1"><CalendarIcon size={13} className="text-[#c8960c]" /> {p.duration}</span>
                  <span className="flex items-center gap-1"><BookOpenIcon size={13} className="text-[#c8960c]" /> {p.mode}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Login / Register Portal */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div variants={fadeUp}>
              <span className="text-[#c8960c] text-xs font-bold tracking-[0.2em] uppercase">Portal Access</span>
              <h2 className="text-3xl font-bold text-[#0a1628] mt-3 mb-4" style={{ fontFamily: 'Georgia, serif' }}>Teacher Account Access</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Register or log in to access training schedules, download teaching resources, submit reports, and manage your professional development records.</p>
              <ul className="space-y-3">
                {['Track your training and certification status', 'Download lesson plans and curriculum guides', 'Apply for professional advancement programmes', 'Submit term reports and attendance records'].map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircleIcon size={16} className="text-[#1a6b3a] flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              {/* Tabs */}
              <div className="flex rounded-xl bg-gray-200 p-1 mb-6">
                {(['register', 'login'] as const).map((t) => (
                  <button key={t} onClick={() => setTab(t)} className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${tab === t ? 'bg-white text-[#0a1628] shadow-sm' : 'text-gray-500'}`}>
                    {t === 'register' ? 'Register' : 'Log In'}
                  </button>
                ))}
              </div>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircleIcon size={32} className="text-green-600" />
                  </div>
                  <h3 className="font-bold text-[#0a1628] text-lg mb-2">
                    {tab === 'register' ? 'Registration Submitted!' : 'Login Successful!'}
                  </h3>
                  <p className="text-gray-500 text-sm">{tab === 'register' ? 'You will receive a confirmation email within 24 hours.' : 'Welcome back. Redirecting to your dashboard...'}</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', school: '', pass: '' }); }} className="mt-4 text-[#1a6b3a] text-sm font-semibold hover:underline">
                    Back to form
                  </button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                  {tab === 'register' && (
                    <>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Full Name</label>
                        <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6b3a] bg-white" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">School Name</label>
                        <input required value={form.school} onChange={(e) => setForm({ ...form, school: e.target.value })} placeholder="Your current school" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6b3a] bg-white" />
                      </div>
                    </>
                  )}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address</label>
                    <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="teacher@school.edu.ng" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6b3a] bg-white" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Password</label>
                    <input required type="password" value={form.pass} onChange={(e) => setForm({ ...form, pass: e.target.value })} placeholder="••••••••" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6b3a] bg-white" />
                  </div>
                  <button type="submit" className="w-full py-3 bg-[#1a6b3a] text-white font-semibold text-sm rounded-lg hover:bg-[#145c30] transition-all hover:shadow-lg mt-2">
                    {tab === 'register' ? 'Create Account' : 'Log In'}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#0a1628]" style={{ fontFamily: 'Georgia, serif' }}>Teacher Resources</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {resources.map((r) => (
              <motion.div key={r.name} variants={fadeUp} className="bg-white rounded-xl border border-gray-100 p-5 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer group">
                <div className="text-3xl">{r.icon}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#0a1628] truncate">{r.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{r.type}</p>
                </div>
                <DownloadIcon size={16} className="text-gray-300 group-hover:text-[#1a6b3a] flex-shrink-0 transition-colors" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
