window.onload = function() {
	var worker = new Worker('pr_webworker.js');
	worker.addEventListener('message', function (e) {
		document.getElementById('result').innerHTML = e.data.primelist;
	});

	document.getElementById('formulario').addEventListener('submit', function(e) {
		e.preventDefault();
		worker.postMessage({'top': parseInt(document.getElementById("formulario").input.value)});
	});
};
