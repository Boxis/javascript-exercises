const reverseString = function(string) {
    const strLength = string.length;
    let result = '';
    for (i = strLength-1; i>=0; i--){
        result += string[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
