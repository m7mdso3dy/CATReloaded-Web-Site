'use strict'
//...................variables
// ..........projects slider variable
const sliderParentProjects = document.querySelector('.projects-slider-parent');
const indicatorsProjects = document.querySelectorAll('.indicator-project');
const projectsSliderWidth = sliderParentProjects.offsetWidth;
let NumOfProjectSlide = 0;
//events slider variable
const sliderParentEvent = document.querySelector('.events-slider-parent');
const indicatorsEvent = document.querySelectorAll('.indicator-event');
const eventSliderWidth = sliderParentEvent.offsetWidth;
let NumOfEventSlide = 0;
const events = document.querySelectorAll('.event');
//.......................news letter layover
const subToNews = document.querySelector('.btn-newsletter');
const exit = document.querySelector('.exit');
const layover = document.querySelector('.lay1');
//.....................functions
//........ project slider functions
const handlingScrollingProject = function (i) {
    indicatorsProjects.forEach(ind => {
        ind.classList.remove('active');
    })
    indicatorsProjects[i].classList.toggle('active');
    sliderParentProjects.scrollTo({
        left: i * projectsSliderWidth,
        behavior: 'smooth'
    })
}

//.....events slider function 
const handlingScrollingEvent = function (i) {
    indicatorsEvent.forEach(ind => {
        ind.classList.remove('active');
    })
    indicatorsEvent[i].classList.add('active');
    sliderParentEvent.scrollTo({
        left: i * eventSliderWidth,
        behavior: 'smooth'
    })
}
// MAYBEEEEEEEEEEEEEEEEEEEEEEEE IMPORTANT!!!!!!!!!!!!!!!⬇⬇⬆⬆⬆⬆⬅⬅⬅
// if you want create a one function to handle all slider on the home page 
// here is how to do it 
// it will be function with 3 arguments(indexOfCurrentSlide,indicatorsOfCurrentSlider,sliderParentOfCurrentSlider)
// and instead of doing things manually in each function you will use one function to handle them all
// hope that i helped


//............hading events
///hadling projects scrolling

indicatorsProjects.forEach((ind, i) => {
    ind.addEventListener('click', function (e) {
        this.setAttribute('disabled', true);
        setTimeout(function () {
            indicatorsProjects[i].removeAttribute('disabled');
        }, 800);
        handlingScrollingProject(i);

    })
})

///hadling event scrolling
indicatorsEvent.forEach((ind, i) => {
    ind.addEventListener('click', function (e) {
        this.setAttribute('disabled', true);
        setTimeout(function () {
            indicatorsEvent[i].removeAttribute('disabled');
        }, 800);
        handlingScrollingEvent(i);

    })
})

//hadling newsletter
subToNews.addEventListener('click', function () {
    layover.classList.toggle('active-layover');
    
});
exit.addEventListener('click', function () {
    layover.classList.remove('active-layover');

});

// handling modal

/*const registerBtn = document.querySelector('.btn-register')
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
*/
/////////////
const myNav = document.querySelector('nav');
window.onscroll = function () { 
    "use strict";
    if (window.scrollY >= 300) {
        myNav.classList.add('navStyleScroll');
        console.log('we are Down')
    } 
    else {
        myNav.classList.remove('navStyleScroll');
        console.log('stillUp')
    }
};













///////////////trying somthing
/*let pressedMouse = false;
let space = 0;
// events.forEach((eve, i) => {
//     eve.addEventListener('mousedown', (e) => {
//         console.log(e);
//         pressedMouse = true;
//         space = e.clientX;
//         eve.addEventListener('mousemove', (e) => {
//             if (pressedMouse) {
//                 console.log(e.clientX - space);
//                 if (e.clientX - space < -50 && e.clientX - space > -52) {
//                     console.log('working');
//                     NumOfEventSlide < 2 && NumOfEventSlide >= 0 ? NumOfEventSlide++ : null;
//                     handlingScrollingEvent(NumOfEventSlide);
//                 }
//             }
//         })
//     });
//     eve.addEventListener('mouseup', () => {
//         pressedMouse = false;
//     })
// });

events.forEach((eve, i) => {
    eve.addEventListener('touchend', (e) => {
        console.log(e.timeStamp);
    })
    eve.addEventListener('touchstart', (e) => {
        console.log(e.timeStamp);
    })
})*/
//didn't work⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆









// handling intervals
setInterval(() => {
    NumOfEventSlide >= 0 && NumOfEventSlide < 2 ? NumOfEventSlide++
        : NumOfEventSlide == 2 ? NumOfEventSlide = 0
            : null;
    handlingScrollingEvent(NumOfEventSlide);
}, 3000);

setInterval(() => {
    NumOfProjectSlide >= 0 && NumOfProjectSlide < 1 ? NumOfProjectSlide++
        : NumOfProjectSlide == 1 ? NumOfProjectSlide = 0
        : null;
    handlingScrollingProject(NumOfProjectSlide);
},3000)