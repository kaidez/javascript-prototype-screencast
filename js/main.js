// Abstract Class: is never instantiated.
function Blueprint( lotID ) {

  // Define a unique ID. 
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
  this.price = config.price || "100,000";
  this.counterTops = config.counterTops === undefined ? "formica" : config.counterTops;
  this.squareFeet = config.squareFeet === undefined ? 1800 : config.squareFeet;
  this.floorType = config.floorType === undefined ? "tile" : config.floorType;
  this.pool = config.pool === undefined ? "no" : config.pool;

  // Let some of the defaults in the Blueprint "class" be overridden
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
      
  $(article).addClass("col-md-4");

  for (homeOption in this) {

    if ( typeof this[homeOption] !== "function" && typeof this[homeOption] !== "boolean" ) {
      if ( homeOption === "lotID" ) {
        var homeHeader = document.createElement("h2"),
            lotNum = "home-" + this[homeOption],
            homeHeaderID = lotNum + "-ID";
        $(article).attr("id", homeHeaderID);
        homeHeader.innerText = "House#: " + this[homeOption];
        article.appendChild(homeHeader);
      } else {
        var listID = String(homeOption) + "-list-" + lotNum;
        li = document.createElement("li");
        $(li).attr("id", listID);
        ul.appendChild(li);
        $(li).html( homeOption + ": " + this[homeOption] );
      }
    }
    article.appendChild(ul);
    frag.appendChild(article)
    allHomes.appendChild(frag); 
  }

  return this; // Make this method chainable, yo!!

}

function Colonial ( lotID, windowTypes ) {
  this.base = Blueprint;
  this.base( lotID, windowTypes );
  this.windowTypes = windowTypes || "Double pane";
  this.houseType = "Colonial";
}

Colonial.prototype = new Blueprint();
console.log(Colonial.constructor);


var kai = new Blueprint(542);
kai.setHomeOptions({
  totalBedrooms: 5
});
kai.displayHomeOptions();

var niko = new Colonial(20);
niko.setHomeOptions({
  totalFloors: 2,
  pool: "yes"
});
niko.displayHomeOptions();

var dad = new Colonial(987);
dad.setHomeOptions({
  totalFloors: 2,
  pool: "yes"
});
dad.displayHomeOptions();

var mom = new Colonial(2345);
mom.setHomeOptions({
  totalFloors: 2,
  pool: "yes"
});
mom.displayHomeOptions();


console.log(niko);