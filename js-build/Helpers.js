module.exports = {
    setPropertyName: function( propName ) {
        var getCapitalLetter = /[A-Z]/,
            letter = propName.match( getCapitalLetter ),
            updatePropertyName = propName.replace(letter,  " " + letter);
            propertyName = updatePropertyName.charAt(0).toUpperCase() + updatePropertyName.slice(1);

        return propertyName;
    }
};