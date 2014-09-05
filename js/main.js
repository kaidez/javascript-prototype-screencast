// Abstract Class: is never instantiated.
function Blueprint(lotNumber) {
  this.lotNumber = lotNumber;
  this.totalRooms = ["bedrooms", "bathrooms"];
  this.basement = this.livingRoom = this.kitchen = this.diningRoom = true;
  this.houseType = "Bungalow";
}

// Method that adds house options
Blueprint.prototype.setHomeOptions = function(config) {

  config = config || {};
  this.counterTops = config.counterTops === undefined ? "formica" : config.counterTops;
  this.floors = config.floors === undefined ? "tile" : config.floors;
  this.houseType = config.houseType;

  
}

var bungalowOne = new Blueprint(23);

bungalowOne.setHomeOptions({
  houseType: "Colonial"
});

console.log(bungalowOne);