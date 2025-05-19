# Database folder

I've been getting all the content of my blog going back to 1994 into an SQL database.

I have to do some work on the database in May 2025, and thought it would be a good idea to export all the documents from the database in a format
that they can easily be loaded into another SQL database.

If you import all the records in all the JSON files here, you will have the same database as I have at <a href="https://daytona.scripting.com/">daytona.scripting.com</a>.

### List of files

These files come from the opmlOtherSources folder in the GitHub repo.

1. <a href="davenet.json">davenet.json</a> contains all the <a href="http://scripting.com/davenet/">DaveNet</a> pieces I wrote between 1994 and 2004.

2. <a href="otherSources.json">otherSources.json</a> has all the posts in the files in sub-folders 1997-2010 and 2016-2017 of the opmlOtherSources folder.

3. <a href="current.json">current.json</a> contains all the records in the Daytona database as of 9AM on May 19, 2025. That's everything but the first two items in this list.

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
