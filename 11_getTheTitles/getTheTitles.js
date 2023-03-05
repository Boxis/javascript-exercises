const getTheTitles = function(books) {
    // let result = [];
    // for (arr in books) {
    //     result.push(books[arr].title);
    // }
    // return result;
    return books.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
