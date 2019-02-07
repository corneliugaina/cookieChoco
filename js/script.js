window.onload = function(){

    let score = 0;
    let pokemon = {
        clicking : function (){
                    score++;
                    console.log (score)
                    let txt = "Votre score est de " + score + " pikachu !"
                    console.log(txt)
                    aff.innerText = txt
        },
        multiCount : 0,


    }

    let cli = document.getElementById('clic');
    let aff = document.getElementById('affichage');



    // fonction affiche le score à chaque clic
    cli.addEventListener('click', pokemon.clicking)



    
//exo 4
//var multiplicarteur= ;
}
