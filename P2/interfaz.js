$(function() {
	$( "#tabs" ).tabs();
});

$(function() {
	$( "#accordion" ).accordion();
});

$(document).ready(function() {
    $("#pestana1").click(function(){
	$.getJSON("myline.json", function(data) {
	    var nombre = "";
	    len = data.Socios.length;
	    console.log("len es: " + len);
	    
	    for(i = 0; i<len; i++){
	    	nombre = data.Socios[i].Nombre;
	    	console.log("nombre es: " + nombre);
	    	document.getElementById('accordion').innerHTML += "<h3>hola soy la cabecera</h3>";
	    	document.getElementById('accordion').innerHTML += "<div>hola soy un div</div>";
	    	//$('#accordion').append("<h3>hola soy la cabecera</h3>");
	    	//$('#accordion').append("<div>hola soy un div</div>");
	    } 
	    $('#accordion').accordion('destroy');
	    $('#accordion').accordion();

	});
    });
});
