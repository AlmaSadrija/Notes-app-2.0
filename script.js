// 1️⃣ Select elements
const createNoteBtn = document.getElementById("create-note-btn");
const notesSection = document.getElementById("notes-section");

// 2️⃣ Listen for button click to create a new note
createNoteBtn.addEventListener("click", function () {
  // 2a️⃣ Create the note container
  const newNote = document.createElement("div");
  newNote.classList.add("note"); // for styling

  // 2b️⃣ Create a span for the note text
  const noteText = document.createElement("span");
  noteText.textContent = "Click to edit...";
  noteText.classList.add("note-text");
  noteText.contentEditable = true; // ✅ allows typing directly
  newNote.appendChild(noteText);

  // 2c️⃣ Create the delete button
  const deleteNoteBtn = document.createElement("button");
  deleteNoteBtn.textContent = "X";
  deleteNoteBtn.classList.add("deleteBtn"); // optional styling
  newNote.appendChild(deleteNoteBtn); // put the button inside the note

  // 2d️⃣ Add the note to the notes section
  notesSection.appendChild(newNote);

  // 3️⃣ Make the note editable on double-click
  noteText.addEventListener("dblclick", function () {
    const newText = prompt("Edit your note:", noteText.textContent);
    if (newText !== null) {
      noteText.textContent = newText; // update only the text, button stays
    }
  });

  // 4️⃣ Make the delete button remove the note
  deleteNoteBtn.addEventListener("click", function () {
    if (confirm("Are you sure you want to delete this note?")) {
      newNote.remove(); // removes the whole note including button
    }
  });

  const saveNoteBtn = document.createElement("button");
  saveNoteBtn.textContent = "✔️";
  saveNoteBtn.classList.add("saveNote");
  newNote.appendChild(saveNoteBtn);

  // Save button
  /*
  saveNoteBtn.addEventListener("click", function () {
    if (confirm("Are you sure you want to save this note?")) {
      const textSpan = newNote.querySelector(".note-text"); // select the span
      if (textSpan) {
        const text = textSpan.textContent; // use textContent for span
        localStorage.setItem("note-" + Date.now(), text); // save in browser
        alert("Note saved!");
      }
    }
  });
  */
});
