// Import the Blueprint module/class
var GetBlueprint = require( "./Blueprint" );

// Bungalow: a class that inherits from the GetBlueprint "class"
function Bungalow ( lotID ) {
  GetBlueprint.call( this, lotID );
  this.houseType = "Bungalow";
  this.price = "$125,000+";
}

Bungalow.prototype = new GetBlueprint();
Bungalow.prototype.constructor = Bungalow;

var kai = new Bungalow(987);
kai.setHomeOptions({
  pool: true,
  kitchenCounters: "granite",
  squareFeet: 2500,
  totalBathrooms: 3
}).displayHomeOptions();

//
//
//
//
// // Colonial: a class that inherits from the GetBlueprint "class"
// function Colonial ( lotID, windowTypes ) {
//   GetBlueprint.call( this, lotID, windowTypes );
//   this.windowTypes = windowTypes || "Double pane";
//   this.houseType = "Colonial";
//   this.price = "$250,000+";
//   this.totalFloors = 2;
// }
//
// Colonial.prototype = new GetBlueprint();
// Colonial.prototype.constructor = Colonial;
//
//
// // Tudor: a class that inherits from the GetBlueprint "class"
// function Tudor ( lotID, backyard ) {
//   GetBlueprint.call( this, lotID, backyard );
//   this.backyard = backyard || "no";
//   this.houseType = "Tudor";
//   this.price = "$150,000+";
//   this.totalFloors = 3;
// }
//
// Tudor.prototype = new GetBlueprint();
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
