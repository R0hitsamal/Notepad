const addNote = document.querySelector("#addbtn");
const notesContainer = document.querySelector(".notes-container");

const saveNote = () => {
  const notes = document.querySelectorAll(".note");

  const data = [];

  notes.forEach((note) => {
    data.push(note.value);
  });

  console.log(data);

  localStorage.setItem("notes",JSON.stringify(data));
};
addNote.addEventListener("click", (e) => {
  addNewNote(text="");
});

const addNewNote = (text) => {
  const newNote = document.createElement("li");
  newNote.classList.add("notes");
  newNote.innerHTML = `
      <div class="header">
        <i class=" save fas fa-save"></i>
        <i class=" delete fas fa-trash"></i>
        <i></i>
      </div>
      <textarea spellcheck='false' class="note" name="" id="">${text}</textarea>
    `;
  notesContainer.appendChild(newNote);

  newNote.querySelector(".delete").addEventListener("click", () => {
    newNote.remove();
    saveNote();
  });
  newNote.querySelector(".save").addEventListener("click", () => {
    saveNote();
  });
  newNote.querySelector(".note").addEventListener(("focusout"),()=>{
    saveNote();
  });
  saveNote();
};

(
    function() {
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        lsNotes.forEach((e)=>{
            addNewNote(e);
        })
        if(lsNotes.length === 0)
            {
                addNewNote(text='')
            }
    }
)()