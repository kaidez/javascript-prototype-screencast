/*
 * main-full.js
 * ====================================================================
 * The core JS code in one file instead of broken out into separate
 * modules that get compiled via Node/Browserify. To see it work in a
 * browser, go to "index.html" and make sure that "main.js" is
 * commented out and "main-full.js" is uncommented.
 */


/*
 * propercaseOptionName(): a method that take individual house
 * property names and converts them to both two words and converts the
 * first one to uppercase. It takes one parameter (currentOptionName),
 * which will be the "homeOption" value in the "for...in" loop that
 * builds a single house info component and places it on the page.
 */

function propercaseOptionName( currentOptionName ) {

  var

    // Store a reference to a regex search for a capital letter
    getCapitalLetter = /[A-Z]/,

    /*
     * Find the capital letter in currentOptionName...this currently
     * only works with one capital letter.
     */
    capitalLetter = currentOptionName.match( getCapitalLetter ),

    // Put a space before capital letter in currentOptionName
    capitalizeOptionName = currentOptionName.replace( capitalLetter,  " " + capitalLetter ),

    // Capitalize the above capitalizeOptionName
    optionName = capitalizeOptionName.charAt(0).toUpperCase() + capitalizeOptionName.slice(1);

  // return the converted name so it's available inside the codebase
  return optionName;

} // end propercaseOptionName()



/*
 * Blueprint: the core class that house types will inherit from.
 * ====================================================================
 * Treat this as an "abstract" class, meaning that it will only to be
 * inherited from and will never ever EVER to be instantited.
 */
function Blueprint( lotID ) {
  this.lotID = lotID;
};

/*
 * Start setting methods and properties on "Blueprint." We could add
 * them directly to the "Blueprint" function/object, but things will
 * be optimized if we don't. properties: properties that all houses
 * will have
 * ====================================================================
 */



// Blueprint properties: default properties that all houses will have
Blueprint.prototype.price = "125,000+";
Blueprint.prototype.squareFeet = 1000;
Blueprint.prototype.totalBedrooms = 1;
Blueprint.prototype.totalBathrooms = 1.5;
Blueprint.prototype.totalFloors = 1;
Blueprint.prototype.basement = Blueprint.prototype.livingRoom = Blueprint.prototype.kitchen = Blueprint.prototype.diningRoom =
      true;



/*
 * Blueprint.prototype.setHomeOptions(): define options that all
 * houses will have. Options will not appear on the page unless the
 * "displayHomeOptions()" below actually runs.
 */
Blueprint.prototype.setHomeOptions = function( options ) {

  /*
   * "options" is an object that contains options that each house does
   * or does not have. Some options are, by default, set to one of the
   * properties defined above. Some options have just been added to
   * our code and also have default properties. But all these options
   * can be overriden when we execute certain methods.
   */

  // Store a reference to the options object
  options = options || {};

  /*
   * Handle the default options. If these options aren't isn't set
   * when creating Blueprint-related instances, set their default
   * values defined above.
   */
  this.price = options.price || this.price;
  this.squareFeet = options.squareFeet || this.squareFeet;
  this.totalBedrooms = options.totalBedrooms || this.totalBedrooms;
  this.totalBathrooms = options.totalBathrooms || this.totalBathrooms;
  this.totalFloors = options.totalFloors || this.totalFloors;

  /*
   * Handle the extra options that houses can have. If these options
   * aren't isn't set, return their value as "undefined."
   */
  this.pool = options.pool === undefined ? false : options.pool;
  this.floorType = options.floorType === undefined ? "tile" : options.floorType;
  this.kitchenCounters = options.kitchenCounters === undefined ? "formica" : options.kitchenCounters;

  // Make this method chain-able by returning it
  return this;

}



/*
 * Blueprint.prototype.displayHomeOptions(): display the lotID and all
 * the options
 */
Blueprint.prototype.displayHomeOptions = function() {

  /*
   * If a lotID is not passed as a parameter to an instance, pass an
   * console error saying so. This will stop the code from running.
   */
  if( !this.lotID || typeof this.lotID === "undefined" ) {

    throw new Error( "lotID is not defined" );

  // If a lotID is passed, continue running the code...
  } else {

    // Create some variables with a single var pattern...
    var

        // Store a reference to the "#allHomes" already on the page
        allHomes = document.getElementById("allHomes"),

        // Create a document fragment
        fragment = document.createDocumentFragment(),

        // Dynamically create an <article> and <ul> tag
        article = document.createElement( "article" ),
        headerDiv = document.createElement( "div" ),
        ul = document.createElement( "ul" );

    /*
     * Add a Bootstrap column "col-md-" class to each <article> for
     * to build a responsive 3-column layout. And because of how the
     * CSS is written, the min-height value that Bootstrap gives the
     * "col-md-4" class will be overridden.
     */
    article.setAttribute( "class", "col-md-4" );

    /*
     * At this point in the code, we can access any home properties as
     * an object with the "this" keyword. Use a "for...in" loop to find
     * the object properties and progammatically place them on the
     * page.
     */
    for ( homeOption in this ) {

      /*
       * The object contains strings, numbers, functions and boolean
       * types.  We only need to find the string and number types so
       * ignore the function and boolean types as the loop runs.
       */
      if ( typeof this[homeOption] !== "function" && typeof this[homeOption] !== "boolean" ) {

        /*
         * All classes that inherit from "Blueprint" will have a
         * "lotID" value. If that's where we are in the loop, create
         * an <h2> tag, add style classes to it, load the lotID info
         * inside it with some other copy, then place it inside of the
         * "headerDiv" element created below.
         */
        if ( homeOption === "lotID" ) {

          var homeHeader = document.createElement( "h2" );
          homeHeader.setAttribute( "class", "center-text" );
          homeHeader.innerHTML = "House#: " + this[homeOption];
          $( homeHeader ).prependTo( headerDiv );

        } else {
        /*
         * All classes that inherit from "Blueprint" will have a
         * "price" value...either by default or set by the class
         * instance. If that's where we are in the loop, create
         * a <div> tag, add style classes to it, load the price info
         * inside it with some other copy, then place it inside of the
         * "headerDiv" element created below.
         */
          if( homeOption === "price" ) {

            var priceDiv = document.createElement( "div" );
            priceDiv.setAttribute( "class", "center-text price" );
            priceDiv.innerHTML = "Price: $" + this[homeOption];
            headerDiv.appendChild( priceDiv );

            // For all other options, run the following code...
            } else {

              /*
               * "var getOptionName": Use the propercaseOptionName()
               * option name to a two-word proper-case string. The
               * returned value of this variable value will soon be
               * loaded into an <li> tag.
               */
              var getOptionName = propercaseOptionName( homeOption );

              /*
               * Create an <li> tag, load the in the option that was
               * convereted above inside it with some other copy.
               */
              li = document.createElement( "li" );
              li.innerHTML = getOptionName + ": " + this[homeOption];
              ul.appendChild(li);

            } // end if/else statement
          }

        // Put headerDiv element in <article>
        article.appendChild( headerDiv );

        // Put <ul> in <article>
        article.appendChild( ul );

        // Put <article> in doc fragment
        fragment.appendChild( article );

        // Put doc fragment in "#allHomes" on page
        allHomes.appendChild( fragment );

      }
    }

  // Make this method chain-able by returning it
  return this;

  }

}

// Stop setting methods and properties on "Blueprint."


/*
 * SUBCLASSES
 * ====================================================================
 * Create subclasses that can either inherit directly from the
 * Blueprint. "class" or from another class that already inherits from
 * Blueprint. Some notes:
 *
 *   -an inheriting class does a .call() against Blueprint so it can
 *    properly create a lotID
 *
 *   -an inheriting class can have its own properties
 *
 *   -whenever an inheriting class inherits directly from one class, it
 *    also takes the inheriting class' construtor property. It needs
 *    to be reset.
 */



// Bungalow: a class that inherits from the Blueprint "class"
function Bungalow ( lotID ) {

  // Use .call() to get & use the "lotID" value in the Blueprint class
  Blueprint.call( this, lotID );

  // Set some core properties
  this.houseType = "Bungalow";

}

// Have the Bungalow "class" inherit from the Blueprint "class"
Bungalow.prototype = new Blueprint();

/*
 * Reset Bungalow's constructor property so it stops pointing to
 * Blueprint's constructor property
 */
Bungalow.prototype.constructor = Bungalow;



// Create a new instance of Bungalow called "home01" & set its options
var home01 = new Bungalow(987);
home01.setHomeOptions();

// Run the "displayHomeOptions()" method against the home01 instance
home01.displayHomeOptions();






// Colonial: a class that inherits from the Blueprint "class"
function Colonial ( lotID, windowTypes ) {
  Blueprint.call( this, lotID, windowTypes );
  this.windowTypes = windowTypes || "Double pane";
  this.houseType = "Colonial";
  this.totalFloors = 2;
}

// Have the Colonial "class" inherit from the Blueprint "class"
Colonial.prototype = new Blueprint();

/*
 * Reset Colonial's constructor property so it stops pointing to
 * Blueprint's constructor property
 */
Colonial.prototype.constructor = Colonial;

var home02 = new Colonial( 423 );

home02.setHomeOptions({
  pool: true,
  price: "250,000",
  kitchenCounters: "granite",
  squareFeet: 2500,
  totalBathrooms: 3
}).displayHomeOptions();




// Mansion: a class that inherits from the Colonial "class"
function Mansion ( lotID, windowTypes ) {
  Colonial.call( this, lotID, windowTypes );
  this.windowTypes = windowTypes || "Floor-to-ceiling";
  this.jacuzzi = "yes";
  this.houseType = "Mansion";
  this.totalFloors = 5;
  this.pool = "yes";
}

// Have the Mansion "class" inherit from the Colonial "class"
Mansion.prototype = new Colonial();

/*
 * Reset Mansion's constructor property so it stops pointing to
 * Colonial's constructor property
 */
Mansion.prototype.constructor = Mansion;


var home03 = new Mansion(657);

home03.displayHomeOptions();

var home04 = new Mansion(54363);

home04.displayHomeOptions();