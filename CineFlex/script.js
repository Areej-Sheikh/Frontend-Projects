let header = document.querySelector(".header")
let menu = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navbar")
window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow',window.scrollY>0);
});

menu.onclick = ()=>{
  menu.classList.toggle("bx-x")
  navbar.classList.toggle("active")
}
window.onscroll = ()=>{
  menu.classList.remove("bx-x")
  navbar.classList.remove("active")
}



var swiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

  });

// script.js
const scrollContainer = document.querySelector('.scroll-content');

let clone = scrollContainer.cloneNode(true);
scrollContainer.parentNode.appendChild(clone);

let scrollSpeed = 0.1; // Adjust the scroll speed as needed
let currentPosition = 0;

function scroll() {
    currentPosition += scrollSpeed;
    if (Math.abs(currentPosition) >= scrollContainer.scrollWidth / 2) {
        currentPosition = 0;
    }
    scrollContainer.style.transform = `translateX(-${currentPosition}px)`;
    requestAnimationFrame(scroll);
}

scroll();
