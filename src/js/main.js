import '../scss/main.scss';

// const allNavItems = document.querySelectorAll('.nav-menu__item');
// const app = document.querySelector('.app');

// allNavItems.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     e.preventDefault();

//     // Get the text of the clicked link
//     const clickedLinkText = item
//       .querySelector('.nav-menu__link')
//       .textContent.trim();

//     // Remove active from ALL
//     allNavItems.forEach((navItem) => {
//       navItem.classList.remove('nav-menu__item--active');

//       // Add active to matching items in BOTH menus
//       const navLinkText = navItem
//         .querySelector('.nav-menu__link')
//         .textContent.trim();
//       if (navLinkText === clickedLinkText) {
//         navItem.classList.add('nav-menu__item--active');
//       }
//     });

//     // Update data-view
//     if (clickedLinkText === 'Add Notes') {
//       app.setAttribute('data-view', 'add-note');
//     } else {
//       app.setAttribute('data-view', 'notes');
//     }
//   });
// });
