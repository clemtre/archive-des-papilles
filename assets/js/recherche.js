// let isRecette = true
// const ongletRecettes = document.getElementById('onglet-recettes')
// const ongletCollections = document.getElementById('onglet-collections')

// function alterner(arg){
//     if(arg === 0){
//         ongletRecettes.style.display = 'none'
//         ongletCollections.style.display = 'block'
//     } 
//     else {
//         ongletRecettes.style.display = 'block'
//         ongletCollections.style.display = 'none'
        
//     }
//     console.log(isRecette)

//     return isRecette = isRecette 
// }

$( "#tabs" ).tabs({
    active: 1
});

function plusAncienne(){
    const ctn = $('.thematiques-ctn')
    const thematiques = ctn.children('div')
    ctn.append(thematiques.get().reverse())
}
function plusRecente(){
    const ctn = $('.thematiques-ctn')
    const thematiques = ctn.children('div')
    ctn.append(thematiques.get().reverse())
}
$( function() {
    $( "#accordion" ).accordion(
        {
            header : ".thematique"
        }
    );
  } );