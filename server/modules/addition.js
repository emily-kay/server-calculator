const addition = (array) => {
    let sum = 0;
    array.forEach((number) => {
        sum += Number(number);
    });
    return sum;
};

module.exports = addition;