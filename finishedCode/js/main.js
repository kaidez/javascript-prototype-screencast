function Blueprint(homeID) {

  // Define a unique ID...the only parameter
  this.homeID = homeID;

  // Common parts of a home...these won't ever change
  this.basement = true;
  this.livingRoom = true;
  this.kitchen = true;
  this.diningRoom = true;

  // Configurable parts of a home...these will change
  this.squareFeet = 1000;
  this.totalBedrooms = 1;
  this.totalBathrooms = 1.5;
  this.totalFloors = 1;
}
