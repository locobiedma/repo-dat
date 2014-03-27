self.addEventListener('message', function(e) {
	var n = 1;
	var n_top = e.data.top;
	primelist = "";
	search: while (n<n_top) {
	n += 1;
		for (var i = 2; i <= Math.sqrt(n); i += 1)
		if (n % i == 0)
			continue search;
		// found a prime!
		primelist += " " + n;
	}
	self.postMessage({'primelist': primelist});
});
