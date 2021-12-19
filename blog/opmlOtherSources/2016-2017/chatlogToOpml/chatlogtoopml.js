const myVersion = "0.4.1", myProductName = "chatlogtoopml";

const fs = require ("fs");
const utils = require ("daveutils");
const opml = require ("opml"); 


function exportChatlog (theChatLog) {
	var months = new Object ();
	function textToArray (theText, createdAtt) { //turn a sequence of <p>s into a list of OPML items.
		var theArray = new Array ();
		theText = utils.replaceAll (theText, "</p>", "");
		var pgfs = theText.split ("<p>");
		pgfs.forEach (function (pgf, ix) {
			if (ix != 0) { //the first one is the empty string
				var myCreated = new Date (createdAtt.getTime () + (ix * 1000));
				theArray.push ({
					text: pgf,
					created: myCreated.toUTCString ()
					});
				}
			});
		return (theArray);
		}
	theChatLog.forEach (function (item) {
		var when = new Date (item.when);
		console.log (when.toLocaleDateString () + ": " + item.payload.title);
		
		var subs = textToArray (item.text, when);
		
		var month = when.getMonth () + 1;
		var year = when.getFullYear ();
		var day = when.getDay ();
		
		var monthyearstring = month + "/" + year;
		if (months [monthyearstring] === undefined) {
			months [monthyearstring] = {
				opml: {
					head: {
						title: "Scripting News",
						dateModified: when.toUTCString ()
						},
					body: {
						subs: [
							]
						}
					}
				};
			}
		var theMonth = months [monthyearstring];
		var theMonthSubs = theMonth.opml.body.subs;
		
		var onepost = {
			text: item.payload.title,
			created: when.toUTCString (),
			subs,
			type: "outline"
			}
		var flfound = false;
		theMonthSubs.forEach (function (aDay) { //search the month for the day 
			if (utils.sameDay (new Date (aDay.created), when)) {
				aDay.subs.push (onepost);
				flfound = true;
				}
			});
		if (!flfound) {
			theMonthSubs.push ({
				text: when.toLocaleDateString (),
				created: when.toUTCString (),
				subs: [onepost]
				});
			}
		
		
		});
	
	for (var x in months) {
		let opmltext = opml.stringify (months [x]);
		let splits = x.split ("/"); //x == something like "8/2016"
		let relpath = splits [1] + "/" + utils.padWithZeros (splits [0], 2) + ".opml";
		let f = "data/months/" + relpath;
		utils.sureFilePath (f, function () {
			fs.writeFile (f, opmltext, function (err) {
				if (err) {
					console.log (err.message);
					}
				});
			});
		}
	
	
	
	}


fs.readFile ("chatlog.json", function (err, jsontext) {
	var jstruct;
	if (err) {
		console.log (err.message);
		}
	else {
		jstruct = JSON.parse (jsontext);
		exportChatlog (jstruct.chatLog);
		}
	});

