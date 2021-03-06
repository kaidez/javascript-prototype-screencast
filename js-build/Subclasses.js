// Import the Blueprint module/class
var Blueprint = require( "./Blueprint" );

/*
 * SUBCLASSES
 * ====================================================================
 * Create subclasses that can either inherit directly from the
 * Blueprint. "class" or from another class that already inherits from
 * Blueprint. Some notes:
 *
 *   -an inheriting class does a .call() against Blueprint so it can
 *    properly create a lotID
 *
 *   -an inheriting class can have its own properties
 *
 *   -whenever an inheriting class inherits directly from one class, it
 *    also takes the inheriting class' constructor property. It needs
 *    to be reset.
 */




/*
 * ====================================================================
 * BUNGALOW SUBCLASS: inherits from the Blueprint "class"
 * ====================================================================
 */

function Bungalow ( lotID ) {

  // Use .call() to get & use the "lotID" value in the Blueprint class
  Blueprint.call( this, lotID );

  // Set some core properties
  this.houseType = "Bungalow";

}

/*
 * Have the Bungalow "class" inherit from the Blueprint "class" with
 * the ES5 Object.create() method
 */
Bungalow.prototype = Object.create( Blueprint.prototype );
// Bungalow.prototype = new Blueprint();

/*
 * Reset Bungalow's constructor property so it stops pointing to
 * Blueprint's constructor property
 */
Bungalow.prototype.constructor = Bungalow;

// Create a new instance of Bungalow called "home01" & set its options
var home01 = new Bungalow( 987 );

// Run the "setHomeOptions()" method against the home01 instance
home01.setHomeOptions();

// Run the "displayHomeOptions()" method against the home01 instance
home01.displayHomeOptions();





/*
 * ====================================================================
 * COLONIAL SUBCLASS: inherits from the Blueprint "class"
 * ====================================================================
 */
function Colonial ( lotID, windowType ) {

  // Use .call() to get & use the "lotID" value in the Blueprint class
  Blueprint.call( this, lotID );

  /*
   * Add two new properties for Colonial houses:
   *    - "windowType"
   *    - "houseType"
   */
  this.windowType = "Floor To Ceiling";
  this.houseType = "Colonial";

  // Overide "totalFloors" property set in the "Blueprint" class.
  this.totalFloors = 2;

}

/*
 * Have the Colonial "class" inherit from the Blueprint "class" with
 * the ES5 Object.create() method
 */
Colonial.prototype = Object.create( Blueprint.prototype );

/*
 * Reset Colonial's constructor property so it stops pointing to
 * Blueprint's constructor property
 */
Colonial.prototype.constructor = Colonial;

// var home02 = new Colonial( 423 );

// It's chainable
// home02.setHomeOptions().displayHomeOptions();




/*
 * ====================================================================
 * MANSION SUBCLASS: inherits from the Colonial "class"
 * ====================================================================
 */
function Mansion ( lotID, windowType ) {

  /*
   * Use .call() to get & use the "windowType" value in the Colonial
   * class. This code will also force "Mansion" to "walk up the
   * prototype chain" to find "Blueprint" so it can use the
   * totalFloors" property.
   */
  Colonial.call( this, lotID, windowType );

  // Add a new "jacuzzi" property to Mansions
  this.jacuzzi = "yes";

  // Set a "houseType" property to Mansions
  this.houseType = "Mansion";

  // Override the window type that was set by the Colonial class
  this.windowType = "French Doors";

  // Overide "totalFloors" property set in the "Blueprint" class
  this.totalFloors = 5;


}

// Have the Mansion "class" inherit from the Colonial "class"
Mansion.prototype = Object.create( Colonial.prototype );

/*
 * Reset Mansion's constructor property so it stops pointing to
 * Colonial's constructor property
 */
Mansion.prototype.constructor = Mansion;


// var home03 = new Mansion( 657 );

// home03.setHomeOptions({
//   floorType: "formica",
//   price: "1.1 million",
//   pool: "yes",
//   squareFeet:3000,
//   kitchenCounters: "Granite"
// }).displayHomeOptions();



// var home04 = new Colonial( 136 );

// home04.setHomeOptions({
//   floorType: "Stainless Steel",
//   price: "325.000",
//   squareFeet:1100
// }).displayHomeOptions();



// var home05 = new Mansion( 90347 );

// home05.setHomeOptions({
//   totalBedrooms: 5,
//   totalBathrooms: 8,
//   pool: "optional",
//   price: "525,000",
//   squareFeet: 2200
// }).displayHomeOptions();



// var home06 = new Bungalow( 13 );

// home06.setHomeOptions({
//   totalBathrooms: 1.5,
//   totalBedrooms: 2,
//   kitchenCounters: "Wooden",
//   pool: "yes",
//   price: "226,000",
//   squareFeet: 900
// }).displayHomeOptions();
