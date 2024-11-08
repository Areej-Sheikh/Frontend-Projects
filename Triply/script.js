const header=document.querySelector("header");
let flag = 0;

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",window.scrollY>60)
});

let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menu.onclick = ()=> {
    if(flag==0){

        menu.classList.toggle('bx-x');
        navbar.style.left="50%";
        flag=1
    }else{
        menu.classList.toggle('bx-x');

        navbar.style.left="100%";
        flag=0
    }
};