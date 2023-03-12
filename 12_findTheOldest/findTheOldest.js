const findTheOldest = function(array) {
    const date = new Date();
    console.log(date);

    const oldest = array.sort(function(a, b) {
        // Test to see if there are any undefined values, set to today's date
        if(a.yearOfDeath == undefined || b.yearOfDeath == undefined) {
            a.yearOfDeath = date;
            b.yearOfDeath = date;
        };

        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
        return lastGuy > nextGuy ? -1 : 1;
    }, 0);
    console.table(oldest);
    
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
