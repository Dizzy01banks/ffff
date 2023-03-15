<?php

$username = $_POST['username'];
$password = $_POST['password'];

if ($username == 'Admin' && $password == 'Diz1') {
	// Successful login, redirect to student dashboard
	header('Location: dashboard.php');
	exit();
} else {
	// Invalid login, redirect back to landing page with error message
	header('Location: index.php?login_error=Invalid username or password.');
	exit();
}

?>
