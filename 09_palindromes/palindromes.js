const palindromes = function (input) {
    // Remove punctuations
    const punctuationless = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();

    // Remove spaces
    const punctuationless1 = punctuationless.split(' ').join('');
    console.log(punctuationless1);
    for (let i = 0; i < punctuationless1.length/2; i++) {
        if (punctuationless1[i] != punctuationless1[punctuationless1.length - i - 1]) {
            return false;
        } 
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
