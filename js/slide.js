let radio = document.querySelector(".manual-btn");
let cont = 1;

document.getElementById("radio1").checked = true;

setInterval(() => {
  proximaImg();
}, 5000);

function proximaImg() {
  cont++;
  if (cont > 3) {
    cont = 1;
  }
  document.getElementById("radio" + cont).checked = true;
}

/* Ingredientes */

let radioIngre = document.querySelector(".manual-btn-ingre");
let contIngre = 1;

document.getElementById("radio-ingre1").checked = true;

function proximaImgIngre() {
  contIngre++;
  if (contIngre > 3) {
    contIngre = 1;
  }
  document.getElementById("radio-ingre" + contIngre).checked = true;
}

setInterval(() => {
  proximaImgIngre();
}, 5000);

/* menu hamburguer */

const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();

  const navMenu = document.getElementById("nav");
  navMenu.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
