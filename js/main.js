// Concrete Class: is never instantiated.
function Blueprint(cfg) {
  this.houseType = cfg.houseType;
  this.price = cfg.price;
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
  houseType: "Bunglaow",
  price: 100,
});
kai.createPool("9 ft");