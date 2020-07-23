import TabNav from './modules/menu-animation.js';
import Accordion from './modules/accordion.js';
import ScrollAnima from './modules/scroll-anima.js';
import SmoothScroll from './modules/smooth-animation.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initOpeningHour from './modules/openinghour.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBictoin from './modules/fetch-bitcoin.js';

const smoothScroll = new SmoothScroll('[data-anime="js-menu"] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-anime="menu"] li', '[data-anime="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="open"]', '[data-modal="close"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

initDropdownMenu();
initMenuMobile();
initOpeningHour();

fetchAnimais('../../animaisapi.json', '.numeros-grid');

fetchBictoin('https://blockchain.info/ticker', '.btc-preco');
