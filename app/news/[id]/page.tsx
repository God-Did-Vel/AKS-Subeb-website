'use client';

import { motion } from 'framer-motion';
import { mockNews } from '@/lib/mockData';
import Link from 'next/link';

export default function NewsDetail({ params }: { params: { id: string } }) {
  const news = mockNews.find((n) => n.id === parseInt(params.id));

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-4xl text-gray-600">News not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <article className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Header */}
            <div className="mb-8">
              <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {news.category}
              </span>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">{news.title}</h1>
              <div className="flex items-center text-gray-600 space-x-4">
                <span>📅 {new Date(news.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}</span>
              </div>
            </div>

            {/* Feature Image */}
            <motion.img
              src={news.image}
              alt={news.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-full rounded-xl shadow-2xl mb-12 h-96 object-cover"
            />

            {/* Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="prose max-w-none mb-12 text-lg text-gray-700 leading-relaxed"
            >
              <p className="mb-6">
                {news.excerpt}
              </p>
              <p className="mb-6">
                SUBEB continues its mission to improve educational standards and support stakeholders in the education sector. This initiative is part of our comprehensive strategy to ensure quality education for all children in Akwa Ibom State.
              </p>
              <p className="mb-6">
                Through collaborative efforts between SUBEB, schools, teachers, and communities, we are building a stronger foundation for educational excellence and student success.
              </p>
              <p>
                For more information about this announcement or related programs, please contact SUBEB directly or visit our website for updates.
              </p>
            </motion.div>

            {/* Back Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link href="/news" className="text-primary-600 font-semibold hover:text-primary-700 transition">
                ← Back to News
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </article>

      {/* Related News */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">More News</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {mockNews.filter((n) => n.id !== news.id).slice(0, 3).map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.id}`}
                className="block p-4 card hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-gray-900 hover:text-primary-600 transition mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{new Date(item.date).toLocaleDateString()}</p>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
