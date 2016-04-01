module.exports = {
    setPropertyName: function( propName ) {
        var getCapitalLetter = /[A-Z]/,
            letter = propName.match( getCapitalLetter ),
            updatePropertyName = propName.replace(letter,  " " + letter);
            newPropertyName = updatePropertyName.charAt(0).toUpperCase() + updatePropertyName.slice(1);

        return newPropertyName;
    }
};