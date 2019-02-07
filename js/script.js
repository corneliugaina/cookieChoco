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

    
//exo 4
//var multiplicarteur= ;
}