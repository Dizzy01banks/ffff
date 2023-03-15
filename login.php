<!DOCTYPE html>
<html>
<head>
	<title>Login Page</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<header>
		<h1>Login to Grading System</h1>
	</header>
	<main>
		<section>
			<form method="post" action="login.php">
				<label for="username">Username:</label>
				<input type="text" id="username" name="username" required>
				<label for="password">Password:</label>
				<input type="password" id="password" name="password" required>
				<button type="submit">Login</button>
			</form>
		</section>
	</main>
	<footer>
		<p>© 2023 Grading System. All Rights Reserved.</p>
	</footer>
</body>
</html>
