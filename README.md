# SUBEB Akwa Ibom State - Modern Education Board Website

A comprehensive, professional, and fully responsive website for the State Universal Basic Education Board (SUBEB), Akwa Ibom State, Nigeria.

## 🌟 Features

### 🏗️ Website Structure (12+ Core Pages)
- **Home** - Rich homepage with 12+ sections featuring hero slider, statistics, news, projects, and more
- **About SUBEB** - Mission, vision, core values, and organizational history
- **Departments** - Overview of all SUBEB departments with heads and responsibilities
- **Schools Directory** - Searchable directory of 1,247+ schools across the state
- **Teachers Portal** - Professional development resources and training programs
- **Student & Parent Center** - Enrollment information, scholarships, and support services
- **News & Announcements** - Latest updates and press releases
- **Projects & Programs** - Ongoing strategic initiatives with progress tracking
- **Resources & Downloads** - Educational materials, curriculum documents, and forms
- **Contact Us** - Functional contact form and multiple contact methods
- **FAQ** - Comprehensive frequently asked questions with expandable answers
- **Admin Dashboard** - Professional management interface (UI only)

### ✨ Design & Animations
- **Modern Professional Design** - Luxury, classic, and government-standard aesthetics
- **Smooth Animations** - Framer Motion animations for page transitions and interactions
- **Responsive Layout** - Perfect on mobile, tablet, and desktop screens
- **Tailwind CSS** - Utility-first CSS for consistent styling
- **Color Scheme** - Professional blue, green, and neutral tones

### 🎯 Key Sections on Homepage
1. Hero Slider with auto-rotating slides
2. About Preview
3. Animated Statistics (counters)
4. Leadership Message
5. Featured Schools
6. Departments Overview
7. Ongoing Projects
8. News & Updates
9. Portal Previews (Teachers, Students, Admin)
10. Testimonials
11. Call-to-Action Section
12. Resources Preview
13. Professional Footer

### 💻 Technical Stack
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Data**: Mock JSON data (easily replaceable)

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to `http://localhost:3000`

### Build for Production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
subeb-akwa-ibom/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage with 12+ sections
│   ├── globals.css         # Global styles
│   ├── about/
│   ├── departments/
│   ├── schools/
│   │   ├── page.tsx
│   │   └── [id]/
│   ├── teachers/
│   ├── students/
│   ├── news/
│   │   ├── page.tsx
│   │   └── [id]/
│   ├── projects/
│   ├── resources/
│   ├── contact/
│   ├── faq/
│   └── admin/
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Footer.tsx          # Footer component
│   ├── HeroSlider.tsx      # Responsive hero slider
│   ├── StatisticCard.tsx   # Animated counter cards
│   ├── NewsCard.tsx        # News article cards
│   ├── ProjectCard.tsx     # Project progress cards
│   ├── SchoolCard.tsx      # School showcase cards
│   └── TestimonialCard.tsx # Testimonial cards
├── lib/
│   └── mockData.ts         # Mock data for all pages
├── package.json            # Project dependencies
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── postcss.config.js       # PostCSS configuration
```

## 🎨 Design System

### Colors
- **Primary**: Professional blue (#0284c7 - #075985)
- **Secondary**: Professional green (#22c55e - #15803d)
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Headings**: Bold, clear, hierarchical
- **Body**: Readable sans-serif for accessibility
- **Font Family**: System fonts + Segoe UI, Roboto

### Components
- Reusable button styles (primary, secondary, outline)
- Card components with hover effects
- Responsive grid layouts
- Professional form inputs

## 📊 Data Management

All data is currently stored in mock JSON format in `lib/mockData.ts`. This includes:
- Schools information (1,247 total)
- News articles (4 featured)
- Departments (6 major)
- Projects (4 ongoing)
- Testimonials
- Statistics
- Resources
- FAQ

**To connect to real data**, replace mock data with API calls or database queries.

## 🔧 Configuration

### Tailwind CSS
Customizable in `tailwind.config.js`:
- Color schemes
- Animation keyframes
- Breakpoints
- Extensions

### Environment Variables
Create `.env.local` for:
```
NEXT_PUBLIC_API_URL=your_api_url
```

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

## 🎯 Features Coming Soon

- Backend integration with database
- User authentication
- Live announcements system
- Online enrollment portal
- Teacher certification tracking
- Student performance analytics
- Real-time statistics

## 📝 Content Areas

All pages feature:
- ✓ Professional government branding
- ✓ Clear information hierarchy
- ✓ Call-to-action buttons
- ✓ Mobile-responsive design
- ✓ Smooth animations
- ✓ Accessible UI elements

## 🔐 Security Considerations

- Input validation on contact form
- CSRF protection ready
- Security headers configured
- XSS prevention in place

## 📞 Support & Contact

For issues or questions:
- Email: info@subebakawaibom.gov.ng
- Location: Uyo, Akwa Ibom State, Nigeria

## 📄 License

This project is proprietary and created specifically for SUBEB, Akwa Ibom State.

## 🙏 Acknowledgments

Built with modern web technologies to provide an excellent digital experience for the education sector in Akwa Ibom State, Nigeria.

---

**Ready to Transform Education Together!** 🚀
