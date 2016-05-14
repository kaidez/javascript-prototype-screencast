/*
 * Helpers.js: a consumable module that contains helper methods to
 * do stuff in our app...only has one method right now.
 */

module.exports = {

  /*
   * propercaseOptionName(): a method that take individual house
   * property names and converts them to both two words and converts
   * the first one to uppercase. It takes one parameter
   * ( currentOptionName ), which will be the "homeOption" value in the
   * "for...in" loop that builds a single house info component and
   * places it on the page.
   */
  propercaseOptionName: function( currentOptionName ) {

    var

      // Store a reference to a regex search for a capital letter
      getCapitalLetter = /[A-Z]/g,

      /*
       * Find the capital letter in currentOptionName...this currently
       * only works with one capital letter.
       */
      capitalLetter = currentOptionName.match( getCapitalLetter ),

      // Put a space before capital letter in currentOptionName
      capitalizeOptionName = currentOptionName.replace( capitalLetter,  " " + capitalLetter ),

      // Capitalize the above capitalizeOptionName
      optionName = capitalizeOptionName.charAt(0).toUpperCase() + capitalizeOptionName.slice(1);

    // return the converted name so it's available inside the code base
    return optionName;

  } // end propercaseOptionName()

};