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
        tclic: 2,
        tclicS : 0,
        t0S : 0,
    }

   
    

 
    
    //les fonctions
    function affScore() {
        txt = "Votre score est de " + pokemon.score + " pikachu."
        pokemon.button.aff.innerText = txt
    }

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
        score -= 50;
        pokemon.multiplicateur++
        console.log(pokemon.multiplicateur);
    };

    function boostTiming () {
        tclic = 2;
        t0 = new Date()
        t0S = t0.getSeconds();
        t = t0-tclic
        console.log('blabla')
        boost(tOS)
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
    // function autoclicker() { 
    //     document
    //     pokemon.score = pokemon.score + 1;
    //     pokemon.nombreAutoclics = pokemon.nombreAutoclics + 1;
    // }
    // setInterval(autoclicker(), 1000)

   

   
 

    // appel fonction pour compter le nombre de multiplicateur utilisé
    pokemon.button.cli.addEventListener("click", clicking);

    // appel fonction pour compter le nombre de multiplicateur utilisé
    pokemon.button.multi.addEventListener("click", augmenterMultiplicateur);

    // appel fonction pour lancer le boost
    pokemon.button.boost.addEventListener('click', boostTiming);

    // appel fonction autoclic
    pokemon.button.autoclic.addEventListener('click', autoclicker);

}

