'use client';

import { motion } from 'framer-motion';
import { mockSchools } from '@/lib/mockData';

export default function SchoolDetail({ params }: { params: { id: string } }) {
  const school = mockSchools.find((s) => s.id === parseInt(params.id));

  if (!school) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-4xl text-gray-600">School not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
          >
            <div>
              <img
                src={school.image}
                alt={school.name}
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">{school.name}</h1>
              <p className="text-2xl text-primary-600 font-semibold mb-6">{school.type}</p>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-primary-600 pl-4">
                  <p className="text-gray-600 text-sm uppercase tracking-wide">Location</p>
                  <p className="text-2xl font-bold text-gray-900">{school.locality}</p>
                </div>
                <div className="border-l-4 border-secondary-600 pl-4">
                  <p className="text-gray-600 text-sm uppercase tracking-wide">Student Population</p>
                  <p className="text-2xl font-bold text-gray-900">{school.students} Students</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="text-gray-600 text-sm uppercase tracking-wide">Teaching Staff</p>
                  <p className="text-2xl font-bold text-gray-900">{school.teachers} Teachers</p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full"
              >
                Contact School
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">About This School</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              {school.name} is one of the leading educational institutions in {school.locality}, offering quality education within the {school.type} system.
            </p>
            <p className="text-gray-600">
              With a dedicated team of {school.teachers} experienced teachers and a student population of {school.students}, we maintain excellent standards in curriculum delivery and student development.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
