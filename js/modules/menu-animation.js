export default function startTabNav() {
    const tabMenu = document.querySelectorAll('[data-anime="menu"] li');
    const tabContent = document.querySelectorAll('[data-anime="content"] section');
    tabContent[0].classList.add('active');

    if(tabMenu.length && tabContent.length) {
        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('active');
            })
            const direction = tabContent[index].dataset.anime;
            tabContent[index].classList.add('active', direction);
        }

        tabMenu.forEach((itemMMenu, index) => {
            itemMMenu.addEventListener('click', () => {
                activeTab(index);
            })
        })
    }    
}