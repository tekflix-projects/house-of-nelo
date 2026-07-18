/* HOUSE OF NELO — interactions */
(function () {
  "use strict";

  /* ---------- Sticky nav + mobile toggle ---------- */
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav__toggle");

  if (nav) {
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll(".nav__links a").forEach((a) =>
      a.addEventListener("click", () => nav.classList.remove("open"))
    );
  }

  /* ---------- Scroll reveal ---------- */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  /* ---------- Current year ---------- */
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Portfolio filter ---------- */
  const filters = document.querySelectorAll(".filter");
  const items = document.querySelectorAll(".gallery .project");
  if (filters.length && items.length) {
    filters.forEach((btn) => {
      btn.addEventListener("click", () => {
        filters.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const cat = btn.dataset.filter;
        items.forEach((item) => {
          const show = cat === "all" || item.dataset.cat === cat;
          item.classList.toggle("hide", !show);
        });
      });
    });
  }

  /* ---------- Lightbox ---------- */
  const lightbox = document.querySelector(".lightbox");
  if (lightbox) {
    const lbImg = lightbox.querySelector("[data-lb-img]");
    const lbPh = lightbox.querySelector("[data-lb-ph]");
    const lbCap = lightbox.querySelector(".lightbox__cap");
    const close = () => lightbox.classList.remove("open");

    document.querySelectorAll("[data-lightbox]").forEach((trigger) => {
      trigger.addEventListener("click", (ev) => {
        ev.preventDefault();
        const cap = trigger.dataset.caption || "";
        const img = trigger.querySelector("img");
        const ph = trigger.querySelector(".ph");
        if (img && lbImg) {
          lbImg.src = img.src;
          lbImg.style.display = "block";
          if (lbPh) lbPh.style.display = "none";
        } else if (ph && lbPh) {
          // clone placeholder look
          lbPh.className = "ph " + (ph.className.match(/ph--\w/)?.[0] || "");
          lbPh.setAttribute("data-label", cap);
          lbPh.style.display = "grid";
          if (lbImg) lbImg.style.display = "none";
        }
        if (lbCap) lbCap.textContent = cap;
        lightbox.classList.add("open");
      });
    });

    lightbox.addEventListener("click", (ev) => {
      if (ev.target === lightbox || ev.target.closest(".lightbox__close")) close();
    });
    document.addEventListener("keydown", (ev) => {
      if (ev.key === "Escape") close();
    });
  }

  /* ---------- Inquiry form (Formspree AJAX) ---------- */
  const form = document.querySelector("form[data-inquiry]");
  if (form) {
    const success = document.querySelector(".form-success");
    form.addEventListener("submit", async (ev) => {
      // If the form action still points at the placeholder, let the browser
      // handle it normally so nothing silently fails.
      if (form.action.includes("YOUR_FORM_ID")) return;

      ev.preventDefault();
      const btn = form.querySelector("[type=submit]");
      const original = btn ? btn.textContent : "";
      if (btn) {
        btn.disabled = true;
        btn.textContent = "Sending…";
      }
      try {
        const res = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });
        if (res.ok) {
          form.reset();
          if (success) {
            success.classList.add("show");
            success.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        } else {
          throw new Error("Bad response");
        }
      } catch (err) {
        alert("Something went wrong. Please email hello@houseofnelo.com and we'll respond right away.");
      } finally {
        if (btn) {
          btn.disabled = false;
          btn.textContent = original;
        }
      }
    });
  }
})();
