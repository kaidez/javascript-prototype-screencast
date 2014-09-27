========================================================================
Remove console.log before you start recording.
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

So to avoid all this, I'm going to have the set things up so the parameters need to be configured in a JavaScript object. And I'll do that by changing the pool parameter to opts (short for option)...and then in the function, I'm going to say opts-equals-opts-or-an-empty-object.

So I've created what's commonly referred to as an "options object" and, as its name implies, it's an "object" that I can add "options" to. What I'll do is create a bunch of different home options in this function, I'll make sure to attach them to the opts parameter here, and this will allow others to list those options as key/value pairs inside the JavaScript object when they instantiate the function...much neater.

Now, I've been using the word "options" a lot and that's key. All these home options I've been talking about? They're optional...they CAN be left blank and if they are, my code will be able to deal with that neatly, thanks to logical OR operator here...this double pipe.

IT'S saying that, if the no parameters are passed at all, then an empty object will be returned.

So to recap this line...the opts parameter here? That's represented inside the function here and I'll make sure to attach all my properties to it. If NO properties are attached to it, opts will be returned as an empty object.

But in this case, we're just setting up the empty object thing is really just a best practice. The truth is, the object will never be empty because I'm going to set my code up so that, if a certain parameter isn't set up using opts, it will have a default value.

So, there's that pool property we just talked about, and we have to attach it to opts so it can be passed as a parameter, and we need to make it optional and if it's not filled in, we need to give it a default value so the code for this will be in the form of what's known as a ternary operation and that looks like this...

this.pool-equals-opts.pool-triple-equal-sign-undefined-question-mark-no-in-quotes-colon-opts.pool. What's this code doing?

A ternary operation is a shorter way of running an if/else statement. So what's happening is, this.pool is checking to see what opts.pool is equal to.

Now, if I DON'T give pool a value, JavaScript will automatically give it a value of undefined....that's how JavaScript works. And as far as this code goes, the question mark here is checking to see if that's true, and if it is, it will automatically give it a value of "false".

So, the question mark is the "if" statement part of the code, but the full colon here is the "else" part. So that means if opts.pool does NOT equal undefined, it will be set to whatever the valur of this.opts, which will be the parameter that gets passed.

So let's test this...I still have test.setOptions here, which fires off that console.log statement that's returning pool's value to the browser console.

So if I go back to the browser and refresh...it returns false, which should be expected. Because if we don't set it as a parameter, JavaScript sets its value to undefined, and our code is told to change the value to false in that situation.

That's what happens if we DON'T give pool a value...what happens when we do give it value?  To do that, we have to set it up as a key value pair inside an object...so I'll create an object like this and create my key value pair...pool-colon-true...then save it and go back to the browser and refresh it...and we see that pool now as a value of true.

So I'm going to create a few more configurable options here using the same type of code...I'm going to create one for floorType. And I'm going to set the default value to tile...really cheap.

And I'll create one more for kitchenCounter. I'll set that default value to formica...also really cheap.

And this time, I'll get rid of pool in the console.log statement...I want to see ALL of the stuff attached to this. So save it...and go back to Chrome and refresh...

And now Blueprint is displaying in the console...and if I expand the arrow here...we see all the properties so far.

We see the pool setting here and the type for kitchen counter and the floortype...they're all set to the default values we gave them: again, all the options are optional. And we also see the lotID, which we passed as a parameter in the last video.

Annnnd just so we know what's going on, I'll set options for the kitchen counters...I'm going to get real fancy and set them to "granite".  And we'll save it and go back to the browser and refresh...

Yep! kitchen counters are set to granite.  Now let's look at this proto thing here for a moment...THIS represent things that are currently attached to the Blueprint function.

And if we want to see these things, we expand it...and it's all the stuff that we attached to the prototype at the start of this video. Like square feet and basement.

And we did attach the setOptions method to the prototype, so it makes sense that it's showing up here.  Now there's also this constructor method here and we'll discuss it when we start talking about inheritance, but we'll get to that when we get to that.

For these other properties though, I want to make the configurable like I did for the others. The syntax is different, but it's still easy to do.
