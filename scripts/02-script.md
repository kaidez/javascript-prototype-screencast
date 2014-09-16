===================================================================
Remove console.log and "test" constructor function before you start recording.
===================================================================

So we're going to dig deeper into adding methods to the proto type and before we get to that, note that I removed both the console.log statement that was inside the Blueprint function, and I also got rid of that var test instance that was below the function as well.

And I want to do one more piece of code cleanup. I've got all these things here that equal the same thing, which is true. I can shorthand this in JavaScript like this...

..and here I'm stringing things together with a bunch of equal signs and this is perfectly valid JavaScript. And, I'll test it by going back to my web page and refreshing.