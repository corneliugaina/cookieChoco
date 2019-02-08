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
        },
        bonus : false,
        boost : 1,
        tclicS : 0,
        t0S : 0,
    }

   
    //les fonctions

    function affScore () {
        let txt = "Votre score est de " + pokemon.score + " pikachu !"
        pokemon.button.aff.innerText = txt
    };

    function clicking () {
        tclic = new Date();
        tclicS = tclic.getSeconds();

        pokemon.score = pokemon.score + (1 * pokemon.multiplicateur * pokemon.boost)

        console.log(pokemon.boost);
        console.log(tclicS);
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

    function boostTiming () {
        t0 = new Date()
        t0S = t0.getSeconds();
        boost(tOS)
    };

    function boost(T) {
        if (T - tclicS < 30) {
            pokemon.boost = 2;
        } else if (T - tclicS > 30) {
            pokemon.boost = 1;
        }
    }


    // appel fonction affiche le score à chaque clic
    pokemon.button.cli.addEventListener('click', clicking)

    // appel fonction pour compter le nombre de multiplicateur utilisé
    pokemon.button.multi.addEventListener('click', augmenterMultiplicateur);

    // appel fonction pour lancer le boost
    pokemon.button.boost.addEventListener('click', boost);

    // appel fonction sur boutons bonus
    pokemon.button.buttonSide.addEventListener('focus', activate);
}

