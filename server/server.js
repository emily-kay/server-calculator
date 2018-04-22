//REQUIRED

const express = require('express'); 
const bodyParser = require('body-parser');
const app = express(); 
const PORT = process.env.PORT || 5000; 

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

//My modules

const history = require('./modules/history')
const addition = require('./modules/addition');
const subtraction = require('./modules/subtraction');
const multiplication = require('./modules/multiplication');
const division = require('./modules/division');


app.post('/addition',(req, res)=>{
    let mathArray = (req.body.mathArray);
    let result = addition(mathArray);
    let mathProblem = {
        x: mathArray[0],
        y: mathArray[1],
        type: '+',
        result: result
    }
    history.push(mathProblem);
    console.log(history);
    
});

app.get('/', (req, res) => {
    console.log('Server works');
});

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
});