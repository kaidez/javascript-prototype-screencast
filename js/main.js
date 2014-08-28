// Concrete Class: is never instantiated.
function Blueprint(config) {
  this.houseType = config.houseType;
  this.price = config.price;
  this.color = config.color;
  if(!this.color) this.color = "white";
  if(!this.price) this.price = "100,000+";
};

Blueprint.prototype.createPool = function(pool) {
  var thePool = document.querySelector("#pool");
  this.pool = pool;
  if(this.pool === undefined) {
    thePool.innerHTML = "no";
  }  else {
    thePool.innerHTML = this.pool;
  }
}

var kai = new Blueprint({
  houseType: "Bungalow"
});

kai.createPool("9 ft");

console.log(kai);