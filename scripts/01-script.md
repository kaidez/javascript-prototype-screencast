Hello and thanks for checking out my introduction to prototypes screencast, with prototypes being how you simulate class inheritance in JavaScript. I'm doing this screencast for 2 reasons...

First, I've had a a few people ask me what prototypes are and how they work, and some of the people are relatively new to JavaScript. And I have a feeling that there are many other JS newbies that are that have the same question. So I wanted to put together this screencast to help those people out.

And the second reason was to share what I learned. All the code and coding patterns you're gonna SEE in this screencast is the result of my just buckling down for a few days and really JUST hacking together some JavaScript prototype code.

I've used prototypes before in production code annnd I understand them. But I wanted to take some time and just focus on them 100 percent so I could really really REALLY understand them.

Also, with web components (which are really really REALLY new at the time I'm recording this), prototypes play a big role. If you use web components to create a custom element, you can use prototypes to inherit properties of already existing elements like button and span tags.

LOTS of the documentation around this that I've seen is written in a way that assumes that you understand how prototypal inheritance works...not all of it, but lots of it. So I wanted to do this screencast to fill in the blanks for things like that.

Now, this screencast is broken down into 3 parts: the first part is a brief walk through of what prototypes are, the second part is going through the code, and the third part is a really quick walk-through of some good learning resources about prototypes. 

And I should point out that I'm assuming you understand what variables, arrays and functions are in JavaScript as I won't be defining those.

But let's get to the first part...

So...what? Are? Prototypes in JavaScript?

The definition in the official EcmaScript documentation is actually pretty good: A prototype is an "object that provides shared properties for other objects."

To expand on that, most of the