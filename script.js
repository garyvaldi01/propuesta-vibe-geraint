document.addEventListener("DOMContentLoaded", (event) => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initial load animations
    const tl = gsap.timeline();
    
    tl.fromTo('header',
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
    .fromTo('.hero h5', 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
        "-=0.5"
    )
    .fromTo('.hero h1', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        "-=0.4"
    )
    .fromTo('.hero p', 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
        "-=0.6"
    )
    .fromTo('.hero .btn-primary', 
        { y: 20, opacity: 0, scale: 0.9 }, 
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.5)' },
        "-=0.4"
    );

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll Animations
    const fadeUpElements = document.querySelectorAll('.fade-up');
    
    fadeUpElements.forEach(el => {
        // Calculate delay if specified via CSS custom property inline
        const rawDelay = el.style.getPropertyValue('--delay') || '0s';
        const delay = parseFloat(rawDelay);

        gsap.fromTo(el,
            { y: 50, opacity: 0 },
            {
                y: 0, 
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
                delay: delay,
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%', // triggers when top of el is 85% down the viewport
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    // Simple parallax for blobs
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        gsap.to('.blob-1', {
            x: (x - 0.5) * 50,
            y: (y - 0.5) * 50,
            duration: 2,
            ease: "power2.out"
        });
        
        gsap.to('.blob-2', {
            x: (x - 0.5) * -70,
            y: (y - 0.5) * -70,
            duration: 2,
            ease: "power2.out"
        });
    });
});
