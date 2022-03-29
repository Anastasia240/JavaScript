'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur.',
    text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus',
    text3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus tristique euismod. Cras.'
};



let textEl = document.querySelector('.text');

let navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function (link) {
    link.addEventListener('click', clickHandler);
});


function clickHandler(event) {

    changeText(event);
    changeActiveClass(event);
}


function changeActiveClass(event) {
    document.querySelector('.active').classList.remove('active');
    event.target.classList.add('active');
}

function changeText(event) {
    switch (event.target.textContent) {
        case "Link 1":
            textEl.textContent = texts.text1;
            break;
        case "Link 2":
            textEl.textContent = texts.text2;
            break;
        case "Link 3":
            textEl.textContent = texts.text3;
            break;
    }
}