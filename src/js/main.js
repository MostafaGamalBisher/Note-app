import '../scss/main.scss';
import {
  renderAllNotes,
  renderNoteDetail,
  renderSearchResults,
} from './render';
import {
  addNote,
  deleteNote,
  loadNotes,
  notes,
  toggleNotePin,
  activeNoteId,
  setActiveNote,
  updateNote,
  clearActiveNote,
  setViewedNote,
} from './store';
import {
  addClass,
  clearContainer,
  DOM,
  removeClass,
  setAppView,
  toggleClass,
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

  bindUIEvent(
    DOM.collapseBtn,
    DOM.notesPanel,
    toggleClass,
    'notes-panel--collapsed'
  );

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
      clearActiveNote();
      DOM.addNoteForm.reset();
    });
  });

  if (DOM.fabBtn) {
    DOM.fabBtn.addEventListener('click', () => {
      setAppView(DOM.app, 'add-note');
      updateActiveNavLinks(
        DOM.navAddNotesLinks,
        DOM.navNotesLinks,
        'nav-menu__item--active'
      );
      clearActiveNote();
      DOM.addNoteForm.reset();
    });
  }

  if (DOM.detailBackBtn) {
    DOM.detailBackBtn.addEventListener('click', () => {
      setAppView(DOM.app, 'notes');
    });
  }

  DOM.navNotesLinks.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();

      clearActiveNote();
      DOM.addNoteForm.reset();

      setAppView(DOM.app, 'notes');
      updateActiveNavLinks(
        DOM.navNotesLinks,
        DOM.navAddNotesLinks,
        'nav-menu__item--active'
      );
      removeClass(DOM.app, 'has-menu-open');
    });
  });

  loadNotes();
  renderAllNotes(DOM.notesRegularContainer, DOM.notesPinnedContainer, notes);

  DOM.addNoteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const titleText = DOM.titleInput.value.trim();
    const nameText = DOM.nameInput.value.trim();
    const bodyText = DOM.bodyInput.value.trim();

    if (!titleText || !nameText || !bodyText) {
      alert('Please fill out all fields with valid text.');
      return;
    }

    const userWantsItPinned = e.submitter.id === 'btn-add-pinned';

    if (activeNoteId) {
      updateNote(
        activeNoteId,
        titleText,
        nameText,
        bodyText,
        userWantsItPinned
      );
    } else {
      addNote(titleText, nameText, bodyText, userWantsItPinned);
    }

    clearActiveNote();

    DOM.addNoteForm.reset();
    renderAllNotes(DOM.notesRegularContainer, DOM.notesPinnedContainer, notes);

    setAppView(DOM.app, 'notes');

    updateActiveNavLinks(
      DOM.navNotesLinks,
      DOM.navAddNotesLinks,
      'nav-menu__item--active'
    );
  });
};

initApp();

const handleNoteAction = (e) => {
  const deleteBtn = e.target.closest('.note-card__delete');

  if (deleteBtn) {
    const userWantsToDelete = window.confirm(
      'Are you sure you want to delete this note? This cannot be undone.'
    );

    if (!userWantsToDelete) {
      return;
    }

    const targetNote = deleteBtn.closest('.note-card');
    const noteId = Number(targetNote.dataset.id);

    deleteNote(noteId);
    renderAllNotes(DOM.notesRegularContainer, DOM.notesPinnedContainer, notes);
    return;
  }

  const pinBtn = e.target.closest('.note-card__pin');

  if (pinBtn) {
    const targetNote = pinBtn.closest('.note-card');
    const noteId = Number(targetNote.dataset.id);

    toggleNotePin(noteId);
    renderAllNotes(DOM.notesRegularContainer, DOM.notesPinnedContainer, notes);
  }

  const editBtn = e.target.closest('.note-card__edit');

  if (editBtn) {
    const targetNote = editBtn.closest('.note-card');
    const noteId = Number(targetNote.dataset.id);

    const noteToEdit = notes.find((note) => note.id === noteId);

    DOM.titleInput.value = noteToEdit.title;
    DOM.nameInput.value = noteToEdit.name;
    DOM.bodyInput.value = noteToEdit.body;

    setActiveNote(noteId);

    setAppView(DOM.app, 'add-note');

    updateActiveNavLinks(
      DOM.navAddNotesLinks,
      DOM.navNotesLinks,
      'nav-menu__item--active'
    );
  }

  const noteCard = e.target.closest('.note-card');
  const isButton = e.target.closest('button');

  if (noteCard && !isButton) {
    const noteId = Number(noteCard.dataset.id);

    const noteToView = notes.find((note) => note.id === noteId);

    renderNoteDetail(noteToView);

    removeClass(DOM.searchOverLay, 'is-active');

    setViewedNote(noteId);

    document.querySelectorAll('.note-card').forEach((card) => {
      removeClass(card, 'note-card--selected');
    });

    document
      .querySelectorAll(`.note-card[data-id="${noteId}"]`)
      .forEach((card) => {
        addClass(card, 'note-card--selected');
      });

    setAppView(DOM.app, 'view-note');
  }
};

DOM.notesRegularContainer.addEventListener('click', handleNoteAction);
DOM.notesPinnedContainer.addEventListener('click', handleNoteAction);
DOM.searchResultsContainer.addEventListener('click', handleNoteAction);

const handleSearch = (e) => {
  const query = e.target.value.toLowerCase().trim();

  DOM.sidebarSearchInput.value = query;
  DOM.overlaySearchInput.value = query;

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(query) ||
      note.body.toLowerCase().includes(query)
  );

  renderAllNotes(
    DOM.notesRegularContainer,
    DOM.notesPinnedContainer,
    filteredNotes
  );

  if (!query) {
    clearContainer(DOM.searchResultsContainer);
  } else {
    renderSearchResults(DOM.searchResultsContainer, filteredNotes);
  }
};

DOM.sidebarSearchInput.addEventListener('input', handleSearch);
DOM.overlaySearchInput.addEventListener('input', handleSearch);
