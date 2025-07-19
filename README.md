# DataVision Analytics - Professional Data Analytics Agency Website 🚀
Demo - {https://graceful-landing-forge.lovable.app/}
A comprehensive, modern website for a data analytics agency built with React, TypeScript, and Tailwind CSS. Features multiple pages, responsive design, smooth animations, and professional content focused on business intelligence and machine learning services.

## ✨ Features

### 🏠 **Multi-Page Website**
- **Home Page**: Hero section with animated gradients, features overview, testimonials carousel, and contact form
- **About Page**: Company story, mission, and team member profiles with photos
- **Services Page**: Comprehensive analytics services with interactive cards and hover effects
- **Case Studies Page**: Portfolio of data projects with detailed descriptions and technologies used

### 🎨 **Design & UX**
- **Responsive Design**: Mobile-first approach that works perfectly on all devices
- **Smooth Animations**: Scroll-triggered animations and micro-interactions
- **Professional UI**: Clean, modern design with consistent branding
- **Interactive Elements**: Hover effects, carousel testimonials, and form validation
- **Accessibility**: WCAG-compliant with proper ARIA labels and keyboard navigation

### 🛠 **Technical Features**
- **React Router**: Multi-page routing with smooth navigation
- **Form Validation**: Real-time validation with toast notifications
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance**: Optimized loading with lazy loading and efficient animations
- **TypeScript**: Full type safety throughout the application

## 🛠 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite for lightning-fast development
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: shadcn/ui component library
- **Routing**: React Router DOM
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: CSS transitions and transforms
- **Icons**: Lucide React icon library

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/datavision-analytics.git
cd datavision-analytics

# Install dependencies
npm install

# Start development server
npm run dev
```

Your application will be running at `http://localhost:8080`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Navigation.tsx  # Main navigation component
│   ├── HeroSection.tsx # Hero section with CTAs
│   ├── FeaturesSection.tsx # Features overview
│   ├── TestimonialsSection.tsx # Customer testimonials
│   ├── ContactSection.tsx # Contact form
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── About.tsx       # About us page
│   ├── Services.tsx    # Services page
│   ├── CaseStudies.tsx # Portfolio page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── App.tsx            # Main app component
└── main.tsx           # Application entry point
```

## 🌐 Deployment

### Recommended Platforms

1. **Vercel** (Recommended)
   ```bash
   npm install -g vercel
   vercel --prod
   ```

2. **Netlify**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

3. **GitHub Pages**
   ```bash
   npm run build
   # Deploy the dist folder to GitHub Pages
   ```

## 🎯 Key Pages & Features

### Home Page (`/`)
- Animated hero section with compelling value proposition
- Features overview with icons and descriptions
- Customer testimonials carousel
- Contact form with validation
- Call-to-action buttons throughout

### About Page (`/about`)
- Company story and mission statement
- Team member profiles with photos and roles
- Company values and approach to analytics

### Services Page (`/services`)
- Comprehensive list of analytics services
- Interactive service cards with hover effects
- Detailed descriptions of offerings:
  - Business Intelligence Dashboards
  - Machine Learning Solutions
  - Data Visualization
  - Predictive Analytics
  - And more...

### Case Studies Page (`/case-studies`)
- Portfolio of completed projects
- Detailed project descriptions
- Technologies and tools used
- Business impact and results

## 🔧 Customization

### Colors & Branding
Update the design tokens in `src/index.css` to match your brand:

```css
:root {
  --primary: [your-primary-color];
  --primary-foreground: [your-text-color];
  /* Add your custom color palette */
}
```

### Content
- Update company information in each page component
- Replace placeholder images with your actual photos
- Modify service descriptions and case studies
- Update contact information and social links

### Styling
- All components use Tailwind CSS classes
- Custom design tokens defined in `index.css`
- Responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:`

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px and above

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## 🚀 Performance

- Optimized bundle size with Vite
- Lazy loading for images and components
- Efficient re-renders with React best practices
- Minimal JavaScript for fast loading

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support or questions about this template, please contact:
- Email: contact@datavision-analytics.com
- Website: https://datavision-analytics.com

---

**Built with ❤️ using Lovable, React, and Tailwind CSS**
