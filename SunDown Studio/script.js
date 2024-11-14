const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
function page4Animation(){
  let elem1 = document.querySelector("#elem1");
var elems = document.querySelectorAll(".elem");
elems.forEach(function (e) {
  e.addEventListener("mouseenter", () => {
    var image = e.getAttribute("data-image");
    fixed.style.backgroundImage = `url(${image})`;
  });
});

let elemCont = document.querySelector(".elem-container");
let fixed = document.querySelector("#fixed-image");
elemCont.addEventListener("mouseenter", () => {
  fixed.style.display = "block";
});
elemCont.addEventListener("mouseleave", () => {
  fixed.style.display = "none";
});
}

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
   
  });
}

function menuAnimation() {
  var menu = document.querySelector('nav h3')
var scr = document.querySelector('#fullscr')
var img = document.querySelector('nav img')
var flag =0
menu.addEventListener('click', function(){
  if(flag==0){
    scr.style.top=0
  img.style.opacity=0
  flag=1
  }
  else{
    scr.style.top='-100%'
    img.style.opacity=1
    flag=0
  }
  
})
}


function loaderAnimation() {
  var loader = document.querySelector("#loader")
  setTimeout(function () {
      loader.style.top = "-100%"
  }, 4200)
}


page4Animation()
swiperAnimation()
menuAnimation()
loaderAnimation()
