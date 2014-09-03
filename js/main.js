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
  this.diningRoom = false;
  this.pool;
}

// Method that adds house options
Blueprint.prototype.setOptions = function(config) {
  var thePool = document.getElementById("pools");

  if (!config) {
    this.pool = null;
    thePool.innerHTML = "no";
  } else {
    this.pool = config.pool;
    thePool.innerHTML = this.pool;
  }
  
}

var bungalowOne = new Blueprint(23, "bungalow");

bungalowOne.setOptions({
  pool: "yes"
});