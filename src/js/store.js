export let notes = [];
// export let activeNoteId = null;

const STORAGE_KEY = 'almdrasa_notes';

export const loadNotes = () => {
  notes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

export const saveNotes = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
};

export const addNote = (titleText, nameText, bodyText) => {
  const newNote = {
    id: Date.now(),
    title: titleText,
    date: new Date().toISOString().split('T')[0],
    name: nameText,
    body: bodyText,
    isPinned: false,
  };

  notes.push(newNote);

  saveNotes();
};
