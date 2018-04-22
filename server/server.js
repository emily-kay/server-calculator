//REQUIRED

const express = require('express'); 
const bodyParser = require('body-parser');
const app = express(); 
const PORT = process.env.PORT || 5000; 

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
    console.log('Server works');
});

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
});