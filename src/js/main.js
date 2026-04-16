import '../scss/main.scss';
import { addClass, DOM, removeClass } from './ui';

const bindUIEvent = (triggerElement, targetElement, actionFunc, className) => {
  triggerElement.addEventListener('click', () => {
    actionFunc(targetElement, className);
  });
};

const initApp = () => {
  bindUIEvent(DOM.menuOpenBtn, DOM.app, addClass, 'has-menu-open');
  bindUIEvent(DOM.menuCloseBtn, DOM.app, removeClass, 'has-menu-open');
  bindUIEvent(DOM.searchOpenBtn, DOM.searchOverLay, addClass, 'is-active');
  bindUIEvent(DOM.searchCloseBtn, DOM.searchOverLay, removeClass, 'is-active');

  DOM.searchOverLayBurger.addEventListener('click', () => {
    removeClass(DOM.searchOverLay, 'is-active');
    addClass(DOM.app, 'has-menu-open');
  });
};

initApp();
