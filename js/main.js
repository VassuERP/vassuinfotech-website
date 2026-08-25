// ═══════════════════════════════════════════════════════════════════════════
// VASSU INFOTECH — Swiss Architectural Interaction Layer
// Minimal, precise, grid-disciplined
// ═══════════════════════════════════════════════════════════════════════════

(function () {
  "use strict";

  function init() {
    initScrollProgress();
    initHeaderScroll();
    initMobileDrawer();
    initScrollReveal();
    initCounters();
    initModals();
    initForms();
    initFaqAccordion();
    initSmoothScroll();
    initParticles();
    initTypewriter();
    initMagneticButtons();
    initEnhancedCounters();
    initParallax();
    initHeroVisualShowcase();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // ── Scroll Progress ───────────────────────────────────────────────
  function initScrollProgress() {
    var bar = document.getElementById("scroll-progress-bar");
    if (!bar) {
      bar = document.createElement("div");
      bar.id = "scroll-progress-bar";
      document.body.appendChild(bar);
    }

    var ticking = false;
    window.addEventListener("scroll", function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          var h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          var pct = h > 0 ? (document.documentElement.scrollTop / h) * 100 : 0;
          bar.style.width = pct + "%";
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ── Header Scroll State ───────────────────────────────────────────
  function initHeaderScroll() {
    var nav = document.querySelector(".nav");
    if (!nav) return;

    var ticking = false;
    window.addEventListener("scroll", function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          nav.classList.toggle("scrolled", window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ── Mobile Drawer ─────────────────────────────────────────────────
  function initMobileDrawer() {
    var toggle = document.getElementById("mobile-menu-btn");
    var close = document.getElementById("mobile-menu-close");
    var drawer = document.getElementById("mobile-drawer");
    if (!drawer) return;

    function open() {
      drawer.classList.add("is-open");
      if (toggle) toggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      if (close) setTimeout(function () { close.focus(); }, 150);
    }

    function closeDrawer() {
      drawer.classList.remove("is-open");
      if (toggle) { toggle.setAttribute("aria-expanded", "false"); toggle.focus(); }
      document.body.style.overflow = "";
    }

    if (toggle) toggle.addEventListener("click", open);
    if (close) close.addEventListener("click", closeDrawer);

    drawer.addEventListener("click", function (e) {
      if (e.target === drawer || e.target.classList.contains("mobile-drawer-backdrop")) closeDrawer();
    });

    drawer.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeDrawer); });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && drawer.classList.contains("is-open")) closeDrawer();
    });
  }

  // ── Scroll Reveal (unified — handles .reveal and .glow-on-scroll) ──
  function initScrollReveal() {
    var revealEls = document.querySelectorAll(".reveal");
    var glowEls = document.querySelectorAll(".glow-on-scroll");
    if (!revealEls.length && !glowEls.length) return;

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var cls = e.target.classList.contains("glow-on-scroll") ? "is-glowing" : "is-visible";
        var d = e.target.getAttribute("data-delay");
        if (d) setTimeout(function () { e.target.classList.add(cls); }, parseInt(d, 10));
        else e.target.classList.add(cls);
        obs.unobserve(e.target);
      });
    }, { rootMargin: "0px 0px -40px 0px", threshold: 0.1 });

    revealEls.forEach(function (el) { obs.observe(el); });
    glowEls.forEach(function (el) { obs.observe(el); });
  }

  // ── Counter Animation ─────────────────────────────────────────────
  function initCounters() {
    var els = document.querySelectorAll("[data-counter], [data-target]");
    if (!els.length) return;

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        var raw = el.getAttribute("data-counter") || el.getAttribute("data-target") || el.textContent.replace(/[^0-9.]/g, "");
        var prefix = el.getAttribute("data-prefix") || "";
        var suffix = el.getAttribute("data-suffix") || "";
        var target = parseFloat(raw);
        if (isNaN(target)) return;

        var duration = 1400, start = performance.now();
        function tick(now) {
          var p = Math.min((now - start) / duration, 1);
          var ease = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
          el.textContent = prefix + Math.round(target * ease) + suffix;
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = prefix + target + suffix;
        }
        requestAnimationFrame(tick);
        obs.unobserve(el);
      });
    }, { threshold: 0.15 });

    els.forEach(function (el) { obs.observe(el); });
  }

  // ── Modals ────────────────────────────────────────────────────────
  function initModals() {
    var overlay = document.getElementById("custom-modal-overlay");
    var closeBtn = document.getElementById("custom-modal-close");
    var titleEl = document.getElementById("custom-modal-title");
    var bodyEl = document.getElementById("custom-modal-body");

    window.openServiceModal = function (title, html) {
      if (!overlay) return;
      if (titleEl) titleEl.textContent = title;
      if (bodyEl) bodyEl.innerHTML = html;
      overlay.classList.add("active");
    };

    if (closeBtn && overlay) {
      closeBtn.addEventListener("click", function () { overlay.classList.remove("active"); });
      overlay.addEventListener("click", function (e) { if (e.target === overlay) overlay.classList.remove("active"); });
    }
  }

  // ── Forms ─────────────────────────────────────────────────────────
  function initForms() {
    document.querySelectorAll("form").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var btn = form.querySelector('[type="submit"]') || form.querySelector("button:not([type='button'])");
        var orig = btn ? btn.innerHTML : "Submit";
        var valid = true;

        form.querySelectorAll("[required]").forEach(function (inp) {
          if (!inp.value.trim()) {
            valid = false;
            inp.style.borderColor = "#C53030";
            inp.addEventListener("input", function h() { inp.style.borderColor = ""; inp.removeEventListener("input", h); });
          }
        });

        if (!valid) { showToast("Please fill in all required fields.", "error"); return; }

        if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin" style="margin-right:8px"></i>Submitting...'; }

        setTimeout(function () {
          if (btn) { btn.disabled = false; btn.innerHTML = orig; }
          showToast("Thank you! A senior solutions architect will contact you within 2 hours.", "success");
          form.reset();
        }, 1200);
      });
    });
  }

  // ── Toast ─────────────────────────────────────────────────────────
  function showToast(message, type) {
    type = type || "success";
    var container = document.getElementById("custom-toast-container");
    if (!container) { container = document.createElement("div"); container.id = "custom-toast-container"; document.body.appendChild(container); }

    var toast = document.createElement("div");
    toast.className = "toast toast-" + type;
    var icon = type === "success" ? '<i class="fa-solid fa-circle-check toast-icon"></i>' : '<i class="fa-solid fa-circle-exclamation toast-icon"></i>';
    toast.innerHTML = icon + '<div class="toast-content"><div class="toast-title">' + (type === "success" ? "Submitted" : "Input Required") + '</div><div class="toast-message">' + message + '</div></div><button class="toast-close" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>';

    var cb = toast.querySelector(".toast-close");
    if (cb) cb.addEventListener("click", function () { dismissToast(toast); });

    container.appendChild(toast);
    requestAnimationFrame(function () { toast.classList.add("is-visible"); });
    setTimeout(function () { dismissToast(toast); }, 5000);
  }

  function dismissToast(toast) {
    toast.classList.remove("is-visible");
    setTimeout(function () { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 300);
  }

  // ── FAQ ───────────────────────────────────────────────────────────
  function initFaqAccordion() {
    var items = document.querySelectorAll(".faq-item");
    if (!items.length) return;

    items.forEach(function (item) {
      var q = item.querySelector(".faq-question");
      if (!q) return;
      q.addEventListener("click", function () {
        var open = item.classList.contains("is-open");
        items.forEach(function (o) { if (o !== item) o.classList.remove("is-open"); });
        item.classList.toggle("is-open", !open);
      });
    });
  }

  // ── Smooth Scroll ─────────────────────────────────────────────────
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (e) {
        var id = link.getAttribute("href");
        if (!id || id === "#") return;
        var target = document.querySelector(id);
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: "smooth", block: "start" }); }
      });
    });
  }

  // ═════════════════════════════════════════════════════════════════════
  // MODERN ENHANCEMENTS
  // ═════════════════════════════════════════════════════════════════════

  // ── Floating Particles System ─────────────────────────────────────
  function initParticles() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var canvas = document.getElementById("particles-canvas");
    if (!canvas) return;

    var ctx = canvas.getContext("2d");
    var particles = [];
    var particleCount = 40;
    var mouseX = 0;
    var mouseY = 0;

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    for (var i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.1
      });
    }

    canvas.parentElement.addEventListener("mousemove", function (e) {
      var rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    });

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(function (p, i) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(27, 94, 32, " + p.opacity + ")";
        ctx.fill();

        // Draw connections
        particles.forEach(function (p2, j) {
          if (j <= i) return;
          var dx = p.x - p2.x;
          var dy = p.y - p2.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = "rgba(27, 94, 32, " + (0.06 * (1 - dist / 120)) + ")";
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(drawParticles);
    }

    drawParticles();
  }

  // ── Typewriter Effect ─────────────────────────────────────────────
  function initTypewriter() {
    var el = document.getElementById("typewriter-target");
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = "infrastructure";
      return;
    }

    var words = ["infrastructure", "AI compute", "cloud engineering", "managed IT"];
    var wordIndex = 0;
    var charIndex = 0;
    var isDeleting = false;
    var typeSpeed = 80;
    var deleteSpeed = 40;
    var pauseDelay = 2000;

    function type() {
      var current = words[wordIndex];

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
    }

    type();
  }


  // ── Magnetic Button Effect ────────────────────────────────────────
  function initMagneticButtons() {
    var btns = document.querySelectorAll(".magnetic-btn");
    btns.forEach(function (btn) {
      btn.addEventListener("mousemove", function (e) {
        var rect = btn.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = "translate(" + (x * 0.15) + "px, " + (y * 0.15) + "px)";
      });

      btn.addEventListener("mouseleave", function () {
        btn.style.transform = "translate(0, 0)";
      });
    });
  }

  // ── Counter Animation (Enhanced) ──────────────────────────────────
  function initEnhancedCounters() {
    var els = document.querySelectorAll("[data-enhanced-counter]");
    if (!els.length) return;

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        var target = parseFloat(el.getAttribute("data-enhanced-counter"));
        var prefix = el.getAttribute("data-prefix") || "";
        var suffix = el.getAttribute("data-suffix") || "";
        var decimals = el.getAttribute("data-decimals") || "0";
        if (isNaN(target)) return;

        var duration = 1800;
        var start = performance.now();

        function tick(now) {
          var p = Math.min((now - start) / duration, 1);
          var ease = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
          var val = target * ease;
          el.textContent = prefix + val.toFixed(parseInt(decimals, 10)) + suffix;
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = prefix + target.toFixed(parseInt(decimals, 10)) + suffix;
        }
        requestAnimationFrame(tick);
        obs.unobserve(el);
      });
    }, { threshold: 0.15 });

    els.forEach(function (el) { obs.observe(el); });
  }

  // ── Hero Visual Showcase Switcher (Zero-Jitter) ──────────────────
  function initHeroVisualShowcase() {
    var btns = document.querySelectorAll(".hero-visual-btn");
    var slides = document.querySelectorAll(".hero-visual-slide");
    if (!btns.length || !slides.length) return;

    var topTitle = document.getElementById("hero-badge-top-title");
    var topSub = document.getElementById("hero-badge-top-sub");
    var statusText = document.getElementById("hero-badge-status-text");

    var badgeData = [
      {
        title: "NVIDIA H100 / A100 Racks",
        sub: '<span style="color:#4ade80">●</span> High-Density GPU Compute',
        status: "99.999% SLA Uptime"
      },
      {
        title: "Dell & HPE Bare-Metal",
        sub: '<span style="color:#4ade80">●</span> Dedicated Enterprise Lease',
        status: "Tier III Datacenter"
      },
      {
        title: "Cloud & DevOps Engineering",
        sub: '<span style="color:#4ade80">●</span> AWS, Azure & K8s GitOps',
        status: "15+ Years Pedigree"
      }
    ];

    var autoInterval = null;
    var currentIndex = 0;

    function activateSlide(index) {
      btns.forEach(function (btn, i) {
        btn.classList.toggle("active", i === index);
      });
      slides.forEach(function (slide, i) {
        slide.classList.toggle("active", i === index);
      });

      if (badgeData[index]) {
        if (topTitle) topTitle.textContent = badgeData[index].title;
        if (topSub) topSub.innerHTML = badgeData[index].sub;
        if (statusText) statusText.textContent = badgeData[index].status;
      }

      currentIndex = index;
    }

    btns.forEach(function (btn, i) {
      btn.addEventListener("click", function () {
        activateSlide(i);
        clearInterval(autoInterval);
      });
    });

    // Auto rotate every 6 seconds if user hasn't manually clicked
    autoInterval = setInterval(function () {
      var nextIndex = (currentIndex + 1) % btns.length;
      activateSlide(nextIndex);
    }, 6000);
  }
})();
