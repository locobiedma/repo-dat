
function get_location() {
	if (Modernizr.geolocation) {
		navigator.geolocation.getCurrentPosition(show_map);
	} else {
		alert("no lo soporta");
	}
}

function show_map(position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	alert(latitude);
	alert(longitude)
}


