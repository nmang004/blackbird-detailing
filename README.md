# Blackbird Detailing Website

> Motorsport-Grade Precision for Your Automobile

A premium automotive detailing website built with Next.js, focusing on the Virginia Beach market. Features include an instant estimate engine, service showcases, portfolio galleries, and local SEO optimization.

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Shadcn/ui components
- **Database**: Supabase (PostgreSQL)
- **Forms**: React Hook Form + Zod validation
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics + Google Analytics 4

## 🎨 Design System

### Colors
- **Matte Black**: `#111111` (primary background)
- **Charcoal Gray**: `#2B2B2B` (secondary elements)
- **Off-White**: `#F5F5F5` (text/light elements)
- **Ignition Blue**: `#00A8FF` (accent/CTA color)

### Typography
- **Headings**: Exo 2 / Inter
- **Body Text**: Roboto

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/nmang004/blackbird-detailing.git
   cd blackbird-detailing-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env.local` file with:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   SUPABASE_JWT_SECRET=your_jwt_secret
   ```

4. **Database Setup**
   Run the database migrations in Supabase:
   ```sql
   -- See /docs/database-schema.sql for complete setup
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

### Code Quality

- **ESLint**: Configured with Next.js recommended rules
- **Prettier**: Code formatting with consistent style
- **TypeScript**: Strict type checking enabled
- **Husky**: Pre-commit hooks for code quality (coming soon)

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── services/          # Service pages
│   ├── portfolio/         # Portfolio galleries
│   ├── about/             # About page
│   └── contact/           # Contact & estimate form
├── components/            # React components
│   ├── ui/               # Shadcn/ui components
│   ├── forms/            # Form components
│   ├── sections/         # Page sections
│   └── layout/           # Layout components
├── lib/                  # Utilities & configurations
│   ├── supabase.ts       # Supabase client
│   ├── utils.ts          # Helper utilities
│   └── validations.ts    # Zod schemas
├── styles/               # Global styles
└── types/                # TypeScript definitions
```

## 🎯 Key Features

### Phase 1 (Launch)
- [x] Responsive design with custom Blackbird theme
- [x] Homepage with hero video and service overview
- [ ] Service pages with package comparisons
- [ ] Portfolio gallery with before/after sliders
- [ ] Multi-step "Instant Estimate" form
- [ ] Service area pages (Virginia Beach, Chesapeake, Norfolk)
- [ ] Contact page with business info

### Phase 2 (Post-Launch)
- [ ] Blog/CMS integration
- [ ] Online booking system
- [ ] Customer dashboard
- [ ] Payment processing
- [ ] Advanced analytics

## 🌐 SEO Strategy

### Target Markets
1. **Virginia Beach** (Primary)
2. **Chesapeake** (Secondary)
3. **Norfolk** (Secondary)

### Key Services
- Ceramic Coating
- Paint Correction
- Interior Detailing
- Full Detail Packages

### Target Keywords
- "ceramic coating Virginia Beach"
- "paint correction Virginia Beach"
- "auto detailing Virginia Beach"
- "car detailing Chesapeake"
- "vehicle detailing Norfolk"

## 📊 Performance Goals

- **Page Load Speed**: <3 seconds
- **Google PageSpeed**: >90
- **Form Conversion**: >5%
- **Mobile Responsiveness**: 100%

## 🚀 Deployment

### Vercel (Recommended)
1. Connect GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main

### Manual Build
```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary and confidential.

## 📞 Support

For development questions or issues:
- Check the CLAUDE.md file for AI assistant context
- Review the project documentation in `/docs`
- Contact the development team

---

**Blackbird Detailing** - Where precision meets performance.