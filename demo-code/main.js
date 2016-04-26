function Blueprint( lotID ) {
    this.lotID = lotID;
}

Blueprint.prototype.type = "Regular House";

Blueprint.prototype.showType = function( type ) {
    console.log( "This is house is called " + type.toUpperCase() );
}

var newHouse = new Blueprint( 123 );

newHouse.showType( "Regular House" );

// function Bungalow( lotID ) {
//     Blueprint.call( this, lotID );
// }

// console.log( "Bungalow prototype before" );
// console.log( Bungalow.prototype );
// Bungalow.prototype = Object.create( Blueprint.prototype );
// Bungalow.prototype = new Blueprint();

// console.log( "\n" );
// console.log( "Bungalow prototype after:" );
// console.log( Bungalow.prototype );


// var bar = new Bungalow( 456 );
// console.log( "bar is ", bar );
// bar.showType( "Bungalow" );