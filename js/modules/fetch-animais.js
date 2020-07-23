import AnimaNumeros from './numeros-animation.js';

export default function fetchAnimais(url, target) {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');

    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;

    return div;
  }

  const numeroGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numeroGrid.appendChild(divAnimal);
  }

  function animaNumbers() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'active');
    animaNumeros.init();
  }

  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaNumbers();
    } catch (erro) {
      // eslint-disable-next-line no-alert
      alert(erro);
    }
  }
  return criarAnimais();
}
