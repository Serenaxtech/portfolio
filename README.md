# Serena's Portfolio

A beautiful, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This portfolio showcases a designer who "judges a book by its cover" with stunning UI/UX design and smooth animations.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Responsive Design**: Fully responsive across all device sizes
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **SEO Optimized**: Built-in SEO optimization with Next.js
- **Performance First**: Optimized for Core Web Vitals
- **Clean Architecture**: Well-organized component structure
- **Dark Mode Ready**: Easy to extend with dark mode support

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd serena-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗 Project Structure

```
serena-portfolio/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css     # Global styles and CSS variables
│   │   ├── layout.tsx      # Root layout component
│   │   └── page.tsx        # Home page
│   ├── components/
│   │   ├── layout/         # Layout components
│   │   │   ├── Header.tsx  # Navigation header
│   │   │   └── Footer.tsx  # Footer with social links
│   │   ├── sections/       # Page sections
│   │   │   ├── Hero.tsx    # Hero section with intro
│   │   │   ├── Skills.tsx  # Skills pie chart
│   │   │   ├── Services.tsx # Services cards
│   │   │   ├── Projects.tsx # Featured projects
│   │   │   └── Contact.tsx # Contact form
│   │   └── ui/             # Reusable UI components
│   ├── lib/
│   │   └── utils.ts        # Utility functions
│   ├── types/              # TypeScript type definitions
│   └── data/               # Static data and content
├── public/                 # Static assets
└── package.json
```

## 🎨 Design System

### Colors
- **Primary**: #E91E63 (Pink/Magenta)
- **Secondary**: #FF69B4 (Light Pink)
- **Yellow**: #F9D71C
- **Blue**: #87CEEB
- **Pink Card**: #FFB6C1

### Typography
- **Font Family**: Inter (sans-serif)
- **Weights**: 400, 500, 600, 700, 800

### Animations
All animations are built with Framer Motion and follow these principles:
- **Smooth**: 60fps animations
- **Purposeful**: Enhances user experience
- **Accessible**: Respects user preferences

## 📱 Sections Overview

1. **Header Navigation**
   - Fixed navigation with smooth scrolling
   - Logo with star icon
   - Mobile-responsive menu

2. **Hero Section**
   - Animated introduction
   - Avatar with glasses overlay
   - Typography highlighting

3. **Skills Chart**
   - Animated pie chart
   - Designer vs Coder breakdown
   - Interactive skill listings

4. **Services Cards**
   - Three colorful service cards
   - Pen/Paper, Figma, Webflow
   - Hover animations

5. **Featured Projects**
   - Project grid layout
   - Live project tags
   - Project preview cards

6. **Contact Form**
   - Interactive contact form
   - Form validation
   - Send animation

7. **Footer**
   - Social media links
   - Brand consistency

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository to Vercel
3. Deploy with zero configuration

### Manual Deployment
```bash
npm run build
npm run start
```

## 🔧 Customization

### Adding New Projects
Edit `src/components/sections/Projects.tsx` and update the projects array:

```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    category: 'Project Category',
    image: '/path-to-image.jpg',
    tags: ['Live'],
    description: 'Project description'
  }
]
```

### Updating Contact Information
Modify `src/components/sections/Contact.tsx` to update default form values and contact details.

### Customizing Colors
Update CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: #E91E63;
  --yellow: #F9D71C;
  /* Add your custom colors */
}
```

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized
- **Bundle Size**: Minimized with Next.js optimization
- **Image Optimization**: Built-in Next.js image optimization

## 🧪 Development

### Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style
- **ESLint**: Configured with Next.js rules
- **Prettier**: Code formatting (recommended)
- **TypeScript**: Strict mode enabled

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from the original Figma design
- Icons by [Lucide React](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)

---

Made with 💜 by Serena | Portfolio 2025