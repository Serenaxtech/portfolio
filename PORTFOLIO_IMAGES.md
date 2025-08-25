# Portfolio Page Image Setup

The portfolio page (`/portfolio`) is ready and includes a "Web Design" section with 4 project photos, followed by a "Graphic and digital design." section with another set of 4 photos underneath.

## Current Setup

Currently using multiple reference images:
- Project 1: `hashacademy.co.png` (Cybersecurity Website)
- Project 2: `organizershashacademy.co.png` (Hash Organizers)
- Project 3: `saraetkarim.png` (Coffee Shop Website)
- Project 4: `hashacademy.co.png` (Additional Project)

## Adding Your Website Images

To display your actual website designs, replace or add these image files to the `public/` folder:

1. **`hashacademy.co.png`** - Used for projects 1 and 4
2. **`organizershashacademy.co.png`** - Used for Hash Organizers project
3. **`saraetkarim.png`** - Used for Coffee Shop project
4. You can replace with individual project images as needed

## Layout Details

- **Sections**: Two styled sections - "Web Design" and "Graphic and digital design."
- **Layout**: Two horizontal flexbox galleries with horizontal scrolling
- **Number of Photos**: 8 total projects displayed (4 under "Web Design", 4 under "Graphic and digital design.")
- **Dimensions**: Images display at their actual/natural size
- **Spacing**: 24px gap between photos in each gallery
- **Effects**: None - clean, simple photo display
- **Max Height**: Limited to 80vh to prevent extremely tall images
- **Navigation**: Back home button removed for cleaner design

## Recommended Image Specifications

- **Format**: JPG, PNG, or WebP
- **Dimensions**: Any size - images will display at their natural dimensions
- **Resolution**: Use high resolution for crisp display
- **File Size**: Keep under 1MB for optimal loading
- **Content**: Website screenshots or project mockups
- **Note**: Images maintain their original aspect ratio and size

## Customizing Projects

To change project titles, descriptions, or add more projects, edit the `webDesigns` array in:
```
src/app/portfolio/page.tsx
```

## Fallback System

The page includes a smart fallback system:
- If images exist → displays the actual website mockups
- If images are missing → shows placeholder with instruction message

## Navigation

The portfolio page is automatically linked from:
- "See more.." sections in the main Projects component
- Includes a "Back to Home" button for easy navigation

## Testing

1. Add your images to `/public/` folder
2. Visit `/portfolio` in your browser
3. Images should load automatically
4. Click "View Project" overlay for future project detail pages
