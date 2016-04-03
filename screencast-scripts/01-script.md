Heeeeey...thanks for watching my screencast tutorial on prototypal inheritance in JavaScript. So, I always struggle on whether or not to do ANY sort of JavaScript prototype tutorial, just because they're so many great prototype learning resources. There's books, there's links and on and on and on.

But with the class keyword becoming more prominent in JavaScript thanks to things like CoffeeScript and ES6 and TypeScript, understanding how the class keyword uses prototypes behind the scenes (especially if your talking about class inheritance in JavaScript) helps you better-understand those languages. Especially if you're using something like TypeScript or CoffeeScript, which exposes prototypes in your production code.

So in order to help JavaScript newbies get a better understanding of prototypes, I whipped up this quick screencast DISCUSSING prototypes, ummm, prototypal inheritance specifically.

Couple of things...

First, for this tutorial, I'll be building out my code in a Node environment using Node and Browserify and treating separate JS files as dependencies that build out to one final JS file. But don't worry: there's a single JS file that can do everything you're about to see.

It's available on GitHub for you to grab and I'll show you how to use it at the end. Just know I'll be using Node or Browserify to build out the file for THIS demo because it's easier...you can grab the non-Node-non-Browserifiy file, plain-old JS file later on.

Second, I'll be talking about prototypes pre-ES5. ES5 lets you use something called Object.create() when doing prototypal inheritance.

I won't be discussing that. There are a couple of links that do a great job of explaining that and I'll give them to you at the end as well, but THIS screencast is just about plain-old, regular, basic prototypes.

SO!!!  What are prototypes?

In JavaScript, a prototype is a property that exists inside functions, arrays, strings, and regular objects. We'll be focusing on prototypes inside functions for this tutorial.

It's important to note that in JavaScript, pretty much everything is an object...functions, arrays, objects obviously. Even strings.

For this tutorial, functions are the main object we focus on.

Back to prototypes, they're also objects and it contains what ever native properties and methods the function has. So for example: all functions have a name property, they also have a call method that we'll actually be using.

Both of those things are stored inside the prototype object. Also, if you add your own properties and methods to a function, they'll also be inside the prototype. And just a quick reminder: a method is a function inside another function or an object.

Now prototypes always exist in your code and you don't really need to use them. Until you start simulating class inheritance in JavaScript and "simulating" is the key word here because JavaScript doesn't have classes...unlike other languages like Java.

With Java, you can either create a class or use one of its built-in ones, and then create a new instance of the class with a constructor function. And that instance is what's used to make your code run.

And with Java and the like, it's best to think of the instance as an object.

Classes can inherit from other classes, like this example that we see here. So this "Car" class here has properties and methods, and this "Ford" class is inheriting from "Car"...along with all it's methods and properties.

Now that's how "classical" languages like Java work but JavaScript is a "prototypal" language. You can still use constructor functions but when it comes to inheritance, it's different.

With Java, classes inherit from other classes whereas with JavaScript, objects inherit from other objects. And that's done when one object inherits the prototype of another.

So in this tutorial, we'll walk through how to use prototypes to simulate class inheritance.