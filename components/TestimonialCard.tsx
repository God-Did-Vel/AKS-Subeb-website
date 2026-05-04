'use client';

import { motion } from 'framer-motion';
import { QuoteIcon, StarIcon } from './Icons';

interface TestimonialCardProps {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
}

export default function TestimonialCard({ id, name, role, text, image }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 p-7 flex flex-col gap-5 transition-all duration-300 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full bg-gradient-to-br from-[#c8960c]/8 to-transparent pointer-events-none" />

      {/* Quote icon */}
      <div className="text-[#c8960c]/25">
        <QuoteIcon size={32} />
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1 -mt-2">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} size={14} filled className="text-[#c8960c]" />
        ))}
      </div>

      {/* Text */}
      <p className="text-gray-600 text-sm leading-relaxed italic flex-1">
        &ldquo;{text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-[#c8960c]/30"
        />
        <div>
          <p className="font-bold text-[#0a1628] text-sm">{name}</p>
          <p className="text-[#1a6b3a] text-xs font-medium">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
