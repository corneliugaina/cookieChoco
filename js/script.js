window.onload = function(){


    // les objets
    let pokemon = {
        score : 0,
        multiplicateur  :1 ,
        autoclicker : 0 ,
    }

    let bonus = {
        active : "false",

    }

    // les variables

    let cli = document.getElementById('clic');
    let aff = document.getElementById('affichage');
    let multi = document.getElementById('multiplier'); 
    let autoclic = document.getElementById('autoclic');
    let boost = document.getElementById('boost');

    
    //les fonctions


    function clicking () {
        pokemon.score = pokemon.score + (1 * pokemon.multiplicateur)
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
        // clicking()
        pokemon.score = pokemon.score * 2
        console.log(pokemon.score)
    };


    setInterval(function autoclicker() {
        pokemon.score = pokemon.score++
        console.log(pokemon.score)
    }, 1)
    // autoclickerLabo, qui fait qu'a chaque achat, il augmente 
    // un clic auto est fait chaque seconde 
 


    // appel fonction affiche le score à chaque clic
    cli.addEventListener('click', clicking)   function autoclickerLabo () {
        pokemon.score++
        console.log(pokemon.score++)
    }

    // appel fonction pour compter le nombre de multiplicateur utilisé
    multi.addEventListener("click", augmenterMultiplicateur);

    // appel fonction pour lancer l'achat d'un autoclick
    autoclic.addEventListener("click", autoclicker);

    // appel fonction pour lancer le boost
    boost.addEventListener("click", booster);
}

