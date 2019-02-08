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
<<<<<<< HEAD
        tclic: 2,
        tclicS : 0,
        t0S : 0,
=======
>>>>>>> 66e03adeabb07b3723309dfccf97f01a1b72dae0
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
        // score -= 50
        pokemon.multiplicateur++
        console.log(pokemon.multiplicateur);
    };

<<<<<<< HEAD
    function boostTiming () {
        tclic = 2;
        t0 = new Date()
        t0S = t0.getSeconds();
        t = t0-tclic
        console.log('blabla')
        boost(tOS)
=======
    function booster () {
       
>>>>>>> 66e03adeabb07b3723309dfccf97f01a1b72dae0
    };

    function boost(T) {
        if (T - pokemon.tclicS < 30) {
            pokemon.boost = 2;
        } else if (T - pokemon.tclicS > 30) {
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
<<<<<<< HEAD
    pokemon.button.boost.addEventListener('click', boostTiming);
=======
    pokemon.button.boost.addEventListener('click', booster);
>>>>>>> 66e03adeabb07b3723309dfccf97f01a1b72dae0

    // appel fonction pour lancer le boost
    boost.addEventListener("click", booster);
}

