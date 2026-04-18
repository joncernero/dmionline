(function () {
  // -- Google Analytics --
  var _ga = document.createElement('script');
  _ga.async = true;
  _ga.src = 'https://www.googletagmanager.com/gtag/js?id=G-PBH5J54WXG';
  document.head.appendChild(_ga);
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-PBH5J54WXG');

  var page = document.body.dataset.page || '';

  // -- Helpers --
  function navLink(href, label, id) {
    var isActive = page === id;
    return '<li><a href="' + href + '"' +
      (isActive ? ' class="active" aria-current="page"' : '') +
      '>' + label + '</a></li>';
  }

  var DONATE_URL = 'https://www.paypal.com/donate/?hosted_button_id=GHY8FNFBFQS34';
  var LOGO_URL   = 'https://static.wixstatic.com/media/53f105_f0c1b762b9e04c1286ae604daa465cf4~mv2_d_1920_1200_s_2.png/v1/crop/x_117,y_143,w_1719,h_898/fill/w_188,h_100,al_c,q_85,usm_0.66_1.00_0.01/53f105_f0c1b762b9e04c1286ae604daa465cf4~mv2_d_1920_1200_s_2.png';

  // -- Skip link (first focusable element on every page) --
  document.body.insertAdjacentHTML('afterbegin',
    '<a href="#main-content" class="skip-link">Skip to main content</a>'
  );

  // -- Nav --
  var navEl = document.getElementById('site-nav');
  if (navEl) {
    navEl.setAttribute('aria-label', 'Main navigation');
    navEl.innerHTML =
      '<div class="nav-left">' +
        '<a href="' + DONATE_URL + '" target="_blank" rel="noopener" class="donate-btn">Donate</a>' +
      '</div>' +
      '<ul class="nav-links">' +
        navLink('index.html', 'home',  'home') +
        navLink('about.html', 'about', 'about') +
        navLink('serve.html', 'serve', 'serve') +
        navLink('blog.html',  'blog',  'blog') +
      '</ul>' +
      '<div class="nav-right">' +
        '<a href="index.html" aria-label="Dragonfly Mission International — home">' +
          '<img src="' + LOGO_URL + '" alt="" class="nav-logo">' +
        '</a>' +
        '<button class="nav-hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="mobileMenu">' +
          '<span></span><span></span><span></span>' +
          '<span></span><span></span><span></span>' +
          '<span></span><span></span><span></span>' +
        '</button>' +
      '</div>';

    // Mobile menu (sibling right after <nav>)
    navEl.insertAdjacentHTML('afterend',
      '<nav class="mobile-menu" id="mobileMenu" aria-label="Mobile navigation" aria-hidden="true">' +
        '<a href="index.html">home</a>' +
        '<a href="about.html">about</a>' +
        '<a href="serve.html">serve</a>' +
        '<a href="blog.html">blog</a>' +
        '<a href="' + DONATE_URL + '" target="_blank" rel="noopener">Donate</a>' +
      '</nav>'
    );
  }

  // -- Footer --
  var footerEl = document.getElementById('site-footer');
  if (footerEl) {
    var MAIL   = 'mailto:info@dmionline.org?subject=I\'d like to know more about Dragonfly Mission';
    var FB_URL = 'http://www.facebook.com/dragonflymission';
    var IG_URL = 'https://instagram.com/dmionline/';
    var FB_ICON = 'https://static.wixstatic.com/media/e0678ef25486466ba65ef6ad47b559e1.png/v1/fill/w_34,h_34,al_c,q_85/e0678ef25486466ba65ef6ad47b559e1.png';
    var IG_ICON = 'https://static.wixstatic.com/media/da7ef6dd1302486c9a67baebe4b364bc.png/v1/fill/w_34,h_34,al_c,q_85/da7ef6dd1302486c9a67baebe4b364bc.png';

    footerEl.setAttribute('aria-label', 'Site info');
    footerEl.innerHTML =
      '<div class="footer-info">' +
        '<a href="' + MAIL + '">Westfield, IN</a>' +
        '<a href="' + MAIL + '">info@dmionline.org</a>' +
      '</div>' +
      '<div class="footer-social">' +
        '<span class="watch-link" aria-hidden="true">&#8212;&nbsp;watch</span>' +
        '<a href="' + FB_URL + '" target="_blank" rel="noopener" class="social-icon" aria-label="Dragonfly Mission on Facebook">' +
          '<img src="' + FB_ICON + '" alt="">' +
        '</a>' +
        '<a href="' + IG_URL + '" target="_blank" rel="noopener" class="social-icon" aria-label="Dragonfly Mission on Instagram">' +
          '<img src="' + IG_ICON + '" alt="">' +
        '</a>' +
      '</div>';
  }

  // -- Hamburger toggle --
  var hamburger  = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    function getFocusable() {
      return Array.from(mobileMenu.querySelectorAll('a, button'));
    }

    function trapFocus(e) {
      if (e.key !== 'Tab') return;
      var focusable = getFocusable();
      var first = focusable[0];
      var last  = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
      }
    }

    function openMenu() {
      mobileMenu.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
      hamburger.setAttribute('aria-label', 'Close menu');
      mobileMenu.setAttribute('aria-hidden', 'false');
      var firstLink = mobileMenu.querySelector('a');
      if (firstLink) firstLink.focus();
      mobileMenu.addEventListener('keydown', trapFocus);
    }

    function closeMenu() {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'Open menu');
      mobileMenu.setAttribute('aria-hidden', 'true');
      mobileMenu.removeEventListener('keydown', trapFocus);
      hamburger.focus();
    }

    hamburger.addEventListener('click', function () {
      mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) closeMenu();
    });
  }
})();
