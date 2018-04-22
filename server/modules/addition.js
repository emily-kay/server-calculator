const addition = (array) => {
    let sum = 0;
    array.forEach((number) => {
        sum += number;
    });
    return sum;
};

module.exports = addition;