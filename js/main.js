// Abstract Class: is never instantiated.
function Blueprint(lotNumber, houseType, totalRooms, basement) {
  this.lotNumber = lotNumber;
  this.houseType = houseType;
  this.totalRooms = ["bedrooms", "bathrooms"];
  this.basement = basement;
  
  // If basement is not passed as a parameter, set it to false
  if(!basement) {
    this.basement = false;
  }
  this.livingRoom = true;
  this.kitchen = true;
  this.diningRoom = true;
}

// Method that adds house options
Blueprint.prototype.setOptions = function(config) {

  config = config || {};
  this.counterTops = config.counterTops === undefined ? "formica" : config.counterTops;
  this.floors = config.floors === undefined ? "tile" : config.floors;
}

var bungalowOne = new Blueprint(23, "bungalow");

bungalowOne.setOptions();

console.log(bungalowOne);