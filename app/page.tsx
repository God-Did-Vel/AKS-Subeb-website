"use client";
import HeroSlider from "@/components/HeroSlider";
import StatisticCard from "@/components/StatisticCard";
import NewsCard from "@/components/NewsCard";
import ProjectCard from "@/components/ProjectCard";
import SchoolCard from "@/components/SchoolCard";
import TestimonialCard from "@/components/TestimonialCard";
import {
  mockNews,
  mockProjects,
  mockSchools,
  mockTestimonials,
  mockStatistics,
  mockDepartments,
} from "@/lib/mockData";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  BookOpenIcon,
  UsersIcon,
  SchoolIcon,
  CheckCircleIcon,
  ShieldIcon,
  ZapIcon,
  HeartIcon,
} from "@/components/Icons";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const deptIcons: Record<string, React.ReactNode> = {
  "📚": <BookOpenIcon size={28} className="text-[#1a6b3a]" />,
  "✅": <CheckCircleIcon size={28} className="text-[#1a6b3a]" />,
  "💰": <ShieldIcon size={28} className="text-[#1a6b3a]" />,
  "👥": <UsersIcon size={28} className="text-[#1a6b3a]" />,
  "💻": <ZapIcon size={28} className="text-[#1a6b3a]" />,
  "📊": <SchoolIcon size={28} className="text-[#1a6b3a]" />,
};

const partners = [
  { name: "Federal Ministry of Education", abbr: "FME" },
  { name: "Universal Basic Education Commission", abbr: "UBEC" },
  { name: "UNICEF Nigeria", abbr: "UNICEF" },
  { name: "World Bank Education", abbr: "WB" },
  { name: "British Council", abbr: "BC" },
  { name: "USAID Education", abbr: "USAID" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero */}
      <HeroSlider />

      {/* 2. About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-2 mb-5">
                <div className="h-px w-10 bg-[#c8960c]" />
                <span className="text-[#c8960c] text-xs font-bold tracking-[0.2em] uppercase">
                  About Akwa Ibom State SUBEB
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-5 leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Committed to Excellence in Basic Education, Who We Are.
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The State Universal Basic Education Board (SUBEB) is the apex
                body responsible for managing and improving basic education
                across all 31 Local Government Areas of Akwa Ibom State,
                Nigeria.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                ​The geo-political entity now known as Akwa Ibom State was one
                of the Pioneer Communities that first savoured the benefits of
                formal education from the early missionaries. Within this
                context, effort has been made to provide a documentary for
                repositioning and strengthening all sectors of the Akwa Ibom
                State Universal Basic Education Board (SUBEB) for efficiency.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0a1628] text-white text-sm font-semibold rounded-lg hover:bg-[#1e3a5f] transition-all duration-200 hover:shadow-lg group"
                >
                  Learn More{" "}
                  <ArrowRightIcon
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="/departments"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#0a1628]/20 text-[#0a1628] text-sm font-semibold rounded-lg hover:border-[#1a6b3a] hover:text-[#1a6b3a] transition-all duration-200"
                >
                  Our Departments
                </Link>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://res.cloudinary.com/duweg8kpv/image/upload/11114_zx2pvm.jpg"
                  alt="Students learning"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/30 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#c8960c] rounded-2xl p-5 shadow-xl">
                <p className="text-white font-bold text-3xl leading-none">
                  25+
                </p>
                <p className="text-white/80 text-xs mt-1 font-medium">
                  Years of Service
                </p>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <p className="text-[#1a6b3a] font-bold text-2xl leading-none">
                  31
                </p>
                <p className="text-gray-500 text-xs mt-1">LGAs Covered</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-px w-8 bg-[#c8960c]" />
              <span className="text-[#c8960c] text-xs font-bold tracking-[0.2em] uppercase">
                Our Impact
              </span>
              <div className="h-px w-8 bg-[#c8960c]" />
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#0a1628]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Education by the Numbers
            </h2>
            <p className="text-gray-500 mt-3 text-base">
              Serving thousands across Akwa Ibom State
            </p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {mockStatistics.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp}>
                <StatisticCard {...stat} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Leadership Message */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#c8960c] text-xs font-bold tracking-[0.2em] uppercase">
              Leadership
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#0a1628] mt-2"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Chairman's Message
            </h2>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#c8960c]/10 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#1a6b3a]/20 translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="flex-shrink-0">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden ring-4 ring-[#c8960c]/40 shadow-2xl">
                  <img
                    src="https://res.cloudinary.com/duweg8kpv/image/upload/ak9_suczkf.jpg"
                    alt="Chairman"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="text-[#c8960c] text-4xl mb-3 leading-none">
                  &ldquo;
                </div>
                <p className="text-white/90 text-base md:text-lg leading-relaxed italic mb-5">
                  Education is the foundation of national development. At SUBEB,
                  we are committed to transforming the educational landscape of
                  Akwa Ibom State, ensuring that every child — regardless of
                  background — has access to quality education that unlocks
                  their potential.
                </p>
                <div className="h-px w-12 bg-[#c8960c] mb-3" />
                <p className="font-bold text-white text-base">
                  Rt. Hon. (Dr.) Anietie Etuk
                </p>
                <p className="text-[#c8960c] text-sm">
                  Executive Chairman, SUBEB Akwa Ibom State
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Featured Schools */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
          >
            <div>
              <span className="text-[#c8960c] text-xs font-bold tracking-[0.2em] uppercase">
                Schools
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#0a1628] mt-2"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Featured Schools
              </h2>
            </div>
            <Link
              href="/schools"
              className="inline-flex items-center gap-2 text-[#1a6b3a] text-sm font-semibold hover:gap-3 transition-all"
            >
              View All <ArrowRightIcon size={16} />
            </Link>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {mockSchools.map((school) => (
              <motion.div key={school.id} variants={fadeUp}>
                <SchoolCard {...school} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. Departments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[#c8960c] text-xs font-bold tracking-[0.2em] uppercase">
              Our Structure
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#0a1628] mt-2"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Key Departments
            </h2>
            <p className="text-gray-500 mt-3">
              Specialised units driving educational excellence
            </p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {mockDepartments.map((dept) => (
              <motion.div
                key={dept.id}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#f0f9f4] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#1a6b3a]/10 transition-colors">
                  {deptIcons[dept.icon] || (
                    <span className="text-3xl">{dept.icon}</span>
                  )}
                </div>
                <h3 className="font-bold text-[#0a1628] text-base mb-2 group-hover:text-[#1a6b3a] transition-colors">
                  {dept.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {dept.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 pt-3">
                  <span>
                    Head:{" "}
                    <span className="font-semibold text-gray-600">
                      {dept.head}
                    </span>
                  </span>
                  <span className="bg-[#f0f9f4] text-[#1a6b3a] px-2 py-1 rounded-full font-semibold">
                    {dept.staff} staff
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              href="/departments"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#0a1628] text-white text-sm font-semibold rounded-lg hover:bg-[#1e3a5f] transition-all hover:shadow-lg group"
            >
              All Departments{" "}
              <ArrowRightIcon
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 7. Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
          >
            <div>
              <span className="text-[#c8960c] text-xs font-bold tracking-[0.2em] uppercase">
                Programmes
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#0a1628] mt-2"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Ongoing Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[#1a6b3a] text-sm font-semibold hover:gap-3 transition-all"
            >
              View All <ArrowRightIcon size={16} />
            </Link>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {mockProjects.map((p) => (
              <motion.div key={p.id} variants={fadeUp}>
                <ProjectCard {...p} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
          >
            <div>
              <span className="text-[#c8960c] text-xs font-bold tracking-[0.2em] uppercase">
                Updates
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#0a1628] mt-2"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Latest News
              </h2>
            </div>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-[#1a6b3a] text-sm font-semibold hover:gap-3 transition-all"
            >
              All News <ArrowRightIcon size={16} />
            </Link>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {mockNews.map((n) => (
              <motion.div key={n.id} variants={fadeUp}>
                <NewsCard {...n} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 9. Portals */}
      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[#c8960c] text-xs font-bold tracking-[0.2em] uppercase">
              Portals
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mt-2"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Dedicated Access Portals
            </h2>
            <p className="text-white/60 mt-3">
              Specialised platforms for teachers, students, and administrators
            </p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Teachers Portal",
                desc: "Access training resources, professional development programmes, and registration services.",
                href: "/teachers",
                Icon: UsersIcon,
                color: "from-blue-600 to-blue-800",
              },
              {
                title: "Students & Parents",
                desc: "Enrollment information, scholarship applications, and academic resources for families.",
                href: "/students",
                Icon: BookOpenIcon,
                color: "from-[#1a6b3a] to-green-800",
              },
              {
                title: "Admin Dashboard",
                desc: "System administration, school management, analytics, and announcement controls.",
                href: "/admin",
                Icon: SchoolIcon,
                color: "from-[#c8960c] to-amber-700",
              },
            ].map((portal) => (
              <motion.div
                key={portal.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${portal.color} flex items-center justify-center mb-5 shadow-lg`}
                >
                  <portal.Icon size={28} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">
                  {portal.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {portal.desc}
                </p>
                <Link
                  href={portal.href}
                  className="inline-flex items-center gap-2 text-[#c8960c] text-sm font-semibold hover:gap-3 transition-all group-hover:underline"
                >
                  Access Portal <ArrowRightIcon size={14} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 10. Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[#c8960c] text-xs font-bold tracking-[0.2em] uppercase">
              Testimonials
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#0a1628] mt-2"
              style={{ fontFamily: "Georgia, serif" }}
            >
              What Stakeholders Say
            </h2>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {mockTestimonials.map((t) => (
              <motion.div key={t.id} variants={fadeUp}>
                <TestimonialCard {...t} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 11. Partners */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-[#c8960c] text-xs font-bold tracking-[0.2em] uppercase">
              Partners & Collaborators
            </span>
            <h2 className="text-2xl font-bold text-[#0a1628] mt-2">
              Working Together for Education
            </h2>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {partners.map((p) => (
              <motion.div
                key={p.abbr}
                variants={fadeUp}
                whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
                className="flex flex-col items-center justify-center gap-2 p-5 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white transition-all duration-200 cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-[#0a1628]/8 flex items-center justify-center">
                  <span className="text-[#0a1628] font-bold text-xs">
                    {p.abbr}
                  </span>
                </div>
                <p className="text-gray-500 text-[10px] text-center leading-snug font-medium">
                  {p.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 12. CTA */}
      <section className="py-24 bg-gradient-to-br from-[#1a6b3a] to-[#0f4a28] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#c8960c]/15 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 rounded-full text-white/90 text-xs font-semibold tracking-widest uppercase mb-6">
              <HeartIcon size={12} /> Join Our Mission
            </span>
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Ready to Transform Education in Akwa Ibom?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of educators, parents, and students working
              together to build a brighter future through quality basic
              education.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1a6b3a] font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 hover:shadow-xl group"
              >
                Get in Touch{" "}
                <ArrowRightIcon
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/schools"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/50 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white transition-all duration-200"
              >
                Find a School
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
