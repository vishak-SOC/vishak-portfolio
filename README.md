A modern, responsive portfolio website for a Cyber Security Analyst built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Modern Tech Stack**: Built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS 4
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Performance Optimized**: 
  - Font optimization with `next/font`
  - Image optimization with WebP format
  - RSS feed caching (30-minute TTL)
  - Skeleton loaders for better UX
- **SEO Optimized**: 
  - Enhanced metadata with OpenGraph and Twitter cards
  - JSON-LD structured data
  - Sitemap and robots.txt
  - Proper heading hierarchy
- **Smooth Animations**: 
  - Framer Motion animations throughout
  - Page transitions and scroll-triggered effects
  - Enhanced mobile menu with stagger animations
  - Animated timeline for experience section
- **Dynamic Content**: 
  - Live blog feed from Medium via RSS
  - GitHub projects integration
  - Error boundaries and loading states
- **TypeScript Strict Mode**: Full type safety with strict compiler options
- **Accessibility**: WCAG 2.1 compliant with proper ARIA labels and keyboard navigation

## Sections

1. **Hero** - Introduction with professional image
2. **Skills** - Bento grid layout showcasing technical and soft skills
3. **Experience** - Animated timeline of professional experience
4. **Projects** - Featured GitHub projects with images
5. **Certifications** - Professional certifications
6. **Blog** - Latest Medium articles with caching
7. **Contact** - Social links and contact information

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Testing**: [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/react)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/fxrhan/myCyberPortfolio.git
   cd myCyberPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

   Update the variables in `.env.local` with your information.

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Project Structure

```
portfolio/
├── public/              # Static assets (images, icons)
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── fonts.ts    # Font configuration
│   │   ├── layout.tsx  # Root layout with metadata
│   │   ├── page.tsx    # Home page
│   │   ├── error.tsx   # Error boundary
│   │   └── not-found.tsx # 404 page
│   ├── components/     # React components
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Blog.tsx
│   │   └── Contact.tsx
│   └── lib/            # Utility functions
│       └── config.ts   # Environment variables
├── .env.local          # Environment variables (not committed)
├── .env.example        # Environment variables template
└── next.config.ts      # Next.js configuration
```


**Important**: Update `NEXT_PUBLIC_SITE_URL` to your production domain before deployment.

## Customization

### Update Personal Information

1. **Hero Section**: Edit `src/components/Hero.tsx`
2. **Skills**: Update the `skills` array in `src/components/Skills.tsx`
3. **Experience**: Update the `experiences` array in `src/components/Experience.tsx`
4. **Projects**: Update the `projects` array in `src/components/Projects.tsx`

### Update Images

- **Hero Image**: Replace `public/hero.jpg` (recommended: 1200x1600px)
- **Project Images**: Add images to `public/` folder

## License

This project is open source and available under the [MIT License](LICENSE).


⭐ If you found this project helpful, please consider giving it a star!
