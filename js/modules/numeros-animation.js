export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');

    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const increment = Math.floor(total / 100);
      let start = 0;

      const timer = setInterval(() => {
        start += increment;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 30 * Math.random());
    });
  }

  const observerTarget = document.querySelector('.numeros');
  // eslint-disable-next-line no-use-before-define
  const observer = new MutationObserver(handleMutation);

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('active')) {
      observer.disconnect();
      animaNumeros();
    }
  }

  observer.observe(observerTarget, { attributes: true });
}
