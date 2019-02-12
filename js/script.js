window.onload = function(){
    

    // les objets
    let pokemon = {
        score : 0,
        multiplicateur  :1 ,
        autoclicker :0 ,
        boost : 1,
        button : {
            aff : document.getElementById('affichage'),
            cli : document.getElementById('clic'),
            buttonSide : document.getElementsByClassName('container')[0],
            multi : document.getElementById('multiActive'),
            affMul : document.getElementById('multiplication'),
            autoClic : document.getElementById('autoclicActive'),
            boost : document.getElementById('boostActive'),
            affautoClic: document.getElementById('autoClicker'),
            praffMul : document.getElementById('prMultiplication'),
            praffautoclic: document.getElementById('prAutoclicker'),
            affBoost: document.getElementById('booster'),
            prBoost: document.getElementById('prBooster'), 
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

    function affScore () {
        let txt = "Votre score est de " + pokemon.score + " pikachu !"
        pokemon.button.aff.innerText = txt
    };

    // francois affichage multiplicateur + aff autoclick+aff prix bonus:
    function affMulti() {
        txt = "x" + pokemon.multiplicateur
        pokemon.button.affMul.innerText = txt 
    }

    function affBooster() {
        txt = "temps :" + ("//julien rajouter sa fonction temps!!!")
        pokemon.button.affBoost.innerText = txt 
    }

    function affautoClic() {
        txt = "x" + pokemon.autoclicker    
        pokemon.button.affautoClic.innerText = txt
    } 

    /* function quoteDisplay () {
        txt = "Test : " + po
        pokemon.affQuote.innerText = txt
    }
 */

    // Fonctions PRIX : 

    function prMultiplication() {
        txt = "prix = "+ pokemon.bonus.prixMulti
        pokemon.button.praffMul.innerText = txt
    }
    function prAutoclicker () {
        txt = "Buy: "+ pokemon.bonus.prixAutoclic + " ₽"
        pokemon.button.praffautoclic.innerText = txt
    }
    function prBooster (){
        txt = "prix = "+pokemon.bonus.prixBoost
        pokemon.button.prBoost.innerText = txt
    }


    function clicking () {
        pokemon.bonus.tclic = new Date().getTime()
        if (pokemon.bonus.tclic - pokemon.bonus.tBoosterOn < 30000) {
            pokemon.boost = 2;
            } else if (pokemon.bonus.tclic - pokemon.bonus.tBoosterOn >= 30000) {
                pokemon.boost = 1;
            }
        pokemon.score = pokemon.score + (1 * pokemon.multiplicateur * pokemon.boost)
        activation()
        affScore()
    };


    // fonction pour activer, desactiver les bonus
    function activation () {
        if (pokemon.score >= pokemon.bonus.prixMulti) {
            document.getElementById('multiActive').style.display = 'initial';
            document.getElementById('multiplication').style.display = 'inline-block';
            document.getElementById('multiInactive').style.display = 'none';
        } else {
            document.getElementById('multiActive').style.display = 'none';
            document.getElementById('multiInactive').style.display = 'initial';
        }
        if (pokemon.score >= pokemon.bonus.prixAutoclic) {
            document.getElementById('autoclicActive').style.display = 'initial';
            document.getElementById('autoClicker').style.display = 'inline-block';
            document.getElementById('autoclicInactive').style.display = 'none';
        } else {
            document.getElementById('autoclicActive').style.display = 'none';
            document.getElementById('autoclicInactive').style.display = 'initial';
        }
        if (pokemon.score >= pokemon.bonus.prixBoost && pokemon.boost == 1) {
            document.getElementById('boostActive').style.display = 'initial';
            document.getElementById('booster').style.display = 'inline-block';
            document.getElementById('boostInactive').style.display = 'none';
        } else {
            document.getElementById('boostActive').style.display = 'none';
            document.getElementById('boostInactive').style.display = 'initial';
        }
    }

    function augmenterMultiplicateur () {
        pokemon.score -= pokemon.bonus.prixMulti
        pokemon.multiplicateur++
        pokemon.bonus.prixMulti = pokemon.bonus.prixMulti * 2
        affMulti() 
        affScore()
        activation() 
        prMultiplication()
    };
    // function boostTiming () {
    //     t0 = new Date()
    //     t0S = t0.getSeconds();
    //     boost(tOS)
    // };

    function boost() {
        pokemon.bonus.tBoosterOn = new Date().getTime()
        
        if (pokemon.boost == 1) {
            pokemon.score -= pokemon.bonus.prixBoost;
            pokemon.boost=2;
            affichageTempsBooster();
            affScore();
            pokemon.bonus.prixBoost = pokemon.bonus.prixBoost * 2;
            prBooster();
        } else {
            console.log("Booster déjà acheté!") // Mettre un beau message par après? // 
        }
        activation();
    }

    
  
 
    function affichageTempsBooster(){
        var timeleft = 30;
        var downloadTimer = setInterval(function(){
            timeleft--;
            document.getElementById("booster").innerHTML = timeleft;
            if(timeleft <= 0){
                clearInterval(downloadTimer);
                document.getElementById("booster").innerHTML = "0";
                pokemon.boost= 1;
                activation();
            }
        }, 1000);
    }
    
    // CORNELIU - START //
     // fonction qui fait qu'a chaque achat d'un autoclicker :
    // 1) le prix d'achat est deduit du score,
    // 2) le prix du autoclicker suivant augmente (wip)

    prAutoclicker(); // appel de la fonction affichage prix

    // Fonction qui permettra d'effectuer l'achat d'autoclic
    function achatAutoclicker () {
        if (pokemon.score >= 50) {
        pokemon.score = pokemon.score - pokemon.bonus.prixAutoclic;
        console.log("Achat d'Autoclicker");
        pokemon.bonus.prixAutoclic = pokemon.bonus.prixAutoclic * 2;
        } else {
        console.log("Vous n'avez pas assez de credit pour l'achat de l'Autoclicker");
        }
        callAutoclic ();
        activation()
        prAutoclicker();        
       } 

    // Fonction qui va lancer l'autoclic une fois l'achat effectue 
    function callAutoclic () { 
        if (pokemon.autoclicker >= 0) {
            pokemon.autoclicker++;
            setInterval(function autoclicker () {
            pokemon.score += 1;
            console.log(pokemon.score)
            pokemon.cli = pokemon.cli + 1;
            affScore();
            }, 1000);
            console.log("Lancement autoclic");
        } else {    
        console.log("pas d'autoclic a appeller");
        } 
        affautoClic();
        affScore();
    }

    /////////////////////////////////////////////////////////////////

    // Differentes phrases de narration du pika-clicker assignees a la variable quote, de 0 a 9 (10 niveaux)

    /* function callQuote () {
        if (pokemon.quote.ordreQuote = )
    } */

    

/*     function selectionQuote () {
    switch (true) {
        case (pokemon.score < 100): 'Level 1 : Invasion de Pikachu dans ton jardin';
            break;
        case (pokemon.score < 200): 'Level 2 : Invasion de Pikachu dans ton quartier';
            break;
        case (pokemon.score < 400): 'Level 3 : Invasion de Pikachu dans la region';
            break;
        case (pokemon.score < 800): 'Level 4 : Invasion de Pikachu dans tout le pays';
            break;
        case (pokemon.score < 1600): 'Level 5 : Invasion de Pikachu sur le continent';
            break;
        case (pokemon.score < 2500): 'Level 6 : Invasion de Pikachu sur le monde entier';
            break;
        case (pokemon.score < 5000): 'Level 7 : Invasion de Pikachu dans tout le systeme solaire';
            break;
        case (pokemon.score < 10000): 'Level 8 : Invasion de Pikachu dans toute la Voie Lactee';
            break;
        case (pokemon.score < 20000): 'Level 9 : Invasion de Pikachu dans tout l\'univers';
            break;
        case (pokemon.score < 50000): 'Level 10 : "Les pikachu sont hors controle, ils envahissent les dimensions paralleles';
            break;
        } 
    }

    var callQuote = selectionQuote(); */
    // CORNELIU - END //
   
        

    // appel fonction affiche le score à chaque clic
    pokemon.button.cli.addEventListener('click', clicking)

    // appel fonction pour compter le nombre de multiplicateur utilisé
    pokemon.button.multi.addEventListener('click', augmenterMultiplicateur);

    // appel fonction pour lancer le boost
    pokemon.button.boost.addEventListener('click', boost);

    // appel fonction autoclic    
    pokemon.button.autoClic.addEventListener('click', achatAutoclicker);

}
