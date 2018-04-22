const division = (array) => {
    let sum = array.shift();
    array.forEach((number) => {
        sum /= number;
    });
    return sum;
};

module.exports = division;