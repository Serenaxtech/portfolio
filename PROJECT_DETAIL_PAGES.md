# Project Detail Pages

This document outlines the project detail pages implemented in the portfolio.

## HashAcademy Project Page

### Location
`/project/hashacademy` - Accessible via `/src/app/project/hashacademy/page.tsx`

### Navigation
- **From**: First project card in "Featured Projects" section on home page
- **Click Target**: The "Cybersecurity Website" project card (project ID: 1)

### Content Structure
1. **Header Section**
   - Same navbar as home page
   - Proper spacing under navbar

2. **Title & Description**
   - Main title: "Leading Product Strategy @ HashAcademy"
   - Pink highlight on "HashAcademy" using same linear gradient style
   - Subtitle describing the learning platform

3. **Visual Section**
   - PC mockup image (`/pc.png`) showing the website
   - Animated scroll indicator with cursor icon
   - "You can scroll" text

4. **Overview Section**
   - Pink "Overview" label matching site styling
   - Detailed project description
   - Bold "The goal" statement

### Styling & Design
- **Typography**: Inter font family for consistency
- **Colors**: Same color palette (#0C0C0C, #FFC9F0)
- **Responsive**: Uses clamp() for fluid scaling
- **Animations**: Framer Motion for smooth interactions
- **Layout**: Left-aligned with consistent padding system

### Assets Required
- **`/pc.png`** - Computer mockup image showing the HashAcademy website

### Future Expansion
The project detail structure can be reused for other projects by:
1. Creating new page directories under `/src/app/project/`
2. Updating the onClick handlers in Projects.tsx
3. Following the same design patterns and styling

## Technical Implementation
- **Framework**: Next.js 15 with App Router
- **Styling**: Inline styles for precise control matching Figma
- **Animations**: Framer Motion for smooth transitions
- **Images**: Next.js Image component with optimization
- **Responsive**: Mobile-first with clamp() functions
