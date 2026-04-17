import '../scss/main.scss';
import {
  addClass,
  DOM,
  removeClass,
  setAppView,
  updateActiveNavLinks,
} from './ui';

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

  DOM.navAddNotesLinks.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();

      setAppView(DOM.app, 'add-note');
      updateActiveNavLinks(
        DOM.navAddNotesLinks,
        DOM.navNotesLinks,
        'nav-menu__item--active'
      );
      removeClass(DOM.app, 'has-menu-open');
    });
  });

  if (DOM.fabBtn) {
    DOM.fabBtn.addEventListener('click', () => {
      setAppView(DOM.app, 'add-note');
    });
  }

  DOM.navNotesLinks.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();

      setAppView(DOM.app, 'notes');
      updateActiveNavLinks(
        DOM.navNotesLinks,
        DOM.navAddNotesLinks,
        'nav-menu__item--active'
      );
      removeClass(DOM.app, 'has-menu-open');
    });
  });
};
initApp();
