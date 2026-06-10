// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link, .book-btn').forEach(function(link) {
    link.addEventListener('click', function() {
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    });
});

// Smooth scroll for anchor links ONLY (does NOT affect Hire Now button)
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
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

// Log to confirm button is working
const hireBtn = document.getElementById('hireNowBtn');
if (hireBtn) {
    console.log('✅ Hire Now button found - it will open Google when clicked');
}
