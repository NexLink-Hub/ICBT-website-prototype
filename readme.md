ICBT - Environmental Analysis Website (2025)

🆕 Recent updates — Multi-Page Refactor (November 2025)

This major update (November 2025) refactored the entire site from a single-page application (SPA) to a high-performance, traditional multi-page website. This change significantly improves initial page load times, SEO, and maintainability by separating each page and service into its own HTML file.

📋 Overview

The ICBT Website Prototype is a modern, responsive web platform for an environmental analysis and chemical innovation company. It's built with a clean, professional "glassmorphism" design, smooth animations, and is optimized for all devices. This codebase is part of the NexLink-Hub portfolio.

🎨 Features

Design & UI

Glassmorphism Effects: Modern "glass" UI for cards and the header, using backdrop-filter.

Smooth Animations: Fade-in-on-scroll, hover effects, and a branded page loader.

Responsive Design: Fully optimized for mobile, tablet, and desktop.

Branded Page Loader: The site logo (flask) spins as a loading animation between pages.

Professional Look: A clean, corporate-friendly design with a strong color palette.

Technical Features

Multi-Page Architecture: Each page is a separate .html file for performance.

Modular Code: A single shared style.css and script.js file for all pages.

Mobile-First: A fully functional hamburger menu that slides in from the right.

Scroll Animations: Uses the IntersectionObserver API to trigger animations.

Accessibility: Semantic HTML and ARIA labels used for navigation.

Pages Included

index.html - Homepage with hero, services, about, and contact sections.

services.html - A hub page linking to all available services.

about.html - Company mission, vision, and certifications.

contact.html - Contact details, service areas, and information.

water-analysis.html - Detail page for the Water Analysis service.

soil-analysis.html - Detail page for the Soil Analysis service.

chemical-supply.html - Detail page for the Chemical Supply service.

cleaning-products.html - Detail page for the Cleaning Products service.

📁 File Structure

<details>
<summary>Click to view the file structure</summary>

/icbt-website/
│
├── index.html              (Main Home Page)
├── services.html           (Services Hub Page)
├── about.html              (About Us Page)
├── contact.html            (Contact Us Page)
│
├── water-analysis.html     (Service Detail Page 1)
├── soil-analysis.html      (Service Detail Page 2)
├── chemical-supply.html    (Service Detail Page 3)
├── cleaning-products.html  (Service Detail Page 4)
│
├── style.css               (Shared Stylesheet)
├── script.js               (Shared JavaScript)
│
└── /images/                (Optional folder for images)


</details>

🚀 Getting Started

Installation

Clone the repository:

git clone [https://github.com/NexLink-Hub/ICBT-website-prototype.git](https://github.com/NexLink-Hub/ICBT-website-prototype.git)


Navigate to the project directory:

cd ICBT-website-prototype


Open index.html in your browser:
Simply open the index.html file in your web browser. Using a live server (like the "Live Server" extension in VS Code) is recommended.

No Build Process Required

This project is built with plain HTML, CSS, and JavaScript. It uses a CDN for Font Awesome, so no local installation is needed.

🎨 Design System

Colors

Primary Blue: #1e3c72

Secondary Blue: #2a5298

Accent Gold: #d4af37

Dark Text: #1e293b

Medium Text: #475569

Light Text: #64748b

Glass Background: rgba(255, 255, 255, 0.85)

Typography

Font Family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif (Uses modern system fonts for maximum performance).

Weights: 400, 500, 600, 700, 800.

📱 Responsive Breakpoints

/* All mobile styles are applied up to 968px */
Mobile: < 968px
Desktop: > 968px


Mobile Features

Hamburger menu with slide-in panel from the right.

body.no-scroll class to prevent scrolling when the menu is open.

Stacked layouts for all sections.

Touch-optimized buttons and service cards.

🎯 Key Interactions

1. Page Loader

On Page Load: The loader (spinning gold flask) shows and then fades out.

On Navigation: Clicking an internal link fades the loader back in, covering the page transition.

2. Mobile Menu

Open: Hamburger icon animates to an "X". A dark overlay fades in, and the menu panel slides in from the right.

Close: Clicking the "X" button, the overlay, or any navigation link closes the menu.

3. Scroll Animations

Elements with the .animate-on-scroll class are observed.

When they enter the viewport, they fade and slide in from the bottom.

Service cards have a special staggered animation delay.

4. Hover Effects

Nav Links: A gold underline animates in.

Buttons: Lift up with a shadow effect.

Service Cards: Lift up, and the top border (a gradient) animates in from the left.

🔒 Security & Limitations

Important: This is a frontend-only static website. It serves as a high-fidelity prototype.

No Backend: Forms and contact methods are for demonstration only.

Static Data: All content (services, text) is hardcoded in the HTML.

No Database: There is no user authentication or database.

📝 License

© 2025 ICBT. All rights reserved. Created and owned by NexLink-Hub.