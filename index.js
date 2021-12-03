const express = require('express');
const app = express();
const dataBase = require('./tours.json')

//setup EJS 
app.set('view engine', 'ejs');
app.get('/', (req, res)=>{
    res.render('index');
})

app.use(express.static('Public'));

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})