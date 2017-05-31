#### JUST is a feed format

##### Example

Here's an <a href="http://scripting.com/rss.json">example</a> of a JUST feed. It's the JSON representation of the Scripting News <a href="http://scripting.com/rss.xml">RSS 2.0 feed</a>. 

##### JUST is an acronym

It stands for JUST Uses Standard Technology.

##### It's RSS 2.0 in JSON

The standards it uses are JSON and RSS 2.0.

It's simply an RSS 2.0 feed that's represented in JSON instead of XML. 

##### Scope

We'll describe the mapping from XML to JSON here. 

For the semantics please refer to the <a href="https://cyber.harvard.edu/rss/rss.html">RSS 2.0</a> spec. 

##### How the mapping works

Here's how an RSS 2.0 feed becomes a JUST feed. 

The JUST object has a single sub-element named <i>rss.</i>

<i>rss</i> has a sub-element named <i>version.</i> Since we're representing an RSS 2.0 feed its value will be "2.0".

<i>rss</i> may also have a sub-element for each namespace it uses. The name of each begins with <i>xmlns</i> followed by : followed by the name you want to use for the namespace in the feed. The value is URL used in the namespace declaration in the RSS feed. 

The <i>rss</i> element contains an object named <i>channel,</i> which has scalars corresponding to the elements of &lt;channel> in the RSS feed.  

For example, it may have a sub-object named <i>cloud</i> that has values corresponding to the attributes of the RSS 2.0 &lt;cloud> element.

In general, an attribute of an element in the XML version is a sub-element in the JUST object.

If an element has both attributes and a value, the value is represented as a sub-element named #value.

<i>channel</i> may contain a aray named <i>item.</i> The elements of the array correspond to &lt;item>s in the XML version. 

