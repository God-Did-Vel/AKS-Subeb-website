'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPinIcon, UsersIcon, ArrowRightIcon } from './Icons';

interface SchoolCardProps {
  id: number;
  name: string;
  type: string;
  locality: string;
  students: number;
  teachers: number;
  image: string;
}

export default function SchoolCard({ id, name, type, locality, students, teachers, image }: SchoolCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden group transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />
        {/* Type badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 bg-[#c8960c] text-white text-[10px] font-bold uppercase tracking-wider rounded-md">
            {type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-[#0a1628] text-sm leading-snug mb-3 line-clamp-2 group-hover:text-[#1a6b3a] transition-colors">
          {name}
        </h3>

        <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-4">
          <MapPinIcon size={13} className="text-[#c8960c] flex-shrink-0" />
          <span>{locality}</span>
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 pt-3">
          <div className="text-center">
            <div className="font-bold text-[#0a1628] text-sm">{students.toLocaleString()}</div>
            <div className="text-[10px] text-gray-400 uppercase tracking-wider">Students</div>
          </div>
          <div className="w-px h-8 bg-gray-100" />
          <div className="text-center">
            <div className="font-bold text-[#0a1628] text-sm">{teachers}</div>
            <div className="text-[10px] text-gray-400 uppercase tracking-wider">Teachers</div>
          </div>
          <Link
            href={`/schools`}
            className="flex items-center gap-1 text-[#1a6b3a] text-xs font-semibold hover:gap-2 transition-all duration-200"
          >
            View
            <ArrowRightIcon size={13} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
