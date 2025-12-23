// Notes App 2.0 - Updated JavaScript
// This is an idea/example of how the notes app functionality could work

// Get DOM elements
const createNoteBtn = document.getElementById("create-note-btn");
const deleteAllBtn = document.getElementById("delete-notes-btn");
const notesSection = document.getElementById("notes-section");
const emptyMessage = document.getElementById("empty-message");

// Load notes from localStorage on page load
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Initialize the app
function init() {
  renderNotes();
  updateEmptyMessage();
}

// Render all notes
function renderNotes() {
  notesSection.innerHTML = "";
  notes.forEach((note, index) => {
    const noteElement = createNoteElement(note, index);
    notesSection.appendChild(noteElement);
  });
}

// Create a note element
function createNoteElement(note, index) {
  const noteDiv = document.createElement("div");
  noteDiv.className = "note";
  noteDiv.dataset.index = index;

  const textarea = document.createElement("textarea");
  textarea.className = "note-text";
  textarea.value = note.text;
  textarea.placeholder = "Write your note here...";

  // Auto-resize textarea
  textarea.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  });

  // Save on blur
  textarea.addEventListener("blur", () => {
    saveNote(index, textarea.value);
  });

  const btnWrapper = document.createElement("div");
  btnWrapper.className = "btn-wrapper";

  const saveBtn = document.createElement("button");
  saveBtn.className = "saveNote";
  saveBtn.textContent = "💾 Save";
  saveBtn.onclick = (e) => {
    e.stopPropagation();
    saveNote(index, textarea.value);
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "deleteBtn";
  deleteBtn.textContent = "🗑️ Delete";
  deleteBtn.onclick = (e) => {
    e.stopPropagation();
    deleteNote(index);
  };

  btnWrapper.appendChild(saveBtn);
  btnWrapper.appendChild(deleteBtn);

  noteDiv.appendChild(textarea);
  noteDiv.appendChild(btnWrapper);

  // Set initial height
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";

  return noteDiv;
}

// Create a new note
function createNote() {
  const newNote = {
    text: "",
    id: Date.now(),
    createdAt: new Date().toISOString(),
  };
  notes.push(newNote);
  saveToLocalStorage();
  renderNotes();
  updateEmptyMessage();

  // Focus on the new note
  const newNoteElement = notesSection.lastChild.querySelector(".note-text");
  if (newNoteElement) {
    newNoteElement.focus();
  }
}

// Save a note
function saveNote(index, text) {
  if (notes[index]) {
    notes[index].text = text;
    notes[index].updatedAt = new Date().toISOString();
    saveToLocalStorage();
  }
}

// Delete a note
function deleteNote(index) {
  if (confirm("Are you sure you want to delete this note?")) {
    notes.splice(index, 1);
    saveToLocalStorage();
    renderNotes();
    updateEmptyMessage();
  }
}

// Delete all notes
function deleteAllNotes() {
  if (notes.length === 0) {
    alert("No notes to delete!");
    return;
  }

  if (
    confirm("Are you sure you want to delete ALL notes? This cannot be undone.")
  ) {
    notes = [];
    saveToLocalStorage();
    renderNotes();
    updateEmptyMessage();
  }
}

// Save to localStorage
function saveToLocalStorage() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Update empty message visibility
function updateEmptyMessage() {
  if (notes.length === 0) {
    emptyMessage.classList.remove("hidden");
  } else {
    emptyMessage.classList.add("hidden");
  }
}

// Event listeners
createNoteBtn.addEventListener("click", createNote);
deleteAllBtn.addEventListener("click", deleteAllNotes);

// Initialize the app when DOM is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

