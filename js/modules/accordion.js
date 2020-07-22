export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'active';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // adiciona eventos acordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  // Inicia função
  init() {
    if (this.accordionList.length) {
      // Ativa primeiro item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }
}
