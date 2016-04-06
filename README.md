# An Introduction to JavaScript Prototypes

This is the repo for the accompanying source files for an upcoming screencast tutorial of mine on JavaScript prototypes.

The screencast demomstrates how I build out files using a Node/Browerify setup, but you can see how the code works without it.

## Look at the code without Node/Browserify

1. open up `index.html` in the `build` folder.
2. go to the bottom of that file and comment out `<script src="js/main.js"></script>`.
3. Uncomment `<script src="js/main-full.js"></script>`...this file contains the complete code in the screencast.
4. view `index.html` in a browser.

## Run the code with Node/Browserify

1. clone this repo by running `git@github.com:kaidez/javascript-prototype-screencast.git` in the command line.
2. navigate to the repo using the command line.
3. install all the Node-based dependencies by running npm `install` in the command line.
4. after the install is completed, run  `npm start` in the command line.

Running `npm start` will:

* let the the code be seen in a web browser by going to `localhost:3000` and displaying whatever files are in the `build` folder.
* watch for any changes to files in `css-build`, then automatically output a file called `style.css` to the `build` folder.
* watch for any changes to files in `js-build`, then automatically output a file called `style.css` to the `build/js` folder.
-kdz

## Other commands

### `server`
`npm run server`: let the files in `build/` run as a website on `http://localhost:3000`.



<!--["Introduction to JavaScript Prototypes"](http://kaidez.com/javascript-prototypes-tutorial)
  -->
