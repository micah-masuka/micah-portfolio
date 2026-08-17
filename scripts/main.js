document.addEventListener('DOMContentLoaded', function() {
    // Create scroll indicator
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    document.body.appendChild(scrollIndicator);

    // Update scroll indicator width based on scroll position
    window.addEventListener('scroll', function() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollIndicator.style.width = scrolled + '%';
    });

    // Make all elements immediately visible
    document.querySelectorAll('.fade-in').forEach(element => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        element.style.animationPlayState = 'running';
    });

    // Force visibility of profile container and position title
    const profileContainer = document.querySelector('.profile-container');
    const positionTitle = document.querySelector('.position-title');
    if (profileContainer) {
        profileContainer.style.opacity = '1';
        profileContainer.style.transform = 'translateY(0)';
    }
    if (positionTitle) {
        positionTitle.style.opacity = '1';
    }

    // Simplified button hover effect
    const buttons = document.querySelectorAll('.contact-btn, .go-up-btn, .download-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = '';
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Reduced number of floating particles in hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        particlesContainer.style.position = 'absolute';
        particlesContainer.style.top = '0';
        particlesContainer.style.left = '0';
        particlesContainer.style.width = '100%';
        particlesContainer.style.height = '100%';
        particlesContainer.style.overflow = 'hidden';
        particlesContainer.style.zIndex = '1';
        particlesContainer.style.pointerEvents = 'none'; // Prevent particles from interfering with clicks
        hero.appendChild(particlesContainer);

        // Create particles (reduced from 20 to 10)
        for (let i = 0; i < 10; i++) {
            createParticle(particlesContainer);
        }
    }

    function createParticle(container) {
        const particle = document.createElement('div');
        
        // Random particle styling (simplified)
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 5 + 3 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = Math.random() > 0.5 ? 
            'rgba(108, 92, 231, ' + (Math.random() * 0.15 + 0.05) + ')' :
            'rgba(0, 184, 148, ' + (Math.random() * 0.15 + 0.05) + ')';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none'; // Ensure particles don't block clicks
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Animation (longer duration for less CPU usage)
        particle.style.animation = 'float ' + (Math.random() * 15 + 10) + 's ease-in-out infinite';
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        container.appendChild(particle);
    }

    // Go to top button functionality
    const goUpBtn = document.querySelector('.go-up-btn');
    if (goUpBtn) {
        goUpBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}); 