const body = document.querySelector("body");
const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector('#header');
const overlay = document.querySelector('#overlay');
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener('click', () => {
    if  (header.classList.contains('open')) { // Close Hamburger Menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
        fadeElems.forEach((elem)=>{elem.classList.add('has-fade')})
    }
    else { // Open Hamburger Menu
        body.classList.add('noscroll');
        header.classList.add('open');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
        fadeElems.forEach((elem)=>{elem.classList.remove('has-fade')})
    }
});