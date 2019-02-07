window.onload = function(){


    // les objets
    let pokemon = {
        score : 0,
        multiplicateur  :1 ,
        autoclicker : 0 ,
    }

    let bonus = {
        active : "true",

    }

    // les variables

    let cli = document.getElementById('clic');
    let aff = document.getElementById('affichage');
    let multi = document.getElementById('multiplier'); 
    let boost = document.getElementById('boost')
    let buttonSide = document.getElementsByClassName('pokeButtonSide');
    
    //les fonctions


    function clicking () {
        pokemon.score = pokemon.score + (1 * pokemon.multiplicateur)
        console.log (pokemon.score)
        let txt = "Votre score est de " + pokemon.score + " pikachu !"
        aff.innerText = txt
        return pokemon.score
    };

    function activate () {
        if (bonus.active == false) {
            buttonSide.style.pointerEvents = 'none';
        } else {
            buttonSide.style.pointerEvents = 'auto';
        }
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



    // appel fonction affiche le score à chaque clic
    cli.addEventListener('click', clicking)

    // appel fonction pour compter le nombre de multiplicateur utilisé
    multi.addEventListener("click", augmenterMultiplicateur);

    // appel fonction pour lancer le boost
    boost.addEventListener("click", booster);

    // appel fonction sur boutons bonus
    buttonSide.addEventListener(PointerEvent, activate);
}

