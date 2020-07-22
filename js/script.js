import TabNav from './modules/menu-animation.js';
import Accordion from './modules/accordion.js';
import animateScroll from './modules/scroll-animation.js';
import SmoothScroll from './modules/smooth-animation.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initOpeningHour from './modules/openinghour.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBictoin from './modules/fetch-bitcoin.js';

const smoothScroll = new SmoothScroll('[data-anime="js-menu"] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-anime="menu"] li', '[data-anime="content"] section');
tabNav.init();

animateScroll();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initOpeningHour();
initFetchAnimais();
initFetchBictoin();
