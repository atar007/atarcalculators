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
    { code: 'NSW', sub: 'HSC · UAC scaling',   url: 'nsw.html' },
    { code: 'VIC', sub: 'VCE · VTAC scaling',  url: 'vic.html' },
    { code: 'QLD', sub: 'QCE · QTAC scaling',  url: 'qld.html' },
    { code: 'WA',  sub: 'WACE · TISC scaling', url: 'wa.html' },
    { code: 'SA',  sub: 'SACE · SATAC scaling',url: 'sa.html' },
    { code: 'TAS', sub: 'TCE · UTAS scaling',  url: 'tas.html' },
    { code: 'ACT', sub: 'BSSS · UAC scaling',  url: 'act.html' },
    { code: 'NT',  sub: 'NTCET · SATAC scaling',url: 'nt.html' }
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
    <a class="logo" href="index.html" aria-label="ATARCalculators home">
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
                <a href="atar-calculators.html" role="menuitem"><b>All states</b><span>Every ATAR calculator</span></a>
                ${dropdownItems}
            </div>
          </div>
        </li>
        <li><a class="nav-link" href="hsc-scaling-calculators.html">HSC Scaling</a></li>
        <li><a class="nav-link" href="vce-scaling-calculators.html">VCE Scaling</a></li>
        <li><a class="nav-link" href="university-calculators.html">University</a></li>
        <li><a class="nav-link" href="methodology.html">Methodology</a></li>
      </ul>
    </nav>
    <a class="btn btn-primary nav-cta" href="index.html#states">Calculate now</a>
    <button class="menu-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="mobile-menu" id="mobile-menu" hidden>
    <nav aria-label="Mobile">
      <a href="atar-calculators.html">All ATAR Calculators</a>
      <a href="nsw.html">NSW HSC Calculator</a>
      <a href="vic.html">VIC VCE Calculator</a>
      <a href="qld.html">QLD QCE Calculator</a>
      <a href="wa.html">WA WACE Calculator</a>
      <a href="sa.html">SA SACE Calculator</a>
      <a href="tas.html">TAS TCE Calculator</a>
      <a href="act.html">ACT BSSS Calculator</a>
      <a href="nt.html">NT NTCET Calculator</a>
      <a href="hsc-scaling-calculators.html">HSC Subject Scaling</a>
      <a href="vce-scaling-calculators.html">VCE Subject Scaling</a>
      <a href="university-calculators.html">University Calculators</a>
      <a href="methodology.html">Methodology</a>
      <a class="btn btn-primary" href="index.html#states">Calculate now</a>
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
        <a class="logo logo-light" href="index.html" aria-label="ATARCalculators home">
          <span class="logo-mark" aria-hidden="true">${LOGO_SVG}</span>
          <span class="logo-text">ATAR<em>Calculators</em></span>
        </a>
        <p class="footer-tag">Australia's free ATAR calculator. Built for students, parents and teachers. No signup, no fees, no fluff.</p>
      </div>
      <div class="footer-col">
        <h4>Calculators</h4>
        <ul>
          <li><a href="atar-calculators.html">All ATAR calculators</a></li>
            ${calculatorLinks}
        </ul>
      </div>
      <div class="footer-col">
        <h4>About</h4>
        <ul>
          <li><a href="about.html">About us</a></li>
          <li><a href="methodology.html">Our methodology</a></li>
          <li><a href="index.html#faq">FAQ</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="privacy.html">Privacy</a></li>
          <li><a href="terms.html">Terms</a></li>
          <li><a href="disclaimer.html">Disclaimer</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>More tools</h4>
        <ul>
          <li><a href="hsc-scaling-calculators.html">HSC subject scaling</a></li>
          <li><a href="vce-scaling-calculators.html">VCE subject scaling</a></li>
          <li><a href="university-calculators.html">University calculators</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; <span id="year">${year}</span> ATARCalculators.com — Independent and free.</p>
      <p class="footer-disclaimer">Estimates only. The official ATAR is calculated by your state's tertiary admissions body. Using scaling reports <b>published Feb 2026</b>.</p>
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
