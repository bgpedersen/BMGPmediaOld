<!DOCTYPE html>
<html lang="da">
<head>
	<meta charset="UTF-8">
	<title>BMGP media</title>
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="css/animate.css" type="text/css">
	<link rel="stylesheet" href="css/style.css" type="text/css">
	<script src="js/prefixfree.min.js"></script>
	<meta name="description" content="Bjarne Gerhardt-Pedersen Porfolio website">
	<meta name="keywords" content="Portfolio Bjarne Gerhardt-Pedersen Web Developer">
	<link rel="icon" type="image/ico" href="favicon.ico">
	<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
	<div id="fb-root"></div>
	<script>(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/da_DK/sdk.js#xfbml=1&version=v2.3&appId=418578741523788";
		fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

	<header>
		<!-- header section -->
		<?php include_once 'includes/header.php' ?>
	</header>
	<div class="main">
		<!-- about section -->
		<?php include_once 'includes/about.php' ?>

		<!-- skills section -->
		<?php include_once 'includes/skills.php' ?>

		<!-- projects section -->
		<?php include_once 'includes/projects.php' ?>

		<!-- contact section -->
		<?php include_once 'includes/contact.php' ?>

		<!-- footer -->
		<?php include_once 'includes/footer.php' ?>		
	</div> <!-- .main END -->

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
	<script src="js/typed.js"></script>
	<script src="js/viewportchecker.js"></script>	
	<script src="js/myscript.js"></script>
</body>
</html>

