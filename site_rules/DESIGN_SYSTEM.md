# JourneyWell Design System Documentation

## Overview
This document outlines the complete design system for JourneyWell Content Agency's website, covering typography, colors, layouts, components, and design patterns used across the homepage and blog listing page.

---

## TYPOGRAPHY

### Font Families

#### Primary Font: Inter (`font-body`)
- **Usage:** All body text, headings, and UI elements
- **Weight:** Variable (regular, medium, semibold, bold, black)
- **Style:** Sans-serif, modern, clean
- **Implementation:** Applied globally via `font-body` class
- **Note:** All headings (h1-h6) use Inter, not a separate heading font

#### Accent Font: Instrument Serif Regular Italic (`font-accent`)
- **Usage:** Selective accent text for emphasis (e.g., "creative team's")
- **Weight:** 400 (regular)
- **Style:** Italic serif
- **Implementation:** Applied via `font-accent` class
- **Example:** Used in hero text like "Your <span class="font-accent">creative team's</span> creative team™"

### Typography Scale

#### Hero Text
- **Size:** `text-5xl` (mobile) → `xl:text-8xl` (desktop)
- **Weight:** `font-black` (900)
- **Line Height:** `leading-[1.1]` (tight)
- **Tracking:** `tracking-tight`
- **Usage:** Main hero headlines

#### Large Headings
- **Size:** `text-4xl` → `lg:text-6xl`
- **Weight:** `font-bold` or `font-black`
- **Line Height:** `leading-tight`
- **Usage:** Section titles, major headings

#### Medium Headings
- **Size:** `text-2xl` → `md:text-3xl`
- **Weight:** `font-semibold` or `font-bold`
- **Usage:** Subsection titles, card headings

#### Body Text
- **Size:** `text-lg` → `text-xl` (primary), `text-base` (secondary), `text-sm` (tertiary)
- **Weight:** `font-normal` (400)
- **Line Height:** `leading-relaxed` or default
- **Usage:** Paragraphs, descriptions, excerpts

#### Small Text
- **Size:** `text-xs` → `text-sm`
- **Weight:** `font-medium` or `font-semibold`
- **Tracking:** `tracking-wide` (for uppercase labels)
- **Usage:** Labels, metadata, categories

---

## COLOR PALETTE

### Primary Colors

#### Dark Backgrounds
- **Primary Dark:** `#02021D` - Used for hero sections and pricing sections
- **Secondary Dark:** `#0B0D1E` - Body background in dark mode
- **Blog Dark:** `#0b0c1e` - Blog page main background
- **Blog Card Dark:** `#101230` - Blog card backgrounds
- **Blog Grid Dark:** `#050615` - Blog posts grid background

#### Accent Colors

**Homepage Accent:**
- **Yellow:** `#FDC449` - Primary accent color
  - Used for: Hero accent text, discount badges, sticky button text, animated cursor dot

**Blog Page Accent:**
- **Lime Green:** `#c4ff61` - Blog page accent
  - Used for: Links, buttons, newsletter CTA, hover states

**Purple Gradient (Sticky Button):**
- **Purple 1:** `#371ACA` - Start of gradient
- **Purple 2:** `#2A1488` - Middle of gradient
- **Purple 3:** `#1A0F5C` - End of gradient
- **Usage:** Sticky booking button background

#### Text Colors

**Light Mode:**
- **Primary:** `text-gray-900` - Main text
- **Secondary:** `text-gray-600` - Supporting text
- **Tertiary:** `text-gray-400` - Muted text

**Dark Mode:**
- **Primary:** `text-white` - Main text
- **Secondary:** `text-gray-300` - Supporting text
- **Tertiary:** `text-gray-400` - Muted text
- **With Opacity:** `text-white/70`, `text-white/80`, `text-white/60` - Various opacity levels

#### Border Colors
- **Subtle Borders:** `border-white/10`, `border-white/15` - Very subtle white borders
- **Standard Borders:** `border-gray-200` (light), `border-gray-800` (dark)
- **Accent Borders:** `border-[#371ACA]` - Purple accent border

---

## GRADIENTS

### Homepage Gradients

#### Sticky Booking Button Gradient
- **Type:** Multi-stop linear gradient
- **Direction:** 135deg
- **Colors:** `#371ACA` → `#2A1488` → `#1A0F5C`
- **Effect:** Deep purple metallic appearance
- **Additional:** Metallic shine overlay animation

#### Metallic Shine Effect
- **Type:** Animated linear gradient overlay
- **Direction:** 45deg
- **Colors:** `transparent 30%` → `rgba(255, 255, 255, 0.3) 50%` → `transparent 70%`
- **Animation:** 3s infinite ease-in-out
- **Usage:** Sticky booking button

#### Hover Glow Effect
- **Type:** Radial gradient overlay
- **Colors:** `from-purple-500/30 to-blue-500/30`
- **Usage:** Sticky button hover state

### Blog Page Gradients

#### Hero Overlay Gradient
- **Type:** Linear gradient (top to bottom)
- **Colors:** `from-[#15183a] via-[#0b0c1e] to-transparent`
- **Opacity:** 90%
- **Usage:** Hero section background overlay

#### Featured Card Gradient
- **Type:** Diagonal gradient (top-right to bottom-left)
- **Colors:** `from-[#202356] via-[#1a1c42] to-[#12132f]`
- **Usage:** Featured post card background

#### Blog Card Gradient
- **Type:** Linear gradient (top to bottom)
- **Colors:** `from-[#101230] to-transparent`
- **Usage:** Individual blog post cards

#### Newsletter Card Gradient
- **Type:** Horizontal gradient (left to right)
- **Colors:** `from-[#202356] via-[#1a1c42] to-[#12132f]`
- **Usage:** Newsletter signup card

#### Gradient Orbs (Featured Card)
- **Top-Right Orb:**
  - Color: `bg-[#c4ff61]/20` (lime green at 20% opacity)
  - Size: 32px radius
  - Blur: `blur-2xl`
  - Position: `-top-10 -right-10`

- **Bottom-Left Orb:**
  - Color: `bg-[#5b5fd8]/20` (purple at 20% opacity)
  - Size: 40px radius
  - Blur: `blur-2xl`
  - Position: `-bottom-12 -left-8`

---

## BACKGROUND IMAGES

### Homepage Backgrounds

#### Hero Section Background
- **Image:** `65b226bb6bd2cce6a9eb412e_bg-blue-03_laptop.webp`
- **Format:** WebP with responsive srcSet
- **Sizes:** 500w, 800w, 1080w, 1440w
- **Position:** `object-cover object-center`
- **Usage:** Full-width background for hero and portfolio sections
- **Overlay:** None (image provides the visual foundation)

#### Portfolio Grid Images
- **Source:** `/images/section4/optim-services/`
- **Format:** JPEG (Large versions)
- **Images Used:**
  - `card15 copy Large.jpeg` (Row 1, left - 50% crop)
  - `card2 copy Large.jpeg` (Row 1, right - 20% crop)
  - `card8 copy Large.jpeg` (Row 2, left)
  - `card10 copy Large.jpeg` (Row 2, right)
  - `card17 copy Large.jpeg` (Row 3, left - 15% crop)
  - `card12 copy Large.jpeg` (Row 3, right)
  - `card13 copy Large.jpeg` (Row 4, full width)

#### Feature Cards Backgrounds
- **Card 1:** `card15 copy Large.jpeg`
- **Card 2:** `card2 copy Large.jpeg`
- **Card 3:** `card8 copy Large.jpeg`
- **Overlay:** `bg-black/40` (40% black overlay for text readability)

#### Logo Lanes
- **Lane 1:** `LANE 1.png` - Continuous scrolling
- **Lane 2:** `LANE 2.png` - Continuous scrolling
- **Height:** `h-24` (96px)
- **Animation:** Continuous horizontal scroll

---

## CARD LAYOUTS & COMPONENTS

### Homepage Card Patterns

#### 1. Portfolio Grid Cards (2x3 Grid)

**Layout Structure:**
- **Grid:** `grid-cols-2` (2 columns)
- **Gap:** `gap-4` (16px)
- **Container:** Relative positioning

**Card Specifications:**
- **Shape:** `rounded-2xl` (16px border radius)
- **Height Variations:**
  - Row 1: `h-56` (224px) - Taller cards
  - Rows 2-3: `h-40` (160px) - Standard height
  - Row 4: `col-span-2` + `h-40` - Full-width card
- **Overflow:** `overflow-hidden` (clips images)
- **Fallback:** `bg-gray-800` (dark gray background)

**Image Styling:**
- **Fit:** `object-cover` (fills container, maintains aspect ratio)
- **Positioning:** Custom `objectPosition` values:
  - Left card: `center 50%` (shows middle portion)
  - Right card: `center 20%` (shows upper portion)
  - Third row left: `center 15%` (shows top portion)
- **Hover Effect:** `hover:scale-105` (5% scale increase)
- **Transition:** `transition-transform duration-300` (smooth 300ms)

#### 2. Feature Cards (3-Column Grid)

**Layout Structure:**
- **Grid:** `md:grid-cols-3` (3 columns on medium+ screens)
- **Gap:** `gap-8` (32px)
- **Max Width:** `max-w-5xl` (centered)
- **Card Height:** Fixed `h-[560px]` (560px)

**Card Design:**
- **Shape:** `rounded-2xl` (16px border radius)
- **Background:** Full-cover background image
- **Overlay:** `bg-black/40` (40% black overlay for text contrast)
- **Shadow:** `shadow-lg` (large shadow)
- **Padding:** `p-8` (32px)
- **Position:** `relative` with `overflow-hidden`

**Interactive Elements:**
- **Toggle Button:**
  - Size: `w-10 h-10` (40px circle)
  - Position: `absolute bottom-6 right-6`
  - Background: `bg-gray-900` (dark gray)
  - Hover: `hover:bg-gray-800`
  - Icon: `+` or `−` (white, bold)
  - Z-index: `z-10`

- **Expandable Content:**
  - Position: `absolute bottom-8 left-8 right-8`
  - Animation: Slides up from `y: "100%"` to `y: 0`
  - Duration: 400ms with `easeOut` timing
  - Opacity: Fades from 0 to 1
  - Z-index: `z-10`

**Content Structure:**
- **Title:** `text-2xl md:text-3xl font-bold text-white`
- **Description:** `text-sm text-white`
- **Link:** `text-sm text-white underline hover:text-gray-200`

#### 3. Pricing Cards

**Layout Structure:**
- **Container:** `max-w-4xl mx-auto`
- **Grid:** Vertical stack (`grid gap-4`)
- **Responsive:** `flex-col lg:flex-row` (stacks on mobile, horizontal on desktop)

**Card Specifications:**
- **Popular Card:**
  - Background: `bg-gradient-to-br from-gray-800 to-gray-900`
  - Border: `border-2 border-[#371ACA]` (purple)
  - Ring: `ring-2 ring-[#371ACA]/20` (subtle purple glow)
  - Padding: `pt-12 pb-8 px-10` (extra top padding for badge)

- **Standard Cards:**
  - Background: `bg-gray-50` (light) / `dark:bg-gray-800` (dark)
  - Border: `border-gray-200` (light) / `dark:border-gray-700` (dark)
  - Hover: `hover:border-gray-300` / `dark:hover:border-gray-600`
  - Padding: `py-8 px-10`

**Badge Design:**
- **Position:** `absolute -top-6 left-1/2 transform -translate-x-1/2`
- **Background:** `bg-black`
- **Padding:** `px-6 py-3`
- **Shape:** `rounded-lg`
- **Icon:** Yellow star (`bg-yellow-500`) with `★` symbol
- **Text:** `text-xs font-semibold` (short text: "Most Popular", "Best Value", "Best Pick")
- **Z-index:** `z-10`

**Discount Badge:**
- **Background:** `bg-[#FDC449]` (yellow)
- **Text:** `text-white text-xs`
- **Shape:** `rounded-full`
- **Padding:** `px-2 py-1`
- **Content:** Shows discount percentage (e.g., "10% off")

### Blog Page Card Patterns

#### 1. Featured Post Card (Right Sidebar)

**Layout:**
- **Grid:** `lg:grid-cols-[1.2fr_1fr]` (asymmetric 2-column)
- **Position:** Right side of featured post section
- **Alignment:** `lg:items-center` (vertically centered)

**Card Design:**
- **Shape:** `rounded-3xl` (24px border radius)
- **Background:** Multi-stop gradient
  - `from-[#202356]` (top-left)
  - `via-[#1a1c42]` (middle)
  - `to-[#12132f]` (bottom-right)
- **Border:** `border border-white/10` (subtle white border)
- **Shadow:** `shadow-2xl` (very large shadow)
- **Padding:** `p-10` (40px)
- **Position:** `relative` with gradient orbs

**Gradient Orbs:**
- **Top-Right:** 
  - `bg-[#c4ff61]/20` (lime green, 20% opacity)
  - Size: `h-32 w-32` (128px)
  - Position: `-top-10 -right-10`
  - Blur: `blur-2xl`

- **Bottom-Left:**
  - `bg-[#5b5fd8]/20` (purple, 20% opacity)
  - Size: `h-40 w-40` (160px)
  - Position: `-bottom-12 -left-8`
  - Blur: `blur-2xl`

**Content:**
- **Text:** `text-base font-medium text-white/80`
- **Attribution:** `text-sm font-semibold text-white` (name)
- **Subtext:** `text-xs text-white/60` (volume/edition)

#### 2. Blog Post Cards (3-Column Grid)

**Layout:**
- **Grid:** `lg:grid-cols-3` (3 columns on large screens)
- **Gap:** `gap-12` (48px)
- **Card Height:** `h-full` (flexible, fills container)

**Card Design:**
- **Shape:** `rounded-3xl` (24px border radius)
- **Background:** `bg-gradient-to-b from-[#101230] to-transparent`
- **Border:** `border border-white/10`
- **Hover Border:** `hover:border-white/20` (brightens on hover)
- **Padding:** `p-8` (32px)
- **Layout:** `flex flex-col justify-between` (stacks content vertically)

**Hover Effect:**
- **Transform:** `hover:-translate-y-2` (lifts 8px on hover)
- **Transition:** `transition-transform` (smooth animation)

**Content Structure:**
- **Category Badge:** 
  - `text-xs font-semibold uppercase tracking-wide text-white/50`
  - Small dot separator: `h-1 w-1 rounded-full bg-white/30`

- **Title:**
  - `text-2xl font-semibold leading-tight text-white`
  - `mt-5` (margin-top)

- **Excerpt:**
  - `text-sm text-white/70`
  - `mt-4` (margin-top)

- **Footer:**
  - `mt-8` (margin-top)
  - Date: `text-sm text-white/60`
  - Link: `font-semibold text-white hover:text-[#c4ff61]`

#### 3. Newsletter Card

**Layout:**
- **Position:** Full-width, centered content
- **Max Width:** `max-w-2xl mx-auto`

**Card Design:**
- **Shape:** `rounded-3xl` (24px border radius)
- **Background:** Same gradient as featured card
  - `from-[#202356] via-[#1a1c42] to-[#12132f]`
- **Border:** `border border-white/10`
- **Padding:** `p-10` (40px)
- **Overflow:** `overflow-hidden`

**Form Elements:**
- **Input:**
  - Shape: `rounded-full`
  - Background: `bg-white/5` (5% white opacity)
  - Border: `border border-white/10`
  - Focus: `focus:border-[#c4ff61] focus:ring-2 focus:ring-[#c4ff61]/40`
  - Text: `text-sm text-white`
  - Placeholder: `placeholder:text-white/40`
  - Width: `w-full sm:w-72`

- **Button:**
  - Background: `bg-[#c4ff61]` (lime green)
  - Text: `text-gray-900 font-semibold`
  - Shape: `rounded-full`
  - Hover: `hover:bg-white`
  - Padding: `px-6 py-3`

---

## LAYOUT PATTERNS

### Homepage Layout Structure

#### Section Spacing
- **Hero Section:** `py-32` (128px vertical padding)
- **Standard Sections:** `py-20` (80px vertical padding)
- **Large Sections:** `py-32` (128px vertical padding)
- **Container:** `container-custom` (responsive container with padding)

#### Grid Systems

**12-Column Grid:**
- **Usage:** Founders section
- **Layout:** `lg:grid-cols-12`
- **Left Column:** `lg:col-span-4` (image + label)
- **Right Column:** `lg:col-span-8` (text content)
- **Gap:** `gap-12` (48px)

**2-Column Grid:**
- **Usage:** Portfolio section, "Creative team" section
- **Layout:** `lg:grid-cols-2`
- **Gap:** `gap-12` (48px)
- **Alignment:** `items-center` (vertically centered)

**3-Column Grid:**
- **Usage:** Feature cards section
- **Layout:** `md:grid-cols-3`
- **Gap:** `gap-8` (32px)
- **Max Width:** `max-w-5xl` (centered)

#### Z-Index Layering
- **Background Images:** `z-0` (base layer)
- **Content Sections:** `z-10` (main content)
- **Sticky Elements:** `z-50` (header, sticky button)

### Blog Page Layout Structure

#### Section Spacing
- **Hero:** `py-20 lg:py-28` (80px mobile, 112px desktop)
- **Featured:** `py-16 lg:py-24` (64px mobile, 96px desktop)
- **Posts Grid:** `py-16 lg:py-24` (64px mobile, 96px desktop)

#### Grid Systems

**Asymmetric 2-Column:**
- **Usage:** Featured post section
- **Layout:** `lg:grid-cols-[1.2fr_1fr]`
- **Ratio:** 1.2:1 (text takes more space than card)

**3-Column Grid:**
- **Usage:** Blog posts grid
- **Layout:** `lg:grid-cols-3`
- **Gap:** `gap-12` (48px)

#### Container Patterns
- **Max Width Content:** `max-w-3xl` (hero text)
- **Full Width:** `container-custom` (sections)
- **Centered:** `mx-auto` (centers content)

---

## ANIMATIONS & INTERACTIONS

### Homepage Animations

#### Typing Effect (Hero)
- **Type:** Character-by-character typing animation
- **Speed:** 100ms per character
- **Pause:** 4 seconds after completion
- **Erase Speed:** 50ms per character
- **Cycling:** Rotates through 3 phrases
- **Cursor:** Blinking `|` character (`animate-pulse`, 500ms interval)

#### Fade In Up Animation
- **Type:** Framer Motion animation
- **Initial:** `opacity: 0, y: 40`
- **Animate:** `opacity: 1, y: 0`
- **Duration:** 600ms
- **Usage:** Section entrances

#### Card Expansion Animation
- **Type:** Slide-up reveal
- **Initial:** `y: "100%", opacity: 0`
- **Animate:** `y: 0, opacity: 1`
- **Duration:** 400ms
- **Easing:** `easeOut`
- **Usage:** Feature card content reveal

#### Logo Scroll Animation
- **Type:** Continuous horizontal scroll
- **Duration:** 40s linear infinite
- **Width:** 400% (quadruple width for seamless loop)
- **Transform:** `translateX(-50%)` (moves by half to loop)
- **Usage:** Logo lanes

#### Image Hover Effect
- **Type:** Scale transform
- **Scale:** `scale-105` (5% increase)
- **Duration:** 300ms
- **Easing:** Default
- **Usage:** Portfolio grid images

#### Metallic Shine Animation
- **Type:** Animated gradient overlay
- **Duration:** 3s infinite
- **Easing:** `ease-in-out`
- **Transform:** `translateX(-100%)` → `translateX(100%)` with skew
- **Usage:** Sticky booking button

### Blog Page Animations

#### Card Hover Lift
- **Type:** Vertical translation
- **Transform:** `-translate-y-2` (8px lift)
- **Duration:** Default transition
- **Usage:** Blog post cards

#### Border Brightening
- **Type:** Opacity change
- **From:** `border-white/10`
- **To:** `hover:border-white/20`
- **Usage:** Blog post cards on hover

---

## COMPONENT SPECIFICATIONS

### Sticky Booking Button

**Position:**
- **Fixed:** `fixed bottom-6 right-6`
- **Z-Index:** `z-50`

**Design:**
- **Shape:** `rounded-full`
- **Background:** Multi-stop gradient (`#371ACA` → `#2A1488` → `#1A0F5C`)
- **Border:** `border-2 border-[#1A0F5C]`
- **Text Color:** `text-[#FDC449]` (yellow)
- **Shadow:** `shadow-2xl` with custom purple glow
- **Hover:** `hover:scale-105` (5% scale increase)

**Content:**
- **Animated Dot:** `w-3 h-3 bg-[#FDC449] rounded-full animate-pulse`
- **Text:** "Ready to chat?" (`font-bold text-lg`)

**Effects:**
- **Metallic Shine:** Animated gradient overlay
- **Hover Glow:** Purple/blue gradient overlay

### Category Filter Pills

**Design:**
- **Shape:** `rounded-full`
- **Active State:**
  - Background: `bg-white`
  - Text: `text-gray-900`
- **Inactive State:**
  - Background: `bg-white/5`
  - Border: `border border-white/15`
  - Text: `text-white/80`
  - Hover: `hover:border-white/25 hover:text-white`

**Spacing:**
- **Padding:** `px-4 py-2`
- **Gap:** `gap-3` (12px between pills)
- **Text:** `text-sm font-medium`

### Badge Components

**Featured Badge:**
- **Shape:** `rounded-full`
- **Background:** `border-white/10 bg-white/5`
- **Text:** `text-sm font-medium uppercase tracking-wide text-white/80`
- **Padding:** `px-4 py-1`

**Category Badge:**
- **Shape:** `rounded-full`
- **Background:** `border-white/10 bg-white/5`
- **Text:** `text-xs font-medium uppercase tracking-wide text-white/70`
- **Padding:** `px-3 py-1`

---

## RESPONSIVE BREAKPOINTS

### Tailwind Default Breakpoints
- **sm:** 640px
- **md:** 768px
- **lg:** 1024px
- **xl:** 1280px
- **2xl:** 1536px

### Common Responsive Patterns

**Text Sizing:**
- Mobile: `text-4xl` or `text-5xl`
- Tablet: `md:text-5xl` or `md:text-6xl`
- Desktop: `lg:text-6xl` or `lg:text-7xl`

**Grid Layouts:**
- Mobile: Single column (default)
- Tablet: `md:grid-cols-2` or `md:grid-cols-3`
- Desktop: `lg:grid-cols-3` or `lg:grid-cols-12`

**Spacing:**
- Mobile: `py-16` or `py-20`
- Desktop: `lg:py-24` or `lg:py-28`

---

## DESIGN PRINCIPLES

### Visual Hierarchy
1. **Size:** Larger text = more important
2. **Weight:** Bolder text = emphasis
3. **Color:** Accent colors draw attention
4. **Spacing:** More space = more importance

### Consistency
- **Border Radius:** `rounded-2xl` (16px) for cards, `rounded-3xl` (24px) for larger cards
- **Shadows:** `shadow-lg` for cards, `shadow-2xl` for prominent elements
- **Transitions:** 300ms for standard interactions, 400ms for complex animations

### Accessibility
- **Contrast:** White text on dark backgrounds meets WCAG standards
- **Hover States:** All interactive elements have clear hover feedback
- **Focus States:** Form inputs have visible focus rings

### Performance
- **Images:** WebP format with responsive srcSet
- **Animations:** CSS transforms for GPU acceleration
- **Lazy Loading:** Images load on demand

---

## IMPLEMENTATION NOTES

### Font Usage
- **All headings use Inter** (`font-body`), not a separate heading font
- **Accent font (Instrument Serif)** is used sparingly for emphasis only
- **No Playfair Display** - removed from design system

### Color Usage
- **Homepage:** Yellow accent (`#FDC449`) for primary CTAs
- **Blog Page:** Lime green accent (`#c4ff61`) for links and buttons
- **Dark backgrounds** are consistent across both pages

### Component Reusability
- Cards follow consistent patterns but allow for customization
- Gradients are reused across similar components
- Spacing utilities are standardized

---

## FILE STRUCTURE

### Key Design Files
- `src/app/globals.css` - Global styles, animations, utilities
- `src/app/layout.tsx` - Font configuration
- `tailwind.config.ts` - Tailwind configuration
- `src/components/` - Reusable components

### Image Assets
- `/public/images/bg-img/` - Background images
- `/public/images/section4/optim-services/` - Portfolio images
- `/public/images/logos/` - Logo lane images
- `/public/images/founders/` - Founder images

---

*Last Updated: 2025*
*This document should be updated whenever design system changes are made.*

