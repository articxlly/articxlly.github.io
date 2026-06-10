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

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]:not([href="https://www.google.com"])').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
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

// Popup hover effect (additional interactive popup for buttons)
document.querySelectorAll('.btn, .btn-pricing, .btn-cta, .btn-primary-large, .book-btn, .social-icons a').forEach(button => {
    button.addEventListener('mouseenter', function() {
        // Simple scale effect is already in CSS, this adds a subtle sound-like visual feedback
        this.style.cursor = 'pointer';
    });
    button.addEventListener('mouseleave', function() {
        // Reset any inline styles if needed
    });
});

// Console log for confirmation
console.log('MeetYou Taxi website loaded - all buttons have hover effects and link to Google');
