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
 * Treat this as an "abstract class", meaning that it should only to
 * be inherited from and will never ever EVER be instantited.
 *
 * FOR OPTIMIZATION PURPOSES, PLACE PROPERTIES & METHODS DIRECTLY ON
 * THE PROTOTYPE AND NOT IN THE FUNCTION!!!!!!!!!!!!!!!
 */
function Blueprint( lotID ) {
  this.lotID = lotID;
};

/*
 * Setmethods and properties on the "Blueprint" prototype. We could add
 * them directly into the "Blueprint" function/object, but placing
 * them directly on the prototye is more performant.
 * ====================================================================
 */



// Blueprint properties: default options that all houses will have
Blueprint.prototype.price = "125,000+";
Blueprint.prototype.squareFeet = 1000;
Blueprint.prototype.totalBedrooms = 1;
Blueprint.prototype.totalBathrooms = 1.5;
Blueprint.prototype.totalFloors = 1;
Blueprint.prototype.basement = Blueprint.prototype.livingRoom = Blueprint.prototype.kitchen = Blueprint.prototype.diningRoom =
      "yes";



/*
 * Blueprint.prototype.setHomeOptions(): define options that all
 * houses will have. Options will not appear on the page unless the
 * "displayHomeOptions()" below has run.
 */
Blueprint.prototype.setHomeOptions = function( options ) {

  /*
   * "options" is an object that contains all the options that a given
   * house has. Some options have default values defined by the
   * properties above. Some options have just been added to our code
   * and also have default properties. But all these options can be
   * overriden when we execute certain methods.
   */

  // Store a reference to the options object
  options = options || {};

  /*
   * If these default options aren't set when creating Blueprint
   * instances, set and display their default values based on what was
   * defined above.
   */
  this.price = options.price || this.price;
  this.squareFeet = options.squareFeet || this.squareFeet;
  this.totalBedrooms = options.totalBedrooms || this.totalBedrooms;
  this.totalBathrooms = options.totalBathrooms || this.totalBathrooms;
  this.totalFloors = options.totalFloors || this.totalFloors;

  /*
   * Options we haven't set. If these options are undefined, display
   * the default message we added. Otherwise, display whatever option
   * was configured.
   */
  this.pool = options.pool === undefined ? "no" : options.pool;
  this.floorType = options.floorType === undefined ? "Plastic Tile" : options.floorType;
  this.kitchenCounters = options.kitchenCounters === undefined ? "Formica" : options.kitchenCounters;

  // Make this method chain-able by returning it
  return this;

}



/*
 * Blueprint.prototype.displayHomeOptions(): display the lotID and all
 * the options for a given house
 */
Blueprint.prototype.displayHomeOptions = function() {

  /*
   * If a lotID is not passed as a parameter to an instance, pass a
   * console error saying so. This will stop the code from running.
   */
  if( !this.lotID || typeof this.lotID === "undefined" ) {

    throw new Error( "lotID is not defined" );

  /*
   * (If a lotID is passed, continue running the code (although the
   * code will ~probably~ run without this "else" statement)
   */
  } else {

    // Create some variables with a single var pattern...
    var

        // Store a reference to the "#allHomes" already on the page
        allHomes = document.getElementById( "allHomes" ),

        // Create a document fragment
        fragment = document.createDocumentFragment(),

        // Dynamically create an <article>, <div>  and <ul> tag
        article = document.createElement( "article" ),
        innerHeaderDiv = document.createElement( "div" ),
        ul = document.createElement( "ul" );

    /*
     * Add a Bootstrap column "col-md-4" class to each <article> for
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
       * types.  We only need to find the string, number and boolean
       * types so ignore the function types as the loop runs.
       */
      if ( typeof this[homeOption] !== "function" ) {

        /*
         * All classes that inherit from "Blueprint" will have a
         * "lotID" value. If that's where we are in the loop, create
         * an <h2> tag, add style classes to it, load the lotID info
         * inside it with some other copy, then place it inside of the
         * "headerDiv" element created below. It's placed at the top
         * with jQuery.prepend().
         */
        if ( homeOption === "lotID" ) {

          var lotIDContent = "House#: " + this[homeOption],
              lotIDHeader = $( "<h2 class='center-text'>" + lotIDContent + "</h2>" );

          $( lotIDHeader ).prependTo( innerHeaderDiv );

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

            var priceContent = "Price: $" + this[homeOption],
            priceContentDiv = $( "<div class='center-text price'>" + priceContent + "</div>" );

            $( priceContentDiv ).appendTo( innerHeaderDiv );

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
            li = $( "<li>" + getOptionName + ": " + this[homeOption] + "</li>" );
            $( li ).appendTo( ul );

          } // end if/else statement
        }

        // Put headerDiv element in <article>
        article.appendChild( innerHeaderDiv );

        // Put <ul> in <article>
        article.appendChild( ul );

        // Put <article> in doc fragment
        fragment.appendChild( article );

        // Put doc fragment in "#allHomes" on page
        allHomes.appendChild( fragment );

      }
    }

    console.log( this );

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




/*
 * ====================================================================
 * BUNGALOW SUBCLASS: inherits from the Blueprint "class"
 * ====================================================================
 */

function Bungalow ( lotID ) {

  // Use .call() to get & use the "lotID" value in the Blueprint class
  Blueprint.call( this, lotID );

  // Set some core properties
  this.houseType = "Bungalow";

}

/*
 * Have the Bungalow "class" inherit from the Blueprint "class" with
 * the ES5 Object.create() method
 */
Bungalow.prototype = Object.create( Blueprint.prototype );
// Bungalow.prototype = new Blueprint();

/*
 * Reset Bungalow's constructor property so it stops pointing to
 * Blueprint's constructor property
 */
Bungalow.prototype.constructor = Bungalow;

// Create a new instance of Bungalow called "home01" & set its options
var home01 = new Bungalow( 987 );

// Run the "setHomeOptions()" method against the home01 instance
home01.setHomeOptions();

// Run the "displayHomeOptions()" method against the home01 instance
home01.displayHomeOptions();





/*
 * ====================================================================
 * COLONIAL SUBCLASS: inherits from the Blueprint "class"
 * ====================================================================
 */
function Colonial ( lotID, windowType ) {

  // Use .call() to get & use the "lotID" value in the Blueprint class
  Blueprint.call( this, lotID );

  /*
   * Add two new properties for Colonial houses:
   *    - "windowType"
   *    - "houseType"
   */
  this.windowType = "Floor To Ceiling";
  this.houseType = "Colonial";

  // Overide "totalFloors" property set in the "Blueprint" class.
  this.totalFloors = 2;

}

/*
 * Have the Colonial "class" inherit from the Blueprint "class" with
 * the ES5 Object.create() method
 */
Colonial.prototype = Object.create( Blueprint.prototype );

/*
 * Reset Colonial's constructor property so it stops pointing to
 * Blueprint's constructor property
 */
Colonial.prototype.constructor = Colonial;

var home02 = new Colonial( 423 );

// It's chainable
home02.setHomeOptions().displayHomeOptions();




/*
 * ====================================================================
 * MANSION SUBCLASS: inherits from the Colonial "class"
 * ====================================================================
 */
function Mansion ( lotID, windowType ) {

  /*
   * Use .call() to get & use the "windowType" value in the Colonial
   * class. This code will also force "Mansion" to "walk up the
   * prototype chain" to find "Blueprint" so it can use the
   * totalFloors" property.
   */
  Colonial.call( this, lotID, windowType );

  // Add a new "jacuzzi" property to Mansions
  this.jacuzzi = "yes";

  // Set a "houseType" property to Mansions
  this.houseType = "Mansion";

  // Override the window type that was set by the Clonial class
  this.windowType = "French Doors";

  // Overide "totalFloors" property set in the "Blueprint" class
  this.totalFloors = 5;


}

// Have the Mansion "class" inherit from the Colonial "class"
Mansion.prototype = Object.create( Colonial.prototype );

/*
 * Reset Mansion's constructor property so it stops pointing to
 * Colonial's constructor property
 */
Mansion.prototype.constructor = Mansion;


var home03 = new Mansion( 657 );

home03.setHomeOptions({
  floorType: "formica",
  price: "1.1 million",
  pool: "yes",
  squareFeet:3000,
  kitchenCounters: "Granite"
}).displayHomeOptions();



var home04 = new Colonial( 136 );

home04.setHomeOptions({
  floorType: "Stainless Steel",
  price: "325.000",
  squareFeet:1100
}).displayHomeOptions();



var home05 = new Mansion( 90347 );

home05.setHomeOptions({
  totalBedrooms: 5,
  totalBathrooms: 8,
  pool: "optional",
  price: "525,000",
  squareFeet: 2200
}).displayHomeOptions();


var home06 = new Bungalow( 13 );

home06.setHomeOptions({
  totalBathrooms: 1.5,
  totalBedrooms: 2,
  kitchenCounters: "Wooden",
  pool: "yes",
  price: "226,000",
  squareFeet: 900
}).displayHomeOptions();