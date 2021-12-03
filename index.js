const express = require('express');
const app = express();
const dataBase = require('./tours.json')

//setup EJS 
app.set('view engine', 'ejs');
app.get('/', (req, res)=>{
    res.render('index', {...dataBase});
})

app.use(express.static('Public'));
// Async function to get the user's Date
const getDate = async ()=>{
    try{
        let currentDate = new Date();
        console.log(`${currentDate.getDay()}/${currentDate.getMonth() + 1 }/${currentDate.getFullYear()}`);
        //for each tour in DB, get user date and append it to the tour's info

        for (const tour in dataBase) {
            let tourDate = `${currentDate.getDay()}/${currentDate.getMonth() + 1 }/${currentDate.getFullYear()}`
            Object.assign(dataBase[tour], {"date" : tourDate} )
            console.log(dataBase[tour]['price']);
        }
    }
    catch(err){
        console.log(err);
    }
}
getDate();
// Async function to generate fuure dates for the tours in the DB
app.listen(3000, ()=>{
    console.log('listening on port 3000')
})