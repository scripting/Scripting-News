### Interop is all that mattersThe only reason we have open formats and protocols is so our software can interoperate. 
### Why interop?We want interop so that our users are free to move.
So our products compete on the basis of performance, features and price, and not lock-in. 
This is as basic as the <a href="https://en.wikipedia.org/wiki/Hippocratic_Oath">Hippocratic Oath</a> that doctors take. 
It honors and respects the users of our products.
### There are tradeoffs in standardsThere are few absolutes in standards work, some rules even contradict others, so you have to think, and strike a balance. 
### Software matters more than formats (much)Too often people try to design a format first, and then make software that conforms to the format. You might get some good demos. But not much chance of developing a standard that way.
### Users matter even more than softwarePeople choose to interop because it helps them find new users. If you have no users to offer, there won't be much interest in interop.
### One way is better than twoNo matter how much better the new way is, you'll still have to support the old way. 
### Fewer formats is betterIf you can replace two formats with one, without breakage or loss of interop, then I say go for it.
Removing complexity from the world is always good. 
Think of this like code factoring, but on a larger scale.
This is 1/2 of Postel's robustness <a href="https://en.wikipedia.org/wiki/Robustness_principle">principle</a> -- be conservative in what you send.
### Fewer format features is betterIf you want to add a feature to a format, first carefully study the existing format and namespaces to be sure what you're doing hasn't already been done. If it has, use the original version. This is how you maximize interop. 
### Perfection is a waste of timeI've witnessed long debates over which name is better than another. 
I once led a standards discussion beginning with this rule: We always had to come up with the <i>worst possible</i> name for every element. That way when someone said "I think foo is better" (and they did) we could all laugh and say that's exactly why we won't use it. 
It totally doesn't matter what we call it. We can learn to use anything. There are more important things to spend time on. 
PS: Think of people whose first language isn't English. To them the names we choose are symbols, they don't connote anything. 
### Write specs in plain EnglishI write for people who have brains, like to think, are educated, care about interop. I understand that people reading specs are not computers. 
### Explain the curiositiesI also try to explain why things are as they are because people seem to be interested. But only after explaining how it works and providing an example. 
### If practice deviates from the spec, change the specIn writing the spec for RSS 0.91, I found that a lot of the limits imposed by the earlier spec were being ignored by developers. So I left the limits out of 0.91 spec. No one complained. 
After RSS 2.0, the format was frozen, so no more adjustments based on practice.
### No breakageVersion 2 of your format should be backward compatible. This means that a version 1 file is a valid version 2 file. 
Don't break the installed base. (Not that you can. There are still lots of people running XP even though Microsoft said it was over. And that's a commercial product, not a standard.)
### Freeze the specAt some point, when the new ideas have slowed to a trickle, and as a base of compatible software develops, freeze the spec, but provide an extension mechanism so new ideas have an outlet. 
Developers need a foundation to build on, one that is fixed and isn't moving.
### Keep it simpleBeware of open formats that are impossible to fully support.
XML-RPC could be fully supported in a few days. You could never fully support SOAP. I believe this is no accident. Large companies crafted SOAP so they could say they were open without interoperating with competitors. The goal of XML-RPC was to make it easy to interop. 
### Developers are busyNow you've got a popular product and your data formats are open and documented, you are encouraging your competitors to be compatible. 
Next thing to do is to create a toolkit in at least one popular language that shows how to support the format. Real working code can help fill in the blanks for the spec. Some developers will use the sample code without ever looking at the spec. I know I do. 
### Mail lists don't ruleThere's a weird bit of psychology that seems to happen on mail lists set up to discuss interop. The people there feel like they can make decisions that the world will then obey. You can hear it how people talk. They seem to believe they have arrived at the top of the pyramid and now they are masters of the universe. Actually, they're just people on a mail list. No one, not even the other people on the list, care what you think.
Same is true for real world conferences. 
### Praise developers who make it easy to interopI'm thinking of Slack. They didn't have to make it so easy, but they did anyway. It's the web way, it's the strong way. They're saying they want their users to be free to leave at any time. That they should stay with Slack because their product is the best, not because they have to stay.
### Thanks for listening!If you have comments or questions, you can use the <a href="https://github.com/scripting/Scripting-News/blob/master/manifesto/rulesForStandardsMakers.md">GitHub group</a>. 
And thanks for making it this far. 
Dave
