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
    }

   
    

 
    
    //les fonctions


    function clicking () {
        pokemon.score = pokemon.score + (1 * pokemon.multiplicateur * pokemon.boost)
        console.log (pokemon.score)
        affScore()
    };

    function activate () {
        // stackoverflow propose
        // document.getElementById('id').style.pointerEvents = 'none';
        // document.getElementById('id').style.pointerEvents = 'auto'; 
        // mais rendra aussi indispo le over à mon avis
    };

    function augmenterMultiplicateur () {
        score -= 50
        pokemon.multiplicateur++
        console.log(pokemon.multiplicateur);
    };

    function booster () {
       
    };

    function boost(T) {
        if (T - tclicS < 30) {
            pokemon.boost = 2;
        } else if (T - tclicS > 30) {
            pokemon.boost = 1;
        }
    }

    // autoclicker, qui fait qu'a chaque achat, il augmente 
    // un clic auto est fait chaque seconde
    setInterval(function autoclicker() { 
        document
        pokemon.score = pokemon.score + 1;
        console.log(pokemon.score)
        pokemon.nombreAutoclics = pokemon.nombreAutoclics + 1;
    }, 1000)

    myIntervalId = setInterval;

   
 

    // appel fonction pour compter le nombre de multiplicateur utilisé
    multi.addEventListener("click", augmenterMultiplicateur);

    // appel fonction pour lancer le boost
    pokemon.button.boost.addEventListener('click', booster);

    // appel fonction pour lancer le boost
    boost.addEventListener("click", booster);
}

