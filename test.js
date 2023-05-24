function isOddOrEven(string) {
    if(typeof(string) != 'string') {
        return undefined;
    }
    return string.length % 2 === 0 ? 'even' : 'odd';
}

function lookupChar(string, index) {

    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
    
    return undefined;
    }
    
    if (string.length <= index || index < 0) { 
        return "Incorrect index"; 
    } 
    return string.charAt(index); 
}


module.exports = {
    isOddOrEven,
    lookupChar
};

