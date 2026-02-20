/**
 * components.js — Reusable header, sidebar menu, and footer
 * Auto-detects page depth to resolve asset paths correctly.
 */

(function () {
    // --- PATH DETECTION ---
    // Detect base path from the stylesheet link (../../style.css vs style.css)
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

    // --- SIDEBAR MENU ---
    function renderMenu() {
        const el = document.getElementById('app-menu');
        if (!el) return;

        el.innerHTML = `
            <!-- ===== PRIZMA MENI ===== -->
            <div style="padding: 8px 10px; font-weight: bold; color: rgb(106, 84, 247); font-size: 0.85em; text-transform: uppercase; letter-spacing: 1px;">
                Prizma
            </div>

            <div class="dropdown">
                <button class="dropbtn">
                    <p>Pojam i vrste prizme</p>
                    <img class="arrowDown" src="${base}arrowDown.png" width="20" height="20" />
                    <div class="decorLine"></div>
                </button>
                <div class="dropdown-content">
                    <a href="${base}prizma/PojamIVrstePrizme/pojamOsnovniEl.html">Pojam i osnovni elementi</a>
                    <a href="${base}prizma/PojamIVrstePrizme/vrstePrizme.html">Vrste prizme</a>
                    <a href="${base}prizma/PojamIVrstePrizme/dijagonale.html">Dijagonale i dijagonalni preseci</a>
                </div>
            </div>

            <div class="dropdown">
                <a href="${base}prizma/KakoDaNactamPrizmu/crtanje.html" class="dropbtn" style="text-decoration: none; font-size: small;">
                    <p>Kako da nacrtam prizmu?</p>
                    <div class="decorLine"></div>
                </a>
            </div>

            <div class="dropdown">
                <button class="dropbtn">
                    <p>Površina i zapremina prizme</p>
                    <img src="${base}arrowDown.png" width="20" height="20" />
                    <div class="decorLine"></div>
                </button>
                <div class="dropdown-content">
                    <a href="${base}prizma/PovrsinaZapremina/povrsinaFormule.html">Površina</a>
                    <a href="${base}prizma/PovrsinaZapremina/zapreminaFormule.html">Zapremina</a>
                </div>
            </div>

            <div class="dropdown">
                <button class="dropbtn">
                    <p>Pravilna trostrana prizma</p>
                    <img src="${base}arrowDown.png" width="20" height="20" />
                    <div class="decorLine"></div>
                </button>
                <div class="dropdown-content">
                    <a href="${base}prizma/PravilnaTrostranaPrizma/crtanje.html">Crtanje</a>
                    <a href="${base}prizma/PravilnaTrostranaPrizma/povrsina.html">Površina</a>
                    <a href="${base}prizma/PravilnaTrostranaPrizma/zapremina.html">Zapremina</a>
                </div>
            </div>

            <div class="dropdown">
                <button class="dropbtn">
                    <p>Pravilna četvorostrana prizma</p>
                    <img src="${base}arrowDown.png" width="20" height="20" />
                    <div class="decorLine"></div>
                </button>
                <div class="dropdown-content">
                    <a href="${base}prizma/PravilnaCetvorostranaPrizma/crtanje.html">Crtanje</a>
                    <a href="${base}prizma/PravilnaCetvorostranaPrizma/povrsina.html">Površina</a>
                    <a href="${base}prizma/PravilnaCetvorostranaPrizma/zapremina.html">Zapremina</a>
                </div>
            </div>

            <div class="dropdown">
                <button class="dropbtn">
                    <p>Pravilna šestostrana prizma</p>
                    <img src="${base}arrowDown.png" width="20" height="20" />
                    <div class="decorLine"></div>
                </button>
                <div class="dropdown-content">
                    <a href="${base}prizma/PravilnaSestostranaPrizma/crtanje.html">Crtanje</a>
                    <a href="${base}prizma/PravilnaSestostranaPrizma/povrsina.html">Površina</a>
                    <a href="${base}prizma/PravilnaSestostranaPrizma/zapremina.html">Zapremina</a>
                </div>
            </div>

            <div class="dropdown">
                <a href="${base}prizma/MrezaPrizme/mrezaPrizme.html" class="dropbtn" style="text-decoration: none; font-size: small;">
                    <p>Mreža prizme</p>
                    <div class="decorLine"></div>
                </a>
            </div>

            <div class="dropdown">
                <a href="${base}prizma/OsobinePrizme/osobinePrizme.html" class="dropbtn" style="text-decoration: none; font-size: small;">
                    <p>Osobine prizme</p>
                    <div class="decorLine"></div>
                </a>
            </div>

            <div class="dropdown">
                <a href="${base}prizma/PrimenaUZivotu/primenaPrizme.html" class="dropbtn" style="text-decoration: none; font-size: small;">
                    <p>Primena u životu</p>
                    <div class="decorLine"></div>
                </a>
            </div>

            <!-- ===== PIRAMIDA MENI ===== -->
            <div style="padding: 8px 10px; font-weight: bold; color: rgb(106, 84, 247); font-size: 0.85em; text-transform: uppercase; letter-spacing: 1px; margin-top: 15px; border-top: 1px solid #e0e0e0; padding-top: 15px;">
                Piramida
            </div>

            <div class="dropdown">
                <button class="dropbtn">
                    <p>Pojam i vrste piramide</p>
                    <img class="arrowDown" src="${base}arrowDown.png" width="20" height="20" />
                    <div class="decorLine"></div>
                </button>
                <div class="dropdown-content">
                    <a href="${base}piramida/PojamIVrstePiramide/pojamOsnovniEl.html">Pojam i osnovni elementi</a>
                    <a href="${base}piramida/PojamIVrstePiramide/vrstePiramide.html">Vrste piramide</a>
                    <a href="${base}piramida/PojamIVrstePiramide/karakteristicniPreseci.html">Karakteristični preseci</a>
                    <a href="${base}piramida/PojamIVrstePiramide/teoremaOTriNormale.html">Teorema o tri normale</a>
                </div>
            </div>

            <div class="dropdown">
                <a href="${base}piramida/KakoDaNactamPiramidu/crtanje.html" class="dropbtn" style="text-decoration: none; font-size: small;">
                    <p>Kako da nacrtam piramidu?</p>
                    <div class="decorLine"></div>
                </a>
            </div>

            <div class="dropdown">
                <button class="dropbtn">
                    <p>Površina i zapremina piramide</p>
                    <img src="${base}arrowDown.png" width="20" height="20" />
                    <div class="decorLine"></div>
                </button>
                <div class="dropdown-content">
                    <a href="${base}piramida/PovrsinaZapremina/povrsinaFormule.html">Površina</a>
                    <a href="${base}piramida/PovrsinaZapremina/zapreminaFormule.html">Zapremina</a>
                </div>
            </div>

            <div class="dropdown">
                <button class="dropbtn">
                    <p>Pravilna trostrana piramida</p>
                    <img src="${base}arrowDown.png" width="20" height="20" />
                    <div class="decorLine"></div>
                </button>
                <div class="dropdown-content">
                    <a href="${base}piramida/PravilnaTrostranaPiramida/crtanje.html">Crtanje</a>
                    <a href="${base}piramida/PravilnaTrostranaPiramida/povrsina.html">Površina</a>
                    <a href="${base}piramida/PravilnaTrostranaPiramida/zapremina.html">Zapremina</a>
                </div>
            </div>

            <div class="dropdown">
                <button class="dropbtn">
                    <p>Pravilna četvorostrana piramida</p>
                    <img src="${base}arrowDown.png" width="20" height="20" />
                    <div class="decorLine"></div>
                </button>
                <div class="dropdown-content">
                    <a href="${base}piramida/PravilnaCetvorostranaPiramida/crtanje.html">Crtanje</a>
                    <a href="${base}piramida/PravilnaCetvorostranaPiramida/povrsina.html">Površina</a>
                    <a href="${base}piramida/PravilnaCetvorostranaPiramida/zapremina.html">Zapremina</a>
                </div>
            </div>

            <div class="dropdown">
                <button class="dropbtn">
                    <p>Pravilna šestostrana piramida</p>
                    <img src="${base}arrowDown.png" width="20" height="20" />
                    <div class="decorLine"></div>
                </button>
                <div class="dropdown-content">
                    <a href="${base}piramida/PravilnaSestostranaPiramida/crtanje.html">Crtanje</a>
                    <a href="${base}piramida/PravilnaSestostranaPiramida/povrsina.html">Površina</a>
                    <a href="${base}piramida/PravilnaSestostranaPiramida/zapremina.html">Zapremina</a>
                </div>
            </div>

            <div class="dropdown">
                <a href="${base}piramida/MrezaPiramide/mrezaPiramide.html" class="dropbtn" style="text-decoration: none; font-size: small;">
                    <p>Mreža piramide</p>
                    <div class="decorLine"></div>
                </a>
            </div>

            <div class="dropdown">
                <a href="${base}piramida/OsobinePiramide/osobinePiramide.html" class="dropbtn" style="text-decoration: none; font-size: small;">
                    <p>Osobine piramide</p>
                    <div class="decorLine"></div>
                </a>
            </div>

            <div class="dropdown">
                <a href="${base}piramida/PrimenaUZivotu/primenaPiramide.html" class="dropbtn" style="text-decoration: none; font-size: small;">
                    <p>Primena u životu</p>
                    <div class="decorLine"></div>
                </a>
            </div>

            <div class="dropdown">
                <a href="${base}piramida/ZarubljenaPiramida/zarubljenaPiramida.html" class="dropbtn" style="text-decoration: none; font-size: small;">
                    <p>Zarubljena piramida</p>
                    <div class="decorLine"></div>
                </a>
            </div>
        `;
    }

    // --- DROPDOWN HANDLERS ---
    // Must be called AFTER renderMenu() so .dropbtn elements exist in the DOM
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

                // Close other open dropdowns
                document.querySelectorAll('#app-menu .dropdown-content').forEach(function (content) {
                    if (content !== dropdownContent) {
                        content.style.display = 'none';
                        const arrow = content.previousElementSibling ? content.previousElementSibling.querySelector('img') : null;
                        if (arrow) arrow.classList.remove('rotate');
                        if (content.previousElementSibling) content.previousElementSibling.classList.remove('active');
                    }
                });
            });
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', function (event) {
            if (!event.target.closest('#app-menu .dropdown')) {
                document.querySelectorAll('#app-menu .dropdown-content').forEach(function (content) {
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

        // Don't add footer if one already exists
        if (document.querySelector('.app-footer')) return;

        const footer = document.createElement('footer');
        footer.className = 'app-footer';
        footer.innerHTML = `
            <div class="footer-content">
                <div class="footer-brand">
                    <h3>🔷 Prizma i Piramida</h3>
                    <p>Elektronske lekcije iz prostorne geometrije za učenike osnovne škole. Interaktivni 3D modeli, formule, rešeni zadaci i kvizovi.</p>
                </div>
                <div class="footer-links">
                    <h4>Brza navigacija</h4>
                    <a href="${base}index.html">🏠 Početna</a>
                    <a href="${base}prizma/PojamIVrstePrizme/pojamOsnovniEl.html">🔷 Prizma</a>
                    <a href="${base}piramida/PojamIVrstePiramide/pojamOsnovniEl.html">🔺 Piramida</a>
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

        // Insert footer inside .wrapper at the end
        wrapper.appendChild(footer);
    }

    // --- INIT ---
    document.addEventListener('DOMContentLoaded', function () {
        renderHeader();
        renderMenu();
        initDropdowns();
        renderFooter();
    });
})();
