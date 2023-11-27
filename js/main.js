

//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

//Portfolio section - Modal
const portfolioModals = document.querySelectorAll(".porfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function (modalClick){
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtns) => {
    portfolioCloseBtns.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});

//BJ swipe

//Language - Swiper
var swiper = new Swiper(".myLang", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 40,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500, //1000 ticks = 1 secs
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

//Website dark/light theme [secret]
document.addEventListener("DOMContentLoaded", function () {
    const themePos = document.querySelector(".theme-ld");

    themePos.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        themePos.classList.toggle("sun");

        localStorage.setItem("saved-theme", getCurrentTheme());
        localStorage.setItem("saved-icon", getCurrentIcon());
    });

    const getCurrentTheme = () => (document.body.classList.contains("dark-theme") ? "dark" : "light");
    const getCurrentIcon = () => (themePos.classList.contains("sun") ? "sun" : "moon");

    // Check for user's theme preference and apply it
    const savedTheme = localStorage.getItem("saved-theme");
    const savedIcon = localStorage.getItem("saved-icon");

    if (savedTheme) {
        document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    }

    if (savedIcon) {
        themePos.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
    }
});

//Scroll to top button
const scrollTopBtn = document.querySelector(".scrollMe");

window.addEventListener("scroll",function(){
    scrollTopBtn.classList.toggle("active", window,this.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

//Navigation menu items active on page scroll

//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click",() =>{
    navigation.classList.add("active");
});

closeBtn.addEventListener("click",() =>{
    navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});

//Scroll reveal animations
//Common reveal options to create reveal animations
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
});


//Target elements, and specify options to create reveal animations

//Index
ScrollReveal().reveal('.home .info h2, .section-title-02', {delay:500, origin: 'top' });
ScrollReveal().reveal('.home .info h3, .home .info p', {delay:600, origin: 'right' });
ScrollReveal().reveal('.home .info .btn', {delay:700, origin: 'bottom' });
ScrollReveal().reveal('.media-icons i', {delay:500, origin: 'top', interval: 200 });
ScrollReveal().reveal('.home-img', {delay:500, origin: 'bottom' });
ScrollReveal().reveal('.scroll-down', {delay:500, origin: 'bottom' });

ScrollReveal().reveal('.try', {delay:200, origin: 'top', interval: 100 });

//About
ScrollReveal().reveal('.about-img', {delay:500, origin: 'bottom' });
ScrollReveal().reveal('.about-info', {delay:500, origin: 'right' });
ScrollReveal().reveal('.description', {delay:500, origin: 'bottom' });

ScrollReveal().reveal('.skills-description', {delay:500, origin: 'left', interval: 100 });
ScrollReveal().reveal('.skills-info', {delay:500, origin: 'top' });
ScrollReveal().reveal('.education h4', {delay:500, origin: 'left'});
ScrollReveal().reveal('.item', {delay:500, origin: 'top', interval: 200});
ScrollReveal().reveal('.bar', {delay:500, origin: 'top', interval: 200});

ScrollReveal().reveal('.swiper', {delay:200, origin: 'bottom'});

//Content

//Profile
ScrollReveal().reveal('.get-in-touch .container', {delay:500, origin: 'bottom'});

//Contact
ScrollReveal().reveal('.contact-info .education', {delay:500, origin: 'top',});
ScrollReveal().reveal('.con-list .item', {delay:500, origin: 'right'});

//Box?
ScrollReveal().reveal('.dialogue', {delay:500, origin: 'bottom'});