export default class Modal {
  constructor(buttonOpen, buttonClose, containerModal) {
    this.buttonOpen = document.querySelector(buttonOpen);
    this.buttonClose = document.querySelector(buttonClose);
    this.containerModal = document.querySelector(containerModal);

    // bind this em callback para referencia ao obj
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.outsideModalClick = this.outsideModalClick.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle('active');
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  outsideModalClick(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  addModalEvents() {
    this.buttonOpen.addEventListener('click', this.eventToggleModal);
    this.buttonClose.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.outsideModalClick);
  }

  init() {
    if (this.buttonOpen && this.buttonClose && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
