/**
 * components.js — Reusable header, dropdown handlers, footer, and lesson navigation.
 * Sidebar menu is now inline in each HTML file for active-state highlighting.
 * Auto-detects page depth to resolve asset paths correctly.
 */

(function () {
    function getBasePath() {
        var link = document.querySelector('link[rel="stylesheet"][href*="style.css"]');
        if (!link) return '';
        var href = link.getAttribute('href');
        return href.replace('style.css', '');
    }

    var base = getBasePath();

    // Detect which section is active based on current URL
    function getActiveSection() {
        var path = window.location.pathname.toLowerCase();
        if (path.indexOf('/piramida/') !== -1) return 'piramida';
        if (path.indexOf('/prizma/') !== -1) return 'prizma';
        return '';
    }

    var activeSection = getActiveSection();

    // --- HEADER ---
    function renderHeader() {
        var el = document.getElementById('app-header');
        if (!el) return;

        var prizmaActive = activeSection === 'prizma' ? ' activeButton' : '';
        var piramidaActive = activeSection === 'piramida' ? ' activeButton' : '';

        el.outerHTML =
            '<header class="header">' +
            '<h1><a href="' + base + 'index.html" class="headerTitle">Prizma i Piramida</a></h1>' +
            '<div class="navButtonsContainer">' +
            '<a href="' + base + 'prizma/PojamIVrstePrizme/pojamOsnovniEl.html" class="navButton' + prizmaActive + '">Prizma</a>' +
            '<a href="' + base + 'piramida/PojamIVrstePiramide/pojamOsnovniEl.html" class="navButton' + piramidaActive + '">Piramida</a>' +
            '</div>' +
            '</header>';
    }

    // --- DROPDOWN HANDLERS ---
    function initDropdowns() {
        document.querySelectorAll('#app-menu .dropbtn').forEach(function (button) {
            if (button.tagName === 'A') return;

            button.addEventListener('click', function () {
                var dropdownContent = this.nextElementSibling;
                if (!dropdownContent) return;

                dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';

                var arrowDown = this.querySelector('img');
                if (arrowDown) arrowDown.classList.toggle('rotate');

                this.classList.toggle('active');

                document.querySelectorAll('#app-menu .dropdown-content').forEach(function (content) {
                    if (content !== dropdownContent && !content.querySelector('.menu-active')) {
                        content.style.display = 'none';
                        var arrow = content.previousElementSibling ? content.previousElementSibling.querySelector('img') : null;
                        if (arrow) arrow.classList.remove('rotate');
                        if (content.previousElementSibling) content.previousElementSibling.classList.remove('active');
                    }
                });
            });
        });

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

    // --- LESSON NAVIGATION ---
    var lessonOrder = [
        { path: 'prizma/PojamIVrstePrizme/pojamOsnovniEl.html', title: 'Pojam i osnovni elementi' },
        { path: 'prizma/PojamIVrstePrizme/vrstePrizme.html', title: 'Vrste prizme' },
        { path: 'prizma/PojamIVrstePrizme/dijagonale.html', title: 'Dijagonale i preseci' },
        { path: 'prizma/KakoDaNactamPrizmu/crtanje.html', title: 'Kako nacrtati prizmu' },
        { path: 'prizma/PovrsinaZapremina/povrsinaFormule.html', title: 'Povrsina prizme' },
        { path: 'prizma/PovrsinaZapremina/zapreminaFormule.html', title: 'Zapremina prizme' },
        { path: 'prizma/PravilnaTrostranaPrizma/crtanje.html', title: 'Trostrana prizma - crtanje' },
        { path: 'prizma/PravilnaTrostranaPrizma/povrsina.html', title: 'Trostrana prizma - povrsina' },
        { path: 'prizma/PravilnaTrostranaPrizma/zapremina.html', title: 'Trostrana prizma - zapremina' },
        { path: 'prizma/PravilnaCetvorostranaPrizma/crtanje.html', title: 'Cetvorostrana prizma - crtanje' },
        { path: 'prizma/PravilnaCetvorostranaPrizma/povrsina.html', title: 'Cetvorostrana prizma - povrsina' },
        { path: 'prizma/PravilnaCetvorostranaPrizma/zapremina.html', title: 'Cetvorostrana prizma - zapremina' },
        { path: 'prizma/PravilnaSestostranaPrizma/crtanje.html', title: 'Sestostrana prizma - crtanje' },
        { path: 'prizma/PravilnaSestostranaPrizma/povrsina.html', title: 'Sestostrana prizma - povrsina' },
        { path: 'prizma/PravilnaSestostranaPrizma/zapremina.html', title: 'Sestostrana prizma - zapremina' },
        { path: 'prizma/MrezaPrizme/mrezaPrizme.html', title: 'Mreza prizme' },
        { path: 'prizma/OsobinePrizme/osobinePrizme.html', title: 'Osobine prizme' },
        { path: 'prizma/PrimenaUZivotu/primenaPrizme.html', title: 'Primena prizme u zivotu' },
        { path: 'piramida/PojamIVrstePiramide/pojamOsnovniEl.html', title: 'Pojam i osnovni elementi' },
        { path: 'piramida/PojamIVrstePiramide/vrstePiramide.html', title: 'Vrste piramide' },
        { path: 'piramida/PojamIVrstePiramide/karakteristicniPreseci.html', title: 'Karakteristicni preseci' },
        { path: 'piramida/PojamIVrstePiramide/teoremaOTriNormale.html', title: 'Teorema o tri normale' },
        { path: 'piramida/KakoDaNactamPiramidu/crtanje.html', title: 'Kako nacrtati piramidu' },
        { path: 'piramida/PovrsinaZapremina/povrsinaFormule.html', title: 'Povrsina piramide' },
        { path: 'piramida/PovrsinaZapremina/zapreminaFormule.html', title: 'Zapremina piramide' },
        { path: 'piramida/PravilnaTrostranaPiramida/crtanje.html', title: 'Trostrana piramida - crtanje' },
        { path: 'piramida/PravilnaTrostranaPiramida/povrsina.html', title: 'Trostrana piramida - povrsina' },
        { path: 'piramida/PravilnaTrostranaPiramida/zapremina.html', title: 'Trostrana piramida - zapremina' },
        { path: 'piramida/PravilnaCetvorostranaPiramida/crtanje.html', title: 'Cetvorostrana piramida - crtanje' },
        { path: 'piramida/PravilnaCetvorostranaPiramida/povrsina.html', title: 'Cetvorostrana piramida - povrsina' },
        { path: 'piramida/PravilnaCetvorostranaPiramida/zapremina.html', title: 'Cetvorostrana piramida - zapremina' },
        { path: 'piramida/PravilnaSestostranaPiramida/crtanje.html', title: 'Sestostrana piramida - crtanje' },
        { path: 'piramida/PravilnaSestostranaPiramida/povrsina.html', title: 'Sestostrana piramida - povrsina' },
        { path: 'piramida/PravilnaSestostranaPiramida/zapremina.html', title: 'Sestostrana piramida - zapremina' },
        { path: 'piramida/MrezaPiramide/mrezaPiramide.html', title: 'Mreza piramide' },
        { path: 'piramida/OsobinePiramide/osobinePiramide.html', title: 'Osobine piramide' },
        { path: 'piramida/PrimenaUZivotu/primenaPiramide.html', title: 'Primena piramide u zivotu' },
        { path: 'piramida/ZarubljenaPiramida/zarubljenaPiramida.html', title: 'Zarubljena piramida' }
    ];

    function renderLessonNav() {
        var lectureContainer = document.querySelector('.lectureContainer');
        if (!lectureContainer) return;

        var pathname = window.location.pathname.replace(/\\/g, '/');
        var currentIndex = -1;
        for (var i = 0; i < lessonOrder.length; i++) {
            if (pathname.indexOf(lessonOrder[i].path) !== -1) {
                currentIndex = i;
                break;
            }
        }
        if (currentIndex === -1) return;

        var nav = document.createElement('div');
        nav.className = 'lesson-nav';

        var prevHtml = '';
        var homeHtml = '<a href="' + base + 'index.html" class="lesson-nav-home">Pocetna</a>';
        var nextHtml = '';

        if (currentIndex > 0) {
            var prev = lessonOrder[currentIndex - 1];
            prevHtml = '<a href="' + base + prev.path + '" class="lesson-nav-btn nav-prev">&larr; Prethodna lekcija</a>';
        } else {
            prevHtml = '<span></span>';
        }

        if (currentIndex < lessonOrder.length - 1) {
            var next = lessonOrder[currentIndex + 1];
            nextHtml = '<a href="' + base + next.path + '" class="lesson-nav-btn nav-next">Naredna lekcija &rarr;</a>';
        } else {
            nextHtml = '<span></span>';
        }

        nav.innerHTML = prevHtml + homeHtml + nextHtml;
        lectureContainer.appendChild(nav);
    }

    // --- FOOTER ---
    function renderFooter() {
        var wrapper = document.querySelector('.wrapper');
        if (!wrapper) return;

        if (document.querySelector('.app-footer')) return;

        var footer = document.createElement('footer');
        footer.className = 'app-footer';
        footer.innerHTML = '<div class="footer-content">' +
            '<div class="footer-brand">' +
            '<h3>Prizma i Piramida</h3>' +
            '<p>Elektronske lekcije iz prostorne geometrije za ucenike osnovne skole. Interaktivni 3D modeli, formule, reseni zadaci i kvizovi.</p>' +
            '</div>' +
            '<div class="footer-links">' +
            '<h4>Brza navigacija</h4>' +
            '<a href="' + base + 'index.html">Pocetna</a>' +
            '<a href="' + base + 'prizma/PojamIVrstePrizme/pojamOsnovniEl.html">Prizma</a>' +
            '<a href="' + base + 'piramida/PojamIVrstePiramide/pojamOsnovniEl.html">Piramida</a>' +
            '</div>' +
            '<div class="footer-info">' +
            '<h4>O projektu</h4>' +
            '<p>Ovaj projekat je kreiran u okviru master rada sa ciljem da olaksa ucenicima savladavanje gradiva iz oblasti prizme i piramide uz pomoc interaktivnih materijala.</p>' +
            '</div>' +
            '</div>' +
            '<div class="footer-bottom">' +
            '<p>&copy; ' + new Date().getFullYear() + ' Prizma i Piramida — Elektronske lekcije | Master rad</p>' +
            '</div>';

        wrapper.appendChild(footer);
    }

    // --- INIT ---
    document.addEventListener('DOMContentLoaded', function () {
        renderHeader();
        initDropdowns();
        renderFooter();
        renderLessonNav();
    });
})();
