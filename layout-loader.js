/* --- SYSTEM: LAYOUT LOADER MODULE (Nav + Footer) --- */

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Load Navbar
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            const navPlaceholder = document.getElementById('navbar-placeholder');
            if (navPlaceholder) {
                navPlaceholder.innerHTML = data;
                initializeNavLogic(); // Ejecutar lógica tras inyectar HTML
            }
        });

    // 2. Load Footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) {
                footerPlaceholder.innerHTML = data;
            }
        });
});

function initializeNavLogic() {
    // Logic: Highlight Active Link
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Logic: Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('is-active');
            navMenu.classList.toggle('active');
        });
    }
}