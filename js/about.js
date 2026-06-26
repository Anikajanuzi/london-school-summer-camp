
const learnMoreOpen = document.getElementById('learnMoreOpen');
const learnMoreClose = document.getElementById('learnMoreClose');
const learnMoreModal = document.getElementById('learnMoreModal');

if (learnMoreOpen && learnMoreClose && learnMoreModal) {
  const openLearnModal = () => {
    learnMoreModal.classList.add('is-open');
    learnMoreModal.setAttribute('aria-hidden', 'false');
  };

  const closeLearnModal = () => {
    learnMoreModal.classList.remove('is-open');
    learnMoreModal.setAttribute('aria-hidden', 'true');
  };

  learnMoreOpen.addEventListener('click', openLearnModal);
  learnMoreClose.addEventListener('click', closeLearnModal);

  learnMoreModal.addEventListener('click', (event) => {
    if (event.target === learnMoreModal) {
      closeLearnModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && learnMoreModal.classList.contains('is-open')) {
      closeLearnModal();
    }
  });
}