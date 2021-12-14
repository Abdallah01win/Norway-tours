const logInBTN = document.querySelector('#sec-log-in-btn');
const signUpBTN = document.querySelector('#sec-sign-up-btn');
const signUpForm = document.getElementById('sign-up-form');
const logInForm = document.getElementById('log-in-form');
const detailsBtn = document.querySelectorAll('.details-btn');
const headr = document.getElementsByClassName('header');
//const dataBase = require('./tours.json')
import * as dataBase from 'F:\Projects\Norway Tours -v 2/tours.json';
logInBTN.addEventListener('click', (e) => {
    e.preventDefault();
    signUpForm.classList.remove('animate-up');
    logInForm.classList.remove('animate-out');

    signUpForm.classList.add('animate-out');
    setTimeout(() => {
        signUpForm.classList.add('form-hidden');
        logInForm.classList.remove('form-hidden');
    }, 300);
    logInForm.classList.add('animate-up');
})

signUpBTN.addEventListener('click', (e) => {
    e.preventDefault();
    signUpForm.classList.remove('animate-out');
    logInForm.classList.remove('animate-up');

    logInForm.classList.add('animate-out');
    setTimeout(() => {
        logInForm.classList.add('form-hidden');
        signUpForm.classList.remove('form-hidden');
    }, 300);
    signUpForm.classList.add('animate-up');
})
detailsBtn.forEach(btn => {
    btn.addEventListener('click', function (e) {
        let index = undefined;
        const container = this.parentElement.parentElement.parentElement;
        const card = this.parentElement.parentElement;

        const tourOne = container.firstElementChild;
        const tourTow = tourOne.nextElementSibling;
        const tourThree = tourTow.nextElementSibling;
        if (card === tourOne) {
            btn.setAttribute("href", "/light-chase")
            Header.style.backgroundImage = `${dataBase[0]["imgURL"]}`;
        }
        else if (card === tourTow) {
            btn.setAttribute("href", "/mountain-explorer")
            Header.style.backgroundImage = "url(../Assets/Hero-img.jpg)";
        }
        else if (card === tourThree) {
            btn.setAttribute("href", "/country-side")
            Header.style.backgroundImage = "url(../Assets/Hero-img.jpg)";
        }
    })
});



