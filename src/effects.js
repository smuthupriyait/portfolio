// Self-contained on purpose: scripts/static.mjs inlines this function into the standalone page.
export function initEffects() {
  document.documentElement.classList.add("js");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var els = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (reduce || !("IntersectionObserver" in window)) {
    els.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0 });
    els.forEach(function (el) { io.observe(el); });
  }
  var links = Array.prototype.slice.call(document.querySelectorAll("nav a[href^='#']"));
  var secs = Array.prototype.slice.call(document.querySelectorAll("[data-nav]"));
  var ticking = false;
  function update() {
    var cur = "top";
    secs.forEach(function (s) { if (s.getBoundingClientRect().top <= 150) cur = s.getAttribute("data-nav"); });
    links.forEach(function (a) {
      var on = a.getAttribute("href") === "#" + cur;
      a.classList.toggle("active", on);
      if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
    });
    ticking = false;
  }
  window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();
}
