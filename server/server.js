//REQUIRED

const express = require('express'); 
const bodyParser = require('body-parser');
const app = express(); 
const PORT = process.env.PORT || 5000; 

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

//My modules

const numberArray = require('./modules/numberArray');
const addition = require('./modules/addition');
const subtraction = require('./modules/subtraction');
const multiplication = require('./modules/multiplication');
const division = require('./modules/division');

console.log(addition(numberArray));
console.log(subtraction(numberArray));
console.log(multiplication(numberArray));
console.log(division(numberArray));



app.get('/', (req, res) => {
    console.log('Server works');
});

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
});