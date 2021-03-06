const dataBase = require('../../tours.json');
function randomNum(max) {
    return Math.floor(Math.random() * max)
}
const getDate = async () => {
    try {
        let currentDate = new Date();
        let day = currentDate.getDay() - 2;
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        
        const months = [1, 3, 5, 7, 8, 10, 12]
        function changeMonth(daysInMonth) {
            day -= daysInMonth;
            month += 1;
        }
        function changeYear() {
            month -= 12;
            year += 1;
        }

    // Async function to generate future dates for tours in DB
        function randomDate(max) {
            day += randomNum(max);
            if (month in months) {
                if (day > 31) {
                    changeMonth(31)
                    if (month > 12) {
                        changeYear()
                    }
                }
            }
            else if (month === 2) {
                if (day > 28) {
                    changeMonth(28)
                    if (month > 12) {
                        changeYear()
                    }
                }
            }
            else {
                if (day > 30) {
                    changeMonth(30)
                    if (month > 12) {
                        changeYear()
                    }
                }
            }
        }
               
//for each tour in DB, get user date and append it to tour's info
        for (const tour in dataBase) {
            randomDate(31)
            let tourDate = `${day}/${month}/${year}`
            Object.assign(dataBase[tour], { "date": tourDate })
            console.log(tourDate)
        }
    }
    catch (err) {
        console.log(err);
    }
}
module.exports = getDate;