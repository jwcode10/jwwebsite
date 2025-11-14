# Journey Well - Design PRD (Product Requirements Document)

## Document Purpose
This document provides detailed instructions and descriptions for styling the Journey Well website, including layout, colors, fonts, elements, components, sections, and overall design aesthetics. **All agents must reference this document when building pages to ensure visual consistency.**

---

## Design Philosophy

### Overall Aesthetic
- **Modern SaaS/Content Agency Look**: Clean, professional, approachable
- **Visual Hierarchy**: Clear typography-based hierarchy with generous whitespace
- **Color Strategy**: Primary blue accent (`#4F6DF5`) with neutral backgrounds
- **Consistency**: Cohesive design system across all pages
- **Accessibility**: WCAG AA compliant, high contrast ratios

---

## Color Palette

### Primary Colors
- **Primary Blue**: `#4F6DF5` (main accent, CTAs, links)
- **Primary Blue Dark**: `#3E54C8` (hover states)
- **Primary Blue Light**: `#EEF1FF` (backgrounds, tags)

### Neutral Colors
- **Background Primary**: `#FFFFFF` (main page background)
- **Background Secondary**: `#F7F8FC` (section backgrounds, cards)
- **Background Tertiary**: `#F5F7FF` (light sections)

### Text Colors
- **Primary Text**: `#1F2430` or `#0B1020` (headings, body copy)
- **Secondary Text**: `#5C6370` or `#6F7787` (muted text, captions)
- **Muted Text**: `#A0A6B5` (metadata, timestamps)

### Accent Colors
- **Success**: `#2FB47C` (success states, positive indicators)
- **Warning**: `#F5A623` (alerts, highlights)
- **Gradient**: `linear-gradient(135deg, #4F6DF5 0%, #9C6CFF 100%)` (hero CTAs, special elements)

### Dark Mode (if applicable)
- **Dark Background**: `#0B1020` or `#1F2430`
- **Dark Text**: `#F0F3FF` or `#FFFFFF`
- **Dark Muted**: `#C7CCDA`

---

## Typography

### Font Families
- **Headings**: `Space Grotesk` (bold weights)
- **Body**: `Inter` (regular, medium weights)
- **Display/Logo**: `Space Grotesk` (for hero headlines)

### Font Sizes & Line Heights

#### Desktop
- **Display (Hero H1)**: 64px / 72px line height
- **H1**: 48px / 56px line height
- **H2**: 40px / 48px line height (section titles)
- **H3**: 28px / 36px line height (subsections)
- **H4**: 24px / 32px line height (card titles)
- **Body Large**: 18px / 28px line height
- **Body**: 16px / 24px line height
- **Caption**: 14px / 22px line height
- **Button Text**: 16px / 20px line height (uppercase, 4px letter spacing)

#### Tablet
- **Display**: 48px / 56px
- **H1**: 36px / 44px
- **H2**: 32px / 40px
- **H3**: 24px / 32px
- **Body**: 16px / 26px

#### Mobile
- **Display**: 36px / 44px
- **H1**: 28px / 36px
- **H2**: 24px / 32px
- **H3**: 20px / 28px
- **Body**: 16px / 24px

### Font Weights
- **Bold**: 700 (headings)
- **Medium**: 500 (emphasis, buttons)
- **Regular**: 400 (body text)

---

## Layout & Spacing

### Container Widths
- **Max Content Width**: 1280px (centered)
- **Content Width**: 1200px (blog/content pages)
- **Gutters**: 80px desktop, 40px tablet, 24px mobile

### Grid System
- **12-column grid** with 80px gutters (desktop)
- **Responsive breakpoints**:
  - Desktop: 1024px+
  - Tablet: 768px - 1023px
  - Mobile: < 768px

### Spacing Scale
- **Section Spacing**: 120px desktop, 80px tablet, 64px mobile
- **Component Spacing**: 64px desktop, 40px tablet, 32px mobile
- **Element Spacing**: 32px desktop, 24px tablet, 16px mobile
- **Tight Spacing**: 16px desktop, 12px tablet, 8px mobile

### Vertical Rhythm
- Consistent spacing between content blocks
- 64px between major sections (desktop)
- 40px between components (tablet)
- 32px between elements (mobile)

---

## Components

### Buttons

#### Primary Button
- **Background**: Gradient `linear-gradient(135deg, #4F6DF5 0%, #9C6CFF 100%)`
- **Text**: White, uppercase, 16px, 4px letter spacing
- **Height**: 52-60px
- **Padding**: 20px horizontal, 16px vertical
- **Border Radius**: 6-8px
- **Hover**: Increase brightness 8%, slight scale (1.02)
- **Shadow**: `0 4px 12px rgba(79, 109, 245, 0.25)`

#### Secondary Button
- **Background**: Transparent
- **Border**: 2px solid `#4F6DF5`
- **Text**: `#4F6DF5`, uppercase, 16px
- **Height**: 52-60px
- **Padding**: 20px horizontal, 16px vertical
- **Border Radius**: 6-8px
- **Hover**: Fill with `#4F6DF5`, text white

#### Tertiary Button (Text Link)
- **Text**: `#4F6DF5`
- **Underline**: On hover
- **Font**: 16px, medium weight

### Cards

#### Service Card
- **Background**: `#FFFFFF`
- **Border Radius**: 12px
- **Padding**: 32px
- **Shadow**: `0 8px 16px rgba(31, 36, 48, 0.08)`
- **Hover**: Raise 8px, shadow `0 16px 32px rgba(31, 36, 48, 0.12)`
- **Transition**: 0.3s ease

#### Content Card (Blog/Portfolio)
- **Background**: `#FFFFFF`
- **Border Radius**: 8px
- **Shadow**: `0 4px 12px rgba(31, 36, 48, 0.06)`
- **Image**: 16:9 aspect ratio, rounded top corners
- **Padding**: 24px

### Input Fields

#### Text Input
- **Height**: 54px
- **Border**: 1px solid `#D6DAE5`
- **Border Radius**: 6px
- **Padding**: 16px horizontal
- **Background**: `#FFFFFF`
- **Focus**: Border `#4F6DF5`, ring `0 0 0 4px rgba(79, 109, 245, 0.16)`
- **Placeholder**: `#A0A6B5`

### Tags/Pills

#### Category Tag
- **Background**: `#EEF1FF`
- **Text**: `#4F6DF5`, uppercase, 12px, 4px letter spacing
- **Padding**: 8px 16px
- **Border Radius**: 20px (pill shape)

#### Status Tag
- **Success**: Background `#2FB47C`, text white
- **Warning**: Background `#F5A623`, text white
- **Padding**: 6px 12px
- **Border Radius**: 4px

---

## Page-Specific Design

### Homepage

#### Hero Section
- **Full viewport height** (min 720px)
- **Background**: Subtle gradient `linear-gradient(135deg, #FFFFFF 0%, #EEF1FF 100%)`
- **Layout**: Split (text left, visual right) or centered
- **CTA**: Primary gradient button, 60px height
- **Trust badges**: Row below CTAs, grayscale logos

#### Service Grid
- **3 columns** desktop (32px gap)
- **2 columns** tablet (24px gap)
- **1 column** mobile (16px gap)
- **Card hover**: Lift effect with shadow

#### How We Work Section
- **4-step process**: Horizontal row desktop, vertical stack mobile
- **Icons**: 56px circle, gradient background
- **Numbers**: Large, bold, gradient text

#### Testimonials
- **Background**: `#F5F7FF`
- **Carousel**: 3 cards visible desktop, center emphasized (1.05 scale)
- **Card**: White, 12px radius, shadow
- **Quote icon**: Gradient accent

### Service Pages

#### Hero Section
- **H1**: Main keyword, 48px desktop
- **Subheadline**: 18px, secondary text color
- **CTA**: Primary button
- **Background**: White or light gradient

#### Service Details
- **H2 Sections**: 40px, primary text
- **Body**: 18px, readable line height
- **Feature Lists**: Bullet points or icons
- **Images**: 16:9 or 4:3 aspect ratio, rounded corners

#### CTA Sections
- **Background**: Gradient or `#F5F7FF`
- **Centered text**: White (if gradient) or primary text
- **Button**: Contrasting style (white if gradient background)

### Blog Pages

#### Article Layout
- **Max width**: 800px (centered)
- **Typography**: 18px body, comfortable line height
- **Images**: Full width, rounded corners
- **Sidebar**: Sticky, 320px width (desktop)

#### Article Cards
- **Image**: 16:9 aspect ratio
- **Category tag**: Top left
- **Title**: H3, 24px
- **Excerpt**: 3 lines max, secondary text
- **Metadata**: Author, date, read time

### Packages Page

#### Pricing Cards
- **3 columns** desktop
- **Middle card**: Highlighted with gradient border
  - Border: `2px solid transparent`
  - Background: `linear-gradient(#fff,#fff) padding-box, linear-gradient(135deg,#4F6DF5,#9C6CFF) border-box`
- **Card content**: White background, shadow
- **CTA**: Gradient button on highlighted card

#### Toggle (Monthly/Annual)
- **Pill shape**: 64px width, 32px height
- **Knob**: 28px circle, gradient background
- **Active state**: Smooth transition

---

## Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

### Mobile Considerations
- **Navigation**: Hamburger menu, slide-out panel
- **Hero**: Vertical stack (text above image)
- **Grids**: Single column
- **Spacing**: Reduced by 20-30%
- **Typography**: Scaled down appropriately
- **Buttons**: Full width or centered
- **Images**: Full width, maintain aspect ratios

### Tablet Considerations
- **Grids**: 2 columns where applicable
- **Navigation**: May collapse or simplify
- **Spacing**: Moderate reduction
- **Typography**: Slightly smaller than desktop

---

## Accessibility

### Requirements
- **Color Contrast**: WCAG AA minimum (4.5:1 for text)
- **Focus States**: Visible outline on all interactive elements
- **Alt Text**: All images have descriptive alt text
- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **ARIA Labels**: Where needed for screen readers
- **Semantic HTML**: Proper heading hierarchy, landmarks

### Focus States
- **Outline**: 2px solid `#4F6DF5`
- **Offset**: 2px from element
- **Ring**: `0 0 0 4px rgba(79, 109, 245, 0.16)`

---

## Animation & Transitions

### Micro-interactions
- **Hover**: 0.3s ease transition
- **Button press**: 0.1s scale (0.98)
- **Card lift**: 0.3s ease, translateY(-8px)
- **Fade in**: 0.5s ease (for scroll animations)

### Page Transitions
- **Smooth scrolling**: Enabled
- **Loading states**: Skeleton screens or spinners
- **Error states**: Clear messaging, retry options

---

## Design System Summary

### Spacing
- Use 8px base unit (8, 16, 24, 32, 40, 48, 64, 80, 120px)

### Colors
- Primary: `#4F6DF5`
- Backgrounds: White, `#F7F8FC`, `#F5F7FF`
- Text: `#1F2430`, `#5C6370`, `#A0A6B5`

### Typography
- Headings: `Space Grotesk` bold
- Body: `Inter` regular
- Sizes: 14px - 64px scale

### Components
- Buttons: Gradient primary, outlined secondary
- Cards: White, rounded, shadow
- Inputs: Clean borders, focus rings

---

## Notes for Future Agents

1. **Always reference this document** before styling any page
2. **Use the color palette** exactly as specified
3. **Follow typography scale** for consistency
4. **Maintain spacing rhythm** using the 8px base unit
5. **Test responsive breakpoints** at all sizes
6. **Ensure accessibility** requirements are met
7. **Match component styles** to examples in this document
8. **Keep animations subtle** and purposeful
9. **Cross-reference with `SITE_STRUCTURE.md`** for layout requirements
10. **Update this document** if design system evolves

---

**Last Updated**: [Current Date]
**Maintained By**: Development Team

