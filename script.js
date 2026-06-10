// Wait for the entire page to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded - Hire Now button will NOT be blocked');

    // ==================== MOBILE MENU TOGGLE ====================
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking a link (mobile)
    document.querySelectorAll('.nav-link, .book-btn').forEach(function(link) {
        link.addEventListener('click', function() {
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        });
    });

    // ==================== SMOOTH SCROLL (ONLY FOR # LINKS) ====================
    // This ONLY affects links that start with # AND are NOT external
    // The "Hire Now" button has href="https://www.google.com" - it will be IGNORED
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Only handle if it's a valid # link (not just "#" and not empty)
            if (href && href !== '#' && href !== '#home') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ==================== ACTIVE LINK HIGHLIGHT ====================
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    if (sections.length > 0) {
        window.addEventListener('scroll', function() {
            let current = '';
            sections.forEach(function(section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(function(link) {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                if (href === '#' + current) {
                    link.classList.add('active');
                }
            });
        });
    }

    // ==================== HIRE NOW BUTTON - VERIFICATION ====================
    // Make SURE the button works - add a direct click handler (but NOT preventing default)
    const hireNowBtn = document.getElementById('hireNowBtn');
    
    if (hireNowBtn) {
        console.log('✅ Hire Now button FOUND! It will redirect to Google.');
        
        // Optional: Add a click tracker (does NOT block the link)
        hireNowBtn.addEventListener('click', function(e) {
            console.log('🚖 Hire Now button clicked - going to https://www.google.com');
            // DO NOT CALL e.preventDefault() - this would break it!
            // Let the browser handle the href normally
        });
    } else {
        console.error('❌ Hire Now button NOT found! Check if ID="hireNowBtn" exists in HTML');
    }

    // ==================== DEBUG: List all buttons on page ====================
    const allHeroButtons = document.querySelectorAll('.hero-buttons a');
    console.log('Hero buttons found:', allHeroButtons.length);
    allHeroButtons.forEach(function(btn, index) {
        console.log('Button ' + (index + 1) + ' href:', btn.getAttribute('href'));
    });
});
