document.addEventListener("DOMContentLoaded", () => {
    let menu = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");
    menu.addEventListener("click", () => {
      navbar.style.top="70px";
    });
    window.onscroll = () => {
      navbar.classList.remove("active");
      navbar.style.top="-400px";

    };
  });
  