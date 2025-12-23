const deleteNoteBtn = document.getElementById("delete-note-btn");
const notesSection = document.getElementById("notes-section");
const createNoteBtn = document.getElementById("create-note-btn");
const container = document.getElementById("container");
/*createNoteBtn.addEventListener("click", function () {
  const newNote = document.createElement("div");
  newNote.className("new-note");
  newNote.textContent = "Hello there. Write your note here";
  createNoteBtn.appendChild(newNote);
});
*/
createNoteBtn.addEventListener("click", function () {
  const newNote = document.createElement("div");
  newNote.classList.add("new-note");
  newNote.textContent = "Hello there. Write your note here";
  notesSection.appendChild(newNote);

  const saveBtn = document.createElement("button");
  saveBtn.classList.add("saveNote");
  saveBtn.textContent = "✅";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.textContent = "🗑️";

  saveBtn.addEventListener("click", function () {
    alert("Note saved!");
  });
  deleteBtn.addEventListener("click", function () {
    alert("Note deleted!");
  });
  newNote.appendChild(saveBtn);
  newNote.appendChild(deleteBtn);
});
