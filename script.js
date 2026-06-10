// Language state
let currentLanguage = 'en'; // 'en' or 'zh'

// Get reference to language toggle container
const languageToggle = document.getElementById('languageToggle');

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
    
    // Update language toggle container class for button positioning
    if (languageToggle) {
        if (currentLanguage === 'en') {
            languageToggle.classList.add('english-mode');
        } else {
            languageToggle.classList.remove('english-mode');
        }
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
    
    // Handle placeholder images text - update alt attributes if needed
    const images = document.querySelectorAll('img');
    images.forEach(function(img) {
        if (currentLanguage === 'en') {
            if (img.hasAttribute('data-alt-en')) {
                img.alt = img.getAttribute('data-alt-en');
            }
        } else {
            if (img.hasAttribute('data-alt-zh')) {
                img.alt = img.getAttribute('data-alt-zh');
            }
        }
    });
    
    console.log('Language switched to: ' + (currentLanguage === 'en' ? 'English' : '中文') + ' - Button position adjusted');
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

// Initialize button position for English (default)
if (languageToggle && currentLanguage === 'en') {
    languageToggle.classList.add('english-mode');
}

console.log('✅ Website loaded - Language toggle button adjusts position based on language!');
