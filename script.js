
document.getElementById('photoInput').addEventListener('change', function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById('profilePhoto').src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Live greeting with name
const userNameInput = document.getElementById('userName');
const greeting = document.getElementById('greeting');

userNameInput.addEventListener('input', () => {
  const name = userNameInput.value.trim();
  greeting.textContent = name ? `Hello, ${name}!` : `Hello!`;
});

// Save notes
function saveNote() {
  const noteText = document.getElementById('noteInput').value.trim();
  if (noteText !== "") {
    const li = document.createElement('li');
    li.innerHTML = `${noteText} <button onclick="deleteNote(this)">✖</button>`;
    document.getElementById('notesList').appendChild(li);
    document.getElementById('noteInput').value = "";
  }
}

function deleteNote(button) {
  const li = button.parentElement;
  li.remove();
}

// Toggle dark mode
function toggleTheme() {
  document.body.classList.toggle('dark');
}
