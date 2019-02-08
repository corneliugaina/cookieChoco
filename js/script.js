window.onload = function(){


    // les objets
    let pokemon = {
        score : 0,
        multiplicateur  :1 ,
        autoclicker : 0 ,
        button : {
            aff : document.getElementById('affichage'),
            cli : document.getElementById('clic'),
            buttonSide : document.getElementsByClassName('container')[0],
            multi : document.getElementById('multiplier'),
            autoclic : document.getElementById('autoclic'),
            boost : document.getElementById('boost'),
        }
        
    }

    let bonus = {
        active : false,

    }

    
    //les fonctions

    function affScore () {
        let txt = "Votre score est de " + pokemon.score + " pikachu !"
        aff.innerText = txt
    };

    function clicking () {
        pokemon.score = pokemon.score + (1 * pokemon.multiplicateur)
        console.log (pokemon.score)
        affScore()
    };

    function activate () {
        if (bonus.active === false) {
            console.log(false)
            buttonSide.style.pointerEvents = 'none';
        } else {
            console.log(true)
            buttonSide.style.pointerEvents = 'auto';

            // ca ne marche pas, mais je me demande si cette fonction doit etre appelée à l'user event ou être toujours active... Mais comment faire ?
        }
    };

    function augmenterMultiplicateur () {
        pokemon.multiplicateur++
        console.log(pokemon.multiplicateur);
    };

    function booster () {
        clicking()
        pokemon.score = pokemon.score * 2
        console.log(pokemon.score)
    };



    // appel fonction affiche le score à chaque clic
    cli.addEventListener('click', clicking)

    // appel fonction pour compter le nombre de multiplicateur utilisé
    multi.addEventListener('click', augmenterMultiplicateur);

    // appel fonction pour lancer le boost
    boost.addEventListener('click', booster);

    // appel fonction sur boutons bonus
    buttonSide.addEventListener('focus', activate);
}

