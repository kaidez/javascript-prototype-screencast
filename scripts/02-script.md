===================================================================
Remove console.log and "test" constructor function before you start recording.
===================================================================

So I'm going to start building the two methods I discussed...one to configure the home options and another to display them on a page. Before I do, take note that note that I removed both the console.log statement that was inside the Blueprint function, and I also got rid of that var test instance that was below the function as well.

Also, real quick, I'm going to write shorthand code for the common home properties I wrote in the last movie....like this...string all the properties with equal signs and end things using "true" here.

And this is valid JavaScript...it means the same thing as I had here before.  And we're going to optimize our code here a bit more before we do the function stuff.

We've added all these properties directly inside the Blueprint function and we can do the same thing for the methods, but code generally runs faster if you add them directly to the prototype instead. And we can do that by copying everything here...except for lotID

...and changing all the "this" keywords to...Blueprint-dot-prototype.

And now onto the functions...so the first function will set individual house options. So I'll create a function called setOptions and place it directly onto the prototype...and that code will look like this.

Now, I could pass a paramter here like we did up here...with lotID. And I could set things up to have as many parameters as I want, but that tends to get messy.  
