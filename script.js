const noteForm = document.getElementById('note-form');
const noteContentDisplay = document.getElementById('note-content-display');
const noteDate = document.getElementById('note-date');

noteForm.addEventListener('submit', saveNote);

function saveNote(e) {
e.preventDefault();
  const noteContent = document.getElementById('note-content').value;
  const today = new Date();
  const todayString = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
  noteDate.innerText = `Note for ${todayString}`;
  localStorage.setItem(`${todayString}.txt`, noteContent);
  noteContentDisplay.innerText = noteContent;
  noteForm.reset();
}

function loadNote() {
  const today = new Date();
  const todayString = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
  const noteContent = localStorage.getItem(`${todayString}.txt`);
  if (noteContent) {
    noteDate.innerText = `Note for ${todayString}`;
    noteContentDisplay.innerText = noteContent;
  }