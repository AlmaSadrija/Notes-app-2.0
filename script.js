// 1️⃣ Select elements
const createNoteBtn = document.getElementById("create-note-btn");
const notesSection = document.getElementById("notes-section");
const deleteAllNotesBtn = document.querySelector("#delete-notes-btn"); // FIXED

// 2️⃣ Listen for button click to create a new note
createNoteBtn.addEventListener("click", function () {
  // 2a️⃣ Create the note container
  const newNote = document.createElement("div");
  newNote.classList.add("note");

  // 2b️⃣ Editable text
  const noteText = document.createElement("span");
  noteText.textContent = "Click to edit...";
  noteText.classList.add("note-text");
  noteText.contentEditable = true;
  newNote.appendChild(noteText);

  // 2c️⃣ Delete single note
  const deleteNoteBtn = document.createElement("button");
  deleteNoteBtn.textContent = "🗑️";
  deleteNoteBtn.classList.add("deleteBtn");
  newNote.appendChild(deleteNoteBtn);

  // 2d️⃣ Add note to section
  notesSection.appendChild(newNote);

  // Edit note
  noteText.addEventListener("dblclick", function () {
    const newText = prompt("Edit your note:", noteText.textContent);
    if (newText !== null) noteText.textContent = newText;
  });

  // Delete note
  deleteNoteBtn.addEventListener("click", function () {
    if (confirm("Delete this note?")) newNote.remove();
  });

  // Optional save button
  const saveNoteBtn = document.createElement("button");
  saveNoteBtn.textContent = "💾";
  saveNoteBtn.classList.add("saveNote");
  newNote.appendChild(saveNoteBtn);
});

// 3️⃣ Delete ALL notes
deleteAllNotesBtn.addEventListener("click", function () {
  if (confirm("Are you sure you want to delete ALL notes?")) {
    notesSection.innerHTML = ""; // deletes all notes at once
  }
});
