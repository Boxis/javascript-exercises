const fibonacci = function(number) {
    // shows number of iterations based on provided number

    // new iteration is the sum of the previouss one

    // ex when 3 -> 1, 1, 2

    // ex when 4 -> 1, 1, 2, 3

    let first_num = 1;
    let second_num = 0;
    let curr_num = 0;
    if (number < 0) {
        return "OOPS";
    }

    for (let i = 0; i < number; i++) {
        curr_num = second_num + first_num;
        // console.log(curr_num);
        first_num = second_num;
        second_num = curr_num;
    }
    return curr_num;
};

// Do not edit below this line
module.exports = fibonacci;
