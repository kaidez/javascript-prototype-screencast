module.exports = {

    /*
     * setPropertyName(): a method that take individual house property
     * names and converts them to both two words and converts the
     * first one to uppercase. It takes one parameter, which will be
     * the "homeOption" value in the "for...in" loop that builds a
     * single house info component and places it on the page.
     */
    setPropertyName: function( propName ) {
        var getCapitalLetter = /[A-Z]/,
            letter = propName.match( getCapitalLetter ),
            updatePropertyName = propName.replace(letter,  " " + letter);
            propertyName = updatePropertyName.charAt(0).toUpperCase() + updatePropertyName.slice(1);

        // Make "propertyName" available throughout the code
        return propertyName;

    }
};