// Get the necessary elements
const noteForm = document.getElementById('note-form');
const noteContentDisplay = document.getElementById('note-content-display');
const noteDate = document.getElementById('note-date');

// Add an event listener to the form
noteForm.addEventListener('submit', saveNote);

// Define the saveNote function
function saveNote(e) {
  e.preventDefault();
  
  // Get the note content from the form
  const noteContent = document.getElementById('note-content').value;
  
  // Get the current date and format it as a string
  const today = new Date();
  const todayString = formatDate(today);
  noteDate.innerText = `Note for ${todayString}`;
  
  // Save the note content to local storage
  localStorage.setItem(`${todayString}.txt`, noteContent);
  
  // Display the note content
  noteContentDisplay.innerText = noteContent;
  
  // Reset the form
  noteForm.reset();
}

// Define the function to format the date
function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Define the function to load the note from local storage
function loadNote() {
  // Get the current date and format it as a string
  const today = new Date();
  const todayString = formatDate(today);
  
  // Get the note content from local storage
  const noteContent = localStorage.getItem(`${todayString}.txt`);
  
  // If the note content exists, display it
  if (noteContent) {
    noteDate.innerText = `Note for ${todayString}`;
    noteContentDisplay.innerText = noteContent;
  }
}

// Load the note from local storage when the page loads
loadNote();
