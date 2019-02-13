window.onload = function(){
    

    // les objets
    let pokemon = {
        score : 0,
        multiplicateur  :1 ,
        autoclicker :0 ,
        boost : 1,
        affQuoteTxt: 0,
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
            affQuote : document.getElementById('quoteDisplay'),
        },
        bonus : { 
            active : false,
            prixMulti : 25,
            prixAutoclic : 250,
            prixBoost : 2500,
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
        let txt = "x" + pokemon.multiplicateur
        pokemon.button.affMul.innerText = txt 
    }
    function affautoClic() {
        let txt = "x" + pokemon.autoclicker    
        pokemon.button.affautoClic.innerText = txt
    } 


    // Fonctions PRIX : 
    function prMultiplication() {
        txt = "Prix : " + pokemon.bonus.prixMulti  + " ₽"
        pokemon.button.praffMul.innerText = txt
    }
    function prAutoclicker () {
        txt = "Prix : " + pokemon.bonus.prixAutoclic + " ₽"
        pokemon.button.praffautoclic.innerText = txt
    }
    function prBooster (){
        txt = "Prix : " + pokemon.bonus.prixBoost  + " ₽"
        pokemon.button.prBoost.innerText = txt
    }
    //pour afficher prix initial
    prMultiplication()
    prAutoclicker()
    prBooster() 

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
        selectionQuote ()
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
        document.getElementById("booster").innerHTML = timeleft;
        var downloadTimer = setInterval(function(){
            if(timeleft <= 0){
                clearInterval(downloadTimer);
                document.getElementById("booster").innerHTML = "0";
                pokemon.boost= 1;
                activation();
            }
            timeleft--;
            document.getElementById("booster").innerHTML = timeleft;
        }, 1000);
    }

    // Fonction qui permettra d'effectuer l'achat d'autoclic
    function achatAutoclicker () {
        if (pokemon.score >= pokemon.bonus.prixAutoclic) {
            pokemon.score = pokemon.score - pokemon.bonus.prixAutoclic;
            console.log("Achat d'Autoclicker");
            pokemon.bonus.prixAutoclic = pokemon.bonus.prixAutoclic * 2;
        } else {
           console.log("Vous n'avez pas assez de credit pour l'achat de l'Autoclicker");
        }
        callAutoclic (); // Appel de la fonction du lancement de l'autoclicker
        activation() // 
        prAutoclicker(); // maj du prix (+100% apres chaque achat)    
    } 
// Fonction du lancement d'autocliker une fois celui-ci achete 
    function callAutoclic () { 
        if (pokemon.autoclicker >= 0) {
            pokemon.autoclicker++;
            setInterval(function autoclicker () {
                pokemon.score += 1;
                console.log(pokemon.score)
                pokemon.cli = pokemon.cli + 1;
                affScore()
                activation();
            }, 1000);
            console.log("Lancement autoclic");
        } else {    
            console.log("pas d'autoclic a appeller");
        } 
    affautoClic(); // mettre a jour le nombre d'autoclics deja achetes 
    affScore(); // maj du score
    }


    /////////////////////////////////////////////////////////////////
    // Differentes phrases de narration du pika-clicker assignees a la variable quote, de 0 a 9 (10 niveaux)
    // Fonction qui va afficher un message (BESOIN DE LE STYLER DANS SCSS !)
    function selectionQuote () {
        // Conditionnelles d'affichage du message, selon le score. 
        if (pokemon.score <= 50) {
            pokemon.affQuoteTxt = 'Level 0 : Tes Pikachus foutent le bordel dans la cuisine !';
            pokemon.button.affQuote.innerText = pokemon.affQuoteTxt;
        } else if (pokemon.score < 150 ) {
            pokemon.affQuoteTxt = 'Level 1 : Un gang de Pikachus sevit dans ton jardin et elecrifient la mare aux magicarpes !';
            pokemon.button.affQuote.innerText = pokemon.affQuoteTxt;
        } else if (pokemon.score < 300) {
            pokemon.affQuoteTxt = 'Level 2 : Une foule de Pikachus enfilent leur gilets jaunes et cassent le quartier !';
            pokemon.button.affQuote.innerText = pokemon.affQuoteTxt;
        } else if (pokemon.score < 800) {
            pokemon.affQuoteTxt = 'Level 3 : Tes Pikachus creent un syndicat et bloquent le ring de Bruxelles !';
            pokemon.button.affQuote.innerText = pokemon.affQuoteTxt;
        } else if (pokemon.score < 2000) {
            pokemon.affQuoteTxt = 'Level 4 : Tes Pikachus passent les communes à facilité et prennent en tenaille la région flamande !';
            pokemon.button.affQuote.innerText = pokemon.affQuoteTxt;
        } else if (pokemon.score < 3000) {
            pokemon.affQuoteTxt = 'Level 5 : Tes Pikachus prennent d\'assaut le Benelux, les luxembourgeois créent la crypto Pikacoin à leur éfigie ! !';
            pokemon.button.affQuote.innerText = pokemon.affQuoteTxt;
        } else if (pokemon.score < 6000) {
            pokemon.affQuoteTxt = 'Level 6 : La France est prise pour cible, tes Pikachus font concurrence aux Lapins Crétins !'; 
            pokemon.button.affQuote.innerText = pokemon.affQuoteTxt;
        } else if (pokemon.score < 10000) {
            pokemon.affQuoteTxt = 'Level 7 : Tes Pikachus s\'organisent et commencent à puiser l\'énergie des centrales nucléaires !'; 
            pokemon.button.affQuote.innerText = pokemon.affQuoteTxt;
        } else if (pokemon.score < 20000) {
            pokemon.affQuoteTxt = 'Level 8 : Invasion de Pikachus dans toute l\'Europe, ils donnent de l\'énergie renouvelable !'; 
            pokemon.button.affQuote.innerText = pokemon.affQuoteTxt;
        } else if (pokemon.score < 30000) {
            pokemon.affQuoteTxt = 'Level 9 : Tes Pikachus créent leur nouvel ordre mondial et déclarent le Nouvel Age Electrique !'; 
            pokemon.button.affQuote.innerText = pokemon.affQuoteTxt;
        } else if (pokemon.score < 40000) {
            pokemon.affQuoteTxt = 'Level 10 : Le monde entier est envahi par tes Pikachus !';
            pokemon.button.affQuote.innerText = pokemon.affQuoteTxt;
        } else if (pokemon.score < 50000) {
            pokemon.affQuoteTxt = 'Level 11 : Les fusees de la NASA sont alimentées par tes Pikachu, tes pokemons se lancent à la conquête de la Lune !';
            pokemon.button.affQuote.innerText = pokemon.affQuoteTxt;
        } else if (pokemon.score < 100000) {
            pokemon.affQuoteTxt = 'Level 12 : Tes Pikachus construisent des colonies sur Mars et Elon Musk installe un Pikachu dans chaque Tesla !';
            pokemon.button.affQuote.innerText = pokemon.affQuoteTxt;
        } else if (pokemon.score < 200000) {
            pokemon.affQuoteTxt = 'Level 13 : Le systeme solaire est renommé en \'Système Pikachu\' !';
            pokemon.button.affQuote.innerText = pokemon.affQuoteTxt;
        } else if (pokemon.score < 500000) {
            pokemon.affQuoteTxt = 'Level 14 : Tes Pikachu voyagent à la vitesse de la lumière et se mettent à la conquête de la Voie Lactée !';
            pokemon.button.affQuote.innerText = pokemon.affQuoteTxt;
        } else {
            pokemon.affQuoteTxt = 'Level 15 : Tes Pikachu mettent au point une machine de voyage spatio-temporelle et envahissent les dimensions parallèles !';
            pokemon.button.affQuote.innerText = pokemon.affQuoteTxt;
        } 
    }


    // appel fonction affiche le score à chaque clic
    pokemon.button.cli.addEventListener('click', clicking)

    // appel fonction pour compter le nombre de multiplicateur utilisé
    pokemon.button.multi.addEventListener('click', augmenterMultiplicateur);

    // appel fonction pour lancer le boost
    pokemon.button.boost.addEventListener('click', boost);

    // appel fonction autoclic    
    pokemon.button.autoClic.addEventListener('click', achatAutoclicker);



    //JULIEN - Fonction pour créer les pokeballs




    let pokeballDrawer = function(topColor, bottomColor, idCanvas){

        var canvas = document.getElementById(idCanvas);
        var ctx = canvas.getContext("2d");
        var externalRadius = (canvas.width / 2) - canvas.width * 0.04;

        var internalRadius = externalRadius /2;
        var posX = canvas.width / 2;
        var posY = canvas.height / 2;
        var heightRect = posX/3;
        var widthRect = canvas.width - canvas.width*0.1;


        let drawCircle = function(Radius, Color){
            ctx.fillStyle = Color
            ctx.beginPath();
            ctx.arc(posX,posY,Radius,0,2*Math.PI);
            ctx.stroke();
            ctx.closePath();
            ctx.fill();
        }

        drawCircle(externalRadius, "black")

        //Lower part
        ctx.fillStyle = bottomColor;
        ctx.beginPath();
        ctx.arc(posX,posY,externalRadius-externalRadius*0.08,0,Math.PI);
        ctx.stroke();
        ctx.closePath();
        ctx.fill();

        //Higher part
        ctx.fillStyle = topColor;
        ctx.beginPath();
        ctx.arc(posX,posY,externalRadius-externalRadius*0.08,Math.PI,2*Math.PI);
        ctx.stroke();
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = "#000000";
        ctx.fillRect(posX - widthRect/2, posY-heightRect/2, widthRect, heightRect);


        drawCircle(internalRadius+internalRadius*0.16, "black")
        drawCircle(internalRadius-internalRadius*0.16, "white")
        drawCircle(internalRadius-internalRadius*0.36, "black")
        drawCircle(internalRadius-internalRadius*0.50, "white")

    }
    pokeballDrawer("grey","lightgrey","multiInactiveCanvas");
    pokeballDrawer("grey","lightgrey","autoInactiveCanvas");
    pokeballDrawer("grey","lightgrey","boostInactiveCanvas");
    pokeballDrawer("#974a00","white","multiActiveCanvas");
    pokeballDrawer("silver","white","autoActiveCanvas");
    pokeballDrawer("gold","white","boostActiveCanvas");
    pokeballDrawer("red","white","mainPokeballCanvas");


}
