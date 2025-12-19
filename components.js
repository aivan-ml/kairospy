/* components.js - KAIROSPY CORE UI SYSTEM */

document.addEventListener("DOMContentLoaded", function() {
    renderHeader();
    renderFooter();
});

function renderHeader() {
    const headerHTML = `
    <nav class="main-nav">
        <div class="container nav-container">
            <a href="index.html" class="nav-logo">KAIROS<span>PY</span>_</a>
            
            <button class="menu-toggle" aria-label="Toggle Navigation">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>

            <ul class="nav-links">
                <li><a href="index.html">Ops_Center</a></li>
                <li><a href="foundry_ops.html">Foundry</a></li>
                <li><a href="tactical_ui.html">Tactical_UI</a></li>
                <li><a href="kinetic-edge.html">Kinetic</a></li>
                <li><a href="case_files.html">Case_Files</a></li>
                <li><a href="network.html">Network</a></li>
                <li><a href="blog.html">Intel</a></li>
            </ul>
        </div>
    </nav>
    `;

    // 1. Inyectar HTML
    const headerPlaceholder = document.getElementById('kairospy-header');
    if (headerPlaceholder) headerPlaceholder.innerHTML = headerHTML;

    // 2. Lógica de "Active Link" (Resaltar página actual)
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    // 3. Lógica del Menú Móvil (Toggle)
    const toggleBtn = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-links');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            toggleBtn.classList.toggle('is-active');
            navMenu.classList.toggle('mobile-open');
        });
    }
}

function renderFooter() {
    const footerHTML = `
    <div class="container">
        <div style="margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 1px solid #333;">
            <p style="font-family: var(--font-code); font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem;">
                > DIRECT_CHANNEL_ESTABLISHED:
            </p>
            <a href="mailto:ops@kairospy.com" style="font-size: 1.2rem; color: #fff; text-decoration: none; border-bottom: 1px solid var(--accent-primary);">
                ops@kairospy.com
            </a>
        </div>
        
        <p>&copy; 2025 KAIROSPY. All Operations Classified.</p>
        <p style="font-family: var(--font-code); font-size: 0.8rem; color: #444;">
            EST. MADRID // <a href="privacy.html" style="color: #555; text-decoration: none; transition: color 0.3s;">PRIVACY_PROTOCOL</a>
        </p>
    </div>
    `;

    const footerPlaceholder = document.getElementById('kairospy-footer');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
        footerPlaceholder.classList.add('footer'); // Añadir clase base
    }
}