const division = (array) => {
    let newArray = array.slice();
    let sum = newArray.shift();
    newArray.forEach((number) => {
        sum /= number;
    });
    return sum;
};

module.exports = division;