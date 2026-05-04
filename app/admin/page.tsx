'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { mockAdminUsers, mockSchools, mockNews } from '@/lib/mockData';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Admin() {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const stats = [
    { label: 'Total Schools', value: '1,247', icon: '🏫', color: 'bg-blue-50', trend: '+5.2%' },
    { label: 'Active Users', value: '18.5K', icon: '👥', color: 'bg-green-50', trend: '+12.4%' },
    { label: 'Announcements', value: '42', icon: '📢', color: 'bg-purple-50', trend: '+3%' },
    { label: 'Pending Tasks', value: '12', icon: '✓', color: 'bg-orange-50', trend: '-8%' },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'users', label: 'Users', icon: '👥' },
    { id: 'schools', label: 'Schools', icon: '🏫' },
    { id: 'announcements', label: 'Announcements', icon: '📢' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
  ];

  const menuItems = [
    { label: 'Dashboard', icon: '🏠', href: '#' },
    { label: 'Users', icon: '👥', href: '#' },
    { label: 'Schools', icon: '🏫', href: '#' },
    { label: 'Announcements', icon: '📢', href: '#' },
    { label: 'Reports', icon: '📊', href: '#' },
    { label: 'Settings', icon: '⚙️', href: '#' },
    { label: 'Help & Support', icon: '❓', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <motion.aside
        animate={{ width: sidebarOpen ? '280px' : '80px' }}
        transition={{ duration: 0.3 }}
        className="fixed left-0 top-0 h-screen bg-gradient-to-b from-primary-900 to-primary-800 text-white shadow-xl overflow-y-auto mt-16 z-30"
      >
        <div className="p-6 space-y-6">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center font-bold text-primary-900">
              S
            </div>
            {sidebarOpen && <span className="font-bold text-lg">ADMIN</span>}
          </div>

          {/* Menu */}
          <nav className="space-y-2">
            {menuItems.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg transition group"
              >
                <span className="text-2xl">{item.icon}</span>
                {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.aside>

      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 bg-white shadow-lg z-40 h-16"
      >
        <div className="h-full flex items-center justify-between px-6 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 hover:bg-primary-500 rounded-lg transition"
            >
              ☰
            </motion.button>
            <h1 className="text-2xl font-bold">SUBEB Admin Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="search"
              placeholder="Search..."
              className="px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 w-64"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 hover:bg-primary-500 rounded-lg transition"
            >
              🔔
            </motion.button>
            <motion.button
              onClick={() => {
                alert('Logged out successfully!');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-red-500 hover:bg-red-600 rounded-lg font-semibold transition"
            >
              Logout
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.div
        animate={{ marginLeft: sidebarOpen ? '280px' : '80px' }}
        transition={{ duration: 0.3 }}
        className="mt-16"
      >
        <div className="p-8">
          {/* Stats Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`${stat.color} p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                    <p className="text-sm text-green-600 font-semibold mt-2">{stat.trend}</p>
                  </div>
                  <span className="text-4xl">{stat.icon}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="flex border-b overflow-x-auto">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ backgroundColor: activeTab === tab.id ? undefined : '#f3f4f6' }}
                  className={`flex items-center space-x-2 px-6 py-4 font-semibold whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'text-primary-600 border-b-4 border-primary-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="p-8"
            >
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-8"
                >
                  <motion.div variants={itemVariants}>
                    <h2 className="heading-lg mb-6">System Overview</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="card">
                        <h3 className="heading-sm mb-4">📊 System Health</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Overall Status</span>
                            <span className="inline-flex items-center space-x-1">
                              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse-glow"></span>
                              <span className="font-semibold text-green-600">Operational</span>
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">API Response Time</span>
                            <span className="font-mono font-semibold">~ 45ms</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Database Status</span>
                            <span className="font-semibold text-green-600">Connected</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Uptime (24h)</span>
                            <span className="font-semibold">99.97%</span>
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <h3 className="heading-sm mb-4">📈 Activity Summary</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Last 24h Logins</span>
                            <span className="font-semibold">2,341</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">New Registrations</span>
                            <span className="font-semibold">87</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Support Tickets</span>
                            <span className="font-semibold">12</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Announcements Posted</span>
                            <span className="font-semibold">5</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <h3 className="heading-sm mb-4">Recent Activities</h3>
                    <div className="space-y-2">
                      {[
                        { action: 'New user registered', time: '2 hours ago', icon: '✅' },
                        { action: 'School updated', time: '5 hours ago', icon: '🏫' },
                        { action: 'Announcement published', time: '1 day ago', icon: '📢' },
                        { action: 'System backup completed', time: '2 days ago', icon: '💾' },
                      ].map((activity, i) => (
                        <motion.div
                          key={i}
                          variants={itemVariants}
                          className="p-3 border border-gray-200 rounded-lg flex items-center justify-between hover:bg-gray-50"
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{activity.icon}</span>
                            <span className="text-gray-700">{activity.action}</span>
                          </div>
                          <span className="text-sm text-gray-500">{activity.time}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* Users Tab */}
              {activeTab === 'users' && (
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="heading-lg">User Management</h2>
                    <button className="btn-primary btn-sm">Add User</button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50 border-b">
                        <tr>
                          <th className="px-6 py-3 text-left font-semibold text-gray-900">Name</th>
                          <th className="px-6 py-3 text-left font-semibold text-gray-900">Email</th>
                          <th className="px-6 py-3 text-left font-semibold text-gray-900">Role</th>
                          <th className="px-6 py-3 text-left font-semibold text-gray-900">Status</th>
                          <th className="px-6 py-3 text-left font-semibold text-gray-900">Joined</th>
                          <th className="px-6 py-3 text-left font-semibold text-gray-900">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockAdminUsers.map((user) => (
                          <motion.tr
                            key={user.id}
                            whileHover={{ backgroundColor: '#f9fafb' }}
                            className="border-b transition"
                          >
                            <td className="px-6 py-4 font-medium text-gray-900">{user.name}</td>
                            <td className="px-6 py-4 text-gray-600">{user.email}</td>
                            <td className="px-6 py-4 text-gray-600">{user.role}</td>
                            <td className="px-6 py-4">
                              <span className="badge badge-success text-xs">{user.status}</span>
                            </td>
                            <td className="px-6 py-4 text-gray-600">{user.joinDate}</td>
                            <td className="px-6 py-4 space-x-2">
                              <button className="text-primary-600 hover:text-primary-700 font-semibold">Edit</button>
                              <button className="text-red-600 hover:text-red-700 font-semibold">Delete</button>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}

              {/* Schools Tab */}
              {activeTab === 'schools' && (
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="heading-lg">School Management</h2>
                    <button className="btn-primary btn-sm">Add School</button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {mockSchools.map((school) => (
                      <motion.div
                        key={school.id}
                        whileHover={{ y: -5, shadow: 'lg' }}
                        className="card border-l-4 border-primary-600"
                      >
                        <h3 className="heading-md mb-2">{school.name}</h3>
                        <p className="text-primary-600 font-semibold text-sm mb-4">{school.type}</p>
                        <div className="space-y-2 text-sm text-gray-600 mb-4 pb-4 border-b">
                          <p>📍 {school.locality}</p>
                          <p>👨‍🎓 {school.students} Students</p>
                          <p>👨‍🏫 {school.teachers} Teachers</p>
                        </div>
                        <div className="flex gap-2">
                          <button className="btn-primary btn-sm flex-1">Edit</button>
                          <button className="btn-outline btn-sm flex-1">Details</button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Announcements Tab */}
              {activeTab === 'announcements' && (
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="heading-lg">Announcements</h2>
                    <button className="btn-primary btn-sm">New Announcement</button>
                  </div>
                  <div className="space-y-4">
                    {mockNews.map((announcement) => (
                      <motion.div
                        key={announcement.id}
                        whileHover={{ backgroundColor: '#f9fafb' }}
                        className="card border-l-4 border-secondary-600"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="heading-sm">{announcement.title}</h3>
                          <span className="badge badge-primary text-xs">{announcement.category}</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">{announcement.excerpt}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">
                            {new Date(announcement.date).toLocaleDateString()}
                          </span>
                          <div className="flex gap-2">
                            <button className="btn-primary btn-sm">Edit</button>
                            <button className="btn-outline btn-sm">Delete</button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Analytics Tab */}
              {activeTab === 'analytics' && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-8"
                >
                  <motion.div variants={itemVariants}>
                    <h2 className="heading-lg mb-6">Analytics Dashboard</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="card">
                        <h3 className="heading-sm mb-4">User Growth (30 days)</h3>
                        <div className="bg-gray-50 h-64 rounded-lg flex items-center justify-center text-gray-500">
                          📈 Chart Placeholder
                        </div>
                      </div>
                      <div className="card">
                        <h3 className="heading-sm mb-4">School Distribution</h3>
                        <div className="bg-gray-50 h-64 rounded-lg flex items-center justify-center text-gray-500">
                          📊 Chart Placeholder
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
