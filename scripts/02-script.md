========================================================================
Remove console.log  before you start recording.
========================================================================

So I'm going to start building the two methods I discussed...one to configure the home options and another to display them on a page. Before I do, take note that note that I removed both the console.log statement that was inside the Blueprint function but kept the var test instance for now.

Also, real quick, I'm going to write shorthand code for the common home properties I wrote in the last movie....like this...string all the properties with equal signs and end things using "true" here.

And this is valid JavaScript...it means the same thing as I had here before.  And we're going to optimize our code here a bit more before we do the function stuff.

We've added all these properties directly inside the Blueprint function and we can do the same thing for the methods, but code generally runs faster if you add them directly to the prototype instead. And we can do that by copying everything here...except for lotID.

...and changing all the "this" keywords to...Blueprint-dot-prototype.

And now onto the functions...so the first function will set individual house options. So I'll create a function called setOptions and place it directly onto the prototype...and that code will look like this.

And I'm gonna pass a parameter called "pool", which will define whether or not the house has a pool. Now, passing params like this...it's fine if I have only 1 or 2 parameters, but if I want more than that (and I do), whoever uses this code will have to enter the params in a specifc order and there's no guarantee that will happen, and if they don't follow the order, errors will happen, so this is messy...

So to avoid all this, I'm going to have the set things up so the parameters need to be configured in a JavaScript object. So to do that, I'm going to change the parameter to config...and then in the function, I'm going to say config-equals-config-or-an-empty-object.

So I've created what's commonly referred to as an "options object" and, as its name implies, it's an "object" that I can add "options" to. What I'll do is create a bunch of different home options in this function, attach them to the config parameter here, and this will allow others to list those options as key/value pairs inside the object when this function is created...much neater.

Now, I've been using the word "options" a lot and that's key. All the different home options I create WILL BE optional...they can be left blank and if they're COMPLETELY blank, that's fine.

We've got the logical OR operator here...this double pipe. And if the no parameters are passed, then an empty object will be returned.

So to recap this line...the config parameter that we're passing here? That's represented here.

It will be equal to any properties attached to the config parameter (that's represented here)...OR...this is what this double pipe means...it will be returned as an empty object.

But in this case, the empty object thing is really just a best-practice. The truth is, the object will never be empty because we're going to define a lot of default parameters....we'll start that now.

So, 
