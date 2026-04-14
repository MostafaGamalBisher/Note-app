import '../scss/main.scss';

const allNavItems = document.querySelectorAll('.nav-menu__item');
const app = document.querySelector('.app');

allNavItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    const parent = e.target.closest('.nav-menu__item');

    allNavItems.forEach((navitem) => {
      navitem.classList.remove('nav-menu__item--active');
    });

    parent.classList.add('nav-menu__item--active');
  });
});
