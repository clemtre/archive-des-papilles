let titreSite = true;

const images = document.querySelectorAll(".carte-img");
function fadeIn(obj) {
  obj.style.rotate = "0deg";
  obj.parentNode.parentNode.style.left =
    (window.innerWidth - obj.parentNode.getBoundingClientRect().width) / 2 +
    "px";
}
const cartes = document.querySelectorAll(".carte");
const container = document.getElementById("container");
for (let i = 0; i < images.length; i++) {
  images[i].style.rotate = Math.random() * 20 - 10 + "deg";
}

for (let i = 0; i < cartes.length; i++) {
  cartes[i].style.zIndex = i;
  cartes[i].style.top =
    (window.innerHeight - cartes[i].getBoundingClientRect().height) / 2 + "px";
  cartes[i].style.left =
    (window.innerWidth - cartes[i].getBoundingClientRect().width) / 2 + "px";
  $(cartes[i]).draggable({
    // revert: true,
    scroll: false,
    distance: 50,
    start: function (event, ui) {
      $(".titre-img").addClass("fadeOut");
      console.log(event.target.nextSibling.children[0].children[1])
      // event.target.style.transition = "none";
      $(".carte-titre").removeClass("active");
      if(event.target.previousSibling){
        event.target.previousSibling.children[0].children[1].classList.add("active")
      }
      else {
        // fallback qunad target = carte-titre[carte-titre.length]
        // à implémenter
        event.target.parentNode.parentNode.parentNode.children[event.target.parentNode.parentNode.parentNode.children.length].children[0].children[1].classList.add("active")
      }
    },
    drag: function (event, ui) {
      let largeur = event.target.getBoundingClientRect().width;
      let hauteur = event.target.getBoundingClientRect().height;
      if (
        Math.abs(ui.position.left - largeur) > largeur ||
        Math.abs(ui.position.top - hauteur) > hauteur
        ) {
          vaSortir = true;
        }
      },
      stop: function (event, ui) {
        if (vaSortir) {
          event.target.style.transition = "all .2s";
          cartes.forEach((j) => j.style.zIndex++);
          const rect = event.target.getBoundingClientRect().height;
          event.target.style.zIndex = 0;
          event.target.style.left = "0";
          event.target.style.top = (window.innerHeight - rect) / 2 + "px";
          event.target.style.left =
          (window.innerWidth - event.target.getBoundingClientRect().width) / 2 +
          "px";
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
