<!DOCTYPE html>
<html>
<head>
	<title>Teacher Portal</title>
	<link rel="stylesheet" type="text/css" href="style-navy-orange.css">
</head>
<body>
	<header>
		<h1>Teacher Portal</h1>
	</header>
	<main>
		<section>
			<h2>Enter Grades</h2>
			<form>
				<label for="student-name">Student Name:</label>
				<input type="text" id="student-name" name="student-name">
				<label for="course">Course:</label>
				<select id="course" name="course">
					<option value="english">English</option>
					<option value="math">Math</option>
					<option value="science">Science</option>
				</select>
				<label for="grade">Grade:</label>
				<input type="text" id="grade" name="grade">
				<button type="submit">Enter Grade</button>
			</form>
		</section>
		<section>
			<h2>Enter Attendance</h2>
			<form>
				<label for="student-name">Student Name:</label>
				<input type="text" id="student-name" name="student-name">
				<label for="date">Date:</label>
				<input type="date" id="date" name="date">
				<label for="attendance">Attendance:</label>
				<select id="attendance" name="attendance">
					<option value="present">Present</
