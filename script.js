/* ============================================
   CLEAN//ONE - Premium Interactions 2026
   Scroll-Driven + Micro-Interactions + Premium Features
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
    
    // New premium features
    initScrollProgress();
    initCursorTrail();
    initParticles();
    initSocialProof();
    initCountdown();
    initStockCounter();
    initStickyCta();
});

/* ============================================
   SCROLL PROGRESS BAR
   ============================================ */
function initScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');
    if (!progressBar) return;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    });
}

/* ============================================
   CURSOR TRAIL EFFECT
   ============================================ */
function initCursorTrail() {
    const cursorTrail = document.getElementById('cursorTrail');
    if (!cursorTrail || window.innerWidth < 768) return;
    
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Smooth cursor follow
    function animateCursor() {
        trailX += (mouseX - trailX) * 0.15;
        trailY += (mouseY - trailY) * 0.15;
        
        cursorTrail.style.left = trailX + 'px';
        cursorTrail.style.top = trailY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Hover effect on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .feature-card, .problem-card, .review-card');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursorTrail.classList.add('hovering'));
        el.addEventListener('mouseleave', () => cursorTrail.classList.remove('hovering'));
    });
}

/* ============================================
   PARTICLES BACKGROUND
   ============================================ */
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    const particleCount = window.innerWidth < 768 ? 15 : 30;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(container);
    }
    
    // Continuously create new particles
    setInterval(() => {
        if (container.children.length < particleCount) {
            createParticle(container);
        }
    }, 2000);
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 4 + 2;
    const left = Math.random() * 100;
    const duration = Math.random() * 20 + 15;
    const delay = Math.random() * 10;
    
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = left + '%';
    particle.style.animationDuration = duration + 's';
    particle.style.animationDelay = delay + 's';
    
    container.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
    }, (duration + delay) * 1000);
}

/* ============================================
   SOCIAL PROOF - Live Viewers + Recent Purchases
   ============================================ */
function initSocialProof() {
    const socialBar = document.getElementById('socialProofBar');
    if (!socialBar) return;
    
    // Show social proof bar after scrolling
    let lastScrollY = 0;
    
    window.addEventListener('scroll', function() {
        const scrollY = window.pageYOffset;
        
        if (scrollY > 300) {
            socialBar.classList.add('visible');
        } else {
            socialBar.classList.remove('visible');
        }
        
        lastScrollY = scrollY;
    });
    
    // Simulate live viewer count updates
    initLiveViewers();
    
    // Simulate recent purchases
    initRecentPurchases();
}

function initLiveViewers() {
    const viewerCount = document.getElementById('viewerCount');
    if (!viewerCount) return;
    
    let currentCount = Math.floor(Math.random() * 30) + 35; // 35-65
    
    setInterval(() => {
        // Random fluctuation between -3 and +3
        const change = Math.floor(Math.random() * 7) - 3;
        currentCount = Math.max(20, Math.min(100, currentCount + change));
        viewerCount.textContent = currentCount;
    }, 5000);
}

function initRecentPurchases() {
    const purchaseText = document.getElementById('purchaseText');
    if (!purchaseText) return;
    
    const purchases = [
        { name: 'Carlos', city: 'Bogotá', time: '3 minutos' },
        { name: 'María', city: 'Medellín', time: '5 minutos' },
        { name: 'Andrés', city: 'Cali', time: '7 minutos' },
        { name: 'Valentina', city: 'Barranquilla', time: '10 minutos' },
        { name: 'Luis', city: 'Cartagena', time: '12 minutos' },
        { name: 'Diana', city: 'Bucaramanga', time: '15 minutos' },
        { name: 'Santiago', city: 'Pereira', time: '18 minutos' },
        { name: 'Camila', city: 'Santa Marta', time: '20 minutos' },
        { name: 'Diego', city: 'Cúcuta', time: '22 minutos' },
        { name: 'Laura', city: 'Ibagué', time: '25 minutos' }
    ];
    
    let currentIndex = 0;
    
    setInterval(() => {
        const purchase = purchases[currentIndex];
        purchaseText.textContent = `${purchase.name} de ${purchase.city} compró hace ${purchase.time}`;
        
        // Animate text change
        purchaseText.style.opacity = '0';
        setTimeout(() => {
            purchaseText.style.opacity = '1';
        }, 200);
        
        currentIndex = (currentIndex + 1) % purchases.length;
    }, 8000);
}

/* ============================================
   COUNTDOWN TIMER - Ends Sept 11, 2026
   ============================================ */
function initCountdown() {
    // Fixed end date: September 11, 2026 at midnight
    const endDate = new Date('2026-09-11T00:00:00-05:00'); // Colombia timezone
    
    function updateCountdown() {
        const now = new Date();
        const diff = endDate - now;
        
        if (diff <= 0) {
            // Offer ended - update inline countdown
            const cdDays = document.getElementById('cdDays');
            const cdHours = document.getElementById('cdHours');
            const cdMinutes = document.getElementById('cdMinutes');
            const cdSeconds = document.getElementById('cdSeconds');
            
            if (cdDays) cdDays.textContent = '00';
            if (cdHours) cdHours.textContent = '00';
            if (cdMinutes) cdMinutes.textContent = '00';
            if (cdSeconds) cdSeconds.textContent = '00';
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        // Update inline countdown in hero
        const cdDays = document.getElementById('cdDays');
        const cdHours = document.getElementById('cdHours');
        const cdMinutes = document.getElementById('cdMinutes');
        const cdSeconds = document.getElementById('cdSeconds');
        
        if (cdDays) cdDays.textContent = String(days).padStart(2, '0');
        if (cdHours) cdHours.textContent = String(hours).padStart(2, '0');
        if (cdMinutes) cdMinutes.textContent = String(minutes).padStart(2, '0');
        if (cdSeconds) cdSeconds.textContent = String(seconds).padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

/* ============================================
   STOCK COUNTER (Removed - simplified page)
   ============================================ */
function initStockCounter() {
    // Removed for simplified page - no stock counter element
}

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
   SCROLL ANIMATIONS - Section Transitions
   ============================================ */
function initScrollAnimations() {
    // Animation types for different elements
    const animationTypes = {
        'section-label': 'scroll-reveal',
        'section-title': 'scroll-reveal',
        'problem-card': 'scroll-reveal',
        'feature-card': 'scroll-reveal',
        'review-card': 'scroll-reveal',
        'faq-item': 'scroll-reveal',
        'comparison-row': 'scroll-reveal',
        'feature-item': 'scroll-reveal',
        'product-details': 'scroll-reveal-right',
        'product-visual': 'scroll-reveal-left',
        'countdown-content': 'scroll-reveal-scale',
        'stat-number': 'scroll-reveal-scale',
        'stat-text': 'scroll-reveal'
    };
    
    // Add scroll-reveal classes to sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, sectionIndex) => {
        // Add section entrance animation
        section.classList.add('section-enter');
        
        const children = section.querySelectorAll(
            Object.keys(animationTypes).join(', ')
        );
        
        children.forEach((child, index) => {
            // Get animation type from map or default
            let animType = 'scroll-reveal';
            for (const [selector, type] of Object.entries(animationTypes)) {
                if (child.classList.contains(selector) || child.matches(selector)) {
                    animType = type;
                    break;
                }
            }
            
            child.classList.add(animType);
            child.style.transitionDelay = `${index * 0.1}s`;
        });
    });
    
    // Initialize intersection observer for scroll animations
    initScrollObserver();
}

function initScrollObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add section-specific effects
                if (entry.target.tagName === 'SECTION') {
                    entry.target.classList.add('section-visible');
                }
            }
        });
    }, observerOptions);
    
    // Observe all scroll-reveal elements
    document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .scroll-reveal-rotate, section').forEach(el => {
        observer.observe(el);
    });
    
    // Also observe sections for parallax effect
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
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
    const cards = document.querySelectorAll('.problem-card, .feature-card, .review-card');
    
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
        const easeOutElastic = 1 - Math.pow(2, -10 * progress) * Math.cos((progress * 10 - 0.75) * (2 * Math.PI) / 1);
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
    const stickyCta = document.getElementById('stickyCta');
    if (!stickyCta) return;
    
    const buySection = document.getElementById('buy');
    if (!buySection) return;
    
    window.addEventListener('scroll', function() {
        const buySectionTop = buySection.getBoundingClientRect().top;
        
        if (buySectionTop > window.innerHeight) {
            stickyCta.classList.add('visible');
        } else {
            stickyCta.classList.remove('visible');
        }
    });
}

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
