const logInBTN = document.querySelector('#sec-log-in-btn');
const signUpBTN = document.querySelector('#sec-sign-up-btn');
const signUpForm = document.getElementById('sign-up-form');
const logInForm = document.getElementById('log-in-form');


logInBTN.addEventListener('click', (e)=>{
    e.preventDefault();
    signUpForm.classList.add('form-hidden');
    logInForm.classList.remove('form-hidden');
})
signUpBTN.addEventListener('click', (e)=>{
    e.preventDefault();
    signUpForm.classList.remove('form-hidden');
    logInForm.classList.add('form-hidden');
})

