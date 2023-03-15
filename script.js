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
// Function to read data from CSV file
function readCSVFile() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      processData(xhr.responseText);
    }
  }
  xhr.open('GET', 'grades.csv', true);
  xhr.send();
}

// Function to process the data from CSV file
function processData(csvData) {
  var rows = csvData.split('\n');
  var tableHtml = '<table>';
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i].split(',');
    tableHtml += '<tr>';
    for (var j = 0; j < row.length; j++) {
      tableHtml += '<td>' + row[j] + '</td>';
    }
    tableHtml += '</tr>';
  }
  tableHtml += '</table>';
  document.getElementById('grades-table').innerHTML = tableHtml;
}

// Add event listener to "grades" button
document.getElementById('grades-btn').addEventListener('click', readCSVFile);
