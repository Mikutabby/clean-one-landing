/* ============================================
   CLEAN//ONE - Premium Interactions 2026
   Scroll-Driven + Micro-Interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
    initNavbar();
    initFAQ();
    initScrollAnimations();
    initSmoothScroll();
    initMicroInteractions();
    initParallax();
    initCounterAnimation();
    initMagneticButtons();
    initRippleEffect();
});

/* ============================================
   NAVBAR - Glassmorphism + Scroll Effect
   ============================================ */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        lastScroll = window.pageYOffset;
        
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleNavbarScroll(lastScroll);
                ticking = false;
            });
            ticking = true;
        }
    });
}

function handleNavbarScroll(scrollY) {
    const navbar = document.getElementById('navbar');
    
    if (scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

/* ============================================
   FAQ ACCORDION - Smooth Animations
   ============================================ */
function initFAQ() {
    const firstFaq = document.querySelector('.faq-item');
    if (firstFaq) {
        firstFaq.classList.add('active');
    }
}

function toggleFaq(button) {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains('active');
    const allFaqs = document.querySelectorAll('.faq-item');
    
    // Close all FAQ items with animation
    allFaqs.forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
        }
    });
    
    // Toggle clicked item
    if (!isActive) {
        faqItem.classList.add('active');
        
        // Smooth scroll to FAQ if needed
        const rect = faqItem.getBoundingClientRect();
        if (rect.top > window.innerHeight * 0.7) {
            faqItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}

/* ============================================
   SCROLL ANIMATIONS - CSS Scroll-Driven
   ============================================ */
function initScrollAnimations() {
    // Add scroll-reveal class to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const children = section.querySelectorAll(
            '.section-label, .section-title, .problem-card, .feature-card, ' +
            '.product-card, .review-card, .faq-item, .comparison-row, ' +
            '.feature-item, .stat-number, .stat-text'
        );
        children.forEach((child, index) => {
            child.classList.add('scroll-reveal');
            child.style.animationDelay = `${index * 0.08}s`;
        });
    });
    
    // Fallback for browsers without scroll-timeline
    if (!CSS.supports('animation-timeline', 'scroll()')) {
        initScrollFallback();
    }
}

function initScrollFallback() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
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
   MICRO-INTERACTIONS
   ============================================ */
function initMicroInteractions() {
    // Card tilt effect
    const cards = document.querySelectorAll('.problem-card, .feature-card, .product-card, .review-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function(e) {
            this.style.transition = 'transform 0.15s ease';
        });
        
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

/* ============================================
   PARALLAX EFFECT
   ============================================ */
function initParallax() {
    const heroVisual = document.querySelector('.hero-visual');
    const floatingTools = document.querySelectorAll('.tool');
    
    if (!heroVisual || floatingTools.length === 0) return;
    
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const scrolled = window.pageYOffset;
                const heroHeight = document.querySelector('.hero').offsetHeight;
                
                if (scrolled < heroHeight) {
                    // Hero parallax
                    heroVisual.style.transform = `translateY(${scrolled * 0.3}px)`;
                    
                    // Floating tools parallax with different speeds
                    floatingTools.forEach((tool, index) => {
                        const speed = 0.2 + (index * 0.1);
                        tool.style.transform = `translateY(${scrolled * speed}px)`;
                    });
                }
                
                ticking = false;
            });
            ticking = true;
        }
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
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Spring easing
        const easeOutElastic = 1 - Math.pow(2, -10 * progress) * Math.cos((progress * 10 - 0.75) * (2 * Math.PI) / 3);
        const current = Math.round(start + (end - start) * easeOutElastic);
        
        element.textContent = current + '%';
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

/* ============================================
   MAGNETIC BUTTONS
   ============================================ */
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn-primary, .nav-cta');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) scale(1.02)`;
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0) scale(1)';
            this.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
        });
        
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.15s ease';
        });
    });
}

/* ============================================
   RIPPLE EFFECT
   ============================================ */
function initRippleEffect() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                width: 0;
                height: 0;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: translate(-50%, -50%);
                pointer-events: none;
                left: ${x}px;
                top: ${y}px;
            `;
            
            this.appendChild(ripple);
            
            ripple.animate([
                { width: '0', height: '0', opacity: 1 },
                { width: '300px', height: '300px', opacity: 0 }
            ], {
                duration: 600,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
            }).onfinish = () => ripple.remove();
        });
    });
}

/* ============================================
   CONVERSION TRACKING
   ============================================ */
function trackConversion(eventName, data = {}) {
    console.log('Conversion tracked:', eventName, data);
    
    // Example: Google Analytics
    // gtag('event', eventName, data);
    
    // Example: Facebook Pixel
    // fbq('track', eventName, data);
}

// Track CTA clicks
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function() {
        trackConversion('cta_click', {
            section: this.closest('section')?.id || 'unknown',
            text: this.textContent.trim()
        });
    });
});

/* ============================================
   STICKY CTA FOR MOBILE
   ============================================ */
function initStickyCta() {
    if (window.innerWidth > 768) return;
    
    const stickyCta = document.createElement('div');
    stickyCta.className = 'sticky-cta';
    stickyCta.innerHTML = `
        <a href="#buy" class="btn btn-primary btn-full" style="width: 100%; justify-content: center; border-radius: 0; padding: 18px;">
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
        border-top: 1px solid var(--border-subtle);
        display: none;
        transform: translateY(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(stickyCta);
    
    const buySection = document.getElementById('buy');
    if (!buySection) return;
    
    window.addEventListener('scroll', function() {
        const buySectionTop = buySection.getBoundingClientRect().top;
        if (buySectionTop > window.innerHeight) {
            stickyCta.style.display = 'block';
            requestAnimationFrame(() => {
                stickyCta.style.transform = 'translateY(0)';
            });
        } else {
            stickyCta.style.transform = 'translateY(100%)';
            setTimeout(() => {
                stickyCta.style.display = 'none';
            }, 300);
        }
    });
}

// Initialize sticky CTA
initStickyCta();

/* ============================================
   LOADING STATE
   ============================================ */
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Trigger hero animations
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '1';
    }
});

/* ============================================
   PREFERS REDUCED MOTION CHECK
   ============================================ */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function handleReducedMotion() {
    if (prefersReducedMotion.matches) {
        document.documentElement.classList.add('reduced-motion');
    } else {
        document.documentElement.classList.remove('reduced-motion');
    }
}

prefersReducedMotion.addEventListener('change', handleReducedMotion);
handleReducedMotion();