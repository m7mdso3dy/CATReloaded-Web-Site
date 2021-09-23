'use strict'
//.......................news letter layover
const subToNews = document.querySelector('.btn-newsletter');
const exit = document.querySelector('.exit');
const layover = document.querySelector('.lay1');
//hadling newsletter
subToNews.addEventListener('click', function () {
    layover.classList.toggle('active-layover');
});
exit.addEventListener('click', function () {
    layover.classList.remove('active-layover');
});

// handling modal

const registerBtn = document.querySelector('.btn-register')
const bgModal = document.querySelector('.bg-modal')
const closeBtns = Array.from(document.querySelectorAll('.close-btn'))

registerBtn.addEventListener('click', () => {
    bgModal.classList.add('open')
})

closeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        bgModal.classList.remove('open')
    })
})

const nextBtns = Array.from(document.querySelectorAll('.nxt-btn'))
const submitBtn = document.querySelector('.submit-btn')
const modals = Array.from(document.querySelectorAll('.modal'))


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    bgModal.classList.remove('open')
})

nextBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (btn.parentElement.parentElement.parentElement.classList.contains('1')) {
            modals[0].classList.add('hide')
            modals[1].classList.remove('hide')
        }
        if (btn.parentElement.parentElement.parentElement.classList.contains('2')) {
            modals[1].classList.add('hide')
            modals[2].classList.remove('hide')
        }
    })
})