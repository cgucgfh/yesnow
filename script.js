document.addEventListener("DOMContentLoaded", () => {
    // Initial animations
    const animatedElements = document.querySelectorAll(".animate__animated");
    animatedElements.forEach(el => {
        el.style.opacity = "1";
    });
    
    // Scroll animations with Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add active class to reveal elements when they are in view
                entry.target.classList.add('active');
            }
        });
    }, {
        root: null, // viewport
        threshold: 0.1, // 10% of the element must be visible
        rootMargin: "-50px" // trigger when element is 50px inside viewport
    });
    
    // Observe all elements with reveal class
    document.querySelectorAll('.reveal, .reveal-text, .reveal-right').forEach(el => {
        observer.observe(el);
    });
    
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Button hover sound effect (optional)
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.classList.add('animate__animated', 'animate__pulse');
        });
        
        button.addEventListener('mouseleave', () => {
            setTimeout(() => {
                button.classList.remove('animate__animated', 'animate__pulse');
            }, 500);
        });
    });

    // Navbar kaydırma etkisi: sayfa 50px'den fazla kaydırılırsa "scrolled" sınıfı ekleniyor
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
