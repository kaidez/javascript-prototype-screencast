# An Introduction to JavaScript Prototypes

This is the repo for the accompanying source files for an upcoming screencast tutorial of mine on JavaScript prototypes.

The screencast demonstrates how I build out files using a Node/Browserify setup, but you can see how the code works without it.

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

### `build-js`
`npm run build-js`: use [browserify](http://browserify.org/) & [uglify](https://www.npmjs.com/package/uglifyjs) to take all the `js` files in `js-build` & concatenate/minify them out to a file called `main.js` that gets placed in `build/js`.

### `build-css`
`npm run build-css`: use the Unix `cat` command to take all the `css` files in `css-build` & concatenate them out to a file called `style.css` that gets placed in `build/`.

### `watch-js`
`npm run watch-js`: when files in `js-build/` change, run `npm run build-js`.

### `watch-css`
`npm run watch-css`: when files in `css-build/` change, run `npm run build-js`.

### `start`
`npm start`: simultaneously run `server`, `watch-js` and `watch-css`.

### `copy-bootstrap`
`npm run copy-bootstrap`: copy `bootstrap.css` from its location in `node_modules` to `css-build/`(run this when Bootstrap is updated as a dependency).

### `copy-jquery`
`npm run copy-jquery`: copy `jquery.min.js` from its location in `node_modules` to `build/js/`(run this when jQuery is updated as a dependency).


<!--["Introduction to JavaScript Prototypes"](http://kaidez.com/javascript-prototypes-tutorial)

Don't for the slides link
  -->
