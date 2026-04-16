export const DOM = {
  app: document.querySelector('.app'),

  menuOverLay: document.querySelector('#menu-overlay'),
  searchOverLay: document.querySelector('#search-overlay'),

  menuOpenBtn: document.querySelector('.mobile-header__burger'),
  searchOpenBtn: document.querySelector('.mobile-header__search-btn'),
  searchOverLayBurger: document.querySelector('.search-overlay__burger'),

  menuCloseBtn: document.querySelector('.menu-overlay__close'),
  searchCloseBtn: document.querySelector('.search-overlay__close'),
};

export const setAppView = (element, viewName) => {
  element.setAttribute('data-view', viewName);
};

export const addClass = (element, className) => {
  element.classList.add(className);
};

export const removeClass = (element, className) => {
  element.classList.remove(className);
};

export const toggleClass = (element, className) => {
  element.classList.toggle(className);
};
