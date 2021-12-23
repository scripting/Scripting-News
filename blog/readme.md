## How I archive Scripting News

#### What is this?

Every night a <a href="https://github.com/scripting/oldSchoolNightly/blob/master/oldschoolnightly.js">Node app</a> runs on one of my servers that backs up the new stuff on <a href="http://scripting.com/">Scripting News</a> in a GitHub <a href="https://github.com/scripting/Scripting-News/tree/master/blog">repository</a>. 

It's my way of trying to create an archive of my writing that will persist, even if everything in my hosting chain were to fail. <a href="http://scripting.com/">DW</a>

#### How it works

I <a href="http://scripting.com/images/2018/09/02/editingMyBlogInOutliner.png">use</a> an <a href="http://littleoutliner.com/">outliner</a> to write my <a href="http://scripting.com/">blog</a>. To publish changes to the outline, on the blog, I click an icon. This sends an HTTP call to the server saying "update the site." It has been told where the <a href="http://electricserver.scripting.com/users/davewiner/electric/blog.opml">OPML file</a> is, and has all the prefs set in a local config file. It then generates a folder of JSON and HTML files representing the days, items and pages of the site. From this data, the renderer can generate the home page, the story pages, and the monthy and daily archive pages.  

The <a href="https://github.com/scripting/oldSchoolNightly">nightly script</a> incrementally <a href="https://github.com/scripting/Scripting-News/tree/master/blog">backs up</a> all these files, every night.

At the beginning of every month I manually upload the OPML file for the blog for the previous month. For example, here's the <a href="https://github.com/scripting/Scripting-News/blob/master/blog/opml/2018/08.opml">archive file</a> for August 2018.

It also backs up the <a href="https://github.com/scripting/Scripting-News/blob/master/blog/rss.xml">RSS feed</a> for the blog, as well as the <a href="https://github.com/scripting/Scripting-News/blob/master/blog/misc/glossary.opml">glossary</a> file, and the <a href="https://github.com/scripting/Scripting-News/blob/master/blog/misc/linkblog.xml">linkblog</a> RSS feed. 

I've made it easy to add other one-off files to the backup, and expect to add more over time. 

#### Shared code

I have released the <a href="https://github.com/scripting/oldSchoolNightly">nightly script</a> under the MIT license. I want to encourage all technical bloggers to archive their blogs. 

#### Why?

Recently we've lost the handle to two historic blog communities, radio.weblogs.com and blogs.harvard.edu, both started in the early 2000s. Thousands of affected sites. This has brought home to me that even when preservation of archives was a priority, as it was with both these sites, time passes, people move on, and there are so many links in the "hosting chain," one of them is bound to break. It's helped me realize that if we don't do something soon to systematize this, the web as an archival medium is going to have failed. 

With radio.weblogs.com, I sold the weblogs.com domain, with an informal agreement with the buyer that they would continue pointing the radio.weblogs.com name to the <a href="http://radio-weblogs.com/">static location</a> where the content was preserved. Later they sold weblogs.com to another company, who, when auditing the names attached to the weblogs.com domain for a new privacy law, decided not to take the risk with the radio.weblogs.com name, thus <a href="http://scripting.com/2018/05/10/204408.html">breaking</a> all links into the site. The content continues to be hosted at <a href="http://radio-weblogs.com/">original location</a>. 

With blogs.harvard.edu, responsibility for hosting the domain went from Berkman Center to the main university-wide IT service. Where Berkman was not strict about hosting blogs from non-Harvard users, or people who had lost their affiliation with Harvard, the new service didn't want to assume the responsibility. So links into an unknown number of sites <a href="http://scripting.com/2018/08/15/141004.html">are broken</a>.

#### Why GitHub?

It seems stable, and is easily shared, and I believe the content is portable, so if GitHub were to become an unreliable place to archive the content it would be relatively easy to switch.  

On the other hand, this code depends on <a href="https://github.com/scripting/github/blob/master/davegithub.js">their API</a>, and there don't seem to be many other apps using the API, so I wonder if a competitor would also support the API. They would have to in order for moving to be feasible. 

It's important that the hosting chain for the archive is completely independent from the hosting chain used for my blog. I'm pretty sure that GitHub doesn't depend on any of the resources that <a href="http://scripting.com/">Scripting News</a> does. Think of this as two-factor archiving. 

#### The glossary

The <a href="https://github.com/scripting/Scripting-News/blob/master/blog/misc/glossary.opml">glossary</a> is a two-level <a href="http://instantoutliner.com/63">outline</a>. Each top-level item is a string that the CMS searches for. The subhead contains the text that replaces it. It allows me to use a symbol in place of a complicated bit of HTML. It has other uses. I've had a glossary in every CMS I've used over the years. Wouldn't want to write without it. 

But if I forgot to archive it, then there would be mysterious bits in the rendered text. This has happened in earlier versions of Scripting News, where the posts were rendered by a newer CMS but the glossary wasn't retained. 

Lesson learned. We save the glossary along with all the other bits of the website.

#### Pointers

A blog post <a href="http://scripting.com/2018/09/01/161056.html">explains</a> two ways to archive, in-place or curated.

This document is <a href="https://github.com/scripting/Scripting-News/blob/master/blog/readme.md">mirrored</a> in the GitHub repo, as a bit of added future-safety.

