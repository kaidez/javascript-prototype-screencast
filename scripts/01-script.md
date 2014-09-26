Hello and thanks for checking out my introduction to prototypes screencast, with prototypes being what you use to simulate class inheritance in JavaScript.

All the code you're gonna see in this screencast is the result of my just buckling down for a few days and hacking prototypes. I've used prototypes before in production code and I understand the, but I wanted to take some time and focus on them 100 percent so I could really really REALLY understand them.

I've also had one or two JavaScript newbies ask me what prototypes are. So I wanted to put together this screencast to help those people out. PLUS...in web components (which are really really REALLY new at the time I'm recording this), prototypes play a big role.

If you use web components to create a custom element, you can use prototypes to inherit properties of already existing elements like button and span tags. Lots of web components documentation is written with the assumption that the reader automatically understands that, so this screencast hopes to fill in any blanks that come up there.

Now, this screencast is broken into 3 parts: the first part is a brief walk through of what prototypes are, the second part is going through the code, and the third part covers some overall JavaScript optimazation tips and a really quick walk-through of some good prototype learning resources.

And I should point out that I'm assuming you understand what variables, arrays and functions are in JavaScript as I won't be defining those.

But let's get to that first part...

What? Are? JavaScript Prototypes?

Prototypes are properties of objects, and the prototypes THEMSELVES are also objects. The properties are methods and other properties that are preset by the browser, but you can also add custom methods and properties.

JavaScript objects, particularly functions, can inherit the properties of another object through prototypes. And objects inheriting from other objects? That's the textbook definition of a prototypal language.


There are 2 main reasons for using prototypes. The first is efficiency: when you create JavaScript constructor functions, the code runs a bit faster when methods and properties are added directly to the function's prototype...we'll discuss this during this screencast.

And the second reason is prototypes let you simulate classical inheritance in JavaScript. And that's good because...JavaScript purposely doesn't have classes like Java or C.

In class-based languages, you create a class first, then create an instance of that class. And the instance will have all the properties and methods of that class. Also, classes can inherit properties and methods from other classes.

But in JavaScript, you create what's called a constructor function first, then create an instance of that function using JavaScript's new keyword. And the instance function will have all the properties and methods of that constructor function.

Also, constructor functions can inherit from other constructor functions. This happens when one function points directly to the other function's prototype, and we'll see what this looks like as we move forward.

It's key to note that this screencast will be focusing on the old way to do prototypal inheritance as it's defined by older versions of JavaScript.  The newer versions do it differently...ECMAScript 5 uses the Object.Create() method to do prototypes and ECMAScript 6 does it with an actual class keyword. There's a big push to be using the ES5 and ES6 methods in production code and I agree with that.

But if you're learning prototypes for the first time, then I think it's best to learn them the old ways first before moving onto the new ways. And just a quick note: ES6 may be using a "class" keyword, but it's still using JS prototypes behind the scenes...it's just abstracting it.

I should also point out that even though JavaScript doesn't have classes, people talk as if it has them anyway, and I'll be doing that a lot in this screencast. That constructor function I just mentioned, for example? I'll be referring to it as a class along with some other constructor functions.

So, what else will I be doing in this screencast...

I'll be using JavaScript to display information about various types of homes.  I'll begin by creating a "Blueprint" constructor function (or a Blueprint "class") that will represent the basic design of a house.

So a house has bedrooms and bathrooms and floors and so on and so on. All those things will be defined as properties of the Blueprint class.

This class will also have 2 methods: the first one will configure various home options. The will be able to define whether or not a home has a pool, what type of floors does it have and few other things, and I'll also be able to override some options.

The things that I can override are already-existing properties like the bedrooms and bathrooms I just mentioned.  I'll be able to do all this with the first method I create.

My second method will display all these home options on a web page. It will build some web page elements in browser memory like ul and li tags, load those options information into these tags, then place the tags on the page.

All of this will be done off-DOM using JavaScript methods like createElement and createDocumentFragment. Shameless-self promotion: to learn more about create page elements off-DOM, see my previous screencast on the subject via link you see here.

Now the end-result of all this will be what you see on the screen here. We have data about some houses...how many bedrooms it has, how much the homes cost...does it have a pool.

All this data is being dynamically generated by JavaScript...it hasn't been hand-coded onto the page or loaded in from a database somewhere. It's been generated using the process we just discussed, and prototypes are playing a big role in all this.

So let's take a look at the code...starting with the HTML...

The most IMPORTANT piece of code on this page is the section tag that starts on line 22. All the data we just looked that? That I said gets dynamically loaded with JavaScript?

This section tag here is the where it will get loaded into. The rest of the code is pretty basic: I'm using Twitter Bootstrap so I can make my page responsive very easily, and I've got this headerMargin class in this style tag here...it's just to add some padding to the header here on line 15.

The header has Bootstrap's jumbotron class and that presses up to the top of the page...this headerMargin class here prevents that. And at the bottom of the page is a reference to jQuery...we're going to use that a little bit.

And below that is a reference to main.js and this is the spot where I'll build the my prototype code, so let's go there and start building. So as I said, the Blueprint class that represents the basic design of a house. And this class will be in the form of constructor function called Blueprint.

And this will take just one parameter.  I want each home to have a unique id called homeID, so I'll set that parameter up here.

And it also means that I have to attach the parameter to the context of this function, so I'll type...this-dot-home-id = homeID.

Again in JavaScript, the "this" keyword refers to the context...in other words, it's referring to current function it's dealing with. But that's easier to do if I add some more properties first and define them against "this".

So I'll start by adding some common home properties...things that all homes have.  And these aren't going to change...so every house has a living room so I'll define that using "this"....this-dot-living room = living room.

And I'll do the same thing for kitchen...

And I'll do the same thing for dining room...

And I'll do the same thing for basement.

And we'll just do a quick review of how the "this" keyword works.

So I'll open index.html in Chrome and then open the browser console and to start with,  I'll just type "this".

And many, many things get returned here.  These are all the objects that the browser has access to...every, single solitary one.

They're all attached to the browser's global window object up here...this dollar sign here is a reference to jQuery, which I added to the project...there's this animation method.

And I also see the Blueprint constructor function that I created.

So this is showing us all the objects but for my code, I only care about the Blueprint one. So if I go back to main.js...

...and create a new instance of Blueprint and name it "test"...var test = new Blueprint and I have to pass a parameter to Blueprint...I'll just give it some random numbers here...

And if I then go to the original constructor function and temporarily add...console.log...and add a parameter of this.

So they way things are set up now, this console.log statement is returning "this" for the Blueprint function only and not all the things we just saw attached to the window object.

And that should display that in browser since I created a new instance of Blueprint here...so let's save everything and re-check the browser.

And as we see, JUST the properties of Blueprint are displayed...this is what the "this" keyword is referring to in this case. We see the ID...the basement info...the dining room info and so on.

So we're off to a good start...we've defined the basics of our Blueprint class. We need to define some methods on the prototype...will do that next.
