'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, CheckCircleIcon, ArrowRightIcon } from '@/components/Icons';

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const offices = [
  { name: 'SUBEB Headquarters', address: 'Government House Road, Uyo, Akwa Ibom State', phone: '(+234) 803-000-0000', email: 'info@subebakawaibom.gov.ng', hours: 'Mon–Fri: 8am – 5pm' },
  { name: 'Eket Zonal Office', address: '14 Eket Road, Eket, Akwa Ibom State', phone: '(+234) 803-100-1001', email: 'eket@subebakawaibom.gov.ng', hours: 'Mon–Fri: 8am – 5pm' },
  { name: 'Ikot Ekpene Zonal Office', address: '7 Ikot Ekpene Avenue, Akwa Ibom', phone: '(+234) 803-200-2002', email: 'ikotekpene@subebakawaibom.gov.ng', hours: 'Mon–Fri: 8am – 5pm' },
];

const topics = ['General Enquiry', 'School Enrollment', 'Teacher Registration', 'Scholarship Application', 'Infrastructure Complaint', 'Partnership / Collaboration', 'Media / Press', 'Other'];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', topic: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#f0c040] text-xs font-semibold tracking-[0.18em] uppercase mb-6">Contact Us</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'Georgia, serif' }}>Get in Touch</h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">We are here to help. Reach out to SUBEB Akwa Ibom State through any of our channels below.</p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { Icon: MapPinIcon, label: 'Address', value: 'Government House Road, Uyo, Akwa Ibom State' },
              { Icon: PhoneIcon, label: 'Phone', value: '(+234) 803-000-0000' },
              { Icon: MailIcon, label: 'Email', value: 'info@subebakawaibom.gov.ng' },
              { Icon: ClockIcon, label: 'Office Hours', value: 'Monday – Friday, 8:00am – 5:00pm' },
            ].map((c) => (
              <motion.div key={c.label} variants={fadeUp} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-[#0a1628]/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <c.Icon size={20} className="text-[#c8960c]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">{c.label}</p>
                  <p className="text-sm text-[#0a1628] font-medium leading-snug">{c.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div variants={fadeUp}>
              <span className="text-[#c8960c] text-xs font-bold tracking-[0.2em] uppercase">Send a Message</span>
              <h2 className="text-3xl font-bold text-[#0a1628] mt-3 mb-6" style={{ fontFamily: 'Georgia, serif' }}>Contact Form</h2>

              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-green-50 rounded-2xl p-10 text-center border border-green-100">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircleIcon size={32} className="text-green-600" />
                  </div>
                  <h3 className="font-bold text-[#0a1628] text-xl mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-500 text-sm mb-5">Thank you for reaching out. A member of our team will respond to your enquiry within 24–48 working hours.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', topic: '', message: '' }); }} className="text-[#1a6b3a] text-sm font-semibold hover:underline">
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                      <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6b3a] focus:border-transparent transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address <span className="text-red-500">*</span></label>
                      <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6b3a] focus:border-transparent transition-all" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone Number</label>
                      <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+234 8XX XXX XXXX" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6b3a] focus:border-transparent transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Topic / Subject <span className="text-red-500">*</span></label>
                      <select required value={form.topic} onChange={(e) => setForm({ ...form, topic: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6b3a] focus:border-transparent transition-all bg-white">
                        <option value="">Select a topic...</option>
                        {topics.map((t) => <option key={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Message <span className="text-red-500">*</span></label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Write your message here..." className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6b3a] focus:border-transparent transition-all resize-none" />
                  </div>
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full py-4 bg-[#0a1628] text-white font-bold text-sm rounded-xl hover:bg-[#1e3a5f] transition-all hover:shadow-xl flex items-center justify-center gap-2 group">
                    Send Message <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Map placeholder + offices */}
            <motion.div variants={fadeUp} className="space-y-6">
              <div className="bg-gray-100 rounded-2xl overflow-hidden h-64 relative">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=700&h=400&fit=crop&q=80" alt="Uyo, Akwa Ibom" className="w-full h-full object-cover opacity-70" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-xl px-5 py-3 shadow-xl flex items-center gap-2">
                    <MapPinIcon size={18} className="text-[#c8960c]" />
                    <span className="font-bold text-[#0a1628] text-sm">Uyo, Akwa Ibom State</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {offices.map((office) => (
                  <div key={office.name} className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-[#0a1628] text-sm mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#c8960c]" />
                      {office.name}
                    </h3>
                    <div className="space-y-1.5 text-xs text-gray-500">
                      <p className="flex items-start gap-2"><MapPinIcon size={13} className="text-[#c8960c] flex-shrink-0 mt-0.5" />{office.address}</p>
                      <p className="flex items-center gap-2"><PhoneIcon size={13} className="text-[#c8960c] flex-shrink-0" />{office.phone}</p>
                      <p className="flex items-center gap-2"><MailIcon size={13} className="text-[#c8960c] flex-shrink-0" />{office.email}</p>
                      <p className="flex items-center gap-2"><ClockIcon size={13} className="text-[#c8960c] flex-shrink-0" />{office.hours}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
