# Journey Well - Phased Rollout Plan

## Document Purpose
This document outlines the phased approach for building out the Journey Well website. **All agents must follow this priority order when building pages.**

---

## Phase Overview

### Phase 1: Core Service Pages (Priority: HIGH)
**Timeline**: Build first
**Goal**: Establish primary service offerings with SEO-optimized pages

### Phase 2: Supporting Pages (Priority: MEDIUM)
**Timeline**: Build after Phase 1
**Goal**: Complete service offerings and enhance local SEO

### Phase 3: Enhancement & Optimization (Priority: LOW)
**Timeline**: Build after Phase 2
**Goal**: Additional features, optimization, and content expansion

---

## Phase 1: Core Service Pages

### Priority Order:
1. **Podcast Production** (`/services/podcast-production-baton-rouge/`)
   - **Why First**: High commercial intent, core service offering
   - **Dependencies**: None
   - **Estimated Complexity**: Medium

2. **YouTube Production & Optimization** (`/services/youtube-production-baton-rouge/`)
   - **Why Second**: High commercial intent, complements podcast production
   - **Dependencies**: None
   - **Estimated Complexity**: Medium

3. **Short-Form Video** (`/services/short-form-video-baton-rouge/`)
   - **Why Third**: High demand service, works with YouTube content
   - **Dependencies**: None
   - **Estimated Complexity**: Medium

4. **Social Media Management** (`/services/social-media-management-baton-rouge/`)
   - **Why Fourth**: Transactional intent, completes content ecosystem
   - **Dependencies**: None
   - **Estimated Complexity**: Medium

5. **Packages & Pricing Page** (`/packages/`)
   - **Why Fifth**: Critical conversion page, needs all service pages to link to
   - **Dependencies**: All Phase 1 service pages should be complete
   - **Estimated Complexity**: High (pricing tables, comparisons)

### Phase 1 Completion Criteria:
- [ ] All 4 core service pages built and deployed
- [ ] Packages page built with pricing information
- [ ] All pages have proper internal linking
- [ ] All pages pass SEO checklist from `KEYWORDS_SEO.md`
- [ ] All pages match design requirements from `DESIGN_PRD.md`
- [ ] Homepage updated with links to new service pages

---

## Phase 2: Supporting Pages

### Priority Order:
1. **Branding & Creative Design** (`/services/branding-and-creative-baton-rouge/`)
   - **Why First**: Completes service offerings, supports other services
   - **Dependencies**: Phase 1 service pages (for internal linking)
   - **Estimated Complexity**: Medium

2. **Strategy, Planning & Analytics** (`/services/content-strategy-baton-rouge/`)
   - **Why Second**: Higher-level service, supports all other offerings
   - **Dependencies**: Phase 1 service pages (for internal linking)
   - **Estimated Complexity**: Medium

3. **Location Page** (`/locations/baton-rouge/`)
   - **Why Third**: Critical for local SEO, supports all service pages
   - **Dependencies**: All service pages (for comprehensive linking)
   - **Estimated Complexity**: Low-Medium

### Phase 2 Completion Criteria:
- [ ] All remaining service pages built and deployed
- [ ] Location page built with NAP information
- [ ] All pages have proper internal linking
- [ ] All pages pass SEO checklist from `KEYWORDS_SEO.md`
- [ ] All pages match design requirements from `DESIGN_PRD.md`
- [ ] Navigation updated to include all new pages

---

## Phase 3: Enhancement & Optimization

### Potential Enhancements (To Be Prioritized):
- [ ] Service page case studies/testimonials
- [ ] Interactive pricing calculator
- [ ] Service comparison tool
- [ ] Enhanced portfolio integration
- [ ] Blog content strategy for SEO
- [ ] Additional location pages (if expanding)
- [ ] Advanced analytics integration
- [ ] A/B testing for conversion optimization

### Phase 3 Notes:
- These are optional enhancements
- Should only be considered after Phases 1 & 2 are complete
- Each enhancement should be evaluated for ROI and user value

---

## Build Checklist Template

Use this checklist for each page build:

### Pre-Build:
- [ ] Reviewed `SITE_STRUCTURE.md` for URL and structure requirements
- [ ] Reviewed `KEYWORDS_SEO.md` for keyword requirements
- [ ] Reviewed `DESIGN_PRD.md` for styling requirements
- [ ] Reviewed `HOMEPAGE_CONTENT.md` for content tone/style (if applicable)
- [ ] Confirmed page is in correct phase priority

### During Build:
- [ ] Created page with correct URL slug
- [ ] Implemented all required keywords naturally
- [ ] Added proper H1, H2, H3 structure
- [ ] Included meta title and description
- [ ] Added required internal links
- [ ] Applied design system from `DESIGN_PRD.md`
- [ ] Ensured mobile responsiveness
- [ ] Added alt text to all images

### Post-Build:
- [ ] Tested all internal links
- [ ] Verified SEO requirements met
- [ ] Checked mobile responsiveness
- [ ] Validated design matches PRD
- [ ] Updated navigation (if needed)
- [ ] Updated homepage links (if new service page)
- [ ] Tested page load speed
- [ ] Reviewed for accessibility

---

## Dependencies Map

```
Homepage (✅ Exists)
    ↓
Phase 1 Service Pages
    ├── Podcast Production
    ├── YouTube Production
    ├── Short-Form Video
    └── Social Media Management
    ↓
Packages Page (depends on Phase 1 services)
    ↓
Phase 2 Service Pages
    ├── Branding & Creative
    └── Strategy & Analytics
    ↓
Location Page (depends on all services)
```

---

## Current Status

### ✅ Completed:
- Homepage
- About page
- Blog pages
- Contact page
- Portfolio page

### 🚧 Phase 1 (In Progress):
- [ ] Podcast Production
- [ ] YouTube Production
- [ ] Short-Form Video
- [ ] Social Media Management
- [ ] Packages & Pricing

### 📋 Phase 2 (Planned):
- [ ] Branding & Creative
- [ ] Strategy & Analytics
- [ ] Location Page

### 💡 Phase 3 (Future):
- [ ] Enhancements TBD

---

## Notes for Future Agents

1. **Always check this document** before starting any new page build
2. **Follow the phase order** — don't skip ahead unless explicitly approved
3. **Complete all checklist items** before marking a page as done
4. **Update this document** when completing phases
5. **Reference all other documentation** (`SITE_STRUCTURE.md`, `KEYWORDS_SEO.md`, `DESIGN_PRD.md`) during build
6. **Test thoroughly** before moving to next page
7. **Communicate blockers** if dependencies aren't met

---

## Quick Reference: What to Build Next?

1. Check current phase status above
2. Find next unbuilt page in current phase
3. Review all documentation files
4. Follow build checklist
5. Mark complete and move to next page

---

**Last Updated**: [Current Date]
**Current Phase**: Phase 1
**Maintained By**: Development Team

