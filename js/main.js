// Abstract Class: is never instantiated.
function Blueprint( lotNumber ) {
  this.lotNumber = lotNumber;

  if (!this.lotNumber) {
    this.lotNumber = 0;
  }

  this.totalBedrooms = 1;
  this.totalBathrooms = 1.5;
  this.totalFloors = 1;
  this.basement = this.livingRoom = this.kitchen = this.diningRoom = true;
  this.houseType = "Bungalow";
}

// Method that adds house options
Blueprint.prototype.setHomeOptions = function( config ) {

  config = config || {};
  this.counterTops = config.counterTops === undefined ? "formica" : config.counterTops;
  this.floorType = config.floorType === undefined ? "tile" : config.floorType;
  this.houseType = config.houseType || this.houseType;

}



function Colonial ( lotNumber, windowTypes ) {
  this.base = Blueprint;
  this.base( lotNumber, windowTypes );
  this.windowTypes = windowTypes || "Double pane";
}

Colonial.prototype = new Blueprint();







var kai = new Colonial( 50, "Single Pane" );

kai.setHomeOptions({
  floorType: "Hardwood",
  houseType: "Colonial"
});

console.log(kai);
