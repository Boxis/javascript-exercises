const sumAll = function(num1, num2) {
    let result = 0;
    let bigNum = num1;
    let smallNum = num2;

    if (num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    } else if(num1<num2){
        bigNum = num2;
        smallNum = num1;
    }

    for (i=smallNum; i<=bigNum; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
