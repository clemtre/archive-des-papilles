const images = document.querySelectorAll(".img");
const cartes = document.querySelectorAll(".carte");
const container = document.getElementById("container");

for (let i = 0; i < cartes.length; i++) {
  cartes[i].style.rotate = Math.random() * 20 - 10 + "deg";
  cartes[i].style.zIndex = i;

  $(cartes[i]).draggable({
    // revert: true,
    scroll:false ,
    start: function (event, ui) {
      console.log(x);
      event.target.style.transition = "none";
    },
    drag: function (event, ui) {
      let largeur = event.target.getBoundingClientRect().width;
      let hauteur = event.target.getBoundingClientRect().height;
      if (
       ( Math.abs(ui.position.left - largeur) > largeur ) ||
        (Math.abs(ui.position.top - hauteur) > hauteur )
      ) {
        vaSortir = true;
      }
    },
    stop: function (event, ui) {
      if (vaSortir) {
        event.target.style.transition = "all .2s";
        cartes.forEach((j) => j.style.zIndex ++)
        event.target.style.zIndex = 0;
        event.target.style.left = "0%";
        event.target.style.top = "0%";
      }
      vaSortir = false;
    },
  });
}

const cartesActive = cartes[cartes.length - 1];

let enMouvement = false;
let x = 0;
let y = 0;

let vaSortir = false;
