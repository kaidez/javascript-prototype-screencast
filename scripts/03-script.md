It's time to create the method for displaying all this content on the web page, and that method's going to be called displayHomeOptions on line 35 here. And I've already got some code here...if you've been following along by writing the code up to this point, you can pause the movie and take a second to copy it.

I've created 4 variables using the single-var-pattern here...on line 37 is my first variable called allHomes and it's using document.getElementById to refer to my web page's section tag that we looked at in the first movie...this one here. Next, I'm using document.createElement to dynamically create 2 elements: an article tag on line 38, and a ul tag on line 39.

The elements I create with createElement don't exist on a web page yet...they just exist in browser memory. I have to write code to put them on the page and I COULD put them on the page one-by-one, but it's more efficient to batch them altogether in something called a document fragment, then load the fragment onto the page.

And to do that, I have to create a document fragment first, so 
