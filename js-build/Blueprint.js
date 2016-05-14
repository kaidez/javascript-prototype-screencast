// Require the "Helpers" Library
var Helpers = require( "./Helpers" );

/*
 * Blueprint: the core class that house types will inherit from.
 * ====================================================================
 * Treat this as an "abstract class", meaning that it should only to
 * be inherited from and will never ever EVER be instantiated.
 *
 * FOR OPTIMIZATION PURPOSES, PLACE PROPERTIES & METHODS DIRECTLY ON
 * THE PROTOTYPE AND NOT IN THE FUNCTION!!!!!!!!!!!!!!!
 */
function Blueprint( lotID ) {
  this.lotID = lotID;
};

/*
 * Set methods and properties on the Blueprint prototype. We could add
 * them directly into the "Blueprint" function/object, but placing
 * them directly on the prototype is more performant.
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
   * overridden when we execute certain methods.
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
  // return this;

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
            var getOptionName = Helpers.propercaseOptionName( homeOption );

            /*
             * Create an <li> tag, load the in the option that was
             * converted above inside it with some other copy.
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

    // Make this method chain-able by returning it
    // return this;

  }

}

// Stop setting methods and properties on "Blueprint."



// export Blueprint as a consumable module
module.exports = Blueprint;