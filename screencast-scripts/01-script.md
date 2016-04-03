Heeeeey...thanks for watching my tutorial on prototypal inheritance JavaScript. So, I've struggled with doing ANY sort of JavaScript prototype screencast, just because they're so many great learning resources on prototypes out there. There's books, there's links and on and on and on.

But with JavaScript class keyword becoming more prominent thanks to things like ES6 and TypeScript, understanding how the class keyword uses prototypes behind the scenes (especially if your talking about class inheritance in JavaScript) may help with those languages. Especially if you're using something like TypeScript or CoffeeScript, which plainly exposes prototypes in your production code.

So in order to help JavaScript newbies embrace those languages quicker, I whipped up this quick screencast discussing prototypes, ummm, prototypal inheritance specifically.

Couple of things...

First, for this tutorial, I'll be building out my code in a Node environment using Node and Browserify and treating separate JS files as dependencies that build out to one final JS file. But don't worry: there's a single JS file in this can do everything you're about to see.

It's available on GitHub for you to grab and and I'll show you how to use it. Just know I'll be using Node or Browserify to build out the file for THIS demo because it's easier...you can grab the non-Node-Browserfiy file, plain-old JS file later on.

Second, I'll be talking about prototypes pre-ES5. ES5 lets you use something called Object.create() when doing prototypal inheritance.

I won't be discussing that. There are a couple of link that do a great job of explaining that and I'll give them to you in the end, but this screencast is just about plain-old, regular, basic prototypes.

SO!!!  What are prototypes?

In JavaScript, a prototype is a property that exists inside functions, arrays, strings, and regular objects. We'll be focusing on prototypes in functions for this tutorial.

That property is actually an object itself, and it contains other properties and methods. So for example: a function has name property, it also has a call method that we'll actually be using.

Both of those things are inside the prototype object. Also, if you add your own properties and methods to a function, they'll also be inside the prototype. And just a quick reminder: a method is a function inside another function or an object.

Now prototypes always exist in your code and you don't really need to use them. Until you start simulating class inheritance in JavaScript and "simulating" is the key word here because JavaScript doesn't have classes...unlike other languages like Java.

With Java, you can either create a class or use one of its existing ones, and then create a new instance of the class with a constructor function. And that constructor function is what's used in your code.

And classes can inherit from other classes, like this example that we see here.