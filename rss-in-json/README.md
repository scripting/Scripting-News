## RSS-in-JSON is a feed format

It's simply an <a href="https://cyber.harvard.edu/rss/rss.html">RSS 2.0 feed</a> that uses <a href="https://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf">JSON</a> syntax in place of XML.

The semantics for RSS-in-JSON come from from RSS 2.0.

### Example

Here's an <a href="http://scripting.com/rss.json">example</a> of a RSS-in-JSON feed. It's the JSON representation of the Scripting News <a href="http://scripting.com/rss.xml">RSS 2.0 feed</a>. 

### The general rule

An attribute of an element in the XML version is a property in the RSS-in-JSON object.

If an element has one or more attributes and a value, the value is represented as a property named #value.

If an element has a value and no attributes it's represented as a property in the JSON representation. 

### Illustrations of the general rule

1. <a href="https://cyber.harvard.edu/rss/rss.html#ltenclosuregtSubelementOfLtitemgt">&lt;enclosure></a> sub-element of &lt;item> has attributes and no value. It is represented as:

<pre>"enclosure": {
   "url": "http://www.scripting.com/mp3s/weatherReportSuite.mp3",
   "length": "12216320",
   "type": "audio/mpeg"
   }
</pre>

2. <a href="https://cyber.harvard.edu/rss/rss.html#ltcategorygtSubelementOfLtitemgt">&lt;category></a> sub-element of &lt;item> can contain both an attribute and a value.

<pre>"category": {
   "domain": "http://www.fool.com/cusips",
   "#value": "MSFT"
   }
</pre>

3. <a href="https://cyber.harvard.edu/rss/rss.html#ltpubdategtSubelementOfLtitemgt">&lt;pubDate></a> sub-element of &lt;item> has a value and no attributes. 

<pre>"pubDate": "Sun, 19 May 2002 15:21:36 GMT"</pre>

### Scope

This document explains how an RSS 2.0 feed maps onto JSON syntax.

We'll describe the JavaScript object that the JSON is a representation of. 

To create the JSON text from the RSS-in-JSON object:

<code>jsontext = JSON.stringify (rssInJsonObject);</code>

### The <i>rss</i> object

The RSS-in-JSON object has a single property named <i>rss.</i> Its value is an object whose properties correspond to the attributes and sub-elements of the RSS 2.0  &lt;rss> element.

<i>rss</i> has a property named <i>version.</i> Since we're representing an RSS 2.0 feed its value will be "2.0".

<i>rss</i> must also contain a property declaring each namespace it uses. The name of each begins with <i>xmlns</i> followed by : followed by the name you want to use for the namespace in the feed. The value is the URL used in the namespace declaration in the XML feed. 

The <i>rss</i> object contains an property named <i>channel,</i> whose value is an object that has properties corresponding to the elements of &lt;channel> in the RSS feed.

For example, it may contain a property named <i>cloud</i> whose value is an object with properties corresponding to the attributes of the RSS 2.0 &lt;cloud> element.

### The item array

<i>channel</i> may contain an aray named <i>item.</i> The elements of the array correspond to &lt;item>s in the XML version. 

### Credits

Written by <a href="http://davewiner.com/">Dave Winer</a>, reviewed by <a href="http://www.wirfs-brock.com/allen/about">Allen Wirfs-Brock</a>.

<a href="http://scripting.com/2017/06/05.html#a080612">A blog post</a> with background and links, re this document.

June 2017

### Discussion

If you have questions or comments please post an <a href="https://github.com/scripting/Scripting-News/issues">issue</a> here. 

