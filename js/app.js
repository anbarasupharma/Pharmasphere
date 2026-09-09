/* ============================================================
   PHARMACEUTICS HUB — CORE APPLICATION
   SPA Router · Theme · Navigation · Utilities
   This file loads LAST — all data, modules, and pages are
   already attached to window.PharmHub when this runs.
   ============================================================ */

(function () {
  'use strict';

  // ── Global namespace (other scripts may have started it) ──
  window.PharmHub = window.PharmHub || {};
  PharmHub.data   = PharmHub.data   || {};
  PharmHub.pages  = PharmHub.pages  || {};

  /* ==========================================================
     UTILITIES
     ========================================================== */
  PharmHub.utils = {
    /** Refresh Lucide icons after dynamic DOM changes */
    renderIcons() {
      if (window.lucide) {
        try { lucide.createIcons(); } catch (e) { /* noop */ }
      }
    },

    /** Format a number to a sensible precision */
    formatNumber(num, decimals) {
      if (num === undefined || num === null || isNaN(num)) return 'N/A';
      if (decimals === undefined) {
        // Auto-precision: up to 6, strip trailing zeros
        return parseFloat(Number(num).toPrecision(6)).toString();
      }
      return parseFloat(num.toFixed(decimals)).toString();
    },

    /** Simple debounce */
    debounce(fn, delay) {
      let t;
      delay = delay || 300;
      return function () {
        var ctx = this, args = arguments;
        clearTimeout(t);
        t = setTimeout(function () { fn.apply(ctx, args); }, delay);
      };
    },

    /** Generate a short unique id */
    uid() { return Math.random().toString(36).substr(2, 9); },

    /** Escape HTML to prevent XSS in user-generated content */
    escapeHTML(str) {
      var div = document.createElement('div');
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    }
  };

  /* ==========================================================
     ROUTER  (hash-based SPA routing)
     ========================================================== */
  var Router = {
    currentRoute: null,

    /** Page-key lookup table */
    _map: {
      '':              'home',
      'home':          'home',
      'learn':         'learn',
      'dosage-forms':  'dosageForms',
      'calculators':   'calculatorsPage',
      'lab-qc':        'labQC',
      'drug-delivery': 'drugDelivery',
      'quiz':          'quizPage',
      'references':    'references',
      'about':         'about'
    },

    init: function () {
      var self = this;
      
      // Handle hash changes
      window.addEventListener('hashchange', function () { self.handleRoute(); });
      
      // Handle initial load
      window.addEventListener('load', function() {
        // Splash Screen Logic
        const splash = document.getElementById('splash-screen');
        if (splash) {
          // Keep splash screen visible for 3 seconds to show off the beautiful 3D animation
          setTimeout(() => {
            splash.style.opacity = '0';
            splash.style.visibility = 'hidden';
            setTimeout(() => { splash.style.display = 'none'; }, 800);
          }, 3000);
        }

        if (!window.location.hash || window.location.hash === '#') {
          window.location.hash = '#/';
        }
        
        // Premium Navbar Scroll Glassmorphism
        const nav = document.querySelector('.pharma-nav');
        if (nav) {
          window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
              nav.classList.add('scrolled');
            } else {
              nav.classList.remove('scrolled');
            }
          });
        }

        // Mobile Navigation Hamburger Menu
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('nav-links');
        if (hamburger && navLinks) {
          hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navLinks.classList.toggle('open');
          });
          
          // Auto-close menu when clicking a link on mobile
          navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
              hamburger.classList.remove('open');
              navLinks.classList.remove('open');
            });
          });
        }

        self.handleRoute();
      });
    },

    handleRoute: function () {
      var hash     = window.location.hash || '#/';
      var path     = hash.slice(2);                       // remove '#/'
      var segments = path.split('/').filter(Boolean);
      var page     = segments[0] || 'home';
      var params   = segments.slice(1).join('/');

      var container = document.getElementById('app');
      if (!container) return;

      // Re-trigger global premium fade-in animation by resetting the element
      container.style.animation = 'none';
      void container.offsetWidth; // force reflow
      container.style.animation = 'academicFadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards';

      // Active nav highlight
      this._updateNav(segments[0] || '');

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'instant' });

      // Destroy previous charts
      if (PharmHub.charts && PharmHub.charts.destroyAll) PharmHub.charts.destroyAll();

      // Resolve page key
      var pageKey = this._map[page] || page;

      // Render
      if (PharmHub.pages[pageKey]) {
        container.innerHTML = '';
        PharmHub.pages[pageKey].render(container, params);
        PharmHub.utils.renderIcons();
      } else {
        container.innerHTML =
          '<div class="pharma-section" style="text-align:center;padding:4rem 1rem;">' +
            '<i data-lucide="alert-circle" style="width:48px;height:48px;color:var(--text-muted);"></i>' +
            '<h2 style="margin:1rem 0 .5rem">Page Not Found</h2>' +
            '<p style="color:var(--text-secondary)">The page you\'re looking for doesn\'t exist yet.</p>' +
            '<a href="#/" class="pharma-btn pharma-btn--primary" style="margin-top:1.5rem">Go Home</a>' +
          '</div>';
        PharmHub.utils.renderIcons();
      }

      this.currentRoute = { page: page, params: params, pageKey: pageKey };
      _closeMobileMenu();
    },

    getCurrentRoute: function () { return this.currentRoute; },

    _updateNav: function (active) {
      var links = document.querySelectorAll('.pharma-nav__link');
      for (var i = 0; i < links.length; i++) {
        var href = links[i].getAttribute('data-nav') || '';
        var isActive = (active === '' && href === 'home') ||
                       (active !== '' && href === active);
        links[i].classList.toggle('active', isActive);
      }
    }
  };

  /* ==========================================================
     THEME
     ========================================================== */
  function _initTheme() {
    var saved = localStorage.getItem('pharma-theme');
    var prefersDark = window.matchMedia &&
                      window.matchMedia('(prefers-color-scheme: dark)').matches;
    _applyTheme(saved || (prefersDark ? 'dark' : 'light'));
  }

  function _toggleTheme() {
    var cur = document.documentElement.getAttribute('data-theme') || 'light';
    var next = cur === 'dark' ? 'light' : 'dark';
    _applyTheme(next);
    localStorage.setItem('pharma-theme', next);
  }

  function _applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.innerHTML = theme === 'dark'
        ? '<i data-lucide="sun"></i>'
        : '<i data-lucide="moon"></i>';
      PharmHub.utils.renderIcons();
    }
  }

  /* ==========================================================
     MOBILE MENU
     ========================================================== */
  function _initMobileMenu() {
    var hamburger = document.getElementById('hamburger');
    if (hamburger) {
      hamburger.addEventListener('click', function () {
        var nav = document.getElementById('nav-links');
        if (nav) nav.classList.toggle('open');
        hamburger.classList.toggle('open');
      });
    }
    // Close menu on link click
    var links = document.querySelectorAll('.pharma-nav__link');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', _closeMobileMenu);
    }
  }

  function _closeMobileMenu() {
    var nav = document.getElementById('nav-links');
    var hamburger = document.getElementById('hamburger');
    if (nav) nav.classList.remove('open');
    if (hamburger) hamburger.classList.remove('open');
  }

  /* ==========================================================
     SEARCH SHORTCUT
     ========================================================== */
  function _initSearch() {
    var btn = document.getElementById('search-trigger');
    if (btn) {
      btn.addEventListener('click', function () {
        if (PharmHub.search) PharmHub.search.open();
      });
    }
    document.addEventListener('keydown', function (e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (PharmHub.search) PharmHub.search.open();
      }
    });
  }

  /* ==========================================================
     NAV SCROLL EFFECT
     ========================================================== */
  function _initNavScroll() {
    var nav = document.getElementById('main-nav');
    window.addEventListener('scroll', function () {
      if (nav) {
        nav.classList.toggle('scrolled', window.pageYOffset > 48);
      }
    });
  }

  /* ==========================================================
     BOOT
     ========================================================== */
  function boot() {
    _initTheme();
    _initMobileMenu();
    _initSearch();
    _initNavScroll();

    var themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) themeBtn.addEventListener('click', _toggleTheme);

    // Module init
    if (PharmHub.progress) PharmHub.progress.init();
    if (PharmHub.search)   PharmHub.search.init();

    // Router (renders first page)
    Router.init();

    PharmHub.utils.renderIcons();
    console.log('%c💊 Pharmaceutics Hub', 'font-size:14px;font-weight:bold;color:#0d9488;');
  }

  // Export router
  PharmHub.router = Router;

  // Start
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})();
