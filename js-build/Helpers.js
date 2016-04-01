module.exports = {

    /*
     * setPropertyName(): a method that take individual house property
     * names and converts them to both two words and converts the
     * first one to uppercase. It takes one parameter, which will be
     * the "homeOption" value in the "for...in" loop that builds a
     * single house info component and places it on the page.
     */
    setPropertyName: function( propName ) {
        var

            // Do a regex search for a capital letter
            getCapitalLetter = /[A-Z]/,

            // Find the capital letter in propName, should be only one
            letter = propName.match( getCapitalLetter ),

            // Put a space before capital letter in propName
            updatePropertyName = propName.replace(letter,  " " + letter);

            // Capitalize the above updatePropertyName
            propertyName = updatePropertyName.charAt(0).toUpperCase() + updatePropertyName.slice(1);

        // Make "propertyName" available throughout the code
        return propertyName;

    } // end setPropertyName()
};