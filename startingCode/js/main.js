function Blueprint(homeID) {

  // Define a unique ID...the only parameter
  this.homeID = homeID;
  
  // Common parts of a house...this won't ever change
  this.basement = true;
  this.livingRoom = true;
  this.kitchen = true;
  this.diningRoom = true;

  // Common parts of a house...this won't ever change
  this.squareFeet = 1000;
  this.totalBedrooms = 1;
  this.totalBathrooms = 1.5;
  this.totalFloors = 1;
}