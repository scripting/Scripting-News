## How xrefs work on Scripting News

There's a new feature on <a href="http://scripting.com/">Scripting New</a>s as of <a href="http://scripting.com/2017/07/13.html#a033236">7/13/2017</a> called xrefs.

I think of it as an experimental feature, something on the way to becoming more general, better documented, and designed to interop between blogging platforms and CMSes. 

That said, the current design is fully capable of being a basis for interop if there's an interest.

### What is an xref?

In an <a href="http://dev.opml.org/spec2.html">OPML</a> file, an <i>xref</i> is an outline node with an attribute named <i>xref</i> whose value is the URL of a blog post on Scripting News, prior to May 17, 2017. The node can contain any other attributes or subs. 

Here's an example of an &lt;outline> element with an xref attribute.

<code>&lt;outline text="In the end it wasn't very complicated, we know what happened. " created="Fri, 14 Jul 2017 15:30:57 GMT" xref="http://scripting.com/2017/07/13.html#a084742"/></code>

### How the pieces fit together

I edit Scripting News in an outliner. There's an <a href="http://storage.littleoutliner.com/users/davewiner/electric/todo.opml">OPML file</a> of course, and a <a href="http://scripting.com/index.json">JSONified version</a>. Both carry exactly the same data. One uses XML syntax, the other uses JSON.

<a href="https://duckduckgo.com/?q=site%3Ascripting.com+%22old+school%22&t=hq&ia=web">Old School</a> is a server app that uses the OPML file to update Scripting News. 

Part of the blog is a folder of JSON files, one for each post. Here <a href="http://scripting.com/items/2017/07/10/a104148.json">are</a> <a href="http://scripting.com/items/2017/07/13/a084742.json">several</a> <a href="http://scripting.com/items/2017/07/11/a094345.json">examples</a>.

Note that the format of the files is the JSONified OPML used by the whole blog. That's not an accident. :cop:

When I want to create an xref, in my outliner, I get the URL of one of the posts and <a href="http://scripting.com/images/2017/07/14/attsDialog.png">set the xref attribute</a> on the headline to point to the post. When Old School generates the page, it adds a <i>data-xref</i> attribute to every &lt;li> that came from an outline element that had an xref attribute. 

When the user views the page, a bit of JavaScript runs, searches for all data-xref atts, displays a wedge that, when clicked, reads the JSON file, renders it, and adds it subordinate to the &lt;li> element in the web page.  

### Demos

You can see it in action on the archive pages for July <a href="http://scripting.com/2017/07/12.html#a120607">12</a>, <a href="http://scripting.com/2017/07/13.html#a033236">13</a> and <a href="http://scripting.com/2017/07/14.html#a112705">14</a>.

There's a quick <a href="https://www.youtube.com/watch?v=TzzQgNapHX8">YouTube demo</a> as well.

### Questions, comments

Post an issue <a href="https://github.com/scripting/Scripting-News/issues">here</a> on the Scripting News repo on GitHub.

