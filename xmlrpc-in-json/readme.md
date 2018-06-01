I'm thinking about doing a JSONified XML-RPC, just to see what it would look like.

Here's a table comparing the two versions.

<table>

<tr>

<td>

Single-param call

</td>

<td>

<pre>

&lt;methodCall>

&lt;methodName>examples.getStateName&lt;/methodName>

&lt;params>

&lt;param>

&lt;value>&lt;int>50&lt;/int>&lt;/value>

&lt;/param>

&lt;/params>

&lt;/methodCall>

</pre>

</td>

<td>

<pre>

{

"methodCall": {

"methodName": "examples.getStateName",

"params": [

23

]

}

}

</pre>

</td>

</tr>

</table>

