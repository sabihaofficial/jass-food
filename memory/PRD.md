# Jass Food & Kokani Delicacies - Product Requirements Document

## Project Overview
**Project Name:** Jass Food & Kokani Delicacies Premium Website  
**Type:** Premium Conversion-Focused Landing Page  
**Status:** Phase 1 Complete (Frontend MVP)  
**Last Updated:** December 2024  

## Business Context
Home-based luxury food brand specializing in authentic Konkani Muslim cuisine. Located in Goregaon West, Mumbai, serving Mumbai, Thane & Navi Mumbai.

### Target Audience
- Muslim families in Mumbai metropolitan area
- Wedding and festive bulk order customers
- Ramadan & Eid buyers
- People craving authentic Konkan home-style sweets

### Primary Goals
- Drive WhatsApp orders (9833987609)
- Generate festival pre-bookings
- Build trust and premium positioning
- Remove confusion about business availability

---

## User Personas

### Persona 1: Fatima - The Nostalgic Buyer
- Age: 35-50, homemaker/working professional
- Looking for authentic Konkani sweets that remind her of home
- Orders for family occasions and Ramadan/Eid
- Values authenticity and traditional recipes

### Persona 2: Ayesha - The Wedding Planner
- Age: 28-45, planning wedding/family events
- Needs bulk orders for 100+ guests
- Values premium presentation and authentic taste
- Pre-books 2-4 weeks in advance

### Persona 3: Mohammed - The Corporate Gifter
- Age: 30-55, business professional
- Orders traditional sweets for corporate gifting
- Values premium packaging and unique offerings
- Seasonal buyer (festivals, special occasions)

---

## Architecture & Technology Stack

### Frontend
- **Framework:** React 19.0.0
- **Routing:** React Router DOM 7.5.1
- **UI Library:** Shadcn UI (Radix UI components)
- **Styling:** Tailwind CSS 3.4.17
- **Fonts:** Cormorant Garamond (serif), Inter (sans-serif)
- **Icons:** Lucide React
- **Notifications:** Sonner (toast)

### Backend
- **Status:** Not yet implemented
- **Planned:** FastAPI + MongoDB (for Phase 2)

### Design System
- **Color Palette:** Warm beige (#FFF9F2), maroon (#8B3A3A), gold (#D4AF37)
- **Typography:** Elegant serif headings, clean sans-serif body
- **Style:** Premium, warm, traditional yet modern
- **Special Effects:** Glass morphism, subtle animations, hover states

---

## Core Features Implemented ✅

### 1. Hero Section
- Emotional headline emphasizing heritage
- Subheadline about slow-cooked handmade sweets
- Dual CTA buttons (WhatsApp order + Explore)
- Background: Premium food photography with overlay
- Service areas displayed
- Sticky header with smooth scroll navigation

### 2. About Section
- Founder introduction (Saeeda Chougle)
- Storytelling approach with 3 paragraphs
- Emphasis on labor-intensive recipes
- Premium image of traditional cooking
- Decorative design elements

### 3. Signature Products Section
- 6 products showcased:
  - Duderi (Popular)
  - Sandan (Popular)
  - Shing
  - Sakhroli
  - Khazoori
  - Sarole
- Each product card includes:
  - High-quality image
  - Emotional description
  - Feature tags
  - Direct WhatsApp order link
- Hover animations and visual depth

### 4. Special Occasions Section
- 4 occasion types:
  - Ramadan Special Boxes
  - Eid Pre-Bookings
  - Wedding & Nikkah Orders
  - Custom Festive Orders
- Emoji icons for visual appeal
- CTA button to book occasions

### 5. Why Choose Us Section
- 6 trust builders:
  - 100% Homemade
  - Traditional Recipes
  - Freshly Prepared
  - Premium Ingredients
  - Limited Daily Capacity
  - Labor of Love
- Icon-based layout
- Center-aligned for emphasis

### 6. Testimonials Section
- 4 authentic customer reviews
- 5-star ratings
- Customer name, location, occasion type
- Emotional, culturally rich content

### 7. Gallery Section
- 6 images showcasing:
  - Traditional platters
  - Festive celebrations
  - Bulk orders
  - Daily fresh batches
- Hover overlay with caption
- Smooth zoom animations

### 8. CTA Section
- Strong headline: "Experience Authentic Konkan Sweet Traditions"
- Urgency message: Limited slots during peak season
- Primary WhatsApp CTA
- Gradient background with decorative elements

### 9. Footer
- Brand information
- Quick links (smooth scroll)
- Contact details (phone, location, email)
- Social media icons (Instagram, Facebook, WhatsApp)
- Copyright information

### 10. Pre-Booking Form (Separate Page)
- Personal details (name, phone)
- Occasion selection dropdown
- Delivery date picker
- Multi-select product checkboxes
- Quantity input
- Additional notes textarea
- WhatsApp integration (sends formatted message)
- Toast notifications
- Info box with booking guidelines

### 11. Interactive Elements
- Floating WhatsApp button (animated pulse)
- Mobile responsive menu
- Smooth scroll to sections
- Hover states on all interactive elements
- Custom scrollbar
- Selection highlight color

---

## Content Management

### Easily Updatable Content
**File:** `/app/frontend/src/data/mockContent.js`

All website content is centralized in this file:
- Contact information (phone, WhatsApp, location, email, social media)
- Hero section text and images
- About section story and images
- Product details (name, description, features, images)
- Special occasions content
- Why choose us reasons
- Testimonials
- Gallery images with captions
- CTA section text

**To Update:**
1. Open `/app/frontend/src/data/mockContent.js`
2. Modify the relevant section
3. Save the file (hot reload will update automatically)

### Image Updates
**Current:** Using high-quality stock images
**To Update Your Own Photos:**
1. Replace image URLs in `mockContent.js`
2. Use image hosting (Cloudinary, AWS S3) or local public folder
3. Format: `https://your-image-host.com/your-image.jpg`

---

## Responsive Design

### Breakpoints
- **Mobile:** < 768px (stacked layout, full-width buttons)
- **Tablet:** 768px - 1279px (2-column grid)
- **Desktop:** ≥ 1280px (3-column grid, full effects)

### Mobile Optimizations
- Hamburger menu
- Stacked sections
- Touch-friendly buttons (min 44px height)
- Reduced animations
- Optimized image loading

---

## Integration Details

### WhatsApp Integration
- **Type:** Deep linking (wa.me)
- **Phone:** 9833987609
- **Format:** `https://wa.me/919833987609?text={message}`
- **Locations:**
  - Hero CTA button
  - Header "Order Now" button
  - Product cards (with product name pre-filled)
  - Special occasions CTA
  - Pre-booking form (formatted message)
  - Floating button
  - Footer

### Social Media Placeholders
- Instagram: `https://instagram.com/jassfood` (update in mockContent.js)
- Facebook: `https://facebook.com/jassfood` (update in mockContent.js)

---

## SEO Keywords (For Future Content Updates)
- Konkani sweets Mumbai
- Homemade Duderi in Mumbai
- Sandan near me
- Kokani Muslim sweets
- Ramadan sweets Mumbai
- Authentic Konkan delicacies
- Wedding sweets Mumbai
- Traditional Muslim sweets Goregaon

---

## Phase 1 Complete ✅

### What's Been Built (December 2024)
1. ✅ Complete frontend landing page with all sections
2. ✅ Pre-booking form page with WhatsApp integration
3. ✅ Fully responsive design (mobile, tablet, desktop)
4. ✅ Premium design system with luxury aesthetics
5. ✅ Smooth animations and micro-interactions
6. ✅ Easily updatable content structure
7. ✅ High-quality food photography sourced
8. ✅ WhatsApp deep linking throughout
9. ✅ SEO-friendly structure
10. ✅ Glass morphism effects and premium UI

---

## Prioritized Backlog

### P0 Features (Must Have - Before Launch)
- [ ] Replace stock photos with actual product photos
- [ ] Update social media handles (Instagram, Facebook)
- [ ] Add actual customer testimonials
- [ ] Update email address
- [ ] Test all WhatsApp links on mobile devices

### P1 Features (High Priority - Phase 2)
- [ ] Backend API (FastAPI + MongoDB)
- [ ] Order management system
- [ ] Admin panel for content updates
- [ ] Email notifications for pre-bookings
- [ ] Gallery upload functionality
- [ ] Testimonials submission form
- [ ] Analytics integration (Google Analytics)
- [ ] Contact form (alternative to WhatsApp)

### P2 Features (Nice to Have - Phase 3)
- [ ] Online payment integration
- [ ] Order tracking system
- [ ] Customer accounts/login
- [ ] Recipe blog section
- [ ] Multi-language support (English, Hindi, Marathi)
- [ ] Push notifications for special offers
- [ ] Loyalty program/referral system
- [ ] Advanced filtering (by occasion, dietary needs)

---

## Next Action Items

### Immediate (This Week)
1. Get professional photos of actual products
2. Collect 2-3 real customer testimonials
3. Update social media handles
4. Test website on multiple devices
5. Share preview link with founder for feedback

### Short-term (This Month)
1. Soft launch to select customers
2. Gather feedback and iterate
3. Plan backend development (if needed)
4. Create social media content calendar
5. Set up Google My Business

### Long-term (Next 3 Months)
1. Scale based on order volume
2. Add backend if manual processing becomes difficult
3. Expand product offerings
4. Launch Ramadan pre-booking campaign
5. Implement analytics and conversion tracking

---

## Success Metrics (To Track After Launch)

### Primary KPIs
- WhatsApp order conversions (clicks to actual orders)
- Pre-booking form submissions
- Average order value
- Repeat customer rate

### Secondary KPIs
- Website traffic (unique visitors)
- Time on site
- Bounce rate
- Mobile vs desktop traffic
- Social media referrals

---

## Technical Notes

### File Structure
```
/app/frontend/src/
├── data/
│   └── mockContent.js          # All website content
├── pages/
│   ├── LandingPage.jsx         # Main page
│   └── PreBookingForm.jsx      # Pre-booking page
├── components/
│   └── ui/                     # Shadcn UI components
├── App.js                      # Main app component
├── index.css                   # Custom styles + Tailwind
└── App.css                     # Additional app styles
```

### Environment Variables
- `REACT_APP_BACKEND_URL`: Backend URL (for Phase 2)
- Currently frontend-only, no backend calls

### Hot Reload
- Enabled for instant updates during development
- No server restart needed for content changes

---

## Design Philosophy

### Key Principles
1. **Premium yet Homely** - Luxury aesthetic with warmth
2. **Traditional yet Modern** - Classic with contemporary design
3. **Trustworthy and Authentic** - Real stories, real emotions
4. **Conversion-Focused** - Multiple WhatsApp CTAs
5. **Mobile-First** - Optimized for phone orders

### Visual Hierarchy
1. Hero (emotional connection)
2. Products (immediate value)
3. About (trust building)
4. Social proof (testimonials)
5. Strong CTA (conversion)

---

## Support & Maintenance

### Content Updates
- Self-serviceable via `mockContent.js`
- No coding knowledge required for text changes
- Image updates require basic file linking

### Technical Support
- Frontend hosted on Emergent platform
- Automatic deployments
- 24/7 uptime monitoring

---

**Document Version:** 1.0  
**Last Updated:** December 2024  
**Next Review:** After user feedback and photo updates
