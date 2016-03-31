/*
 * Blueprint: the core class that house types will inherit from.
 * ====================================================================
 * Treat this as an "abstract" class, meaning that it will only to be
 * inherited from and will never ever EVER to be instantited.
 */
function Blueprint() {}



/*
 * Blueprint properties: properties that all houses will have
 * ====================================================================
 */
Blueprint.prototype.squareFeet = 1000;
Blueprint.prototype.totalBedrooms = 1;
Blueprint.prototype.totalBathrooms = 1.5;
Blueprint.prototype.totalFloors = 1;
Blueprint.prototype.basement = Blueprint.prototype.livingRoom = Blueprint.prototype.kitchen = Blueprint.prototype.diningRoom =
      true;

// Set single home options
Blueprint.prototype.setHomeOptions = function( opts ) {
  opts = opts || {};
  this.pool = opts.pool === undefined ? false : opts.pool;
  this.floorType = opts.floorType === undefined ? "tile" : opts.floorType;
  this.kitchenCounters = opts.kitchenCounters === undefined ? "formica" : opts.kitchenCounters;

  this.squareFeet = opts.squareFeet || this.squareFeet;
  this.totalBedrooms = opts.totalBedrooms || this.totalBedrooms;
  this.totalBathrooms = opts.totalBathrooms || this.totalBathrooms;
  this.totalFloors = opts.totalFloors || this.totalFloors;

  console.log(this);
}

// Blueprint.prototype.displayHomeOptions = function() {

//   var allHomes = document.getElementById("allHomes"),
//       article = document.createElement("article"),
//       ul = document.createElement("ul"),
//       fragment = document.createDocumentFragment();

//   $(article).attr({
//     "class": "col-md-4",
//     style: "min-height: 300px;"
//   });
// }




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
        li = document.createElement( "li" );
        ul.appendChild(li);
        li.innerHTML = homeOption + ": " + this[homeOption];
      }
    }

    article.appendChild( ul ); // Put <ul> in <article>
    fragment.appendChild( article ); // Put <article> in doc fragment
    allHomes.appendChild( fragment ); // Put doc createDocumentFragmentent in "#allHomes"
  }

  return this; // Make this method chainable, yo!!

}


var test = new Blueprint( 4564 );

test.setHomeOptions({
  pool: true,
  kitchenCounters: "granite",
  squareFeet: 2500,
  totalBathrooms: 3
});

test.displayHomeOptions();

// Bungalow: a class that inherits from the Blueprint "class"
function Bungalow ( lotID ) {
  Blueprint.call( this, lotID );
  this.houseType = "Bungalow";
  this.price = "$125,000+";
}

Bungalow.prototype = new Blueprint();
Bungalow.prototype.constructor = Bungalow;

var kai = new Bungalow(987);
kai.displayHomeOptions();

//
//
//
//
// // Colonial: a class that inherits from the Blueprint "class"
// function Colonial ( lotID, windowTypes ) {
//   Blueprint.call( this, lotID, windowTypes );
//   this.windowTypes = windowTypes || "Double pane";
//   this.houseType = "Colonial";
//   this.price = "$250,000+";
//   this.totalFloors = 2;
// }
//
// Colonial.prototype = new Blueprint();
// Colonial.prototype.constructor = Colonial;
//
//
// // Tudor: a class that inherits from the Blueprint "class"
// function Tudor ( lotID, backyard ) {
//   Blueprint.call( this, lotID, backyard );
//   this.backyard = backyard || "no";
//   this.houseType = "Tudor";
//   this.price = "$150,000+";
//   this.totalFloors = 3;
// }
//
// Tudor.prototype = new Blueprint();
// Tudor.prototype.constructor = Tudor;
//
//
// // Mansion: a class that inherits from the Colonial "class"
// function Mansion ( lotID, windowTypes ) {
//   Colonial.call( this, lotID, windowTypes );
//   this.windowTypes = windowTypes || "Floor-to-ceiling";
//   this.jacuzzi = "yes";
//   this.houseType = "Mansion";
//   this.price = "$1,000,000+";
//   this.totalFloors = 5;
//   this.pool = "yes";
// }
//
// Mansion.prototype = new Colonial();
// Mansion.prototype.constructor = Mansion;
//
//
//
// var kai = new Bungalow(987);
//
// kai.setHomeOptions();
// kai.displayHomeOptions();
//
// var niko = new Colonial(20);
// niko.setHomeOptions({
//   pool: "yes"
// });
// niko.displayHomeOptions();
//
// var dad = new Tudor(987, "yes");
//
// dad.displayHomeOptions();
//
// var mom = new Tudor(2345);
//
// mom.setHomeOptions({
//   totalFloors: 2,
//   pool: "yes",
//   totalBedrooms: 3,
//
// });
// mom.displayHomeOptions();
//
//
// var max = new Mansion(867);
// max.setHomeOptions().displayHomeOptions();
