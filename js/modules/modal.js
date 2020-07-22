export default function initModal() {
  const buttonOpen = document.querySelector('[data-modal="open"]');
  const buttonClose = document.querySelector('[data-modal="close"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function openModal(event) {
    event.preventDefault();
    containerModal.classList.add('active');
  }

  function closeModal(event) {
    event.preventDefault();
    containerModal.classList.remove('active');
  }

  function outsideModalClick(event) {
    if (event.target === this) {
      closeModal(event);
    }
  }
  if (buttonClose && buttonOpen && containerModal) {
    buttonOpen.addEventListener('click', openModal);
    buttonClose.addEventListener('click', closeModal);
    containerModal.addEventListener('click', outsideModalClick);
  }
}
