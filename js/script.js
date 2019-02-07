window.onload = function(){

    let cli = document.getElementById('clic');
    let aff = document.getElementById('affichage');
    let score = 0;

    // fonction affiche le score à chaque clic


    cli.addEventListener('click', clicking)

    function clicking(){
        console.log('clic')
        score ++;
        console.log (score)
        let txt = "Votre score est de " + score + " pikachu !"
        console.log(txt)
        aff.innerText = txt
    }

<<<<<<< HEAD
    
//exo 4
//var multiplicarteur= ;
}
=======

//exo 4
var multiplicarteur= ;
}


// Test Corneliu 9h14 
>>>>>>> a209d2f6715796bb35ee50bdbd98e720d5f97175
