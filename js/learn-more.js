const learnRevealItems = document.querySelectorAll(".learn-reveal");

if (learnRevealItems.length) {
  document.documentElement.classList.add("animations-ready");

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.16
  });

  learnRevealItems.forEach((item) => revealObserver.observe(item));
}
