window.onload = function(){


    // les objets
    let pokemon = {
        score : 0,
        multiplicateur  :1 ,
        autoclicker : 1,
        boost : 1,
        button : {
            aff : document.getElementById('affichage'),
            cli : document.getElementById('clic'),
            buttonSide : document.getElementsByClassName('container')[0],
            multi : document.getElementById('multiplier'),
            affMul : document.getElementById('multiplication'),
            autoClic : document.getElementById('autoclic'),
            affautoClic: document.getElementById('autoClicker'),
            boost : document.getElementById('boost'),
        },
        bonus : { 
            active : false,
            prixMulti : 50,
            prixAutoclic : 50,
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
        pokemon.bonus.tBoosterOn = new Date().getTime()
        console.log(pokemon.bonus.tBoosterOn)

    }

    
    // CORNELIU - START //
 

    // fonction qui fait qu'a chaque achat d'un autoclicker :
    // 1) le prix d'achat est deduit du score,
    // 2) le prix du autoclicker suivant augmente,
    function achatAutoclicker () {
        pokemon.score =- pokemon.bonus.prixAutoclic;
        pokemon.autoclicker++;
        pokemon.button.affautoClic = 
        pokemon.bonus.prixAutoclic = pokemon.bonus.prixAutoclic * 2;
        console.log("Achat d'Autoclicker");
        pokemon.score = pokemon.score - pokemon.bonus.Autoclic;
        affautoClic();
        
    }
  
    // un clic auto est fait chaque seconde
    
    /* var majScore = setInterval(function autoclicker() { 
                            pokemon.score += 1;
                            console.log(pokemon.score)
                            pokemon.cli = pokemon.cli + 1;
                            }, 1000)
     */


    /* function autoclicker(prixAchat, nombreAutoclics) { 
    pokemon.score -= 200;
    pokemon.autoclicker += 1;
    
    setInterval(autoclicker(), 1000) */
    // CORNELIU - END //
   
        
   
 

    // appel fonction pour compter le nombre de multiplicateur utilisé
    pokemon.button.cli.addEventListener("click", clicking);

    // appel fonction pour compter le nombre de multiplicateur utilisé
    pokemon.button.multi.addEventListener("click", augmenterMultiplicateur);

    // appel fonction pour lancer le boost
    pokemon.button.boost.addEventListener('click', boost);

    // appel fonction autoclic    
    pokemon.button.autoClic.addEventListener('click', achatAutoclicker);}
