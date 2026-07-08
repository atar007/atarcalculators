/* =============================================================
   navigation.js
   Shared header and footer for all ATARCalculators pages.

   Injects header/footer on DOMContentLoaded, handles mobile menu,
   dropdown, active-link highlighting, and year update.

   To use: just include this on any page:
     <script src="navigation.js" defer></script>
   The page must have a <main> element.
   ============================================================= */

(function () {
  'use strict';

  /* ---------- ALL STATE CALCULATORS ---------- */
  const STATES = [
    { code: 'NSW', sub: 'HSC · UAC scaling',   url: '/nsw' },
    { code: 'VIC', sub: 'VCE · VTAC scaling',  url: '/vic' },
    { code: 'QLD', sub: 'QCE · QTAC scaling',  url: '/qld' },
    { code: 'WA',  sub: 'WACE · TISC scaling', url: '/wa' },
    { code: 'SA',  sub: 'SACE · SATAC scaling',url: '/sa' },
    { code: 'TAS', sub: 'TCE · UTAS scaling',  url: '/tas' },
    { code: 'ACT', sub: 'BSSS · UAC scaling',  url: '/act' },
    { code: 'NT',  sub: 'NTCET · SATAC scaling',url: '/nt' }
  ];

  /* ---------- LOGO SVG (reused) ---------- */
  const LOGO_SVG = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>';

  /* ---------- BUILD HEADER HTML ---------- */
  function buildHeader() {
    const dropdownItems = STATES.map(s =>
      `<a href="${s.url}" role="menuitem"><b>${s.code}</b><span>${s.sub}</span></a>`
    ).join('\n                ');

    return `
<a class="skip-link" href="#main">Skip to main content</a>

<header class="header" id="header">
  <div class="container header-inner">
    <a class="logo" href="/" aria-label="ATARCalculators home">
      <span class="logo-mark" aria-hidden="true">${LOGO_SVG}</span>
      <span class="logo-text">ATAR<em>Calculators</em></span>
    </a>
    <nav class="nav-primary" aria-label="Primary">
      <ul>
        <li class="has-dropdown">
          <button class="nav-link" aria-haspopup="true" aria-expanded="false">
            ATAR Calculators
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 4.5L6 7.5L9 4.5"/></svg>
          </button>
          <div class="dropdown" role="menu">
            <div class="dropdown-grid">
                <a href="/atar-calculators" role="menuitem"><b>All states</b><span>Every ATAR calculator</span></a>
                ${dropdownItems}
            </div>
          </div>
        </li>
        <li><a class="nav-link" href="/hsc-scaling-calculators">HSC Scaling</a></li>
        <li><a class="nav-link" href="/vce-scaling-calculators">VCE Scaling</a></li>
        <li><a class="nav-link" href="/university-calculators">University</a></li>
        <li><a class="nav-link" href="/atar-target-calculator">Target ATAR</a></li>
        <li><a class="nav-link" href="/blog">Guides</a></li>
      </ul>
    </nav>
    <a class="btn btn-primary nav-cta" href="/atar-calculators">Calculate now</a>
    <button class="menu-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="mobile-menu" id="mobile-menu" hidden>
    <nav aria-label="Mobile">
      <a href="/atar-calculators">All ATAR Calculators</a>
      <a href="/nsw">NSW HSC Calculator</a>
      <a href="/vic">VIC VCE Calculator</a>
      <a href="/qld">QLD QCE Calculator</a>
      <a href="/wa">WA WACE Calculator</a>
      <a href="/sa">SA SACE Calculator</a>
      <a href="/tas">TAS TCE Calculator</a>
      <a href="/act">ACT BSSS Calculator</a>
      <a href="/nt">NT NTCET Calculator</a>
      <a href="/hsc-scaling-calculators">HSC Subject Scaling</a>
      <a href="/vce-scaling-calculators">VCE Subject Scaling</a>
      <a href="/university-calculators">University Calculators</a>
      <a href="/atar-target-calculator">Target ATAR Calculator</a>
      <a href="/blog">Guides &amp; articles</a>
      <a class="btn btn-primary" href="/atar-calculators">Calculate now</a>
    </nav>
  </div>
</header>
    `;
  }

  /* ---------- BUILD FOOTER HTML ---------- */
  function buildFooter() {
    const year = new Date().getFullYear();

    const calculatorLinks = STATES.map(s => {
      const exam = s.sub.split(' · ')[0];
      return `<li><a href="${s.url}">${s.code} ${exam}</a></li>`;
    }).join('\n            ');

    return `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a class="logo logo-light" href="/" aria-label="ATARCalculators home">
          <span class="logo-mark" aria-hidden="true">${LOGO_SVG}</span>
          <span class="logo-text">ATAR<em>Calculators</em></span>
        </a>
        <p class="footer-tag">Australia's free ATAR calculator. Built for students, parents and teachers. No signup, no fees, no fluff.</p>
      </div>
      <div class="footer-col">
        <h4>Calculators</h4>
        <ul>
          <li><a href="/atar-calculators">All ATAR calculators</a></li>
            ${calculatorLinks}
        </ul>
      </div>
      <div class="footer-col">
        <h4>About</h4>
        <ul>
          <li><a href="/about">About us</a></li>
          <li><a href="/methodology">Our methodology</a></li>
          <li><a href="/blog">Guides &amp; articles</a></li>
          <li><a href="/#faq">FAQ</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy</a></li>
          <li><a href="/terms">Terms</a></li>
          <li><a href="/disclaimer">Disclaimer</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>More tools</h4>
        <ul>
          <li><a href="/hsc-scaling-calculators">HSC subject scaling</a></li>
          <li><a href="/vce-scaling-calculators">VCE subject scaling</a></li>
          <li><a href="/university-calculators">University calculators</a></li>
          <li><a href="/atar-target-calculator">Target ATAR calculator</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; <span id="year">${year}</span> ATARCalculators.com — Independent and free.</p>
      <p class="footer-disclaimer">Estimates only — your official ATAR comes from your state's tertiary admissions body. Figures sourced from official UAC, VTAC, QTAC, SCSA, SATAC, TASC &amp; BSSS reports (and ACARA for NAPLAN). Reviewed by the <a href="/about#editorial-team">ATARCalculators Editorial Team</a> · Last updated <b>Feb 2026</b>.</p>
    </div>
  </div>
</footer>
    `;
  }

  /* ---------- INJECT NAVIGATION ---------- */
  function injectNavigation() {
    const main = document.querySelector('main');
    if (main) {
      // Page has a <main> — wrap it: header before, footer after
      main.insertAdjacentHTML('beforebegin', buildHeader());
      main.insertAdjacentHTML('afterend', buildFooter());
    } else if (document.body) {
      // No <main> (e.g. the homepage) — still show them:
      // header at the top of <body>, footer at the bottom
      document.body.insertAdjacentHTML('afterbegin', buildHeader());
      document.body.insertAdjacentHTML('beforeend', buildFooter());
    } else {
      return;
    }

    setupHeaderInteractivity();
    highlightActivePage();
  }

  /* ---------- HEADER INTERACTIVITY ---------- */
  function setupHeaderInteractivity() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', () => {
        const isHidden = mobileMenu.hasAttribute('hidden');
        if (isHidden) {
          mobileMenu.removeAttribute('hidden');
          menuToggle.setAttribute('aria-expanded', 'true');
          menuToggle.classList.add('is-open');
        } else {
          mobileMenu.setAttribute('hidden', '');
          menuToggle.setAttribute('aria-expanded', 'false');
          menuToggle.classList.remove('is-open');
        }
      });
    }

    // Dropdown toggle on click (mainly for mobile/keyboard users)
    const dropdownBtn = document.querySelector('.has-dropdown > .nav-link');
    if (dropdownBtn) {
      dropdownBtn.addEventListener('click', (e) => {
        // On mobile (narrow screens) tap toggles the dropdown
        if (window.innerWidth < 900) {
          e.preventDefault();
          const parent = dropdownBtn.parentElement;
          const isOpen = parent.classList.toggle('is-open');
          dropdownBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        }
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
        const parent = dropdownBtn.parentElement;
        if (!parent.contains(e.target)) {
          parent.classList.remove('is-open');
          dropdownBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Keyboard support — Escape closes dropdown
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          dropdownBtn.parentElement.classList.remove('is-open');
          dropdownBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // Sticky header — adds shadow on scroll
    const header = document.querySelector('.header');
    if (header) {
      const onScroll = () => {
        header.classList.toggle('is-scrolled', window.pageYOffset > 10);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll(); // initial check
    }
  }

  /* ---------- HIGHLIGHT ACTIVE PAGE ---------- */
  function highlightActivePage() {
    let path = window.location.pathname;
    // Normalise — ensure trailing slash
    if (!path.endsWith('/') && !path.endsWith('.html')) path += '/';

    // Find any nav link whose href matches the current path
    const allLinks = document.querySelectorAll('.nav-primary a, .dropdown a, .mobile-menu a, .footer a');
    allLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;

      // Normalise the href for comparison
      let normalisedHref = href;
      if (!normalisedHref.endsWith('/') && !normalisedHref.endsWith('.html') && !normalisedHref.startsWith('#')) {
        normalisedHref += '/';
      }

      // Exact match (excluding anchors)
      if (normalisedHref === path) {
        link.classList.add('is-current');
      }
    });

    // If we're on a calculator page, also highlight the "Calculators" parent dropdown button
    if (path.startsWith('/atar-calculator')) {
      const calcBtn = document.querySelector('.has-dropdown > .nav-link');
      if (calcBtn) calcBtn.classList.add('is-current');
    }
  }

  /* ---------- INITIALISE ---------- */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectNavigation);
  } else {
    // Document already loaded (script loaded after DOMContentLoaded)
    injectNavigation();
  }
})();

/* ---------- NUMERIC INPUT CLAMPING (site-wide safeguard) ----------
   Prevents out-of-range values (e.g. 90 in a /30 field) from reaching any
   calculator engine. Capture phase => runs before each calculator's own
   input/change handler, so engines always read a clamped value. */
(function(){
  function clampEl(t){
    if(!t||t.tagName!=='INPUT'||(t.type!=='number'&&t.getAttribute('inputmode')!=='decimal')) return;
    if(t.value==='') return;
    var v=parseFloat(t.value); if(isNaN(v)) return;
    var mx=t.getAttribute('max'), mn=t.getAttribute('min');
    if(mx!==null&&mx!==''&&v>parseFloat(mx)) t.value=mx;
    else if(mn!==null&&mn!==''&&v<parseFloat(mn)) t.value=mn;
  }
  document.addEventListener('input', function(e){ clampEl(e.target); }, true);
  document.addEventListener('change', function(e){ clampEl(e.target); }, true);
})();
