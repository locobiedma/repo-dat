// Get some JSON text via Ajax, and write it to the p HTML page
// Get new text when clicking on "third"
//
$(document).ready(function() {
    $("#third").click(function(){
	$.getJSON("json-data.json", function(data) {
	    $('#header').after('<h1>' + data.title + '</h1>');
	    for (var i = 0; i < data.entries.length; i++) {
		data.entries
	    }
	});
    });
});
