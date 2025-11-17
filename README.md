# JourneyWell Marketing Site

A modern, responsive marketing website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** with custom design system
- **Framer Motion** for smooth animations
- **Dark/Light Theme** with next-themes
- **React Hook Form + Zod** for form validation
- **SEO Optimized** with next-seo
- **Responsive Design** mobile-first approach
- **Tabler Icons** for consistent iconography

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with fonts & providers
│   ├── page.tsx           # Landing page
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── portfolio/         # Portfolio page
│   └── contact/           # Contact page with form
├── components/
│   ├── layout/            # Header & Footer
│   ├── providers/         # Theme provider
│   └── ui/                # Reusable UI components
├── config/                # Configuration files
│   └── next-seo.config.ts # SEO configuration
└── lib/
    └── utils.ts           # Utility functions
```

## 🎨 Design System

### Updating Fonts Globally

To change fonts across the entire site:

1. **Import new fonts** in `src/app/layout.tsx`:
   ```typescript
   import { Your_New_Font } from "next/font/google";
   
   const yourFont = Your_New_Font({
     subsets: ["latin"],
     variable: "--font-body", // or --font-heading
     display: "swap",
   });
   ```

2. **Update the className** in the layout's `<body>` tag to include the new font variable

3. Fonts automatically apply throughout the app via:
   - `font-body` class (currently Inter)
   - `font-heading` class (currently Playfair Display)
   - `font-accent` class (currently Instrument Serif Regular Italic)

### Updating Color Tokens

To customize the color scheme:

1. **Edit CSS variables** in `src/app/globals.css`:
   ```css
   :root {
     --color-brand-500: #your-color;
     --color-accent-500: #your-accent;
   }
   ```

2. **Or update Tailwind config** in `tailwind.config.ts` to add new color scales

3. Use in components:
   - `text-brand-600` for brand colors
   - `bg-accent-500` for accent backgrounds
   - Full scale from 50-950 available

## 🛠️ Getting Started

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
DATOCMS_API_TOKEN=your_datocms_api_token_here
```

**Note:** The `DATOCMS_API_TOKEN` is required for the blog functionality. If not set, the blog pages will display an empty state instead of crashing. Get your API token from [DatoCMS](https://www.datocms.com/docs/content-delivery-api/api-tokens).

## 📄 Adding New Pages

1. Create a new folder in `src/app/[page-name]/`
2. Add a `page.tsx` file:
   ```typescript
   "use client";
   
   import { PageHeader } from "@/components/ui/page-header";
   import { motion } from "framer-motion";
   
   export default function NewPage() {
     return (
       <div>
         <PageHeader title="Page Title" subtitle="Subtitle" />
         <section className="section">
           <div className="container-custom">
             {/* Your content */}
           </div>
         </section>
       </div>
     );
   }
   ```
3. Add navigation link in `src/components/layout/header.tsx`

## 🎭 Animation System

Uses Framer Motion for scroll-triggered animations:

```typescript
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

## 📝 Form Validation

Contact form uses React Hook Form + Zod:

```typescript
const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

const { register, handleSubmit } = useForm({
  resolver: zodResolver(schema),
});
```

## 🎨 Component Styling

Uses `class-variance-authority` for variant-based styling:

```typescript
const buttonVariants = cva("base-classes", {
  variants: {
    variant: {
      default: "variant-classes",
      outline: "outline-classes",
    },
  },
});
```

## 🌙 Theme Toggle

Dark mode implemented with next-themes:
- System preference detection
- Manual toggle in header
- Persistent across sessions
- No flash on page load

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- Container padding adapts to screen size
- Mobile menu for small screens

## 🔧 Code Quality

```bash
# Format code
pnpm format

# Lint code
pnpm lint
```

## 📦 Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** @tabler/icons-react
- **Theme:** next-themes
- **Forms:** React Hook Form + Zod
- **SEO:** next-seo
- **Utilities:** clsx, tailwind-merge, class-variance-authority

## 📚 Quick Reference

### Common Utilities

- `cn()` - Merge Tailwind classes intelligently
- `section` - Consistent section spacing
- `container-custom` - Responsive container

### Common Patterns

- Page structure: PageHeader + sections
- Cards: rounded-2xl border bg-white p-8
- Buttons: Use `<Button>` component with variants
- Icons: Import from `@tabler/icons-react`

## 🚢 Deployment

Deploy to Vercel with one click or configure for your preferred hosting:

```bash
pnpm build
```

## 📄 License

MIT License - feel free to use this project as a starting point for your own site.






