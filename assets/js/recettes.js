const hr = document.querySelectorAll("hr");
let main = document.querySelector("main");
var nodes = Array.prototype.slice.call(main.children);
let recetteInner = [];
let recetteEntete = [];
let recetteWrap = [];
let recetteContexte = [];

let hasRecette = false;

if (hr.length > 1) {
  hasRecette = true;
  for (let i = nodes.indexOf(hr[1]); i < nodes.length; i++) {
    recetteInner.push(Array.from(main.children)[i]);
  }

  main = document.querySelector("main");

  // recetteEntete.push(...$('.ctn-recette').last())

  $(recetteInner).wrapAll("<div class='recette-inner' />");

  recetteEntete.push(...$("main h1").last());
  recetteEntete.push(...$("main p").last());

  $(recetteEntete).wrapAll("<div class='recette-entete' />");

  recetteWrap.push(...$(".recette-entete"));
  recetteWrap.push(...$(".recette-inner"));

  $(recetteWrap).wrapAll("<div class='recette-ctn' />");

  hr.forEach((e) => e.remove());
  $("#telecharger").appendTo(".recette-inner");
} else {
  $("#telecharger").remove();
}

if ($("audio")) {
  $(".audio-img").insertAfter($(".chapeau"));
  // $("audio").insertAfter($(".chapeau"));
}
if ($("video")) {
  $("video").insertAfter($(".chapeau"));
  // $("audio").insertAfter($(".chapeau"));
}

$(".recette-entete").append("<div class='recette-bouton'>v</div>");

$(".recette-ctn").accordion({
  collapsible: true,
  active: 1,
  height: "content",
});

main = document.querySelector("main");
if (hasRecette) {
  for (let i = 0; i < main.children.length - 1; i++) {
    recetteContexte.push(main.children[i]);
  }
} else {
  for (let i = 0; i < main.children.length; i++) {
    recetteContexte.push(main.children[i]);
  }
}
// dégueu désolé il faut aller vite

$(recetteContexte).wrapAll("<div class='recette-contexte' />");
$("<div class='bordure'></div>").insertBefore($(".recette-entete:first-child"));

$(".recette-entete").click(function () {
  if ($(".recette-entete").hasClass("ui-state-active")) {
    $(".site-nav").addClass("site-nav-hidden");
    console.log("hidden");
  } else {
    $(".site-nav").removeClass("site-nav-hidden");
  }
});

$(".carrousel-recette-wrap").appendTo(".chapeau");

const img = $(".carrousel-recette figure img");
$("#img-curr").html(1);
$("#img-total").html(img.length);

$(".carrousel-recette").scroll(function () {
  let compteur = Math.ceil(
    ($(".carrousel-recette").scrollLeft() /
      ($(".carrousel-recette")[0].scrollWidth - img[0].width)) *
      img.length
  );
  compteur > 0 ? $("#img-curr").html(compteur) : "";
  console.log($(".carrousel-recette figure img")[0].width);
});

let isPlay = false
function audioPlay() {
  var audio = document.getElementById("audio");
  !isPlay ? audio.play() : audio.pause();
  !isPlay ? $('.audio-img').addClass('audio-img-active') : $('.audio-img').removeClass('audio-img-active');
  
  console.log("ee");
  isPlay =! isPlay
}
