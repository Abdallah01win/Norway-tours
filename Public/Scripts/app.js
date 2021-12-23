const logInBTN = document.querySelector('#sec-log-in-btn');
const signUpBTN = document.querySelector('#sec-sign-up-btn');
const signUpForm = document.getElementById('sign-up-form');
const logInForm = document.getElementById('log-in-form');
const detailsBtn = document.querySelectorAll('.details-btn');
const headr = document.getElementsByTagName('header');
const menue = document.getElementById('menue');
const closeIcon = document.getElementById('close');
const navList = document.getElementById('nav-list');
const nav = document.getElementById('nav');
const navButtons = document.querySelector('.buttons');
const logo = document.getElementById('logo').firstElementChild;

if (logInBTN !== null) {

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
            }
            else if (card === tourTow) {
                btn.setAttribute("href", "/mountain-explorer")
            }
            else if (card === tourThree) {
                btn.setAttribute("href", "/country-side")
            }
        })
    });
}
menue.addEventListener('click', () => {
    menue.classList.add('hide-icon');
    closeIcon.classList.add('show-icon');
    navList.classList.add('show-menue');
    navButtons.classList.add('show-buttons');
    logo.setAttribute('src', '/Assets/W-logo.png');
});

closeIcon.addEventListener('click', () => {
    menue.classList.remove('hide-icon');
    closeIcon.classList.remove('show-icon');
    navList.classList.remove('show-menue');
    navButtons.classList.remove('show-buttons');
    logo.setAttribute('src', '/Assets/G-logo.png');
})

