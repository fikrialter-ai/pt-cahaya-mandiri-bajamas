/* ===================================================
   PT. CAHAYA MANDIRI BAJAMAS — JavaScript
   - Navbar scroll effect & mobile menu
   - AOS (Animate on Scroll) observer
   - Counter animation
   - Product filter tabs
   - Floating particles
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. NAVBAR ────────────────────────────────── */
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('nav-menu');
  const navLinks  = document.querySelectorAll('.nav-link');

  // Scroll: add .scrolled class
  const handleNavScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // Mobile hamburger toggle
  hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close menu on nav-link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Active nav-link on scroll
  const sections = document.querySelectorAll('section[id]');
  const updateActiveNav = () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
      const top    = section.offsetTop;
      const height = section.offsetHeight;
      const id     = section.getAttribute('id');
      const link   = document.querySelector(`.nav-link[href="#${id}"]`);
      if (link) {
        if (scrollY >= top && scrollY < top + height) {
          navLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  };
  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();


  /* ── 2. SMOOTH SCROLL for anchor links ─────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });


  /* ── 3. AOS — ANIMATE ON SCROLL ────────────────── */
  const aosElements = document.querySelectorAll('[data-aos]');
  const aosObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el    = entry.target;
        const delay = parseInt(el.getAttribute('data-aos-delay') || '0', 10);
        setTimeout(() => {
          el.classList.add('aos-animate');
        }, delay);
        aosObserver.unobserve(el);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  aosElements.forEach(el => aosObserver.observe(el));


  /* ── 4. COUNTER ANIMATION ───────────────────────── */
  const counters = document.querySelectorAll('.stat-number[data-target]');

  const animateCounter = (el) => {
    const target   = parseInt(el.getAttribute('data-target'), 10);
    const duration = 2000;
    const step     = 16;
    const steps    = duration / step;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = target.toLocaleString('id-ID');
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current).toLocaleString('id-ID');
      }
    }, step);
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => counterObserver.observe(el));


  /* ── 5. PRODUCT FILTER TABS ─────────────────────── */
  const tabBtns     = document.querySelectorAll('.tab-btn');
  const produkCards = document.querySelectorAll('.produk-card');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      produkCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = '';
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            });
          });
        } else {
          card.style.display = 'none';
        }
      });
    });
  });


  /* ── 6. FLOATING PARTICLES ──────────────────────── */
  const container = document.getElementById('particles');
  if (container) {
    const count = 28;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.cssText = `
        left: ${Math.random() * 100}%;
        bottom: ${Math.random() * 40}%;
        width: ${Math.random() * 3 + 1}px;
        height: ${Math.random() * 3 + 1}px;
        --dur: ${4 + Math.random() * 8}s;
        --delay: ${Math.random() * 6}s;
        opacity: 0;
      `;
      container.appendChild(p);
    }
  }


  /* ── 7. SCROLL REVEAL HERO STATS ──────────────────── */
  // Stagger the hero stats animation
  const heroStats = document.querySelector('.hero__stats');
  if (heroStats) {
    const statItems = heroStats.querySelectorAll('.stat-item');
    statItems.forEach((item, i) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = `opacity 0.5s ease ${0.8 + i * 0.15}s, transform 0.5s ease ${0.8 + i * 0.15}s`;
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, 100);
    });
  }


  /* ── 8. FOOTER YEAR ─────────────────────────────── */
  const yearEl = document.querySelector('.footer__bottom-inner p');
  if (yearEl) {
    yearEl.innerHTML = yearEl.innerHTML.replace(
      '2024',
      new Date().getFullYear().toString()
    );
  }


  /* ── 9. BACK TO TOP on logo click ───────────────── */
  document.getElementById('logo-link')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


  /* ── 10. HOVER TILT on product cards ────────────── */
  document.querySelectorAll('.produk-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect   = card.getBoundingClientRect();
      const x      = e.clientX - rect.left;
      const y      = e.clientY - rect.top;
      const cx     = rect.width  / 2;
      const cy     = rect.height / 2;
      const dx     = (x - cx) / cx;
      const dy     = (y - cy) / cy;
      card.style.transform = `translateY(-8px) rotateX(${-dy * 4}deg) rotateY(${dx * 4}deg)`;
      card.style.transformOrigin = 'center';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease';
    });
  });


  /* ── 11. TYPING EFFECT in hero badge ────────────── */
  const badge = document.querySelector('.hero__badge');
  if (badge) {
    badge.style.opacity = '0';
    badge.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      badge.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      badge.style.opacity = '1';
      badge.style.transform = 'translateY(0)';
    }, 300);
  }


  /* ── 12. KEUNGGULAN CARD STAGGER ─────────────────── */
  const keunggulanCards = document.querySelectorAll('.keunggulan-card');
  const keunggulanObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cards = entry.target.parentElement.querySelectorAll('.keunggulan-card');
        cards.forEach((card, i) => {
          setTimeout(() => {
            card.classList.add('aos-animate');
          }, i * 120);
        });
        keunggulanObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  if (keunggulanCards.length) {
    keunggulanObs.observe(keunggulanCards[0]);
  }


  /* ── 13. HEADER SCROLL PROGRESS BAR ─────────────── */
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    height: 3px;
    background: linear-gradient(90deg, #E8A020, #F5C55A);
    z-index: 9999;
    transition: width 0.1s linear;
    pointer-events: none;
    border-radius: 0 2px 2px 0;
  `;
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const pct = maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0;
    progressBar.style.width = pct + '%';
  }, { passive: true });

  console.log('🏗️ PT. Cahaya Mandiri Bajamas — Website loaded successfully.');
});
