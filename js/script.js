window.onload = function(){


    // les objets
    let pokemon = {
        score : 0,
        multiplicateur  :1 ,
        autoclicker : 0,
        boost : 1,
        button : {
            aff : document.getElementById('affichage'),
            cli : document.getElementById('clic'),
            buttonSide : document.getElementsByClassName('container')[0],
<<<<<<< HEAD
            multi : document.getElementById('multiActive'),
=======
            multi : document.getElementById('multiplier'),
>>>>>>> 5918b1c1b9d713a350bbc6f349b3c0ed095182ec
            affMul : document.getElementById('multiplication'),
            autoClic : document.getElementById('autoclicActive'),
            affautoClic: document.getElementById('autoClicker'),
<<<<<<< HEAD
            boost : document.getElementById('boostActive'),
=======
            boost : document.getElementById('boost'),
>>>>>>> 5918b1c1b9d713a350bbc6f349b3c0ed095182ec
        },
        bonus : { 
            active : false,
            prixMulti : 50,
            prixAutoclic : 500,
            prixBoost : 5000,
            boostCount: 1,
            tclic : Number.MAX_SAFE_INTEGER,
            tBoosterOn : 0,
        }
    }


    //les fonctions
    function affScore() {
        txt = "Votre score est de " + pokemon.score + " pikachu."
        pokemon.button.aff.innerText = txt
    }

    // francois affichage multiplicateur + aff autoclick:
    function affMulti() {
        txt = "x" + pokemon.multiplicateur
        pokemon.button.affMul.innerText = txt 
    }
    function affautoClic() {
        txt = "x" + pokemon.autoclicker
        pokemon.button.affautoClic.innerText = txt 
    }


    function clicking () {
        pokemon.bonus.tclic = new Date().getTime()
        console.log(pokemon.bonus.tclic +" " + pokemon.bonus.tBoosterOn)
        if (pokemon.bonus.tclic - pokemon.bonus.tBoosterOn < 30000) {
            pokemon.boost = 2;
            console.log("Booster x2");
            } else if (pokemon.bonus.tclic - pokemon.bonus.tBoosterOn >= 30000) {
                pokemon.boost = 1;
                console.log("Booster x1");
                //pokemon.bonus.tBoosterOn = 1549640231912
            }
        pokemon.score = pokemon.score + (1 * pokemon.multiplicateur * pokemon.boost)
            //* pokemon.boost)
        console.log (pokemon.score)
        activation()
        affScore()
    };


    // fonction pour activer, desactiver les bonus
    function activation () {
        if (pokemon.score >= 50) {
            document.getElementById('multiActive').style.display = 'initial';
            document.getElementById('multiplication').style.display = 'inline-block';
            document.getElementById('multiInactive').style.display = 'none';
        } else {
            document.getElementById('multiActive').style.display = 'none';
            //document.getElementById('multiActive').addEventListerner('click', noClick);
            document.getElementById('multiInactive').style.display = 'initial';
        }
        if (pokemon.score >= 500) {
            document.getElementById('autoclicActive').style.display = 'initial';
            document.getElementById('autoclicInactive').style.display = 'none';
        } else {
            document.getElementById('autoclicActive').style.display = 'none';
            //document.getElementById('multiActive').addEventListerner('click', noClick);
            document.getElementById('autoclicInactive').style.display = 'initial';
        }
        if (pokemon.score >= 5000) {
            document.getElementById('boostActive').style.display = 'initial';
            document.getElementById('boostInactive').style.display = 'none';
        } else {
            document.getElementById('boostActive').style.display = 'none';
            //document.getElementById('multiActive').addEventListerner('click', noClick);
            document.getElementById('boostInactive').style.display = 'initial';
        }
            // document.getElementById('id').style.pointerEvents = 'none';
            // document.getElementById('id').style.pointerEvents = 'auto'; 
    }

    function augmenterMultiplicateur () {
        pokemon.score =- pokemon.bonus.prixMulti
        pokemon.multiplicateur++
        pokemon.bonus.prixMulti = pokemon.bonus.prixMulti * 2
        console.log (pokemon.bonus.prixMulti);
        affScore()
        affMulti();
    };


    function boost() {
        pokemon.bonus.tBoosterOn = new Date().getTime()
        console.log(pokemon.bonus.tBoosterOn)

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

    // appel fonction autoclic    
<<<<<<< HEAD
    //pokemon.button.autoClic.addEventListener('click', autoclicker);

}

=======
    pokemon.button.autoclic.addEventListener('click', autoclicker);}
>>>>>>> 5918b1c1b9d713a350bbc6f349b3c0ed095182ec
