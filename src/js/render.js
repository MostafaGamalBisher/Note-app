import { notes, viewNoteId } from './store';
import { addClass, clearContainer, DOM, listEmptyState } from './ui';

const createCardHTML = (note) => `
              <li class="note-card ${note.id === viewNoteId ? 'note-card--selected' : ''}" data-id="${note.id}" >
                <h3 class="note-card__title">${note.title}</h3>
                <p class="note-card__excerpt">
                 ${note.body}
                </p>
                <div class="note-card__bottom">
                  <span class="note-card__date">${note.date}</span>
                 <div class="note-card__actions">
                  <button class="note-card__pin ${note.isPinned ? 'note-card__pin--active' : ''}">+</button>
                  <button class="note-card__edit">
                  <svg width="15px" height="15px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentcolor" d="M2.29171812,13.3600638 L6.81539686,18.1161843 L0.5,20 L2.29171812,13.3600638 Z M12.7049284,2.41181464 L17.2274301,7.16667706 L7.26550878,17.6404299 L2.74300706,12.8855675 L12.7049284,2.41181464 Z M16.1415118,0.347861156 C16.8783654,1.12259394 18.3106609,2.62843788 19.1175863,3.4768634 C19.9245902,4.32524768 19.2036068,5.09020427 19.2036068,5.09020427 L17.6827602,6.68916958 L13.1591207,1.93311092 L14.6798693,0.334186853 L14.6989777,0.315464422 C14.8180473,0.203171183 15.4749058,-0.352994255 16.1415118,0.347861156 Z"/>
                  </svg>
                  </button>
                  <button class="note-card__delete">delete</button>
                 </div>
                </div>
              </li>
`;

export const renderAllNotes = (
  regularContainer,
  pinnedContainer,
  notesArray
) => {
  clearContainer(regularContainer);
  clearContainer(pinnedContainer);

  const pinnedNotes = notesArray.filter((note) => note.isPinned === true);
  const regularNotes = notesArray;

  if (pinnedNotes.length === 0) {
    listEmptyState(pinnedContainer, 'Pin a note');
  } else {
    pinnedContainer.innerHTML = pinnedNotes.map(createCardHTML).join('');
  }

  if (regularNotes.length === 0) {
    listEmptyState(regularContainer, 'Add your first note!');
  } else {
    regularContainer.innerHTML = regularNotes.map(createCardHTML).join('');
  }
};

export const renderNoteDetail = (note) => {
  DOM.detailTitle.textContent = note.title;
  DOM.detailDate.textContent = note.date;
  DOM.detailAuthor.textContent = note.name;
  DOM.detailBody.textContent = note.body;

  DOM.detailEmpty.style.display = 'none';

  addClass(DOM.detailContent, 'is-visible');
  // addClass(DOM.)
};

// render.js

export const renderSearchResults = (container, resultsArray) => {
  clearContainer(container);

  if (resultsArray.length === 0) {
    container.innerHTML =
      '<li class="empty-state"><p class="empty-state__text">No matching notes found.</p></li>';
    return;
  }

  container.innerHTML = resultsArray.map(createCardHTML).join('');
};
