# Database folder

I've been getting all the content of my blog going back to 1994 into an SQL database.

I have to do some work on the database in May 2025, and thought it would be a good idea to export all the documents from the database in a format
that they can easily be loaded into another SQL database.

If you import all the records in all the JSON files here, you will have the same database as I have at <a href="https://daytona.scripting.com/">daytona.scripting.com</a>.

### List of files

These files come from the opmlOtherSources folder in the GitHub repo.

1. <a href="davenet.json">davenet.json</a> contains all the <a href="http://scripting.com/davenet/">DaveNet</a> pieces I wrote between 1994 and 2004.

2. <a href="otherSources.json">otherSources.json</a> has all the posts in the files in sub-folders 1997-2010 and 2016-2017 of the opmlOtherSources folder.

3. <a href="current.json">current.json</a> contains all the records in the Daytona database as of 05/19/2025. That's everything but the first two items in this list.

### This adds up to

In other words, if you start a new database, load in the contents of 1, 2 and 3 above, you will have what I have in terms of archives of Scripting News content going back to 1994.

### The SQL table

```SQL
create table blogposts (
	id int auto_increment primary key,
	outline json not null default ('{"text": ""}'),
	textForSearch text not null,
	whenCreated datetime not null unique,
	whenUpdated datetime not null default current_timestamp on update current_timestamp,
	ixOnPage int not null default -1,
	collection varchar (256) not null default 'scripting',
	metadata json not null default (json_object())
	);
```

### Code to import

Here's some JavaScript code that imports one of the JSON files listed above.

```JavaScript
function importJsonFile (f) {
	fs.readFile (f, function (err, jsontext) {
		if (err) {
			console.log (err.message);
			}
		else {
			const theArray = JSON.parse (jsontext);
			theArray.forEach (function (item) {
				console.log (item.whenCreated);
				function timeConvert (s) {
					s = s.replace ("T", " ").replace ("Z", "");
					return (s);
					}
				const sqltext = `
					insert into blogposts (
						outline,
						textForSearch,
						whenCreated,
						whenUpdated,
						ixOnPage,
						collection,
						metadata
						)
					values (
						${davesql.encode (item.outline)},
						${davesql.encode (item.textForSearch)},
						${davesql.encode (timeConvert (item.whenCreated))},
						${davesql.encode (timeConvert (item.whenUpdated))},
						${davesql.encode (item.ixOnPage)},
						${davesql.encode (item.collection)},
						${davesql.encode (item.metadata)}
						);
					`;
				davesql.runSqltext (sqltext, function (err, result) {
					if (err) {
						console.log (err.message);
						}
					else {
						console.log (item.whenCreated + ", id == " + result.insertId);
						}
					});
				});
			}
		});
	}
```
