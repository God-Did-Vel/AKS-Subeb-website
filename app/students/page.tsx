'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon, BookOpenIcon, UsersIcon, CheckCircleIcon, CalendarIcon, AwardIcon, DownloadIcon } from '@/components/Icons';

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const steps = [
  { n: '01', title: 'Visit School', desc: 'Go to the nearest public primary or junior secondary school in your LGA.' },
  { n: '02', title: 'Gather Documents', desc: 'Birth certificate, vaccination card, and two passport photographs.' },
  { n: '03', title: 'Complete Form', desc: 'Fill the SUBEB enrollment form at the school office or online.' },
  { n: '04', title: 'Confirmation', desc: 'Receive confirmation letter and begin the new school term.' },
];

const scholarships = [
  { title: 'Excellence Scholarship', value: '₦50,000/year', eligibility: 'Top 5% of students per LGA', deadline: 'July 31, 2026', status: 'Open' },
  { title: 'Special Needs Bursary', value: '₦30,000/year', eligibility: 'Students with verified disabilities', deadline: 'June 30, 2026', status: 'Open' },
  { title: 'Community Champion Award', value: '₦25,000/year', eligibility: 'Community leaders\' children', deadline: 'August 15, 2026', status: 'Upcoming' },
];

const faqs = [
  { q: 'Is public primary education free in Akwa Ibom?', a: 'Yes. Under the Universal Basic Education Act, public primary and junior secondary education is free and compulsory in Nigeria, including Akwa Ibom State.' },
  { q: 'What age can my child start primary school?', a: 'Children aged 6 years and above are eligible to enroll in Primary 1. Early Childhood Care and Development (ECCD) starts from age 3.' },
  { q: 'How do I apply for a scholarship?', a: 'Scholarship applications are submitted through the child\'s school principal. Forms are available at SUBEB offices and on this portal.' },
];

export default function StudentsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [tab, setTab] = useState<'enroll' | 'login'>('enroll');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ childName: '', dob: '', lga: '', school: '', parentName: '', email: '' });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#f0c040] text-xs font-semibold tracking-[0.18em] uppercase mb-6">
              <BookOpenIcon size={12} /> Students & Parents
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'Georgia, serif' }}>Students & Parents Centre</h1>
            <p className="text-white/75 text-lg max-w-xl mx-auto">Everything families need — enrollment, scholarships, academic resources, and support services.</p>
          </motion.div>
        </div>
      </section>

      {/* Enrollment Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <span className="text-[#c8960c] text-xs font-bold tracking-[0.2em] uppercase">Enrollment</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mt-2" style={{ fontFamily: 'Georgia, serif' }}>How to Enroll Your Child</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div key={s.n} variants={fadeUp} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px border-t-2 border-dashed border-[#c8960c]/30 z-0 -translate-x-1/2" />
                )}
                <div className="relative z-10 text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-[#c8960c] font-bold text-lg">{s.n}</span>
                  </div>
                  <h3 className="font-bold text-[#0a1628] mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Online Enrollment Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div variants={fadeUp}>
              <span className="text-[#c8960c] text-xs font-bold tracking-[0.2em] uppercase">Online Portal</span>
              <h2 className="text-3xl font-bold text-[#0a1628] mt-3 mb-4" style={{ fontFamily: 'Georgia, serif' }}>Student Portal</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Use our online portal to start the enrollment process, track application status, and access your child&apos;s academic records.</p>
              <ul className="space-y-3">
                {['Online school enrollment application', 'Scholarship application and tracking', 'Academic result checking', 'School transfer requests', 'Download certificates and documents'].map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircleIcon size={16} className="text-[#1a6b3a] flex-shrink-0 mt-0.5" />{b}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="flex rounded-xl bg-gray-100 p-1 mb-6">
                {(['enroll', 'login'] as const).map((t) => (
                  <button key={t} onClick={() => { setTab(t); setSubmitted(false); }} className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${tab === t ? 'bg-white text-[#0a1628] shadow-sm' : 'text-gray-500'}`}>
                    {t === 'enroll' ? 'New Enrollment' : 'Parent Login'}
                  </button>
                ))}
              </div>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircleIcon size={32} className="text-green-600" />
                  </div>
                  <h3 className="font-bold text-[#0a1628] text-lg mb-2">{tab === 'enroll' ? 'Application Submitted!' : 'Login Successful!'}</h3>
                  <p className="text-gray-500 text-sm">{tab === 'enroll' ? 'A confirmation will be sent to your email. Visit the school to complete registration.' : 'Welcome back. Your dashboard is loading...'}</p>
                  <button onClick={() => setSubmitted(false)} className="mt-4 text-[#1a6b3a] text-sm font-semibold hover:underline">Back</button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                  {tab === 'enroll' ? (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-gray-600 mb-1.5">Child&apos;s Name</label>
                          <input required placeholder="Full name" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6b3a]" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-600 mb-1.5">Date of Birth</label>
                          <input required type="date" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6b3a]" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Preferred LGA</label>
                        <select className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6b3a]">
                          <option value="">Select LGA...</option>
                          {['Uyo', 'Eket', 'Ikot Ekpene', 'Abak', 'Ibeno', 'Itu', 'Obot Akara'].map((l) => <option key={l}>{l}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Parent/Guardian Email</label>
                        <input required type="email" placeholder="parent@email.com" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6b3a]" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Parent/Guardian Phone</label>
                        <input required placeholder="+234 8XX XXX XXXX" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6b3a]" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address</label>
                        <input required type="email" placeholder="parent@email.com" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6b3a]" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Password</label>
                        <input required type="password" placeholder="••••••••" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6b3a]" />
                      </div>
                    </>
                  )}
                  <button type="submit" className="w-full py-3 bg-[#0a1628] text-white font-semibold text-sm rounded-lg hover:bg-[#1e3a5f] transition-all hover:shadow-lg mt-1">
                    {tab === 'enroll' ? 'Submit Application' : 'Log In'}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <span className="text-[#c8960c] text-xs font-bold tracking-[0.2em] uppercase">Scholarships</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mt-2" style={{ fontFamily: 'Georgia, serif' }}>Financial Support Programmes</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scholarships.map((s) => (
              <motion.div key={s.title} variants={fadeUp} whileHover={{ y: -6 }} className="bg-gray-50 rounded-2xl border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <AwardIcon size={28} className="text-[#c8960c]" />
                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${s.status === 'Open' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>{s.status}</span>
                </div>
                <h3 className="font-bold text-[#0a1628] text-base mb-1">{s.title}</h3>
                <p className="text-[#1a6b3a] font-bold text-xl mb-3">{s.value}</p>
                <p className="text-gray-500 text-sm mb-4">Eligibility: {s.eligibility}</p>
                <div className="flex items-center gap-1.5 text-xs text-gray-400 border-t border-gray-200 pt-3">
                  <CalendarIcon size={13} className="text-[#c8960c]" />
                  Deadline: {s.deadline}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#0a1628]" style={{ fontFamily: 'Georgia, serif' }}>Common Questions</h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-[#0a1628] text-sm hover:bg-gray-50 transition-colors">
                  {faq.q}
                  <span className={`ml-2 flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>▾</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100">{faq.a}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
