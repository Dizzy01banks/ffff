<!DOCTYPE html>
<html>
<head>
	<title>Login</title>
	<link rel="stylesheet" type="text/css" href="style-navy-orange.css">
</head>
<body>
	<header>
		<h1>Login</h1>
	</header>
	<main>
		<form action="dashboard.php" method="post">
			<label for="username">Username:</label>
			<input type="text" id="username" name="username">
			<label for="password">Password:</label>
			<input type="password" id="password" name="password">
			<select name="portal">
				<option value="parent">Parent</option>
				<option value="student">Student</option>
				<option value="teacher">Teacher</option>
			</select>
			<button type="submit">Login</button>
		</form>
	</main>
</body>
</html>
