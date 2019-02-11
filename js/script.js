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
            multi : document.getElementById('multiplier'),
            affMul : document.getElementById('multiplication'),
            praffMul : document.getElementById('prMultiplication'),
            autoClic : document.getElementById('autoclic'),
            affautoClic: document.getElementById('autoClicker'),
            praffautoclic: document.getElementById('prAutoclicker'),
            boost : document.getElementById('boost'),
            affBoost: document.getElementById('booster'),
            prBoost: document.getElementById('prBooster'),
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

    // francois affichage multiplicateur + aff autoclick+aff prix bonus:
    function affMulti() {
        txt = "x" + pokemon.multiplicateur
        pokemon.button.affMul.innerText = txt 
    }
    function affautoClic() {
        txt = "x" + pokemon.autoclicker
        pokemon.button.affautoClic.innerText = txt 
    }

    function affBooster() {
        txt = "temps:" + (//julien rajouter sa fonction temps!!!)
        pokemon.button.affBoost.innerText = txt 

    }

    function prMultiplication() {
        text = "prix="+pokemon.bonus.prixMulti
        pokemon.button.praffMul.innerText = txt
    }
    function prAutoclicker () {
        text = "prix="+pokemon.bonus.prixAutoclic
        pokemon.button.praffautoclic.innerText = txt
    }
    function prBooster (){
        text = "prix="+pokemon.bonus.prixBoost
        pokemon.button.prBoost.innerText = txt
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
    pokemon.button.autoclic.addEventListener('click', autoclicker);}
