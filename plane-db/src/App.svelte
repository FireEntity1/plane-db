<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset='utf-8'>
		<meta name='viewport' content='width=device-width,initial-scale=1'>

		<title>PlaneDB</title>

		<link rel='icon' type='image/png' href='/favicon.png'>
		<link rel='stylesheet' href='/global.css'>
		<link rel='stylesheet' href='/build/bundle.css'>

		<script src="index.js"> </script>
	</head>

	<body>
		<div class="header">
			<h1>Plane DB</h1>
		</div>
		<div class="search">
		<input type="text" placeholder="Enter aircraft name" id="search">
		</div>
		<div class="info">
			<table id="table">
				<tr>
					<th>Manufacturer</th>
					<th>Model</th>
					<th>Engine Type</th>
					<th>Max Speed (kts)</th>
					<th>Service Ceiling (ft)</th>
					<th>Weight (lbs)</th>
					<th>Length (ft)</th>
					<th>Height (ft)</th>
					<th>Wingspan (ft)</th>
					<th>Range (nmi)</th>
				</tr>
				<tr id="data">

				</tr>
			</table>
		</div>
	</body>
</html>
