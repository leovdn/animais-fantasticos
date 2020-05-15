function startTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    tabContent[0].classList.add('active');

    if(tabMenu.length && tabContent.length) {
        function actiiveTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('active');
            })
            tabContent[index].classList.add('active');
        }

        tabMenu.forEach((itemMMenu, index) => {
            itemMMenu.addEventListener('click', () => {
                actiiveTab(index);
            })
        })
    }    
}
startTabNav();

function startAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'active';

    if(accordionList.length){
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        })
    }
}
startAccordion();

function startSmoothScroll() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollSection);
    })
}
startSmoothScroll();

function startAnimateScroll() {
    const sections = document.querySelectorAll('.js-scroll');

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
startAnimateScroll();