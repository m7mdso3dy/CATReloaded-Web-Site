'use strict'
//news letter layover
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

// slider functionality
const sliderEvents = Array.from(document.querySelectorAll('.events'))

const slidersCount = sliderEvents.length

let currentIndex = 1

const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')

const next = () => {
    if (nextBtn.classList.contains('disabled'))
        return;
    else {
        currentIndex++;
        checker();
    }
}
const prev = () => {
    if (prevBtn.classList.contains('disabled'))
        return;
    else {
        currentIndex--;
        checker();
    }
}

nextBtn.onclick = next
prevBtn.onclick = prev

const paginationElement = document.createElement('ul')
paginationElement.setAttribute('id', 'pagination-ul')

for (let i = 1; i <= slidersCount; i++) {
    const paginationItem = document.createElement('li')
    paginationItem.setAttribute('data-index', i)
    paginationItem.appendChild(document.createTextNode(i))
    paginationElement.appendChild(paginationItem)
}

document.getElementById('indicators').appendChild(paginationElement)

const paginationCreatedUl = document.getElementById('pagination-ul')
const paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'))

for (let i = 0; i < paginationBullets.length; i++) {
    paginationBullets[i].onclick = function () {
        currentIndex = +this.getAttribute('data-index')
        checker();
    }
}

const checker = () => {
    removeActive();
    sliderEvents[currentIndex - 1].classList.add('active')
    paginationCreatedUl.children[currentIndex - 1].classList.add('active')
}

const removeActive = () => {
    sliderEvents.forEach((slide) => {
        slide.classList.remove('active')
    })

    paginationBullets.forEach((bullet) => {
        bullet.classList.remove('active')
    })

    if (currentIndex == 1)
        prevBtn.classList.add('disabled')
    else
        prevBtn.classList.remove('disabled')

    if (currentIndex == slidersCount)
        nextBtn.classList.add('disabled')
    else
        nextBtn.classList.remove('disabled')
}

checker();

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