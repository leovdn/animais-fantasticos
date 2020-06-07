export default function startAnimateScroll() {
    const sections = document.querySelectorAll('[data-anime="scroll"]');

    if (sections.length) {
        const windowHalf = window.innerHeight * 0.7;

        function animemateScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowHalf) < 0;
                if (isSectionVisible) {
                    section.classList.add('active');
                }
            })
        }
        animemateScroll();
        window.addEventListener('scroll', animemateScroll);
    }
}