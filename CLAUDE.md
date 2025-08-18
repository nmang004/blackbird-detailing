# Claude AI Assistant Context - Blackbird Detailing Website

This file provides comprehensive context for AI assistants working on the Blackbird Detailing website project.

## Project Overview

**Blackbird Detailing** is a premium automotive detailing service targeting the Virginia Beach, Chesapeake, and Norfolk markets. The website emphasizes a "Motorsport-Grade Precision" brand identity with a sophisticated, technical aesthetic.

### Core Business Goals
- Generate qualified leads through online estimate forms
- Position as the premier high-end detailing service in Virginia Beach
- Achieve top-3 Google rankings for local search terms
- Convert visitors with >5% form conversion rate

## Technical Architecture

### Stack Decisions & Rationale
- **Next.js 15**: Chosen for hybrid SSR/SSG, excellent SEO, and fast user experience
- **TypeScript**: Ensures robust, scalable, and maintainable codebase
- **Tailwind CSS**: Utility-first approach aligns with custom design requirements
- **Shadcn/ui**: Beautiful, accessible components that match technical aesthetic
- **Supabase**: Open-source backend providing PostgreSQL, auth, and real-time features
- **Vercel**: Premier Next.js deployment platform with seamless CI/CD

### Key Commands
```bash
# Development
npm run dev              # Start development server
npm run build           # Production build
npm run lint            # ESLint checks
npm run type-check      # TypeScript validation

# Database
# Connect to Supabase dashboard for schema management
```

## Design System

### Brand Identity
**Theme**: Sophisticated, technical, clean, dark, and authoritative
**Concept**: "Motorsport-Grade Precision for Your Automobile"
**Feel**: High-end custom garage meets precision automotive technology

### Color Palette
```css
/* Primary Colors */
--blackbird-black: #111111        /* Main background */
--blackbird-charcoal: #2B2B2B     /* Secondary elements */
--blackbird-off-white: #F5F5F5    /* Text/light elements */
--blackbird-ignition-blue: #00A8FF /* CTA/accent color */
```

### Typography
```css
/* Headings: Technical, sharp, modern */
font-family: 'Exo 2', 'Inter', sans-serif;

/* Body: Maximum readability, professional */
font-family: 'Roboto', sans-serif;
```

### UI/UX Patterns
- **Loading Animations**: Tachometer needle or blueprint drawing
- **Hover Effects**: Subtle blue glow, smooth transitions
- **Icons**: Custom SVG icons resembling dashboard instruments
- **Scroll Animations**: Smooth fade-in/slide effects

## Site Structure & Content Strategy

### Page Hierarchy
```
Home (The Showroom)
├── Services (The Technical Bay)
│   ├── Ceramic Coatings
│   ├── Paint Correction
│   └── Interior Detailing
├── Portfolio (The Garage)
│   ├── Filterable Gallery
│   └── Case Studies
├── Service Areas (SEO Focus)
│   ├── Virginia Beach (Primary Hub)
│   ├── Chesapeake
│   └── Norfolk
├── About (The Pit Crew)
└── Contact & Booking (The Ignition)
```

### Content Tone & Messaging
- **Primary Headline**: "Precision. Protection. Perfection."
- **Tagline**: "Motorsport-Grade Precision for Your Automobile"
- **Voice**: Professional, technical, confident, premium
- **Approach**: Emphasize expertise, precision, and high-performance standards

## Key Features & Components

### 1. Instant Estimate Engine (Primary Conversion Tool)
Multi-step form replacing traditional contact forms:

**Step 1: Vehicle Information**
- Year, Make, Model, Color
- General Condition assessment

**Step 2: Service Selection**
- Checkboxes for services with conditional logic
- Dynamic follow-up questions

**Step 3: Package Selection**
- "Sport," "Grand Tourer," "Trackhawk" tiers
- Feature comparison display

**Step 4: Contact Information**
- Name, Email, Phone collection

**Result Page**
- Price estimate display
- Next steps explanation
- Call-to-action for consultation

### 2. Service Package Structure
Each service offers tiered packages:
- **Sport**: Entry-level premium service
- **Grand Tourer**: Mid-tier with enhanced features
- **Trackhawk**: Ultimate premium experience

### 3. Portfolio System
- **Filterable Grid**: Service Type, Vehicle Make, Vehicle Type
- **Before/After Sliders**: Critical for paint correction/interior work
- **Case Studies**: Detailed project stories with galleries

## Database Schema

### Core Tables
```sql
-- estimate_submissions: Capture all form submissions
CREATE TABLE estimate_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP DEFAULT NOW(),
  vehicle_year INTEGER NOT NULL,
  vehicle_make TEXT NOT NULL,
  vehicle_model TEXT NOT NULL,
  vehicle_color TEXT NOT NULL,
  vehicle_condition TEXT NOT NULL,
  selected_services TEXT[] NOT NULL,
  package_selection TEXT,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  estimated_price DECIMAL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'scheduled', 'completed'))
);
```

## SEO Strategy

### Geographic Targeting
1. **Virginia Beach** (Primary): Comprehensive local content, business landmarks, salt air challenges
2. **Chesapeake** (Secondary): Unique neighborhoods, local references
3. **Norfolk** (Secondary): Points of interest, service area optimization

### Keyword Strategy
```
Primary Keywords:
- "ceramic coating Virginia Beach"
- "paint correction Virginia Beach"
- "auto detailing Virginia Beach"

Secondary Keywords:
- "car detailing Chesapeake"
- "vehicle detailing Norfolk"
- "paint protection Virginia Beach"

Long-tail Keywords:
- "best ceramic coating Virginia Beach"
- "paint correction near me Virginia Beach"
- "luxury car detailing Virginia Beach"
```

## Development Workflow

### Phase 1: Foundation (Weeks 1-12)
✅ **Completed Setup Tasks:**
- [x] Next.js + TypeScript initialization
- [x] Tailwind CSS + Shadcn/ui configuration
- [x] Supabase integration and environment setup
- [x] Git repository and GitHub connection
- [x] ESLint/Prettier configuration
- [x] Design system implementation

🔄 **In Progress:**
- [ ] Database schema design and implementation

📋 **Upcoming Tasks:**
- [ ] Core UI components (Navigation, Footer, Buttons, Cards)
- [ ] Homepage with hero video section
- [ ] Service pages with package comparisons
- [ ] Portfolio gallery with filtering
- [ ] Multi-step estimate form
- [ ] Service area pages for local SEO

### Code Quality Standards
- **TypeScript**: Strict mode enabled, no `any` types
- **ESLint**: Next.js recommended + custom rules
- **Prettier**: Consistent code formatting
- **Component Structure**: Atomic design principles
- **File Naming**: kebab-case for files, PascalCase for components

### Testing Strategy
- **Cross-browser**: Chrome, Firefox, Safari, Edge
- **Mobile-first**: Responsive design validation
- **Performance**: Google PageSpeed >90 target
- **Forms**: End-to-end submission testing
- **SEO**: Meta tags, schema markup, sitemap validation

## Conversion Optimization

### Primary CTAs (Ignition Blue)
- "Get An Instant Estimate"
- "Book a Consultation"

### Secondary CTAs (White/Gray Outline)
- "View Our Work"
- "Explore Packages"

### Form Optimization Goals
- **Conversion Rate**: >5% on service pages
- **Lead Quality**: Qualified inquiries with complete vehicle/service info
- **User Experience**: Smooth, intuitive multi-step process

## Future Enhancements (Phase 2+)

### Months 3-6: Content & Authority
- Headless CMS integration (Sanity/Contentful/Strapi)
- Blog platform for SEO content
- Video testimonials and service overviews
- Local business schema markup

### Months 6-12: Advanced Features
- Online booking system with calendar integration
- Customer dashboard and service history
- Payment processing (deposits/full payments)
- Automated email workflows
- Google Ads campaign integration
- A/B testing framework

## Performance Benchmarks

### Technical Metrics
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1
- **Time to Interactive**: <3s

### Business Metrics
- **Form Conversion Rate**: >5%
- **Bounce Rate**: <40%
- **Session Duration**: >2 minutes
- **Pages per Session**: >3

## Troubleshooting Guide

### Common Issues
1. **Tailwind classes not applying**: Check `tailwind.config.js` content paths
2. **Supabase connection errors**: Verify environment variables in `.env.local`
3. **TypeScript errors**: Run `npm run type-check` for detailed diagnostics
4. **Build failures**: Check Next.js compatibility with dependencies

### Performance Issues
- Use Next.js Image component for optimization
- Implement lazy loading for portfolio images
- Minimize bundle size with dynamic imports
- Optimize fonts with next/font

## AI Assistant Guidelines

When working on this project:

1. **Always prioritize the brand identity**: Technical, precise, premium
2. **Mobile-first approach**: Design and code for mobile, enhance for desktop
3. **SEO consciousness**: Every page should be optimized for target keywords
4. **Type safety**: Use TypeScript strictly, define proper interfaces
5. **Component reusability**: Build atomic, reusable components
6. **Performance first**: Optimize images, minimize JavaScript, use SSG where possible
7. **Accessibility**: Follow WCAG 2.1 AA guidelines
8. **Testing mindset**: Consider cross-browser compatibility and edge cases

### Code Patterns to Follow
```tsx
// Component structure
interface ComponentProps {
  // Always define props interface
}

export function Component({ prop }: ComponentProps) {
  // Use proper TypeScript
}

// API calls
const { data, error } = await supabase
  .from('table')
  .select('*')
  .eq('column', value)

// Error handling
if (error) {
  console.error('Error:', error)
  // Handle appropriately
}
```

---

This document should be updated as the project evolves. Always keep AI context current with latest architectural decisions and business requirements.