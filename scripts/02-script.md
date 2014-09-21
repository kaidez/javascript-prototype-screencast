========================================================================
Remove console.log  before you start recording.
========================================================================

So I'm going to start building the two methods I discussed...one to configure the home options and another to display them on a page. Before I do, take note that note that I removed both the console.log statement that was inside the Blueprint function but kept the var test instance for now.

Also, real quick, I'm going to write shorthand code for the common home properties I wrote in the last movie....like this...string all the properties with equal signs and end things using "true" here.

And this is valid JavaScript...it means the same thing as I had here before.  And we're going to optimize our code here a bit more before we do the function stuff.

We've added all these properties directly inside the Blueprint function and we can do the same thing for the methods, but code generally runs faster if you add them directly to the prototype instead. And we can do that by copying everything here...except for lotID.

...and changing all the "this" keywords to...Blueprint-dot-prototype.

And now onto the functions...so the first function will set individual house options. So I'll create a function called setOptions and place it directly onto the prototype...and that code will look like this.

And I'm gonna pass a parameter called "pool", which will define whether or not the house has a pool. Now, passing params like this...it's fine if I have only 1 or 2 parameters, but if I want more than that (and I do), this is gonna get messy.
