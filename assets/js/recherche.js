$( "#tabs" ).tabs({
    active: 0
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