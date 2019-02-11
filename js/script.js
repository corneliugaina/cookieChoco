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
            prixBoost : 5,
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

    function prMultiplication() {
        txt = "prix = "+ pokemon.bonus.prixMulti
        pokemon.button.praffMul.innerText = txt
    }
    function prAutoclicker () {
        txt = "prix = "+pokemon.bonus.prixAutoclic
        pokemon.button.praffautoclic.innerText = txt
    }
    function prBooster (){
        txt = "prix = "+pokemon.bonus.prixBoost
        pokemon.button.prBoost.innerText = txt
    }


    function clicking () {
        pokemon.bonus.tclic = new Date().getTime()
        console.log(pokemon.bonus.tclic +" " + pokemon.bonus.tBoosterOn)
        if (pokemon.bonus.tclic - pokemon.bonus.tBoosterOn < 30000) {
            pokemon.boost = 2;
            console.log("Booster x" + pokemon.boost);
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
        console.log("activation")
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
        console.error(pokemon.boost);
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
        console.log(pokemon.bonus.tclic +" " + pokemon.bonus.tBoosterOn)
        console.log(pokemon.bonus.tclic - pokemon.bonus.tBoosterOn)
        
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
        console.warn("affichageTempsBooster")
        var downloadTimer = setInterval(function(){
            console.warn(timeleft)
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
   
        
   
 

    function autoclickerLabo () {
        pokemon.score++
        console.log(pokemon.score++)
    }

    // appel fonction affiche le score à chaque clic
    pokemon.button.cli.addEventListener('click', clicking)

    // appel fonction pour compter le nombre de multiplicateur utilisé
    pokemon.button.multi.addEventListener('click', augmenterMultiplicateur);

    // appel fonction pour lancer le boost
    pokemon.button.boost.addEventListener('click', boost);

    // appel fonction autoclic    
    //pokemon.button.autoClic.addEventListener('click', autoclicker);
}

