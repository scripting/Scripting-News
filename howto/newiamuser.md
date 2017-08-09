## How to create an AWS user with read/write access to an S3 bucket

### Create a policy

1. From the <a href="https://console.aws.amazon.com/iam/home?#/home">IAM dashboard</a>, click on Policies in the left margin. 

2. Click on Policy Type, and choose Customer managed from the menu that pops up. 

3. Click the Create Policy button. Choose the last option Create Your Own Policy.

4. A form appears asking for Policy Name, Description and Policy Document. I called mine _bloatwareReadWrite._ Write this name down somewhere, you'll need it later. 

5. Under Policy Document, copy the text from <a href="https://gist.github.com/scripting/9d9305a572f0e8bd4a3ac1626febfae7">this page</a>, and replace bloatware.org with the name of your bucket. 

6. Click the Create Policy button. 

### Create a group

1. Go back to the <a href="https://console.aws.amazon.com/iam/home?#/home">IAM dashboard</a> and click on Groups in the left margin.

2. Click the Create New Group button. On the next page enter the name of your group. I called mine _bloatwareEditors._  Click the Next Step button.

3. On the Attach Policy page, enter the name of the policy you defined in the previous section and click the Next Step button.

4. On the next page click the Create Group button.

### Create a user

1. From the <a href="https://console.aws.amazon.com/iam/home?#/home">IAM dashboard</a>, click on the Users link in the left margin.

2. Click Add user. On the next page, enter the user's name. I called my user <a href="http://scripting.com/2017/08/09.html#a080510">millieDresselhaus</a>. 

3. For AWS access type, check Programmatic access, and leave the other option unchecked. 

4. Now it all comes together. Click the Add user to group button and check the box next to the name of the group you created in the steps above. 

5. Click the Next button and Create user and you're done. 

### Notes

This the equivalent of an OAuth sign-in using S3. The user creates credentials for a new user who has read/write access to a single bucket. The idea is the user has set up this bucket to host their website and is using a desktop editor to manage a blog on that site. 

Here's an <a href="http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-s3">Amazon doc</a> that explains ARNs that are used in the policy spec. 

Another on how to <a href="https://aws.amazon.com/blogs/security/writing-iam-policies-how-to-grant-access-to-an-amazon-s3-bucket/">grant access</a> to an S3 bucket. 

Any comments or suggestions, please post an issue <a href="https://github.com/scripting/Scripting-News/issues">here</a>. 

