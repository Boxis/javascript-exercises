const removeFromArray = function(origArray, ...args) {
    const myArray = origArray;
    args.forEach(element => {
        const index = myArray.indexOf(element);
        if (index > -1) myArray.splice(index, 1);
    });
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
