/**
 * components.js — Reusable header, dropdown handlers, and footer.
 * Sidebar menu is now inline in each HTML file for active-state highlighting.
 * Auto-detects page depth to resolve asset paths correctly.
 */

(function () {
    // --- PATH DETECTION ---
    function getBasePath() {
        const link = document.querySelector('link[rel="stylesheet"][href*="style.css"]');
        if (!link) return '';
        const href = link.getAttribute('href');
        return href.replace('style.css', '');
    }

    const base = getBasePath();

    // Detect which section is active based on current URL
    function getActiveSection() {
        const path = window.location.pathname.toLowerCase();
        if (path.includes('/piramida/')) return 'piramida';
        if (path.includes('/prizma/')) return 'prizma';
        return '';
    }

    const activeSection = getActiveSection();

    // --- HEADER ---
    function renderHeader() {
        const el = document.getElementById('app-header');
        if (!el) return;

        const prizmaActive = activeSection === 'prizma' ? ' activeButton' : '';
        const piramidaActive = activeSection === 'piramida' ? ' activeButton' : '';

        el.outerHTML = `
        <header class="header">
            <h1><a href="${base}index.html" class="headerTitle">Prizma i Piramida</a></h1>
            <div class="navButtonsContainer">
                <a href="${base}prizma/PojamIVrstePrizme/pojamOsnovniEl.html" class="navButton${prizmaActive}">Prizma</a>
                <a href="${base}piramida/PojamIVrstePiramide/pojamOsnovniEl.html" class="navButton${piramidaActive}">Piramida</a>
            </div>
        </header>`;
    }

    // --- DROPDOWN HANDLERS ---
    // Attach click handlers to dropdown buttons in the inline sidebar
    function initDropdowns() {
        document.querySelectorAll('#app-menu .dropbtn').forEach(function (button) {
            // Skip link-type dropbtns (e.g. "Kako da nacrtam prizmu?")
            if (button.tagName === 'A') return;

            button.addEventListener('click', function () {
                const dropdownContent = this.nextElementSibling;
                if (!dropdownContent) return;

                dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';

                const arrowDown = this.querySelector('img');
                if (arrowDown) arrowDown.classList.toggle('rotate');

                this.classList.toggle('active');

                // Close other open dropdowns (but not the one with the active page)
                document.querySelectorAll('#app-menu .dropdown-content').forEach(function (content) {
                    if (content !== dropdownContent && !content.querySelector('.menu-active')) {
                        content.style.display = 'none';
                        const arrow = content.previousElementSibling ? content.previousElementSibling.querySelector('img') : null;
                        if (arrow) arrow.classList.remove('rotate');
                        if (content.previousElementSibling) content.previousElementSibling.classList.remove('active');
                    }
                });
            });
        });

        // Close dropdowns when clicking outside (but keep active page dropdown open)
        document.addEventListener('click', function (event) {
            if (!event.target.closest('#app-menu .dropdown')) {
                document.querySelectorAll('#app-menu .dropdown-content').forEach(function (content) {
                    if (content.querySelector('.menu-active')) return;
                    content.style.display = 'none';
                    var arrow = content.previousElementSibling ? content.previousElementSibling.querySelector('img') : null;
                    if (arrow) arrow.classList.remove('rotate');
                    if (content.previousElementSibling) content.previousElementSibling.classList.remove('active');
                });
            }
        });
    }

    // --- FOOTER ---
    function renderFooter() {
        const wrapper = document.querySelector('.wrapper');
        if (!wrapper) return;

        if (document.querySelector('.app-footer')) return;

        const footer = document.createElement('footer');
        footer.className = 'app-footer';
        footer.innerHTML = `
            <div class="footer-content">
                <div class="footer-brand">
                    <h3> Prizma i Piramida</h3>
                    <p>Elektronske lekcije iz prostorne geometrije za učenike osnovne škole. Interaktivni 3D modeli, formule, rešeni zadaci i kvizovi.</p>
                </div>
                <div class="footer-links">
                    <h4>Brza navigacija</h4>
                    <a href="${base}index.html"> Početna</a>
                    <a href="${base}prizma/PojamIVrstePrizme/pojamOsnovniEl.html"> Prizma</a>
                    <a href="${base}piramida/PojamIVrstePiramide/pojamOsnovniEl.html"> Piramida</a>
                </div>
                <div class="footer-info">
                    <h4>O projektu</h4>
                    <p>Ovaj projekat je kreiran u okviru master rada sa ciljem da olakša učenicima savladavanje gradiva iz oblasti prizme i piramide uz pomoć interaktivnih materijala.</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} Prizma i Piramida — Elektronske lekcije | Master rad</p>
            </div>
        `;

        wrapper.appendChild(footer);
    }

    // --- INIT ---
    document.addEventListener('DOMContentLoaded', function () {
        renderHeader();
        initDropdowns();
        renderFooter();
    });
})();
