'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon, TargetIcon, StarIcon, ZapIcon, HeartIcon, ShieldIcon, UsersIcon, AwardIcon } from '@/components/Icons';

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const values = [
  { Icon: TargetIcon, title: 'Quality Education', desc: 'Maintaining high curriculum standards across all schools.' },
  { Icon: HeartIcon, title: 'Inclusivity', desc: 'Education for every child, regardless of background.' },
  { Icon: ZapIcon, title: 'Innovation', desc: 'Modern teaching methods and technology-driven learning.' },
  { Icon: ShieldIcon, title: 'Accountability', desc: 'Transparent governance and responsible use of resources.' },
  { Icon: UsersIcon, title: 'Collaboration', desc: 'Partnering with communities, parents, and stakeholders.' },
  { Icon: AwardIcon, title: 'Excellence', desc: 'Striving for the highest educational outcomes statewide.' },
];

const milestones = [
  { year: '1999', title: 'SUBEB Established', desc: 'Founded under the Universal Basic Education Act to manage primary and junior secondary education in Akwa Ibom State.' },
  { year: '2006', title: 'UBEC Alignment', desc: 'Strengthened federal-state partnership with Universal Basic Education Commission to boost funding and standards.' },
  { year: '2015', title: 'Massive School Rehabilitation', desc: 'Statewide renovation of over 300 schools, providing modern facilities and equipment.' },
  { year: '2020', title: 'Digital Learning Launch', desc: 'Introduction of ICT infrastructure and digital learning tools across selected schools.' },
  { year: '2023', title: 'Teacher Excellence Initiative', desc: 'Launched comprehensive professional development programmes for 18,000+ teachers.' },
  { year: '2026', title: 'Continued Excellence', desc: 'Ongoing mission to achieve 100% school enrollment and world-class basic education.' },
];

const board = [
  { name: 'Rt. Hon. (Dr.) Anietie Etuk', role: 'Executive Chairman', img: 'https://res.cloudinary.com/duweg8kpv/image/upload/ak9_suczkf.jpg' },
  { name: 'Dr. Iniubong Asuquo', role: 'Executive Secretary', img: 'https://res.cloudinary.com/duweg8kpv/image/upload/ak19_cbqgfa.jpg' },
  { name: 'Mrs. Usen Etim', role: 'Director, Quality Assurance', img: 'https://res.cloudinary.com/duweg8kpv/image/upload/ak21_hbgfe0.jpg' },
  { name: 'Engr. Okoro Bassey', role: 'Director, Finance', img: 'https://res.cloudinary.com/duweg8kpv/image/upload/ak20_hso5v8.jpg' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#c8960c]/10 translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#f0c040] text-xs font-semibold tracking-[0.18em] uppercase mb-6">About SUBEB</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'Georgia, serif' }}>About the State Universal Basic Education Board</h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">Transforming basic education across all 31 Local Government Areas of Akwa Ibom State since 1999.</p>
            <div className="flex items-center justify-center gap-2 mt-6 text-white/40 text-sm">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/80">About SUBEB</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { label: 'Our Mission', color: 'from-[#0a1628] to-[#1e3a5f]', accent: '#c8960c', text: 'To provide quality, accessible, and inclusive basic education that equips every child with knowledge, skills, and values for holistic development and active contribution to national growth.' },
              { label: 'Our Vision', color: 'from-[#1a6b3a] to-[#0f4a28]', accent: '#f0c040', text: 'An Akwa Ibom State where quality education is universally accessible, fostering excellence, innovation, and lifelong learning in a nurturing and equitable environment.' },
            ].map((item) => (
              <motion.div key={item.label} variants={fadeUp} className={`bg-gradient-to-br ${item.color} rounded-2xl p-8 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 bg-white -translate-y-1/2 translate-x-1/2" />
                <div className="h-1 w-12 rounded-full mb-5" style={{ background: item.accent }} />
                <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>{item.label}</h3>
                <p className="text-white/85 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp}>
              <span className="text-[#c8960c] text-xs font-bold tracking-[0.2em] uppercase">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mt-3 mb-5" style={{ fontFamily: 'Georgia, serif' }}>A Government Agency Dedicated to Every Child</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>The State Universal Basic Education Board (SUBEB), Akwa Ibom State, is established by law under the Universal Basic Education Act. We serve as the primary government body responsible for the implementation of the Universal Basic Education programme at the state level.</p>
                <p>Our mandate includes management of primary schools and junior secondary schools, teacher recruitment and training, curriculum delivery, infrastructure development, and educational quality assurance across all 31 LGAs.</p>
                <p>We work in close partnership with the Federal Government through UBEC, international development partners, communities, and civil society organisations to ensure that basic education meets national and global standards.</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
              {[
                { value: '1,247', label: 'Registered Schools' },
                { value: '450K+', label: 'Students Enrolled' },
                { value: '18,500+', label: 'Active Teachers' },
                { value: '31', label: 'LGAs Covered' },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-[#0a1628] mb-1" style={{ fontFamily: 'Georgia, serif' }}>{s.value}</div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider font-medium">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <span className="text-[#c8960c] text-xs font-bold tracking-[0.2em] uppercase">Guiding Principles</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mt-2" style={{ fontFamily: 'Georgia, serif' }}>Our Core Values</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUp} whileHover={{ y: -5 }} className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#0a1628]/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#1a6b3a]/10 transition-colors">
                  <v.Icon size={22} className="text-[#1a6b3a]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a1628] mb-1">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <span className="text-[#c8960c] text-xs font-bold tracking-[0.2em] uppercase">History</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mt-2" style={{ fontFamily: 'Georgia, serif' }}>Our Journey</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#c8960c] to-[#1a6b3a]" />
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div key={m.year} variants={fadeUp} className="flex gap-6 items-start">
                  <div className="relative flex-shrink-0 w-16 flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-[#c8960c] ring-4 ring-white shadow-md z-10" />
                    <span className="text-[#c8960c] text-xs font-bold mt-2">{m.year}</span>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex-1 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-[#0a1628] mb-2">{m.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <span className="text-[#c8960c] text-xs font-bold tracking-[0.2em] uppercase">Board</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mt-2" style={{ fontFamily: 'Georgia, serif' }}>Our Leadership</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {board.map((person) => (
              <motion.div key={person.name} variants={fadeUp} whileHover={{ y: -6 }} className="text-center group">
                <div className="relative w-28 h-28 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg ring-4 ring-transparent group-hover:ring-[#c8960c]/30 transition-all duration-300">
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="font-bold text-[#0a1628] text-sm">{person.name}</h3>
                <p className="text-[#1a6b3a] text-xs font-medium mt-1">{person.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0a1628] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>Have Questions About SUBEB?</h2>
            <p className="text-white/60 mb-8">Our team is ready to assist stakeholders, educators, and parents.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#c8960c] text-white font-bold rounded-xl hover:bg-[#b07f08] transition-all hover:shadow-lg group">
              Contact Us <ArrowRightIcon size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
