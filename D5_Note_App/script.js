const notesContainer = document.querySelector('.note-container');
const createBtn = document.querySelector('.btn');

let notes = document.querySelectorAll('.input-box');

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem('notes');
}

function updateNotes(notes) {
    localStorage.setItem('notes', notesContainer.innerHTML);
}

createBtn.addEventListener('click', (e) => {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener('click', (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateNotes()
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll('.input-box');
        notes.forEach(note => {
            note.onkeyup = function () {
                updateNotes();
            }
        })

    }
})

showNotes();

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
})