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
            affMul : document.getElementById('multiplication'),
            autoClic : document.getElementById('autoclic'),
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

    // francois affichage multiplicateur :
    function affMulti() {
        txt = "x" + pokemon.multiplicateur
        pokemon.button.affMul.innerText = txt 
        txt = "x " + pokemon.multiplicateur
        pokemon.button.affMul.innerText = txt 
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

    // fonction pour activer, desactiver les bonus
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
        affMulti();
    };


    function boost() {
        t0 = new Date().getTime()
        console.log(t0)

    }

    

    // autoclicker, qui fait qu'a chaque achat, il augmente 
    // un clic auto est fait chaque seconde

    /* function autoclicker(prixAchat, nombreAutoclics) { 
    pokemon.score -= 200;
    pokemon.autoclicker += 1;
    
    
    setInterval(autoclicker(), 1000) */

   


        
   
 

    // appel fonction pour compter le nombre de multiplicateur utilisé
    pokemon.button.cli.addEventListener("click", clicking);

    // appel fonction pour compter le nombre de multiplicateur utilisé
    pokemon.button.multi.addEventListener("click", augmenterMultiplicateur);

    // appel fonction pour lancer le boost
    pokemon.button.boost.addEventListener('click', boost);

<<<<<<< HEAD
    // appel fonction sur boutons bonus
    pokemon.button.buttonSide.addEventListener('focus', activate);
}

//Pikachu qui tombe
// let pika = document.getElementById("pika");
// let pokeball = document.getElementById("pokeball");
// pokeball.addEventListener("",function()){
// pika.setAttribute("class","pikabouge");
// }
=======
    // appel fonction autoclic    
    pokemon.button.autoclic.addEventListener('click', autoclicker);
>>>>>>> 5a2107be2678c6810822de50dd1d7aa7737faec2
