It's time to create the method for displaying all this content on the web page, and that method's going to be called displayHomeOptions on line 35 here. And I've already got some code here...if you've been following along by writing the code up to this point, you can pause the movie and take a second to copy it.

I've created 4 variables using the single-var-pattern here...on line 37 is my first variable called allHomes and it's using document.getElementById to refer to my web page's section tag that we looked at in the first movie...this one here. Next, I'm using document.createElement to dynamically create 2 elements: an article tag on line 38, and a ul tag on line 39.

The elements I create with createElement don't exist on a web page yet...they just exist in browser memory. I have to write code to put them on the page and I COULD put them on the page one-by-one, but it's more efficient to batch them altogether in something called a document fragment, then load the fragment onto the page.

And to do that, I have to create a document fragment first, so I'm doing that on line 40 by creating a variable called "fragment" and setting it equal to the document.createDocumentFragment method.

And below that starting on line 42, that dollar-sign means I'm using jQuery. And I'm using it to apply 2 atributes to that article tag I just created.

I'm using jQuery.attr here to first apply a class called "col-md-4, which is a Twitter Bootstrap class. With this class, I'll be able to create a 3-column responsive layout based on some code, and it's important to note that elements with this class need to be inside an alement with a class name of container.

Here's that on my web page...it contains that section tag I discussed in the first video and that's where these dynamically-created article tags are gonna go.  So this will create that 3 column responsive layout with no problems.
