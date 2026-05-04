'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CalendarIcon, ArrowRightIcon } from './Icons';

interface NewsCardProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

const categoryColors: Record<string, string> = {
  Policy: 'bg-blue-100 text-blue-700',
  Training: 'bg-green-100 text-green-700',
  Technology: 'bg-purple-100 text-purple-700',
  Infrastructure: 'bg-orange-100 text-orange-700',
  Announcement: 'bg-red-100 text-red-700',
};

export default function NewsCard({ id, title, excerpt, date, category, image }: NewsCardProps) {
  const colorClass = categoryColors[category] || 'bg-gray-100 text-gray-700';
  const formatted = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric',
  });

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden group transition-all duration-300 flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${colorClass}`}>
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-3">
          <CalendarIcon size={13} className="text-[#c8960c]" />
          <time dateTime={date}>{formatted}</time>
        </div>

        <h3 className="font-bold text-[#0a1628] text-sm leading-snug mb-2 line-clamp-2 group-hover:text-[#1a6b3a] transition-colors">
          {title}
        </h3>

        <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-3 flex-1">
          {excerpt}
        </p>

        <Link
          href={`/news`}
          className="inline-flex items-center gap-1.5 text-[#1a6b3a] text-xs font-semibold hover:gap-2.5 transition-all duration-200 mt-auto"
        >
          Read more
          <ArrowRightIcon size={13} />
        </Link>
      </div>
    </motion.article>
  );
}
