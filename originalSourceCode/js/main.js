function Blueprint(lotID) {

  // Define a unique ID
  this.lotID = lotID;

  this.basement = this.livingRoom = this.kitchen = this.diningRoom =
      true;

  this.squareFeet = 1000;
  this.totalBedrooms = 1;
  this.totalBathrooms = 1.5;
  this.totalFloors = 1;
}