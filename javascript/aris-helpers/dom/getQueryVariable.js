arisHelper.getQueryVariable = function (variable) {
	return new Promise(function(resolve, reject) {
		if (variable) {
			var query = window.location.search.substring(1);
			var vars = query.split("&");
			for (var i=0;i<vars.length;i++) {
					var pair = vars[i].split("=");
					if(pair[0] == variable){resolve(pair[1]);}
			}
		}
		else {
			reject(Error("Expecting variable argument in arisHelper.getQueryVariable"));
		}
	});
};