// ═══════════════════════════════════════════════════════════════════════════
// VASSU INFOTECH  -  Swiss Architectural Interaction Layer v5.0
// ES6+ · Accessible · Dark-Mode · Merged Counters · ARIA-compliant
// ═══════════════════════════════════════════════════════════════════════════

(function () {
  'use strict';

  function init() {
    initThemeToggle();
    initScrollProgress();
    initHeaderScroll();
    initMobileDrawer();
    initScrollReveal();
    initCounters(); // single unified counter (merged initEnhancedCounters)
    initModals();
    initForms();
    initFaqAccordion();
    initSmoothScroll();
    initParticles();
    initTypewriter();
    initMagneticButtons();
    initParallax();
    initSpotlightCards();
    initCapabilityFilters();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // ── Dark Mode Toggle ──────────────────────────────────────────────
  function initThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    const icon = document.getElementById('theme-icon');
    const saved = localStorage.getItem('vassu-theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    if (icon)
      icon.className =
        saved === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';

    if (!toggle) return;
    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('vassu-theme', next);
      if (icon)
        icon.className =
          next === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
      toggle.setAttribute(
        'aria-label',
        next === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      );
    });
  }

  // ── Scroll Progress ───────────────────────────────────────────────
  function initScrollProgress() {
    let bar = document.getElementById('scroll-progress-bar');
    if (!bar) {
      bar = document.createElement('div');
      bar.id = 'scroll-progress-bar';
      document.body.appendChild(bar);
    }

    let ticking = false;
    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            const h =
              document.documentElement.scrollHeight -
              document.documentElement.clientHeight;
            const pct =
              h > 0 ? (document.documentElement.scrollTop / h) * 100 : 0;
            bar.style.width = `${pct}%`;
            ticking = false;
          });
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  // ── Header Scroll State ───────────────────────────────────────────
  function initHeaderScroll() {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    let ticking = false;
    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            nav.classList.toggle('scrolled', window.scrollY > 40);
            ticking = false;
          });
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  // ── Mobile Drawer ─────────────────────────────────────────────────
  function initMobileDrawer() {
    const toggle = document.getElementById('mobile-menu-btn');
    const close = document.getElementById('mobile-menu-close');
    const drawer = document.getElementById('mobile-drawer');
    if (!drawer) return;

    const openDrawer = () => {
      drawer.classList.add('is-open');
      if (toggle) toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      if (close) setTimeout(() => close.focus(), 150);
    };

    const closeDrawer = () => {
      drawer.classList.remove('is-open');
      if (toggle) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
      document.body.style.overflow = '';
    };

    if (toggle) toggle.addEventListener('click', openDrawer);
    if (close) close.addEventListener('click', closeDrawer);

    drawer.addEventListener('click', (e) => {
      if (
        e.target === drawer ||
        e.target.classList.contains('mobile-drawer-backdrop')
      )
        closeDrawer();
    });

    drawer
      .querySelectorAll('a')
      .forEach((a) => a.addEventListener('click', closeDrawer));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('is-open'))
        closeDrawer();
    });
  }

  // ── Scroll Reveal ─────────────────────────────────────────────────
  function initScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal');
    const glowEls = document.querySelectorAll('.glow-on-scroll');
    if (!revealEls.length && !glowEls.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const cls = entry.target.classList.contains('glow-on-scroll')
            ? 'is-glowing'
            : 'is-visible';
          const delay = entry.target.getAttribute('data-delay');
          if (delay) {
            setTimeout(
              () => entry.target.classList.add(cls),
              parseInt(delay, 10)
            );
          } else {
            entry.target.classList.add(cls);
          }
          obs.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.1 }
    );

    revealEls.forEach((el) => obs.observe(el));
    glowEls.forEach((el) => obs.observe(el));
  }

  // ── Unified Counter Animation (merged initCounters + initEnhancedCounters) ──
  function initCounters() {
    // Handles: [data-counter], [data-target], [data-enhanced-counter]
    const els = document.querySelectorAll(
      '[data-counter], [data-target], [data-enhanced-counter]'
    );
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const raw =
            el.getAttribute('data-counter') ||
            el.getAttribute('data-target') ||
            el.getAttribute('data-enhanced-counter') ||
            '';
          const target = parseFloat(raw.replace(/[^0-9.]/g, ''));
          const prefix = el.getAttribute('data-prefix') || '';
          const suffix = el.getAttribute('data-suffix') || '';
          const decimals = parseInt(
            el.getAttribute('data-decimals') || '0',
            10
          );
          if (isNaN(target)) return;

          const duration = el.getAttribute('data-enhanced-counter')
            ? 1800
            : 1400;
          const start = performance.now();

          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const ease = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
            el.textContent = `${prefix}${(target * ease).toFixed(decimals)}${suffix}`;
            if (p < 1) {
              requestAnimationFrame(tick);
            } else {
              el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
            }
          };
          requestAnimationFrame(tick);
          obs.unobserve(el);
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => obs.observe(el));
  }

  // ── Modals ────────────────────────────────────────────────────────
  function initModals() {
    const overlay = document.getElementById('custom-modal-overlay');
    const closeBtn = document.getElementById('custom-modal-close');
    const titleEl = document.getElementById('custom-modal-title');
    const bodyEl = document.getElementById('custom-modal-body');

    window.openServiceModal = (title, html) => {
      if (!overlay) return;
      if (titleEl) titleEl.textContent = title;
      if (bodyEl) bodyEl.innerHTML = html;
      overlay.classList.add('active');
    };

    if (closeBtn && overlay) {
      closeBtn.addEventListener('click', () =>
        overlay.classList.remove('active')
      );
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.remove('active');
      });
    }
  }

  // ── Forms (real submission + validation) ─────────────────────────
  function initForms() {
    document
      .querySelectorAll('form:not([data-no-intercept])')
      .forEach((form) => {
        // If form has a real action (Formspree), let it submit natively  -  only intercept no-action forms
        if (form.action && !form.action.includes(window.location.hostname))
          return;

        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const btn =
            form.querySelector('[type="submit"]') ||
            form.querySelector('button:not([type="button"])');
          const orig = btn ? btn.innerHTML : 'Submit';
          let valid = true;

          form.querySelectorAll('[required]').forEach((inp) => {
            if (!inp.value.trim()) {
              valid = false;
              inp.style.borderColor = '#C53030';
              inp.addEventListener('input', function h() {
                inp.style.borderColor = '';
                inp.removeEventListener('input', h);
              });
            }
          });

          if (!valid) {
            showToast('Please fill in all required fields.', 'error');
            return;
          }

          if (btn) {
            btn.disabled = true;
            btn.innerHTML =
              '<i class="fa-solid fa-circle-notch fa-spin" style="margin-right:8px"></i>Submitting...';
          }

          setTimeout(() => {
            if (btn) {
              btn.disabled = false;
              btn.innerHTML = orig;
            }
            showToast(
              'Thank you! A senior solutions architect will contact you within 2 hours.',
              'success'
            );
            form.reset();
          }, 1200);
        });
      });
  }

  // ── Toast ─────────────────────────────────────────────────────────
  function showToast(message, type) {
    type = type || 'success';
    let container = document.getElementById('custom-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'custom-toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const icon =
      type === 'success'
        ? '<i class="fa-solid fa-circle-check toast-icon"></i>'
        : '<i class="fa-solid fa-circle-exclamation toast-icon"></i>';
    toast.innerHTML = `${icon}<div class="toast-content"><div class="toast-title">${type === 'success' ? 'Submitted' : 'Input Required'}</div><div class="toast-message">${message}</div></div><button class="toast-close" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>`;

    const cb = toast.querySelector('.toast-close');
    if (cb) cb.addEventListener('click', () => dismissToast(toast));

    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('is-visible'));
    setTimeout(() => dismissToast(toast), 5000);
  }

  function dismissToast(toast) {
    toast.classList.remove('is-visible');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }

  // ── FAQ Accordion ─────────────────────────────────────────────────
  function initFaqAccordion() {
    const items = document.querySelectorAll('.faq-item');
    if (!items.length) return;

    items.forEach((item) => {
      const q = item.querySelector('.faq-question');
      if (!q) return;
      q.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');
        items.forEach((o) => {
          if (o !== item) o.classList.remove('is-open');
        });
        item.classList.toggle('is-open', !isOpen);
      });
    });
  }

  // ── Smooth Scroll ─────────────────────────────────────────────────
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (e) => {
        const id = link.getAttribute('href');
        if (!id || id === '#') return;
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ═══════════════════════════════════════════════════════════════════
  // MODERN ENHANCEMENTS
  // ═══════════════════════════════════════════════════════════════════

  // ── Floating Particles System ─────────────────────────────────────
  function initParticles() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = 40;
    let mouseX = 0;
    let mouseY = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    canvas.parentElement.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    });

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(27, 94, 32, ${p.opacity})`;
        ctx.fill();

        particles.forEach((p2, j) => {
          if (j <= i) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(27, 94, 32, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(drawParticles);
    };

    drawParticles();
    // suppress unused warning  -  mouseX/mouseY reserved for future interaction
    void mouseX;
    void mouseY;
  }

  // ── Typewriter Effect ─────────────────────────────────────────────
  function initTypewriter() {
    const el = document.getElementById('typewriter-target');
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = 'infrastructure';
      return;
    }

    const words = [
      'infrastructure',
      'AI compute',
      'cloud engineering',
      'managed IT',
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 80;
    const deleteSpeed = 40;
    const pauseDelay = 2000;

    const type = () => {
      const current = words[wordIndex];
      if (isDeleting) {
        el.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = deleteSpeed;
      } else {
        el.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 80;
      }

      if (!isDeleting && charIndex === current.length) {
        typeSpeed = pauseDelay;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 400;
      }

      setTimeout(type, typeSpeed);
    };
    type();
  }

  // ── Magnetic Button Effect ────────────────────────────────────────
  function initMagneticButtons() {
    document.querySelectorAll('.magnetic-btn').forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
      });
    });
  }

  // ── Parallax Subtle Transform ─────────────────────────────────────
  function initParallax() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const elements = document.querySelectorAll('[data-parallax]');
    if (!elements.length) return;

    let ticking = false;
    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            elements.forEach((el) => {
              const speed =
                parseFloat(el.getAttribute('data-parallax')) || 0.05;
              const rect = el.getBoundingClientRect();
              if (rect.top < window.innerHeight && rect.bottom > 0) {
                const offset = (window.innerHeight - rect.top) * speed * 0.1;
                el.style.setProperty('--parallax-y', `${offset}px`);
              }
            });
            ticking = false;
          });
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  // ── Mouse Spotlight Glow Tracker ──────────────────────────────────
  function initSpotlightCards() {
    const targets = document.querySelectorAll(
      '.hero-pillar-card, .cap-row, .why-us-card, .case, .stat-modern, .gpu-spec, .spotlight-card'
    );
    if (!targets.length) return;

    targets.forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      });
    });
  }

  // ── Capabilities Filter Matrix (with ARIA) ────────────────────────
  function initCapabilityFilters() {
    const filterBtns = document.querySelectorAll('.cap-filter-btn');
    const capRows = document.querySelectorAll('.cap-row-item');
    if (!filterBtns.length || !capRows.length) return;

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-filter');

        // Update active state + ARIA
        filterBtns.forEach((b) => {
          b.classList.toggle('active', b === btn);
          b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
        });

        capRows.forEach((row) => {
          const rowCat = row.getAttribute('data-category');
          if (category === 'all' || rowCat === category) {
            row.style.display = 'block';
            row.style.opacity = '0';
            row.style.transform = 'translateY(6px)';
            requestAnimationFrame(() => {
              row.style.transition = 'opacity 300ms ease, transform 300ms ease';
              row.style.opacity = '1';
              row.style.transform = 'translateY(0)';
            });
          } else {
            row.style.display = 'none';
          }
        });
      });
    });
  }
})();
