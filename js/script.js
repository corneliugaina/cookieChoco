window.onload = function(){


    // les objets
    let pokemon = {
        score : 0,
        multiplicateur  :1 ,
        nombreAutoclics: myIntervalId,
    }

    let bonus = {
        active : "false",

    }

    // les variables

    let cli = document.getElementById('clic');
    let aff = document.getElementById('affichage');
    let multi = document.getElementById('multiplier'); 
    let autoclic = document.getElementById('autoclic'); // variable autoclic
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

    // appel fonction pour lancer l'achat d'un autoclick
    autoclic.addEventListener("click", autoclicker);

    // appel fonction pour lancer le boost
    boost.addEventListener("click", booster);
}

