window.onload = function(){

    let score = 0;
    var multiplicateur =1 ;

    let pokemon = {
        clicking : function() {
                    score++;
                    console.log (score)
                    let txt = "Votre score est de " + score + " pikachu !"
                    console.log(txt)
                    aff.innerText = txt
        },
        bonus = {
            active : "false",
            activate : function() {
                // stackoverflow propose
                // document.getElementById('id').style.pointerEvents = 'none';
                // document.getElementById('id').style.pointerEvents = 'auto'; 
                // mais rendra aussi idispo le over à mon avis
            },
            augmenterMultiplicateur : function(){
                multiplicateur++
                console.log(multiplicateur);
            }

        },
        


    }

    let cli = document.getElementById('clic');
    let aff = document.getElementById('affichage');
    let multi= document.getElementById('multiplier'); 


    // fonction affiche le score à chaque clic
    cli.addEventListener('click', pokemon.clicking)

    // fonction pour compter le nombre de multiplicateur utilisé
    multi.addEventListener("click", augmenterMultiplicateur);


}

