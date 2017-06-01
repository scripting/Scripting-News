const request = require ("request");
request ("http://scripting.com/rss.json", function (error, response, data) {
	if (!error && (response.statusCode == 200)) {
		var jstruct = JSON.parse (data);
		console.log (JSON.stringify (jstruct, undefined, 4));
		}
	else {
		console.log ("Error reading file == " + error.message);
		}
	});
