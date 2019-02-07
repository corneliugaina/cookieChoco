window.onload = function(){


    // les objets
    let pokemon = {
        score : 0,
        multiplicateur  :1 ,

    }

    let bonus = {
        active : "false",

    }

    // les variables

    let cli = document.getElementById('clic');
    let aff = document.getElementById('affichage');
    let multi = document.getElementById('multiplier'); 
    let boost = document.getElementById('boost')

    
    //les fonctions


    function clicking () {
        pokemon.score++;
        console.log (pokemon.score)
        let txt = "Votre score est de " + pokemon.score + " pikachu !"
        aff.innerText = txt
        return pokemon.score
    };

    function activate () {
        // stackoverflow propose
        // document.getElementById('id').style.pointerEvents = 'none';
        // document.getElementById('id').style.pointerEvents = 'auto'; 
        // mais rendra aussi indispo le over à mon avis
    };

    function augmenterMultiplicateur () {
        pokemon.multiplicateur++
        console.log(pokemon.multiplicateur);
    };

    function booster () {
        setInterval()
    };

    // fonction affiche le score à chaque clic
    cli.addEventListener('click', clicking)

    // fonction pour compter le nombre de multiplicateur utilisé
    multi.addEventListener("click", augmenterMultiplicateur);


    // fonction pour lancer le boost
    boost.addEventListener("click", booster);
}

