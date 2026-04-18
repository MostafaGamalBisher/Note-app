import { clearContainer, DOM, listEmptyState } from './ui';

const createCardHTML = (note) => `
              <li class="note-card" data-id="${note.id}" >
                <h3 class="note-card__title">${note.title}</h3>
                <p class="note-card__excerpt">
                 ${note.body}
                </p>
                <div class="note-card__bottom">
                  <span class="note-card__date">${note.date}</span>
                  <button class="note-card__delete">delete</button>
                </div>
              </li>
`;

export const renderRegularCards = (container, notesArray) => {
  clearContainer(container);

  if (notesArray.length === 0) {
    listEmptyState(container);
    return;
  }

  container.innerHTML = notesArray.map(createCardHTML).join('');
};
