export default function startAnimateScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowHalf = window.innerHeight * 0.7;

  function animemateScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowHalf) < 0;
      if (isSectionVisible) {
        section.classList.add('active');
      } else if (section.classList.contains('active')) {
        section.classList.remove('active');
      }
    });
  }

  if (sections.length) {
    animemateScroll();
    window.addEventListener('scroll', animemateScroll);
  }
}
