// Abstract Class: is never instantiated.
function Blueprint( lotID ) {

  // Define a unique ID
  this.lotID = lotID;

}


/*
 * Place properties directly onto the Blueprint prototype instead of in
 * the function because it's more efficient.  "basement", livingRoom",
 * "kitchen" and "diningRoom" do not get over-ridden because all homes
 * have those. The others will (probably get over-ridden).
 */
Blueprint.prototype.basement = Blueprint.prototype.livingRoom = Blueprint.prototype.kitchen = Blueprint.prototype.diningRoom =
      true;

Blueprint.prototype.squareFeet = 1000;
Blueprint.prototype.totalBedrooms = 1;
Blueprint.prototype.totalBathrooms = 1.5;
Blueprint.prototype.totalFloors = 1;


// Set single home options
Blueprint.prototype.setHomeOptions = function( config ) {

  config = config || {};
  this.counterTops = config.counterTops === undefined ? "formica" : config.counterTops;
  this.floorType = config.floorType === undefined ? "tile" : config.floorType;
  this.pool = config.pool === undefined ? "no" : config.pool;

  // Let some of the defaults in the Blueprint "class" be overridden
  this.squareFeet = config.squareFeet || this.squareFeet;
  this.totalBedrooms = config.totalBedrooms || this.totalBedrooms;
  this.totalBathrooms = config.totalBathrooms || this.totalBathrooms;
  this.totalFloors = config.totalFloors || this.totalFloors;

  return this; // Make this method chainable, yo!!

}


// Display home options on index.html
Blueprint.prototype.displayHomeOptions = function() {

  var allHomes = document.getElementById("allHomes"),
      frag = document.createDocumentFragment(),
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
        var homeHeader = document.createElement("h2");
        homeHeader.innerHTML = "House#: " + this[homeOption];
        article.appendChild(homeHeader);
      } else {
        li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML = homeOption + ": " + this[homeOption];
      }
    }

    article.appendChild(ul); // Put <ul> in <article>
    frag.appendChild(article); // Put <article> in document fragment
    allHomes.appendChild(frag); // Put document fragment in "#allHomes"
  }

  return this; // Make this method chainable, yo!!

}


// Bungalow: a class that inherits from the Blueprint "class"
function Bungalow ( lotID ) {
  Blueprint.call( this, lotID );
  this.houseType = "Bungalow";
  this.price = "$125,000+";
}

Bungalow.prototype = new Blueprint();
Bungalow.prototype.constructor = Bungalow;




// Colonial: a class that inherits from the Blueprint "class"
function Colonial ( lotID, windowTypes ) {
  Blueprint.call( this, lotID, windowTypes );
  this.windowTypes = windowTypes || "Double pane";
  this.houseType = "Colonial";
  this.price = "$250,000+";
  this.totalFloors = 2;
}

Colonial.prototype = new Blueprint();
Colonial.prototype.constructor = Colonial;


// Tudor: a class that inherits from the Blueprint "class"
function Tudor ( lotID, backyard ) {
  Blueprint.call( this, lotID, backyard );
  this.backyard = backyard || "no";
  this.houseType = "Tudor";
  this.price = "$150,000+";
  this.totalFloors = 3;
}

Tudor.prototype = new Blueprint();
Tudor.prototype.constructor = Tudor;


// Mansion: a class that inherits from the Colonial "class"
function Mansion ( lotID, windowTypes ) {
  Colonial.call( this, lotID, windowTypes );
  this.windowTypes = windowTypes || "Floor-to-ceiling";
  this.jacuzzi = "yes";
  this.houseType = "Mansion";
  this.price = "$1,000,000+";
  this.totalFloors = 5;
  this.pool = "yes";
}

Mansion.prototype = new Colonial();
Mansion.prototype.constructor = Mansion;



var kai = new Bungalow(987);

kai.setHomeOptions();
kai.displayHomeOptions();

var niko = new Colonial(20);
niko.setHomeOptions({
  pool: "yes"
});
niko.displayHomeOptions();

var dad = new Tudor(987, "yes");

dad.displayHomeOptions();

var mom = new Tudor(2345);

mom.setHomeOptions({
  totalFloors: 2,
  pool: "yes",
  totalBedrooms: 3,

});
mom.displayHomeOptions();


var max = new Mansion(867);
max.setHomeOptions().displayHomeOptions();
