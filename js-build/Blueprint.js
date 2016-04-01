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


// Blueprint properties: properties that all houses will have
Blueprint.prototype.squareFeet = 1000;
Blueprint.prototype.totalBedrooms = 1;
Blueprint.prototype.totalBathrooms = 1.5;
Blueprint.prototype.totalFloors = 1;
Blueprint.prototype.basement = Blueprint.prototype.livingRoom = Blueprint.prototype.kitchen = Blueprint.prototype.diningRoom =
      true;

// Blueprint methods: methods that all houses will have
Blueprint.prototype.setHomeOptions = function( options ) {

  /*
   * "options" is an object that contains options that each house does
   * or does not have.
   */
  options = options || {};
  this.pool = options.pool === undefined ? false : options.pool;
  this.floorType = options.floorType === undefined ? "tile" : options.floorType;
  this.kitchenCounters = options.kitchenCounters === undefined ? "formica" : options.kitchenCounters;

  this.squareFeet = options.squareFeet || this.squareFeet;
  this.totalBedrooms = options.totalBedrooms || this.totalBedrooms;
  this.totalBathrooms = options.totalBathrooms || this.totalBathrooms;
  this.totalFloors = options.totalFloors || this.totalFloors;

  return this; // Make this method chain-able

}



// Display home options on index.html
Blueprint.prototype.displayHomeOptions = function() {

  var allHomes = document.getElementById("allHomes"),
      fragment = document.createDocumentFragment(),
      article = document.createElement("article"),
      ul = document.createElement("ul");

  /*
   * Add a Bootstrap column class to each <article> for RWD purposes.
   * This will build a responsive 3-column layout.Also, give the
   * <article> a minimum height of 300 pixels so the columns lay out
   * neatly
   */
  $(article).attr({
    "class": "col-md-4",
    style: "min-height: 300px;"
  });

  for ( homeOption in this ) {

    if ( typeof this[homeOption] !== "function" && typeof this[homeOption] !== "boolean" ) {

      if ( homeOption === "lotID" ) {

        var homeHeader = document.createElement( "h2" );
        homeHeader.innerHTML = "House#: " + this[homeOption];
        article.appendChild(homeHeader);

      } else {

        /*
         * Use the "setPropertyName" method in "Helpers" to convert to a two-word proper-case string
         */
        helpers.setPropertyName( homeOption );

        li = document.createElement( "li" );
        ul.appendChild(li);
        li.innerHTML = propertyName + ": " + this[homeOption];
      }
    }

    article.appendChild(ul); // Put <ul> in <article>
    fragment.appendChild(article); // Put <article> in doc fragment
    allHomes.appendChild(fragment); // Put doc fragment in "#allHomes"
  }

  return this; // Make this method chain-able

}

// Stop setting methods and properties on "Blueprint."

// export Blueprint as a consumable module
module.exports = Blueprint;