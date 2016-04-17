function Blueprint( lotID ) {
    this.lotID = lotID;
}

Blueprint.prototype.name = "Regular House";

Blueprint.prototype.showName = function( name ) {
    console.log( name )
}

var foo = new Blueprint( 123 );

foo.showName( "Regular House");

console.log( foo );

function Bungalow( lotID ) {
    Blueprint.call( this, lotID );
}

console.log( "Blueprint prototype before" );
console.log( Bungalow.prototype );
Bungalow.prototype = Object.create( Blueprint.prototype );
// Bungalow.prototype = new Blueprint();

console.log( "\n" );
console.log( "Blueprint prototype after:" );
console.log( Bungalow.prototype );


var bar = new Bungalow( 456 );
console.log( "bar", bar );
bar.showName( "Bungalow" );


