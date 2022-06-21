$("#tabs").tabs({
  active: 0,
});

function plusAncienne() {
  const ctn = $(".thematiques-ctn");
  const thematiques = ctn.children("div");
  ctn.append(thematiques.get().reverse());
}
function plusRecente() {
  const ctn = $(".thematiques-ctn");
  const thematiques = ctn.children("div");
  ctn.append(thematiques.get().reverse());
}
$(function () {
  $("#accordion").accordion({
    header: ".thematique",
  });
});

const rechercheFiltreEntete = $(".recherche-filtre-entete");
for (let i = 1; i < rechercheFiltreEntete.length; i++) {
    if (
      rechercheFiltreEntete[i].innerHTML === rechercheFiltreEntete[i-1].innerHTML
    ) {
      console.log(rechercheFiltreEntete[i].innerHTML, i);
      console.log(i);
      $(rechercheFiltreEntete[i]).remove();
  }
}
