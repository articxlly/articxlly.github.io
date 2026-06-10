// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close menu when clicking a link (mobile)
document.querySelectorAll('.nav-link, .book-btn').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    });
});

// Smooth scroll for INTERNAL anchor links ONLY (links that start with #)
// This does NOT affect external links like "Hire Now" going to Google
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#') && href !== '#') {
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

// Active link highlight on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Ensure "Hire Now" button works (logs to console for debugging)
const hireNowBtn = document.getElementById('hireNowBtn');
if (hireNowBtn) {
    hireNowBtn.addEventListener('click', function() {
        console.log('Hire Now button clicked - redirecting to https://www.google.com');
        // No preventDefault() here - let the link work normally
    });
}

console.log('MeetYou Taxi website loaded - "Hire Now" button links to Google, all other buttons scroll smoothly');
