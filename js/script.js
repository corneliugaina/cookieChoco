window.onload = function(){


    // les objets
    let pokemon = {
        score : 0,
        multiplicateur  :1 ,
        autoclicker : 0,
        button : {
            aff : document.getElementById('affichage'),
            cli : document.getElementById('clic'),
            buttonSide : document.getElementsByClassName('container')[0],
            multi : document.getElementById('multiplier'),
            affmul : document.getElementById('multiplication')
            autoclic : document.getElementById('autoclic'),
            boost : document.getElementById('boost'),
        },
        bonus : { 
            active : false,
            prixMulti : 50,
            prixAutoclic : 500,
            prixBoost : 5000,
            boostCount: 1,
            tclic : 0,
            t0 : 1549640231912,
        }
    }


    //les fonctions
    function affScore() {
        txt = "Votre score est de " + pokemon.score + " pikachu."
        pokemon.button.aff.innerText = txt
    }
// francois:
    function affMulti() {
        txt = "x " + pokemon.multiplicateur
        pokemon.button.affmul.innerText = txt 
        
        
    }

    function clicking () {
        tclic = new Date().getTime()
        console.log(tclic)
        if (pokemon.bonus.t0 - pokemon.bonus.tclic < 3000) {
            pokemon.boost = 2;
            } else if (pokemon.bonus.t0 - pokemon.bonus.tclic > 3000) {
                pokemon.boost = 1;
                pokemon.bonus.t0 = 1549640231912
            }
        pokemon.score = pokemon.score + (1 * pokemon.multiplicateur * pokemon.boost)
            //* pokemon.boost)
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
        pokemon.score =- pokemon.bonus.prixMulti
        pokemon.multiplicateur++
        pokemon.bonus.prixMulti = pokemon.bonus.prixMulti * 2
        console.log (pokemon.bonus.prixMulti);
        affScore()
    };


    function boost() {
        t0 = new Date().getTime()
        console.log(t0)

    }

    

    // autoclicker, qui fait qu'a chaque achat, il augmente 
    function achatAutoclicker () {
        pokemon.score -= 200;
    }



    // CORNELIU - START //
    // un clic auto est fait chaque seconde
    setInterval(function autoclicker() { 
        pokemon.score += 1;
        console.log(pokemon.score)
        pokemon.nombreAutoclics = pokemon.nombreAutoclics + 1;
    }, 1000)



    /* function autoclicker(prixAchat, nombreAutoclics) { 
    pokemon.score = pokemon.score + 1;
    pokemon.nombreAutoclics = pokemon.nombreAutoclics + 1;
    
    setInterval(autoclicker(), 1000) */
    // CORNELIU - END //
   


        
   
 

    // appel fonction pour compter le nombre de multiplicateur utilisé
    pokemon.button.cli.addEventListener("click", clicking);

    // appel fonction pour compter le nombre de multiplicateur utilisé
    pokemon.button.multi.addEventListener("click", augmenterMultiplicateur);

    // appel fonction pour lancer le boost
    pokemon.button.boost.addEventListener('click', boost);

   /*  // appel fonction autoclic    
    pokemon.button.autoclic.addEventListener('click', autoclicker); */