function Blueprint( lotID ){
    this.lotID = lotID;
}

Blueprint.prototype.name = "Bungalow";
Blueprint.prototype.showName = function(){
    console.log(this.name)
}
var foo = new Blueprint( 123 );

foo.showName();

console.log("foo", foo);

function Bungalow(lotID){
    Blueprint.call(this, lotID)
}

var bar = new Bungalow( 456 );
console.log("bar", bar);
foo.showName();

console.log(Blueprint.prototype);


