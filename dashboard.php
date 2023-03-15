<?php
session_start();
if (isset($_POST['username']) && isset($_POST['password']) && isset($_POST['portal'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $portal = $_POST['portal'];

    switch ($portal) {
        case 'parent':
            if (($username == 'Parent1' && $password == 'Pass1') || ($username == 'Parent2' && $password == 'Pass2')) {
                $_SESSION['username'] = $username;
            } else {
                header('Location: login.php?error=invalid');
                exit();
            }
            break;
        case 'student':
            if (($username == 'Student1' && $password == 'Go123') || ($username == 'Student2' && $password == 'Stop123')) {
                $_SESSION['username'] = $username;
            } else {
                header('Location: login.php?error=invalid');
                exit();
            }
            break;
        case 'teacher':
            if ($username == 'Teacher' && $password == 'Teach1') {
                $_SESSION['username'] = $username;
            } else {
                header('Location: login.php?error=invalid');
                exit();
            }
            break;
        default:
            header('Location: login.php?error=invalid');
            exit();
    }
} else {
    header('Location: login.php?error=invalid');
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
	<title>Dashboard</title>
	<link rel="stylesheet" type="text/css" href="style-navy-orange.css">
</head>
<body>
	<header>
		<h1>Welcome to the Dashboard</h1>
		<p>Logged in as <?php echo $_SESSION['username']; ?></p>
	</header>
	<main>
		<?php if ($_POST['portal'] == 'parent'): ?>
			<section>
				<h2>Grades</h2>
				<p>View your child's grades below:</p>
				<table>
					<thead>
						<tr>
							<th>Course</th>
							<th>Grade</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>English</td>
							<td>85%</td>
						</tr>
						<tr>
							<td>Math</td>
							<td>92%</td>
						</tr>
						<tr>
