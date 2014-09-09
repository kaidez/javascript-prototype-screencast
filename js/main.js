// Abstract Class: is never instantiated.
function Blueprint( lotID ) {

  // Define a unique ID
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

// Add single home options
Blueprint.prototype.setHomeOptions = function( config ) {
  config = config || {};
  this.price = config.price || "100,000+";
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
      
  // Add a Bootstrap column class to each <article> for RWD purposes   
  article.setAttribute("class", "col-md-4");

  for ( homeOption in this ) {

    if ( typeof this[homeOption] !== "function" && typeof this[homeOption] !== "boolean" ) {
      if ( homeOption === "lotID" ) {
        var homeHeader = document.createElement("h2"),
            lotNum = "home-" + this[homeOption],
            homeHeaderID = lotNum + "-ID";

        homeHeader.innerHTML = "House#: " + this[homeOption];
        article.appendChild(homeHeader);
        article.setAttribute("id", homeHeaderID);
      } else {
        var listID = String(homeOption) + "-list-" + lotNum;
        li = document.createElement("li");
        $(li).attr("id", listID);
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

function Colonial ( lotID, windowTypes ) {
  this.base = Blueprint;
  this.base( lotID, windowTypes );
  this.windowTypes = windowTypes || "Double pane";
  this.houseType = "Colonial";
}

Colonial.prototype = new Blueprint();

Colonial.prototype.constructor = Colonial;


function Tudor ( lotID, backyard ) {
  this.base = Blueprint;
  this.base( lotID, backyard);
  this.backyard = "no" || backyard;
  this.houseType = "Tudor";
}

Tudor.prototype = new Blueprint();

Tudor.prototype.constructor = Tudor; 






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
  pool: "yes",
  windowTypes: "ceiling"
});
dad.displayHomeOptions();

var mom = new Tudor(2345);

mom.backyard = "yes";
mom.setHomeOptions({
  totalFloors: 2,
  pool: "yes",
  totalBedrooms: 3,

});
mom.displayHomeOptions();

console.log(mom);