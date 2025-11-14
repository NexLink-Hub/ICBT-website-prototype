// Page Loader Logic
// Hide loader once page is fully loaded
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Wait for the DOM to be fully loaded before running other scripts
document.addEventListener('DOMContentLoaded', () => {

    // Show loader when navigating away to another internal page
    document.querySelectorAll('a').forEach(link => {
        const href = link.getAttribute('href');
        const target = link.getAttribute('target');

        // Check if it's a real, internal navigation link
        if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:') && target !== '_blank') {
            link.addEventListener('click', (e) => {
                // Don't prevent default, just show the loader
                // Check if default was prevented by another script
                if (!e.defaultPrevented) {
                    document.body.classList.remove('loaded');
                }
            });
        }
    });

    /**
     * Module: Header Scroll Effect
     * Adds a 'scrolled' class to the header on scroll.
     */
    const initHeaderScroll = () => {
        const header = document.getElementById('header');
        if (!header) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    };

    /**
     * Module: Mobile Menu Toggle
     * Handles opening and closing the hamburger menu.
     */
    const initMobileMenu = () => {
        const hamburgerBtn = document.getElementById('hamburger-menu');
        const navLinks = document.getElementById('nav-links');
        const overlay = document.getElementById('mobile-menu-overlay');
        // const navLinksList = document.querySelectorAll('#nav-links a'); // No longer needed

        if (!hamburgerBtn || !navLinks || !overlay) return;

        const toggleMenu = (forceClose = false) => {
            // Check the *current* state
            const isActive = navLinks.classList.contains('active');
            
            // Determine the *new* state
            // If forceClose is true, new state is always false.
            // Otherwise, it's the opposite of the current state.
            const newState = forceClose ? false : !isActive;

            hamburgerBtn.classList.toggle('active', newState);
            hamburgerBtn.setAttribute('aria-expanded', newState);
            navLinks.classList.toggle('active', newState);
            overlay.classList.toggle('active', newState);
            document.body.classList.toggle('no-scroll', newState);
        };

        // Toggle menu on hamburger click
        hamburgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });

        // Close menu when overlay is clicked
        overlay.addEventListener('click', () => toggleMenu(true));

        // NEW: Stop clicks on the menu panel itself (the white part) from closing the menu
        navLinks.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // REMOVED: The click listener on navLinksList (the links).
        // We want the links to just navigate normally. The loader will handle the transition.
        /*
        navLinksList.forEach(link => {
            link.addEventListener('click', () => {
                // Only force close if it's already active
                if (navLinks.classList.contains('active')) {
                    toggleMenu(true);
                }
            });
        });
        */
    };
    
    /**
     * Module: Scroll Animations
     * Adds 'is-visible' class to elements as they enter the viewport.
     */
    const initScrollAnimations = () => {
        // Animate hero content on page load
        const heroElements = document.querySelectorAll('.hero-content > *');
        heroElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('is-visible');
            }, index * 100); // Staggered delay
        });

        // IntersectionObserver for scroll animations
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    
                    // Special staggered animation for service cards
                    if (entry.target.classList.contains('services-grid')) {
                        const cards = entry.target.querySelectorAll('.service-card.animate-on-scroll');
                        cards.forEach((card, index) => {
                            card.style.transitionDelay = `${index * 150}ms`;
                            card.classList.add('is-visible');
                        });
                    } else {
                        // Standard animation for all other elements
                        entry.target.classList.add('is-visible');
                    }
                    
                    // Stop observing once animated
                    obs.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1, // Trigger when 10% of the element is visible
            rootMargin: "0px 0px -50px 0px" // Start animation 50px from bottom
        });

        // Observe all elements with the .animate-on-scroll class
        const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
        elementsToAnimate.forEach(el => observer.observe(el));
        
        // Observe the services-grid separately for its children
        const servicesGrid = document.querySelector('.services-grid');
        if (servicesGrid) {
            observer.observe(servicesGrid);
        }
    };

    // --- Initialize All Modules ---
    initHeaderScroll();
    initMobileMenu();
    initScrollAnimations();

});