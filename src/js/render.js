import { notes } from './store';
import { clearContainer, listEmptyState } from './ui';

const createCardHTML = (note) => `
              <li class="note-card" data-id="${note.id}" >
                <h3 class="note-card__title">${note.title}</h3>
                <p class="note-card__excerpt">
                 ${note.body}
                </p>
                <div class="note-card__bottom">
                  <span class="note-card__date">${note.date}</span>
                 <div class="note-card__actions">
                  <button class="note-card__pin ${note.isPinned ? 'note-card__pin--active' : ''}">+</button>
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
