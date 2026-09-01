/* ============================================
   CLEAN//ONE - Landing Page Scripts
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    initNavbar();
    
    // FAQ accordion
    initFAQ();
    
    // Scroll animations
    initScrollAnimations();
    
    // Smooth scroll for anchor links
    initSmoothScroll();
    
    // Counter animation for stats
    initCounterAnimation();
});

/* ============================================
   NAVBAR
   ============================================ */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add scrolled class
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

/* ============================================
   FAQ ACCORDION
   ============================================ */
function initFAQ() {
    // Initialize first FAQ item as open
    const firstFaq = document.querySelector('.faq-item');
    if (firstFaq) {
        firstFaq.classList.add('active');
    }
}

function toggleFaq(button) {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */
function initScrollAnimations() {
    // Add animate-on-scroll class to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const children = section.querySelectorAll('.section-label, .section-title, .problem-card, .feature-card, .product-card, .review-card, .faq-item, .comparison-row');
        children.forEach((child, index) => {
            child.classList.add('animate-on-scroll');
            child.style.transitionDelay = `${index * 0.1}s`;
        });
    });
    
    // Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

/* ============================================
   SMOOTH SCROLL
   ============================================ */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ============================================
   COUNTER ANIMATION
   ============================================ */
function initCounterAnimation() {
    const statNumber = document.querySelector('.stat-number');
    if (!statNumber) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(statNumber, 0, 87, 2000);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(statNumber);
}

function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    const startValue = start;
    const endValue = end;
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.round(startValue + (endValue - startValue) * easeOutQuart);
        
        element.textContent = current + '%';
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

/* ============================================
   PRODUCT IMAGE PLACEHOLDER
   ============================================ */
// You can replace this with actual product images
function loadProductImage() {
    const placeholder = document.querySelector('.product-placeholder');
    if (placeholder) {
        // Replace with actual image when available
        // placeholder.innerHTML = '<img src="product.png" alt="CLEAN//ONE Kit" style="width: 100%; height: 100%; object-fit: cover;">';
    }
}

/* ============================================
   CONVERSION TRACKING (Optional)
   ============================================ */
// Add this for analytics tracking
function trackConversion(eventName) {
    // Example: gtag('event', eventName, { 'event_category': 'conversion' });
    console.log('Conversion tracked:', eventName);
}

// Track CTA clicks
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function() {
        trackConversion('cta_click');
    });
});

/* ============================================
   STICKY CTA FOR MOBILE (Optional)
   ============================================ */
function initStickyCta() {
    if (window.innerWidth <= 768) {
        const stickyCta = document.createElement('div');
        stickyCta.className = 'sticky-cta';
        stickyCta.innerHTML = `
            <a href="#buy" class="btn-primary btn-full" style="width: 100%; justify-content: center; border-radius: 0; padding: 16px;">
                Compra Ahora - Envío Gratis
            </a>
        `;
        stickyCta.style.cssText = `
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 999;
            background: var(--bg-primary);
            border-top: 1px solid var(--border-color);
            display: none;
        `;
        
        document.body.appendChild(stickyCta);
        
        // Show/hide based on scroll position
        const buySection = document.getElementById('buy');
        window.addEventListener('scroll', function() {
            const buySectionTop = buySection.getBoundingClientRect().top;
            if (buySectionTop > window.innerHeight) {
                stickyCta.style.display = 'block';
            } else {
                stickyCta.style.display = 'none';
            }
        });
    }
}

// Initialize sticky CTA
initStickyCta();