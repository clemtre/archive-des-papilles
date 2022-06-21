$('#container').append($('#la-tarte-au-citron-secrete'))
// recette tarte citron
$('#container').append($('#recettes-qui-ressucitent'))
// 1 thematique ressuciter
$('#container').append($('#les-fifi-figues-de-picsou-magazine'))
$('#container').append($('#les-fifi-figues-de-picsou-magazine'))
// 2 recettes 
$('#container').append($('#le-festin-des-glanneuses'))
// 1 festin des glaneu
$('#container').append($('#les-fajitas-inimittables'))
$('#container').append($('#la-ratatouille-entre-amies'))
// 2 recettes
$('#container').append($('#le-tiramisu-gargantuesque'))
// 1 tiramisu
$('#container').append($('#lemon-pasta-en-une-casserole'))
$('#container').append($('#l-ambroisie-des-sims-et-des-dieux'))
$('#container').append($('#le-columbo-de-dinde-grave-dans-l-ame'))
// 3 recettes
// $('#container').append($('#les-fifi-figues-de-picsou-magazine'))
// 1 thematique
$('#container').append($('#le-gateau-au-marrons-des-annes-30'))
$('#container').append($('#les-croissants-qui-mettent-tout-le-monde-d-accord'))
$('#container').append($('#la-ratatouille-entre-amis'))
// 3 recettes
$('#container').append($('#une-langue-maternelle'))
// 1 thematique
$('#container').append($('#l-apero-collaboratif'))
$('#container').append($('#l-indetronable-gateau-au-yaourt'))
$('#container').append($('#la-poele-de-sentiments'))
$('#container').append($('#la-sauce-qui-pourrait-rendre-fou'))
$('#container').append($('#les-fifi-figues-de-picsou-magazine'))
// 5 recettes
$('#container').append($('#homecart'))
// home
let titreSite = true;

const thematiques = $('.thematique')



const images = document.querySelectorAll(".carte-img");
function fadeIn(obj) {
  obj.style.rotate = "0deg";
  obj.parentNode.parentNode.style.left =
  (window.innerWidth - obj.parentNode.getBoundingClientRect().width) / 2 +
    "px";
}
const cartes = document.querySelectorAll(".carte");
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
      event.target.style.transition = "none";
      $(".carte-titre").removeClass("active");
      // if(event.target.previousSibling){
      //   event.target.previousSibling.children[0].children[1].classList.add("active")
      // }
      $(event.target).prev().find($('p')).addClass('active')

      // else {
      //   // fallback qunad target = carte-titre[carte-titre.length]
      //   // à implémenter
      //   event.target.parentNode.parentNode.parentNode.children[event.target.parentNode.parentNode.parentNode.children.length].children[0].children[1].classList.add("active")
      // }
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
        if(event.target.children[0].firstElementChild.id == 'carte-img-home'){
          event.target.style.scale = '.8'
        }
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

console.log(...$('#container').children().get())
