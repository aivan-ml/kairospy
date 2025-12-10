/* --- SYSTEM: NAVIGATION LOADER MODULE --- */

document.addEventListener("DOMContentLoaded", function() {
    // 1. Fetch & Inject Navbar
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
            
            // 2. Highlight Active Link Logic
            const currentPage = window.location.pathname.split('/').pop();
            const navLinks = document.querySelectorAll('.main-nav a');
            navLinks.forEach(link => {
                const linkPage = link.getAttribute('href').split('/').pop();
                if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
                    link.classList.add('active');
                }
            });

            // 3. Mobile Menu Logic (Tactical Toggle)
            const menuToggle = document.getElementById('mobile-menu');
            const navMenu = document.querySelector('.nav-menu');

            if (menuToggle && navMenu) {
                menuToggle.addEventListener('click', function() {
                    menuToggle.classList.toggle('is-active');
                    navMenu.classList.toggle('active');
                });
            }
        });
});