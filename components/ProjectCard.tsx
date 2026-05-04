'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon, CalendarIcon } from './Icons';

interface ProjectCardProps {
  id: number;
  title: string;
  status: string;
  progress: number;
  description: string;
  startDate: string;
  endDate: string;
}

const statusConfig: Record<string, { color: string; dot: string; bg: string }> = {
  'In Progress': { color: 'text-blue-700', dot: 'bg-blue-500', bg: 'bg-blue-50' },
  'Completed':   { color: 'text-green-700', dot: 'bg-green-500', bg: 'bg-green-50' },
  'Planned':     { color: 'text-amber-700', dot: 'bg-amber-500', bg: 'bg-amber-50' },
  'On Hold':     { color: 'text-red-700',   dot: 'bg-red-400',   bg: 'bg-red-50' },
};

export default function ProjectCard({ id, title, status, progress, description, startDate, endDate }: ProjectCardProps) {
  const cfg = statusConfig[status] || statusConfig['Planned'];
  const fmt = (d: string) => new Date(d).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 p-6 transition-all duration-300 group"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <h3 className="font-bold text-[#0a1628] text-base leading-snug group-hover:text-[#1a6b3a] transition-colors">
          {title}
        </h3>
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold flex-shrink-0 ${cfg.bg} ${cfg.color}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot} ${status === 'In Progress' ? 'animate-pulse' : ''}`} />
          {status}
        </span>
      </div>

      <p className="text-gray-500 text-sm leading-relaxed mb-5">{description}</p>

      {/* Progress Bar */}
      <div className="mb-5">
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-xs font-semibold text-gray-500">Progress</span>
          <span className="text-sm font-bold text-[#0a1628]">{progress}%</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${progress}%` }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
            className={`h-full rounded-full ${progress === 100 ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gradient-to-r from-[#1e3a5f] to-[#0284c7]'}`}
          />
        </div>
      </div>

      {/* Dates */}
      <div className="flex items-center gap-4 text-xs text-gray-400">
        <div className="flex items-center gap-1.5">
          <CalendarIcon size={13} className="text-[#c8960c]" />
          <span>Start: <span className="font-medium text-gray-600">{fmt(startDate)}</span></span>
        </div>
        <div className="flex items-center gap-1.5">
          <CalendarIcon size={13} className="text-[#c8960c]" />
          <span>End: <span className="font-medium text-gray-600">{fmt(endDate)}</span></span>
        </div>
      </div>

      {progress === 100 && (
        <div className="mt-4 flex items-center gap-2 text-green-600 text-xs font-semibold">
          <CheckCircleIcon size={14} />
          Project Completed Successfully
        </div>
      )}
    </motion.div>
  );
}
