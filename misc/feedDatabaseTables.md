## Database structure for miniReader

There are three tables in the feed reader database, <i>feeds</i>, <i>items</i> and <i>subscriptions.</i>

### SQL commands to create the tables

```SQL

create table feeds (

      feedUrl varchar (512), 

      title text, 

      htmlUrl text, 

      description text, 

      whenCreated datetime, 

      whenUpdated datetime, 

      countSubs int, 

      ctSecs float, 

      ctErrors int default 0, 

      ctConsecutiveErrors int default 0, 

      errorString text, 

      ctChecks int default 0, 

      whenLastError datetime, 

      urlCloudServer text, 

      whenLastCloudRenew datetime, 

      ctCloudRenews int default 0, 

      primary key (feedUrl)

      );

create table items (

      feedUrl varchar (512), 

      guid varchar (255), 

      permaLink text,

      title text, 

      link text, 

      description text, 

      fullDescription text,  

      pubDate datetime, 

      enclosureUrl text, 

      enclosureType text, 

      enclosureLength int default 0, 

      id int default 0, 

      whenCreated datetime, 

      whenUpdated datetime, 

      flDeleted boolean, 

      primary key (feedUrl, guid)

      );

create table subscriptions (

      listName varchar (255), 

      feedUrl varchar (512), 

      whenUpdated datetime, 

      primary key (feedUrl, listname)

      );

```

