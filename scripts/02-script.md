========================================================================
Remove console.log  before you start recording.
========================================================================

So I'm going to start building the two methods I discussed...one to configure the options for a single home, and another to display them on a page. Before I do, take note that note that I removed both the console.log statement that was inside the Blueprint function but kept the "var test" instance for now.

Also, real quick, I'm going to write shorthand code for the common home properties I wrote in the last movie....like this...string all the properties with equal signs and end things using "true" here.

And this is valid JavaScript...it means the same thing that I had here before.  And I'll optimize things a bit more before we do the function stuff.

So, I added all these properties directly inside the Blueprint function and I COULD do the same thing for the methods, but code like this generally runs faster if the properties and methods are placed on the prototype directly.

And I'll do that by copying everything here...except for lotID...and changing all the "this" keywords to...Blueprint-dot-prototype.

And, onto the functions...so the first function will set individual options for each home. So I'll create a function called setOptions and place it directly onto the prototype...and that code will look like this.

And for starters, I'm gonna pass a parameter called "pool", which will define whether or not the house has a pool. And that means I have to type this.pool-equals-pool inside the function.

And just to confirm what code gets returned, I'll add a console.log statement that returns the value of pool...console.log...this.pool. And then go to the bottom, and directly below var test, I'll write "test-dot-homeOptions". And I'm going to say that the house DOES of a pool in this case so I'm going to pass in a parameter of true here...

And go back to the browser and refresh my page...and then open up the console. And we see that "pool" is set true as far as what the browser sees, and that's what I want.

Now, passing params like this...it's fine if I have only 1 or 2 parameters, but if I want more than that (and I do), whoever uses this code will have to enter the params in a specific order and there's no guarantee that will happen, and if they don't follow that order, errors will happen, so this is messy...

So to avoid all this, I'm going to have the set things up so the parameters need to be configured in a JavaScript object. And I'll do that by changing the parameter to config...and then in the function, I'm going to say config-equals-config-or-an-empty-object.

So I've created what's commonly referred to as an "options object" and, as its name implies, it's an "object" that I can add "options" to. What I'll do is create a bunch of different home options in this function, attach them to the config parameter here, and this will allow others to list those options as key/value pairs inside the object when this function is created...much neater.

Now, I've been using the word "options" a lot and that's key. All the different home options I create WILL BE optional...they can be left blank and if they're COMPLETELY blank, that's fine.

We've got the logical OR operator here...this double pipe. And if the no parameters are passed, then an empty object will be returned.

So to recap this line...the config parameter that we're passing here? That's represented here.

It will be equal to any properties attached to the config parameter (that's represented here)...OR...this is what this double pipe means...it will be returned as an empty object.

But in this case, we're just setting up the empty object thing is really just a best-practice. The truth is, the object will never be empty because all our parameters will have default values that we're now going to start setting up...

So, there's that pool property we just talked about, and we have to attach it to config so it can be passed as a parameter, and we need to make it optional and if it's not filled in, we need to give it a default value so the code for this will be in the form of what's known as a ternary operation and that looks like this...

this.pool-equals-config.pool-triple-equal-sign-undefined-question-mark-no-in-quotes-colon-config.pool. What's this code doing?

We're setting this.pool equal to config.pool and from here, config.pool is checking for some things. The triple-equal-sign is a firmer way of checking the value of something...it checks the value as well as the data type...if it's a number or a text string.

And if pool isn't passed as a parameter, it will automatically be given a value of undefined. Then the ternary operation starts...that's this question mark.

A ternary operation is a shorter way of running an if/else statement,
