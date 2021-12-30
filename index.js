 const express = require('express');
const app = express();
const dataBase = require('./tours.json');
const path = require('path');
const getDate = require('./Public/Scripts/getDate.js');
console.log(getDate);

// Async function to get the user's Date
getDate();

//setup EJS 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('Public'));

//global rout
app.get('/', (req, res) => {
    res.render('index', { dataBase});
})

// Tour details routs
app.get('/light-chase', (req, res) =>{
    const tour = dataBase[0];
    res.render('tour', { dataBase, tour})
})
app.get('/mountain-explorer', (req, res) =>{
    const tour = dataBase[1];
    res.render('tour', { dataBase, tour})
})
app.get('/country-side', (req, res) =>{
    const tour = dataBase[2];
    res.render('tour', { dataBase, tour})
})

//Tour booking Routs
app.get('/book-light-chase', (req, res) =>{
    const tour = dataBase[0];
    res.render('payment', { dataBase, tour})
})
app.get('/book-mountain-explorer', (req, res) =>{
    const tour = dataBase[1];
    res.render('payment', { dataBase, tour})
})
app.get('/book-country-side', (req, res) =>{
    const tour = dataBase[2];
    res.render('payment', { dataBase, tour})
})

app.listen(process.env.PORT || 3000, () => {
    console.log('listening on port 3000');
})