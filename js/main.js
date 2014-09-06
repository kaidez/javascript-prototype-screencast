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
  this.houseType = "Bungalow";
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
  this.pool = config.pool === undefined ? false : config.pool;
  // this.houseType = config.houseType || this.houseType;

}

// Display home options on index.html
Blueprint.prototype.showHomeOptions = function() {

  // Reference to the "#allHomes" element that's in "index.html"
  var allHomes = document.getElementById("allHomes");

  for (homeOption in this) {

    if ( typeof this[homeOption] !== "function" ) {
      
      if ( homeOption === "lotID" ) {
        document.getElementById("lot").innerHTML = "Lot ID: " + this[homeOption];
      } else {
        var el = document.createElement("article");
        $(el).attr( "id", homeOption );
        allHomes.appendChild( el );
      }
      console.log(homeOption + ": " + this[homeOption]);
    }
  }
}

function Colonial ( lotID, windowTypes ) {
  this.base = Blueprint;
  this.base( lotID, windowTypes );
  this.windowTypes = windowTypes || "Double pane";
  this.houseType = "Colonial"; 
}

Colonial.prototype = new Blueprint();



var niko = new Blueprint(4);

niko.setHomeOptions();

var kai = new Colonial( 50 );

kai.setHomeOptions({
  floorType: "Hardwood",
  squareFeet: 2100
});
kai.showHomeOptions();




// console.log(kai);
