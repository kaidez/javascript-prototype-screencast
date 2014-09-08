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
  this.totalBedrooms = config.totalBedrooms === undefined ? 1 : config.totalBedrooms;

  return this;

}

// Display home options on index.html
Blueprint.prototype.showHomeOptions = function() {
  // Reference to the "#allHomes" element that's in "index.html"
  var allHomes = document.getElementById("allHomes"),
      frag = document.createDocumentFragment(),
      article = document.createElement("article"),
      ul = document.createElement("ul");
      
  article.appendChild(ul);
  $(article).addClass("col-md-4");
  for (homeOption in this) {

    if ( typeof this[homeOption] !== "function" && typeof this[homeOption] !== "boolean" ) {
      if ( homeOption === "lotID" ) {
        var kai = this[homeOption]
        $(article).attr("id", kai);
        // document.getElementById(homeOption).innerHTML = "Lot ID: " + this[homeOption];
      } else {
        var listID = homeOption;
        listID.toString();
        console.log(listID + " is");
        li = document.createElement("li");
        $(li).attr("id", homeOption);
        ul.appendChild( li );
        $("#" + homeOption ).html( homeOption + ": " + this[homeOption] );
      }
    }
    article.appendChild(ul);
    frag.appendChild(article)
    allHomes.appendChild(frag); 
  }

  return this;

}

function Colonial ( lotID, windowTypes ) {
  this.base = Blueprint;
  this.base( lotID, windowTypes );
  this.windowTypes = windowTypes || "Double pane";
  this.houseType = "Colonial";
  // console.log(this);
}

Colonial.prototype = new Blueprint();

var kai = new Colonial( 50 );
var niko = new Blueprint( 150 );


kai.setHomeOptions({
  price: "250000",
  totalBedrooms: 2
}).showHomeOptions();


niko.setHomeOptions({
  price: "200000"
}).showHomeOptions();