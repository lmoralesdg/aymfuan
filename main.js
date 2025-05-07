// Script para la interacción del menú lateral y acciones de la página
document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos DOM
    const toggleBtn = document.querySelector('.toggle-btn');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const menuLinks = document.querySelectorAll('.sidebar .menu ul li a');
    
    // Toggle menú lateral
    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        mainContent.classList.toggle('active');
        toggleBtn.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace (solo en móviles)
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
                mainContent.classList.remove('active');
                toggleBtn.classList.remove('active');
            }
        });
    });

    // Efecto smooth scroll para los enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Animación de aparición al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observa todas las secciones para animarlas cuando aparecen en el viewport
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
    
    // Manejo de imágenes con lazy loading
    if ('loading' in HTMLImageElement.prototype) {
        // El navegador soporta lazy loading nativo
        document.querySelectorAll('img').forEach(img => {
            img.setAttribute('loading', 'lazy');
        });
    } else {
        // Fallback para navegadores que no soportan lazy loading nativo
        // Aquí se podría implementar una solución con JavaScript
        console.log('Este navegador no soporta lazy loading nativo de imágenes');
    }

    // Mejora de accesibilidad: hacer que los elementos interactivos sean accesibles con teclado
    document.querySelectorAll('.method-card, .unit-card, .example-img').forEach(el => {
        el.setAttribute('tabindex', '0');
        
        // Agregar evento de teclado para activar el hover con teclado
        el.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Animación para el banner creativo
    const creativeBanner = document.querySelector('.creative-banner');
    if (creativeBanner) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const bannerPosition = creativeBanner.offsetTop;
            const windowHeight = window.innerHeight;
            
            if (scrollPosition > bannerPosition - windowHeight + 200) {
                creativeBanner.classList.add('animate');
            }
        });
    }
    
    // Añadir clases CSS adicionales
    document.querySelector('.section-subtitle .glow-icon').classList.add('animated-icon');
});

// Agregar clases de animación adicionales
document.addEventListener('DOMContentLoaded', function() {
    // Añadir clases de animación a los elementos seleccionados
    const addAnimation = (selector, animationClass) => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add(animationClass);
        });
    };
    
    // Aplicar animaciones específicas
    addAnimation('.unit-icon .fa-microchip', 'pulse-icon');
    addAnimation('.unit-icon .fa-sliders-h', 'pulse-icon');
    addAnimation('.unit-icon .fa-object-group', 'pulse-icon');
    addAnimation('.method-card .fa-hands-helping', 'float-icon');
    addAnimation('.method-card .fa-lightbulb', 'glow-icon');
    addAnimation('.method-card .fa-book-open', 'float-icon');
    addAnimation('.logo-icon', 'spin-icon');
    
    // Funcionalidad del formulario de contacto (simulada)
    const ctaBtn = document.querySelector('.cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('¡Gracias por tu interés! En breve nos pondremos en contacto contigo.');
        });
    }
});

// CSS adicional para animaciones de aparición
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-in.show {
            opacity: 1;
            transform: translateY(0);
        }
        .creative-banner {
            transform: scale(0.95);
            opacity: 0.8;
            transition: all 0.5s ease;
        }
        .creative-banner.animate {
            transform: scale(1);
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
});
