<!DOCTYPE html>
<html>
<head>
	<title>Grading System - Landing Page</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<header>
		<h1>Grading System</h1>
	</header>
	<main>
		<section>
			<h2>Welcome to the Grading System!</h2>
			<p>This system is designed to help teachers, parents, and students keep track of grades and progress for New York City high school students.</p>
			<p>Please log in to access your account.</p>
			<form method="post" action="login.php">
				<label for="username">Username:</label>
				<input type="text" id="username" name="username" required>
				<label for="password">Password:</label>
				<input type="password" id="password" name="password" required>
				<button type="submit">Login</button>
				<p><?php if(isset($_GET['login_error'])) { echo $_GET['login_error']; } ?></p>
			</form>
		</section>
	</main>
	<footer>
		<p>© 2023 Grading System. All Rights Reserved.</p>
	</footer>
</body>
</html>
