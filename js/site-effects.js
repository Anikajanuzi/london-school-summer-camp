(function () {
  const currentPath = window.location.pathname.replace(/\/$/, "");

  if (currentPath === "/activities" || /\/activities\.html$/i.test(currentPath)) {
    return;
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealSelectors = [
    "main section",
    ".gallery-intro",
    ".gallery-grid",
    ".year-card",
    ".schedule-card",
    ".schedule-week-heading",
    ".apply-hero > div",
    ".reservation-section",
    ".outodor",
    ".beach",
    ".Sports",
    ".aritje",
    ".team",
    ".meals",
    ".okej",
    ".deti",
    ".ft",
    ".lon",
    ".hello",
    ".staff",
    ".star",
    ".place",
    ".jale",
    ".staff-card",
    ".card",
    ".card1",
    ".card2",
    ".card3",
    ".card4",
    ".card5",
    ".card6",
    ".card7",
    ".card8",
    ".footer-box"
  ];

  const revealItems = [...document.querySelectorAll(revealSelectors.join(","))]
    .filter((item) => !item.closest(".video-modal, .gallery-lightbox, .learn-modal-overlay"));

  if (!revealItems.length) return;

  document.documentElement.classList.add("site-effects-ready");

  revealItems.forEach((item, index) => {
    item.classList.add("site-reveal");
    item.classList.add(index % 5 === 0 ? "site-reveal--zoom" : index % 3 === 0 ? "site-reveal--fade" : "site-reveal--up");
  });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: "0px 0px -8% 0px",
    threshold: 0.12
  });

  revealItems.forEach((item) => observer.observe(item));
})();
