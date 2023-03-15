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
// Get the button and grades table elements
const gradesBtn = document.getElementById("grades-btn");
const gradesTable = document.getElementById("grades-table");

// Add an event listener to the grades button
gradesBtn.addEventListener("click", displayGrades);

// Function to display the grades table
function displayGrades() {
  // Use AJAX to get the grades data from the server
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "grades.csv");
  xhr.onload = function () {
    if (this.status === 200) {
      // Parse the CSV data into an array of objects
      const gradesArr = csvToArray(this.responseText);

      // Build the HTML table from the grades array
      let tableHtml = "<table>";
      tableHtml += "<tr><th>Subject</th><th>Grade</th></tr>";
      for (let i = 0; i < gradesArr.length; i++) {
        tableHtml += `<tr><td>${gradesArr[i].subject}</td><td>${gradesArr[i].grade}</td></tr>`;
      }
      tableHtml += "</table>";

      // Set the grades table element's HTML to the built table
      gradesTable.innerHTML = tableHtml;
    }
  };
  xhr.send();
}

// Function to parse CSV data into an array of objects
function csvToArray(csvData) {
  const lines = csvData.split("\n");
  const result = [];
  const headers = lines[0].split(",");
  for (let i = 1; i < lines.length; i++) {
    const obj = {};
    const currentLine = lines[i].split(",");
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j].trim()] = currentLine[j].trim();
    }
    result.push(obj);
  }
  return result;
}
