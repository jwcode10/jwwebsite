# Current Pricing Section Backup Reference

## File Location
- **Main Component**: `/src/components/sections/pricing-section.tsx`
- **Services Page**: `/src/app/services/page.tsx` 
- **Global Styles**: `/src/app/globals.css`

## Current Pricing Structure

### Pricing Plans Array (lines 20-87)
The pricing section contains 3 demo plans:

1. **Quicken Simplifi** (ID: 1)
   - Price: $2,500 (was $3,000)
   - Discount: 33% off
   - Platforms: Mobile, Web
   - Popular: true
   - Badge: "New York Times Wirecutter and PC mag medium Badge"
   - Features: 4 items focused on spending/saving insights

2. **Quicken Business & Personal** (ID: 2)
   - Price: $4,000 (was $5,000)
   - Discount: 25% off
   - Platforms: Mobile, Web
   - Popular: false
   - Features: 4 items focused on business tools

3. **Classic** (ID: 3)
   - Price: $6,500 (was $8,000)
   - Discount: 17% off
   - Platforms: Windows, Mac
   - Popular: false
   - Has version selector: true (Premier/Deluxe)
   - Features: 5 items focused on investing/tax tools

### Visual Design Elements

#### Card Styling
- **Popular Plan**: Gradient background (gray-800 to gray-900), purple border (#471cff), ring effect
- **Regular Plans**: Gray-50 background, gray-200 border, hover effects
- **Border Radius**: rounded-3xl
- **Padding**: px-10, py-8 (pt-12 pb-8 for popular)
- **Shadow**: shadow-xl, hover:shadow-2xl

#### Logo/Branding
- **Logo**: Purple gradient square (#471cff to #3a16d9) with "Q" text
- **Size**: w-16 h-16
- **Shadow**: shadow-lg, hover:shadow-xl

#### Typography
- **Plan Names**: text-2xl, font-semibold, font-body, tracking-tight
- **Platform Icons**: Tabler icons (DeviceMobile, World, BrandWindows, BrandApple)
- **Features**: text-base, font-medium, font-body, tracking-tight
- **Pricing**: text-[40px], font-bold, font-body, leading-none, tracking-tighter

#### Color Scheme
- **Primary Purple**: #471cff (buttons, links, checkmarks)
- **Purple Hover**: #3a16d9
- **Red Accent**: #eb0130 (Classic plan button)
- **Discount Badge**: #ff5a43 background
- **Text Colors**: gray-900 (light), white (dark mode)

#### Layout Structure
- **Container**: max-w-4xl mx-auto
- **Card Layout**: flex items-center gap-8
- **Left Side**: w-80, h-80, flex flex-col justify-between
- **Right Side**: flex-1 with border-l separator
- **Features**: space-y-3, IconCircleCheck icons

#### Interactive Elements
- **Buttons**: py-3 px-8, rounded-full, font-semibold, text-lg
- **Hover Effects**: hover:scale-105, whileHover={{ y: -4 }}
- **Animations**: Framer Motion with staggered delays

#### Badge System
- **Position**: absolute -top-6 left-1/2 transform -translate-x-1/2
- **Style**: bg-black, px-6 py-3, rounded-lg
- **PC Badge**: bg-red-600, w-6 h-6, rounded

#### Version Selector (Classic Plan)
- **Container**: bg-white border border-[#eaecf7] rounded-lg p-1
- **Selected**: bg-[#fbccd6] border border-[#eb0130]
- **Options**: Premier, Deluxe

### Goal Filtering Logic (lines 91-115)
The component accepts `selectedGoals` prop and filters plans based on:
- Goal 1 (Save more) → Simplifi
- Goal 2 (Tax reports) → Business & Personal, Classic  
- Goal 3 (Automate finances) → Simplifi, Business & Personal
- Goal 4 (Keep data local) → Classic
- Goal 5 (Stay on budget) → All plans
- Goal 6 (Portfolio analysis) → Classic

### Animation System
- **Framer Motion**: fadeInUp, staggered delays (index * 0.1)
- **Hover**: whileHover={{ y: -4 }}
- **Transitions**: duration 0.4-0.6

## Services Page Structure
- **6 Service Cards**: Digital Marketing, Web Development, Business Strategy, Brand Development, Technical Solutions, Training & Support
- **Layout**: grid gap-8 lg:grid-cols-2
- **Styling**: rounded-2xl border bg-white p-8 shadow-sm hover:shadow-lg
- **CTA Section**: Custom solution inquiry with contact link

## Key Styling Classes to Preserve
- `.container-custom` - Container utility
- `.section` - Section spacing (py-16 md:py-24 lg:py-32)
- `.font-body` - Body font family
- `.font-heading` - Heading font family
- Brand color variables (--color-brand-*)
- Dark mode support throughout

## Notes for Updates
- All demo content should be replaced with real pricing/service information
- Maintain exact visual styling and layout structure
- Preserve all animations and interactive elements
- Keep responsive design intact
- Maintain dark mode compatibility
- Preserve goal filtering functionality











