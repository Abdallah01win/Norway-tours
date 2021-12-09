const logInBTN = document.querySelector('#sec-log-in-btn');
const signUpBTN = document.querySelector('#sec-sign-up-btn');
const signUpForm = document.getElementById('sign-up-form');
const logInForm = document.getElementById('log-in-form');


logInBTN.addEventListener('click', (e)=>{
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

signUpBTN.addEventListener('click', (e)=>{
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

