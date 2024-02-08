
const button1 = document.querySelector(`.game`)
const button2 = document.querySelector(`.carrer`)
const button3 = document.querySelector(`.support`)
const button4 = document.querySelector(`.about`)

const games = document.querySelector(`.p1`)
const carrer = document.querySelector(`.p2`)
const support = document.querySelector(`.p3`)
const about = document.querySelector(`.p4`)

const searchBtn = document.querySelector(".rightNav button")
const searchBar = document.querySelector(".c1")

// mouse enter on games

button1.addEventListener("mouseenter",()=>{
    games.classList.toggle("move")
})
button1.addEventListener("mouseleave",()=>{
    setTimeout(()=>{ games.classList.toggle("move")},200)
})

//mouse enter on career
button2.addEventListener("mouseenter",()=>{
    carrer.classList.toggle("move")
   })
button2.addEventListener("mouseleave",()=>{
    setTimeout(()=>{ carrer.classList.toggle("move")},200)   
})

// mouse enter on support

button3.addEventListener("mouseenter",()=>{
    support.classList.toggle("move")
})
button3.addEventListener("mouseleave",()=>{
    setTimeout(()=>{ support.classList.toggle("move")},200)
})

// mouse enter on about

button4.addEventListener("mouseenter",()=>{
    about.classList.toggle("move")
})
button4.addEventListener("mouseleave",()=>{
    setTimeout(()=>{ about.classList.toggle("move")},200)
})

//holding the page game

games.addEventListener("mouseenter",()=>{
    games.classList.toggle("stay")
})
games.addEventListener("mouseleave",()=>{
    games.classList.toggle("stay")
})

//holding the page carrer
carrer.addEventListener("mouseenter",()=>{
    carrer.classList.toggle("stay")
})
carrer.addEventListener("mouseleave",()=>{
    carrer.classList.toggle("stay")
})
//holding the page support
support.addEventListener("mouseenter",()=>{
    support.classList.toggle("stay")
})
support.addEventListener("mouseleave",()=>{
    support.classList.toggle("stay")
})
//holding the page about
about.addEventListener("mouseenter",()=>{
    about.classList.toggle("stay")
})
about.addEventListener("mouseleave",()=>{
    about.classList.toggle("stay")
})

//search bar 

searchBtn.addEventListener("click",()=>{
    searchBar.classList.toggle("searchDown")
})

//slider js

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
