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
            prixMulti : 5,
            prixAutoclic : 6,
            prixBoost : 7,
            boostCount: 1,
            tclic : Number.MAX_SAFE_INTEGER,
            tBoosterOn : 0,
        }
    }


    //Affichage des prix de base//

    pokemon.button.praffMul.innerHTML = "Prix: " + pokemon.bonus.prixMulti;
    pokemon.button.praffautoclic.innerHTML = "Prix: " + pokemon.bonus.prixAutoclic;
    pokemon.button.prBoost.innerHTML = "Prix: " + pokemon.bonus.prixBoost;




    //les fonctions

    function affScore () {
        let txt = pokemon.score + " pikachu(s) !"
        pokemon.button.aff.innerText = txt
    };

    // francois affichage multiplicateur + aff autoclick+aff prix bonus:
    function affMulti() {
        txt = "x" + pokemon.multiplicateur
        pokemon.button.affMul.innerText = txt 
    }

    // Fonctions PRIX : 

    function prMultiplication() {
        txt = "prix : "+ pokemon.bonus.prixMulti
        pokemon.button.praffMul.innerText = txt
    }
    function prAutoclicker () {
        txt = "prix : "+ pokemon.bonus.prixAutoclic
        pokemon.button.praffautoclic.innerText = txt
    }
    function prBooster (){
        txt = "prix : "+pokemon.bonus.prixBoost
        pokemon.button.prBoost.innerText = txt
    }

    // Emilie
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
    //fin Emilie


    // Francois
    function augmenterMultiplicateur () {
        pokemon.score -= pokemon.bonus.prixMulti
        pokemon.multiplicateur++
        pokemon.bonus.prixMulti = pokemon.bonus.prixMulti * 2
        affMulti() 
        affScore()
        activation() 
        prMultiplication()
    };
    //fin Francois

    // Julien
    function boost() {
        pokemon.bonus.tBoosterOn = new Date().getTime()
        
        if (pokemon.boost == 1) {
            pokemon.score -= pokemon.bonus.prixBoost;
            pokemon.boost=2;
            affichageTempsBooster();
            affScore();
            pokemon.bonus.prixBoost = pokemon.bonus.prixBoost * 2;
            prBooster();
        } 
        activation();
    }

    // fin Julien

    // Corneliu 
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
    
    function achatAutoclicker () {
        if (pokemon.score >= 50) {
        pokemon.score = pokemon.score - pokemon.bonus.prixAutoclic;
        pokemon.affautoclic++;
        pokemon.autoclicker++;
        console.log("Achat d'Autoclicker");
        pokemon.bonus.prixAutoclic = pokemon.bonus.prixAutoclic * 2;
        } else {
        console.log("Vous n'avez pas assez de credit pour l'achat de l'Autoclicker");
        }
        callAutoclic ();
        prAutoclicker();
        affScore();

    } 

    function callAutoclic () { 
        if (pokemon.autoclicker = 1) {
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
    }
    // CORNELIU - END


    // appel fonction affiche le score à chaque clic
    pokemon.button.cli.addEventListener('click', clicking)

    // appel fonction pour compter le nombre de multiplicateur utilisé
    pokemon.button.multi.addEventListener('click', augmenterMultiplicateur);

    // appel fonction pour lancer le boost
    pokemon.button.boost.addEventListener('click', boost);

    // appel fonction autoclic    
    pokemon.button.autoClic.addEventListener('click', achatAutoclicker);

}
