# Journey Well - Site Structure & Architecture

## Document Purpose
This document defines the complete site structure, URL hierarchy, and page relationships for the Journey Well website. **All agents must reference this document before building any new pages.**

---

## Site Hierarchy

```
/
├── / (Homepage)
├── /about/
├── /blog/
│   └── /blog/[slug]/
├── /contact/
├── /portfolio/
├── /services/
│   ├── /services/podcast-production-baton-rouge/
│   ├── /services/youtube-production-baton-rouge/
│   ├── /services/short-form-video-baton-rouge/
│   ├── /services/social-media-management-baton-rouge/
│   ├── /services/branding-and-creative-baton-rouge/
│   └── /services/content-strategy-baton-rouge/
├── /packages/
└── /locations/
    └── /locations/baton-rouge/
```

---

## Page Definitions

### 1. Homepage (`/`)
**Purpose**: Primary landing page introducing Journey Well as a content agency
**Status**: ✅ Exists
**Content Reference**: See `HOMEPAGE_CONTENT.md` for full SEO-optimized content

**Key Sections**:
- Hero with primary CTA
- What We Do
- Our Content Services (overview)
- Why Brands Trust Journey Well
- How We Work (4-step process)
- Results That Matter
- Industries We Serve
- Serving Baton Rouge & Beyond
- FAQs
- Final CTA section

**Internal Links Required**:
- Link to `/packages/`
- Link to `/contact/`
- Link to all service pages
- Link to `/locations/baton-rouge/`

---

### 2. Service Pages

#### 2.1 Podcast Production
- **URL**: `/services/podcast-production-baton-rouge/`
- **Status**: 🚧 To Build
- **Priority**: Phase 1
- **Search Intent**: Commercial — "done-for-you" podcast services
- **Internal Links**: 
  - Link to `/packages/`
  - Link to `/contact/`
  - Link back to homepage

#### 2.2 YouTube Production & Optimization
- **URL**: `/services/youtube-production-baton-rouge/`
- **Status**: 🚧 To Build
- **Priority**: Phase 1
- **Search Intent**: Commercial — editing and optimization services
- **Internal Links**: 
  - Link to `/packages/`
  - Link to `/contact/`
  - Link back to homepage

#### 2.3 Short-Form Video (Reels & Clips)
- **URL**: `/services/short-form-video-baton-rouge/`
- **Status**: 🚧 To Build
- **Priority**: Phase 1
- **Search Intent**: Commercial — Instagram/TikTok/YouTube Shorts clip creation
- **Internal Links**: 
  - Link to `/packages/`
  - Link to `/contact/`
  - Link back to homepage

#### 2.4 Social Media Management
- **URL**: `/services/social-media-management-baton-rouge/`
- **Status**: 🚧 To Build
- **Priority**: Phase 1
- **Search Intent**: Transactional — "done-for-you" social media posting
- **Internal Links**: 
  - Link to `/packages/`
  - Link to `/contact/`
  - Link back to homepage

#### 2.5 Branding & Creative Design
- **URL**: `/services/branding-and-creative-baton-rouge/`
- **Status**: 🚧 To Build
- **Priority**: Phase 2
- **Search Intent**: Commercial / Informational — design deliverables
- **Internal Links**: 
  - Link to `/packages/`
  - Link to `/contact/`
  - Link back to homepage

#### 2.6 Strategy, Planning & Analytics
- **URL**: `/services/content-strategy-baton-rouge/`
- **Status**: 🚧 To Build
- **Priority**: Phase 2
- **Search Intent**: Informational / Commercial — data-driven planning
- **Internal Links**: 
  - Link to `/packages/`
  - Link to `/contact/`
  - Link back to homepage

---

### 3. Packages & Pricing Page
- **URL**: `/packages/`
- **Status**: 🚧 To Build
- **Priority**: Phase 1
- **Search Intent**: Transactional — price comparison and service bundles
- **Internal Links**: 
  - Link to `/contact/`
  - Link to all service pages
  - Link back to homepage

---

### 4. Location Page
- **URL**: `/locations/baton-rouge/`
- **Status**: 🚧 To Build
- **Priority**: Phase 2
- **Search Intent**: Local / Navigational — builds Baton Rouge relevance
- **Purpose**: Local SEO optimization for all services
- **Internal Links**: 
  - Link to all service pages
  - Link to `/packages/`
  - Link to `/contact/`

---

### 5. Existing Pages (Reference Only)
- **About**: `/about/` ✅ Exists
- **Blog**: `/blog/` ✅ Exists
- **Contact**: `/contact/` ✅ Exists
- **Portfolio**: `/portfolio/` ✅ Exists

---

## URL Slug Conventions

**Pattern**: `/services/[service-name]-baton-rouge/`

**Rules**:
- All service pages must include "baton-rouge" in the URL slug
- Use hyphens to separate words
- Keep slugs descriptive but concise
- Maintain lowercase throughout

**Examples**:
- ✅ `/services/podcast-production-baton-rouge/`
- ✅ `/services/youtube-production-baton-rouge/`
- ❌ `/services/podcast-production/` (missing location)
- ❌ `/services/Podcast-Production-Baton-Rouge/` (uppercase)

---

## Internal Linking Strategy

### Required Links from Homepage
- All 6 service pages
- `/packages/`
- `/contact/`
- `/locations/baton-rouge/`

### Required Links from Service Pages
- `/packages/`
- `/contact/`
- Homepage (via logo or "Home" link)
- Related service pages (where relevant)

### Required Links from Packages Page
- All service pages
- `/contact/`
- Homepage

### Required Links from Location Page
- All service pages
- `/packages/`
- `/contact/`

---

## Navigation Structure

**Primary Navigation** (Header):
- Home
- Services (dropdown with all 6 services)
- Packages
- Portfolio
- Blog
- About
- Contact

**Footer Navigation**:
- All service pages
- Packages
- Location page
- Contact
- About
- Blog

---

## Page Status Legend
- ✅ Exists (already built)
- 🚧 To Build (needs to be created)
- 🔄 In Progress (currently being built)
- ✨ Enhanced (exists but needs updates)

---

## Notes for Future Agents

1. **Always check this document first** before creating any new page
2. **Follow URL slug conventions** exactly as specified
3. **Include required internal links** on every page
4. **Reference `KEYWORDS_SEO.md`** for keyword requirements
5. **Reference `PHASED_ROLLOUT.md`** for build priority
6. **Reference `DESIGN_PRD.md`** for styling and design guidelines
7. **Reference `HOMEPAGE_CONTENT.md`** for homepage content structure

---

**Last Updated**: [Current Date]
**Maintained By**: Development Team

