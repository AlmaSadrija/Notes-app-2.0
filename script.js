// 1️⃣ Select elements
const createNoteBtn = document.getElementById("create-note-btn");
const notesSection = document.getElementById("notes-section");
const deleteAllNotesBtn = document.querySelector("#delete-notes-btn");

// 2️⃣ Listen for button click to create a new note
createNoteBtn.addEventListener("click", function () {
  // 1️⃣ Create the note container
  const newNote = document.createElement("div");
  newNote.classList.add("note");

  // 2️⃣ Create button wrapper
  const btnWrapper = document.createElement("div");
  btnWrapper.classList.add("btn-wrapper");

  // 3️⃣ Create the buttons
  const deleteNoteBtn = document.createElement("button");
  deleteNoteBtn.textContent = "🗑️";
  deleteNoteBtn.classList.add("deleteBtn");

  const saveNoteBtn = document.createElement("button");
  saveNoteBtn.textContent = "💾";
  saveNoteBtn.classList.add("saveNote");

  // 4️⃣ Append buttons to the wrapper ONLY
  btnWrapper.append(deleteNoteBtn, saveNoteBtn);

  // 5️⃣ Create the editable text
  const noteText = document.createElement("span");
  noteText.textContent = "Click to edit...";
  noteText.classList.add("note-text");
  noteText.contentEditable = true;

  // 6️⃣ Append wrapper AND text to the note
  newNote.append(btnWrapper, noteText);

  // 7️⃣ Append note to section
  notesSection.appendChild(newNote);

  // 8️⃣ Edit note on double-click
  noteText.addEventListener("dblclick", function () {
    const newText = prompt("Edit your note:", noteText.textContent);
    if (newText !== null) noteText.textContent = newText;
  });
});
// 9️⃣ Delete all notes
deleteAllNotesBtn.addEventListener("click", function () {
  if (confirm("Delete those notes?")) {
    notesSection.innerHTML = "";
  }
});
