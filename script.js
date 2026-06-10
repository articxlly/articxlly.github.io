// Language state
let currentLanguage = 'en'; // 'en' or 'zh'

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

// Smooth scroll for internal anchor links ONLY
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

// ==================== LANGUAGE TOGGLE FUNCTION ====================
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update button text
    const langBtnText = document.getElementById('langText');
    if (langBtnText) {
        langBtnText.textContent = currentLanguage === 'en' ? '中文' : 'EN';
    }
    
    // Update all elements with data-en and data-zh attributes
    const elementsWithData = document.querySelectorAll('[data-en][data-zh]');
    
    elementsWithData.forEach(function(element) {
        if (currentLanguage === 'en') {
            // Use English text
            if (element.hasAttribute('data-en')) {
                // For elements with HTML content (like h1 with <br>)
                if (element.tagName === 'H1' || element.tagName === 'H2' || element.tagName === 'H3' || element.tagName === 'P') {
                    element.innerHTML = element.getAttribute('data-en');
                } else {
                    element.textContent = element.getAttribute('data-en');
                }
            }
        } else {
            // Use Chinese text
            if (element.hasAttribute('data-zh')) {
                // For elements with HTML content (like h1 with <br>)
                if (element.tagName === 'H1' || element.tagName === 'H2' || element.tagName === 'H3' || element.tagName === 'P') {
                    element.innerHTML = element.getAttribute('data-zh');
                } else {
                    element.textContent = element.getAttribute('data-zh');
                }
            }
        }
    });
    
    console.log('Language switched to: ' + (currentLanguage === 'en' ? 'English' : '中文'));
}

// Language toggle button event listener
const langToggleBtn = document.getElementById('langBtn');
if (langToggleBtn) {
    langToggleBtn.addEventListener('click', function() {
        if (currentLanguage === 'en') {
            switchLanguage('zh');
        } else {
            switchLanguage('en');
        }
    });
}

console.log('✅ Website loaded - Language button placed beside logo, mobile compatible!');
