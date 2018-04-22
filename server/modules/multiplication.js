const multiplication = (array) => {
    let sum = 10;
    array.forEach((number) => {
        sum *= number;
    });
    return sum;
};

module.exports = multiplication;
