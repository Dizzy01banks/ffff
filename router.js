// Check if user is logged in
function checkLoggedIn() {
  // code to check if user is logged in
  // return true if logged in, false otherwise
  return true;
}

// Redirect to login page if not logged in
function redirectToLogin() {
  window.location.href = 'login.html';
}

// Access student portal link
function accessStudentPortal() {
  // Check if user is logged in
  if (checkLoggedIn()) {
    // Redirect to student portal page
    window.location.href = 'student_portal.html';
  } else {
    // Redirect to login page
    redirectToLogin();
  }
}
<a id="student-portal-link" href="student_portal.html" onclick="accessStudentPortal()">Student Portal</a>
