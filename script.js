// Login function
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check for valid credentials
  if (username === 'Admin' && password === 'Diz1') {
    window.location.href = 'parent_portal.html';
  } else if (username === 'Teacher' && password === 'Teach1') {
    window.location.href = 'teacher_portal.html';
  } else if (username === 'Student1' && password === 'Go123') {
    window.location.href = 'student_portal.html';
  } else if (username === 'Student2' && password === 'Stop123') {
    window.location.href = 'student_portal.html';
  } else {
    alert('Invalid credentials. Please try again.');
  }
}
