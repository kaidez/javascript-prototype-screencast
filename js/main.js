// Abstract Class: is never instantiated.
function Blueprint( lotID ) {

  // Define a unique ID for the home...the only required parameter
  this.lotID = lotID;

  /*
   * Default parameters that can be over-ridden, but "basement",
   * livingRoom", "kitchen" and "diningRoom" do not get over-ridden
   * because all homes have those.
   */
  this.basement = this.livingRoom = this.kitchen = this.diningRoom =
      true;
  this.totalBedrooms = 1;
  this.totalBathrooms = 1.5;
  this.totalFloors = 1;
}

// Adds home options
Blueprint.prototype.setHomeOptions = function( config ) {
  config = config || {};
  this.counterTops = config.counterTops === undefined ? "formica" : config.counterTops;
  this.squareFeet = config.squareFeet === undefined ? 1800 : config.squareFeet;
  this.floorType = config.floorType === undefined ? "tile" : config.floorType;
  this.pool = config.pool === undefined ? "no" : config.pool;
  this.price = config.price || "100,000";
  this.pool = config.pool || "no";
}

// Display home options on index.html
Blueprint.prototype.showHomeOptions = function() {

  // Reference to the "#allHomes" element that's in "index.html"
  var allHomes = document.getElementById("allHomes"),
       article = document.createElement("article"),
       ul = document.createElement("ul");
      
  article.appendChild(ul);
  $(article).addClass("col-md-4");

  for (homeOption in this) {
    if ( typeof this[homeOption] !== "function" && typeof this[homeOption] !== "boolean" ) {
      if ( homeOption === "lotID" ) {
        // document.getElementById("lotID").innerHTML = "Lot ID: " + this[homeOption];
      } else {
         li = document.createElement("li");
        $(li).addClass( homeOption );
        ul.appendChild( li );
        $("." + homeOption ).html( homeOption + ": " + this[homeOption] );
      }
    }
    article.appendChild(ul);
    allHomes.appendChild(article); 
  }
}

function Colonial ( lotID, windowTypes ) {
  this.base = Blueprint;
  this.base( lotID, windowTypes );
  this.windowTypes = windowTypes || "Double pane";
  this.houseType = "Colonial";
}

Colonial.prototype = new Blueprint();

var kai = new Colonial( 50 );
var niko = new Blueprint( 150 );

kai.setHomeOptions({
  floorType: "Marble"
});

kai.showHomeOptions();