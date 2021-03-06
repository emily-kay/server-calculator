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
    res.sendStatus(200);
});

app.post('/subtraction',(req, res)=>{
    let mathArray = (req.body.mathArray);
    let result = subtraction(mathArray);
    let mathProblem = {
        x: mathArray[0],
        y: mathArray[1],
        type: '-',
        result: result
    }
    history.push(mathProblem);
    res.sendStatus(200);
});

app.post('/multiplication',(req, res)=>{
    let mathArray = (req.body.mathArray);
    let result = multiplication(mathArray);
    let mathProblem = {
        x: mathArray[0],
        y: mathArray[1],
        type: '*',
        result: result
    }
    history.push(mathProblem);
    res.sendStatus(200);
});

app.post('/division',(req, res)=>{
    let mathArray = (req.body.mathArray);
    let result = division(mathArray);
    let mathProblem = {
        x: mathArray[0],
        y: mathArray[1],
        type: '/',
        result: result
    }
    history.push(mathProblem);
    res.sendStatus(200);
});

app.get('/history',(req, res)=> {
    res.send(history);
});

app.get('/', (req, res) => {
    console.log('Server works');
});

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
});