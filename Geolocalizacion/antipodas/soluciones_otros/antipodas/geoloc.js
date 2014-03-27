$(document).ready(function() {
	$('#get_position').click(function() {
		var map = $('#map');
		var pos = $('#position');
		map.html('');
		pos.html('');
		if (Modernizr.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				var lat = position.coords.latitude;
				var lon = position.coords.longitude;
				var lat_a = -Number(lat);
				var lon_a = Number(lon) + 180;
				pos.html('Latitud: ' + lat + '<br/>Longitud: ' + lon);
				map.html('<img src="' + get_map_url(lat,lon,8) + '" width="400" height="300">' + 
					'<img src="' + get_map_url(lat_a,lon_a,8) + '" width="400" height="300">');
			});
		} else {
			pos.html('Actualiza el navegador para que puedas ser localizado');
		}
	});
});


function get_map_url(lat, lon, zoom) {
	return 'http://maps.googleapis.com/maps/api/staticmap?center=' + lat + ',' + lon + 
			'&zoom=' + zoom + '&size=400x300&sensor=false&maptype=hybrid' + 
			'&markers=color:red%7Clabel:A%7C' + lat + ',' + lon;

}
