export let notes = [];
export let activeNoteId = null;
export let viewNoteId = null;

const STORAGE_KEY = 'almdrasa_notes';

export const loadNotes = () => {
  notes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

export const saveNotes = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
};

export const addNote = (
  titleText,
  nameText,
  bodyText,
  isPinnedFlag = false
) => {
  const newNote = {
    id: Date.now(),
    title: titleText,
    date: new Date().toISOString().split('T')[0],
    name: nameText,
    body: bodyText,
    isPinned: isPinnedFlag,
  };

  notes.unshift(newNote);

  saveNotes();
};

export const deleteNote = (noteId) => {
  notes = notes.filter((note) => note.id !== Number(noteId));

  saveNotes();
};

export const toggleNotePin = (noteId) => {
  const noteToPin = notes.find((note) => note.id === noteId);

  if (noteToPin) {
    noteToPin.isPinned = !noteToPin.isPinned;
  }

  saveNotes();
};

export const setActiveNote = (id) => {
  activeNoteId = id;
};

export const clearActiveNote = () => {
  activeNoteId = null;
};

// store.js

export const updateNote = (
  id,
  titleText,
  nameText,
  bodyText,
  forcePin = false
) => {
  const noteToUpdate = notes.find((note) => note.id === id);

  if (noteToUpdate) {
    noteToUpdate.title = titleText;
    noteToUpdate.name = nameText;
    noteToUpdate.body = bodyText;

    if (forcePin) {
      noteToUpdate.isPinned = true;
    }
    saveNotes();
  }
};

export const setViewedNote = (id) => {
  viewNoteId = id;
};
