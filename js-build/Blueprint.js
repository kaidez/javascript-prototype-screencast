// Require the "Helpers" Library
var helpers = require( "./Helpers" );

/*
 * Blueprint: the core class that house types will inherit from.
 * ====================================================================
 * Treat this as an "abstract" class, meaning that it will only to be
 * inherited from and will never ever EVER to be instantited.
 */
function Blueprint( lotID ) {
  this.lotID = lotID;
}


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
   * Add a Bootstrap column "col-" class to each <article> for
   * responsive web design purposes. This will build a responsive
   * 3-column layout. Also, give the <article> a minimum height of 300
   * pixels so the columns lay out neatly and evenly.
   */
  $( article ).attr({
    "class": "col-md-4",
    style: "min-height: 300px;"
  });


  /*
   * At this point in the code, we can access any home properties as
   * an object with the "this" keyword. Use a "for...in" loop to find
   * the object properties and progammatically place them on the page.
   */
  for ( homeOption in this ) {

    /*
     * The object contains strings, numbers, functions and boolean
     * types.  We only need to find the string and number types so
     * ignore the function and boolean types as the loop runs.
     */
    if ( typeof this[homeOption] !== "function" && typeof this[homeOption] !== "boolean" ) {

      /*
       * All classes that inherit from "Blueprint" will have a "lotID"
       * value. Create an <h2> tag, load the lotID info inside it with
       * some other copy, then place it inside <article>.
       *
       * TODO: load this with jQuery.prepend() to insure that it's
       * placed at the top of the article, avoiding any race
       * conditions.
       */
      if ( homeOption === "lotID" ) {

        var homeHeader = document.createElement( "h2" );
        homeHeader.innerHTML = "House#: " + this[homeOption];
        $( homeHeader ).prependTo( headerDiv );

      } else {

      if( homeOption === "price" ) {

        var priceDiv = document.createElement( "div" );
        priceDiv.innerHTML = "Price: $" + this[homeOption];
        headerDiv.appendChild( priceDiv );

        $( priceDiv ).css({
            "margin-bottom": "10px",
            "font-weight": "bold",
            "font-size": "18px"
          });

      } else {

        /*
         * Use the "capitalizeOptionName" method in "Helpers" to
         * convert the option name to a two-word proper-case string.
         * Returns a variable called "optionName," which is name of the
         * property.
         */
        helpers.propercaseOptionName( homeOption );

        /*
         * Create an <li> tag, load the option name info inside it with
         * some other copy.
         */
        li = document.createElement( "li" );
        li.innerHTML = optionName + ": " + this[homeOption];
        ul.appendChild(li);

      }
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

// Stop setting methods and properties on "Blueprint."



// export Blueprint as a consumable module
module.exports = Blueprint;