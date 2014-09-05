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
4723
// Method that adds house options
Blueprint.prototype.setOptions = function(config) {
  var thePool = document.getElementById("pools"),
    theHouseColor = document.getElementById("houseColor"),
    optionsArray = [];
  
  // this.houseColor = config.houseColor;



  if (!config) {
    this.pool = null;
    thePool.innerHTML = "no";
  } else {
    this.pool = config.pool;
    thePool.innerHTML = this.pool;
  }
  
  // if (this.houseColor === "undefined") {
  //   theHouseColor.innerHTML = "white";
  // } else {
  //   theHouseColor.innerHTML = this.houseColor;
  // }   
}

var bungalowOne = new Blueprint(23, "bungalow");

bungalowOne.setOptions({
  pool: "yes",
  color: "white"
});

console.log(bungalowOne);