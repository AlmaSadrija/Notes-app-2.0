const deleteNoteBtn = document.getElementById("delete-notes-btn");
const notesSection = document.getElementById("notes-section");
const createNoteBtn = document.getElementById("create-note-btn");
const container = document.getElementById("container");

createNoteBtn.addEventListener("click", function () {
  const newNote = document.createElement("div");
  newNote.classList.add("new-note");
  newNote.textContent = "Hello there. Write your note here";
  notesSection.appendChild(newNote);

  const btnWrapper = document.createElement("div");
  btnWrapper.classList.add("btn-wrapper");
  newNote.appendChild(btnWrapper);

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
    newNote.remove();
  });
  btnWrapper.appendChild(saveBtn);
  btnWrapper.appendChild(deleteBtn);
});
deleteNoteBtn.addEventListener("click", function () {
  notesSection.innerHTML = "";
});
