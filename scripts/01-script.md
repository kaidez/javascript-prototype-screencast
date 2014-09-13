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

A protoype is a property of an object and as it turns outs, a prototype is actually an object. Prototypes contain all the object's properties.

So for example: in this screencast, I'll be creating a function that represents the blueprint of a house (and as a reminder: a function is also an object). That blueprint function will contain properties that describe things like how many bedrooms and bathrooms the house has, and a few methods, like, there will be a method that displays all the house information on a web page.

These properties and methods live inside the function's prototype property and as a result of this, we can simulate classical inheritance in JavaScript.  Which is good because...JavaScript doesn't have classes like Java or C does.

I want to take a moment and point out that JavaScript was purposely built without classes.  Brendan Eich, the creator of JavaScript, has said that he wanted the language to be easy to understand so developers of all levels could pick it up easy. So things like classes and interface implementations were purposely left out.

But JavaScript can still do inheritance stuff...it just does it with prototypes. So in class-based languages, you create a class first, then create an instance of that class. And the instance will have all the properties and methods of that class.

But in JavaScript, you create what's called a constructor function first, then create an instance object of that function using the new keyword.