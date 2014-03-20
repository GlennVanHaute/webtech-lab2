<?php 
	// 1 - check of post? 
	if (!empty($_POST))
	{
		// 2 - file openen
		$file = fopen("nieuwsbrief.txt", "a+");

		// 3 - email wegschrijven naar file
		fwrite($file, $_POST['email'] . "\n\r");

		// 4 - file closen
		fclose($file);
	}



?><!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>TerAppke</title>
<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
<link rel="stylesheet" href="css/style.css">
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.js"></script>
	<script type="text/javascript" src="js/main.js">	</script>

</head>
<body>
	<div class="container">
			<div class="row">
			<div class="col-md-12">
				<h1>Een passie voor het web & apps?</h1>

				<h1>Kom dan mee een ter<span>app</span>ke doen!</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-md-2"></div>
				<div class="col-md-4"><div id="weer"></div><img id="icoon"/></div>
				<div class="col-md-4"></div>
				<div class="col-md-2"></div>
			</div>
			
			<div class="row">
				<div class="col-md-6">
					<p>
						Ga je binnekort verder studeren en wil jij net als ons niets liever doen dan knappe websites, mobile apps en webapplicaties bouwwen?
						<br/>
						Dan ben jij een perfecte kandidaat voor onze opleiding Interactieve Multimedia Design.
					</p>

					<p>
						Kom mee een terraske doen aan onze Creativity Gym en neem meteen een kijkje in onze opleiding aan de Thomas More hogeschool in Mechelen.

					</p>

					<p>
						Laat je email adres achter en we mailen de exacte datum, locatie en tijdstip naar je door.
					</p>
				</div>
		
			</div>

<form action="" method="post">
			<div class="row">
				<div class="col-md-4 col-xs-6">
						<div class="input-group input-group">
						  <span class="input-group-addon">@</span>
						  
						  <input type="text" class="form-control" name="email" placeholder="example@email.com">
						</div>
				</div>
				<div class="col-md-4 col-xs-6">
					<input type="submit" value="inschrijven" class="btn-default">
					
				</div>
			</div>
</form>




	</div>
</body>
</html>