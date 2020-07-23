export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;
    this.handleMutation = this.handleMutation.bind(this);
  }

  // recebe elemento DOM com texto numero e transforma em number
  // incrementa até o total
  static incrementNumber(numero) {
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
  }

  animaNumeros() {
    this.numeros.forEach((numero) => this.constructor.incrementNumber(numero));
  }

  // eslint-disable-next-line no-use-before-define

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
