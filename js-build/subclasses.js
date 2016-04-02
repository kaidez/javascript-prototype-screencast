// Import the Blueprint module/class
var GetBlueprint = require( "./Blueprint" );

/*
 * SUBCLASSES
 * ====================================================================
 * Create subclasses that can either inherit directly from the
 * Blueprint. "class" or from another class that already inherits from
 * Blueprint. Some notes:
 *
 * -an inheriting class does a .call()

 */

// Bungalow: a class that inherits from the GetBlueprint "class"
function Bungalow ( lotID ) {

  // Use .call() to get & use the "lotID" value in the Blueprint class
  GetBlueprint.call( this, lotID );

  // Set some core properties
  this.houseType = "Bungalow";
  this.price = "$125,000+";

}

// Have the Bungalow "class" inherit from the GetBlueprint "class"
Bungalow.prototype = new GetBlueprint();

/*
 * At this point in the code, Bungalow's constructor property is
 * pointing to GetBlueprint's constructor property. In this case, it's
 * a best practice to reverse that, so do just that.
 */
Bungalow.prototype.constructor = Bungalow;

var home01 = new Bungalow(987);
home01.setHomeOptions({
  pool: true,
  kitchenCounters: "granite",
  squareFeet: 2500,
  totalBathrooms: 3
}).displayHomeOptions();





// Colonial: a class that inherits from the GetBlueprint "class"
function Colonial ( lotID, windowTypes ) {
  GetBlueprint.call( this, lotID, windowTypes );
  this.windowTypes = windowTypes || "Double pane";
  this.houseType = "Colonial";
  this.price = "$250,000+";
  this.totalFloors = 2;
}

Colonial.prototype = new GetBlueprint();
Colonial.prototype.constructor = Colonial;

var home02 = new Colonial( 423 );

home02.displayHomeOptions();

// Tudor: a class that inherits from the GetBlueprint "class"
function Tudor ( lotID, backyard ) {
  GetBlueprint.call( this, lotID, backyard );
  this.backyard = backyard || "no";
  this.houseType = "Tudor";
  this.price = "$150,000+";
  this.totalFloors = 3;
}

Tudor.prototype = new GetBlueprint();
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


var home04 = new Colonial( 765 );

home04.displayHomeOptions();