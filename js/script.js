 window.onload = function(){

<<<<<<< HEAD
     let cli = document.getElementById('clic');
     let aff = document.getElementById('affichage');
     let score =0;
=======
    let score = 0;
    let pokemon = {
        clicking : function (){
                    score++;
                    console.log (score)
                    let txt = "Votre score est de " + score + " pikachu !"
                    console.log(txt)
                    aff.innerText = txt
        },
        bonus {

        },
        multiCount : 0,


    }

    let cli = document.getElementById('clic');
    let aff = document.getElementById('affichage');
>>>>>>> devEmi



//exo 4


    let multi= document.getElementById('multiplier');   
    multi.addEventListener("click", augmenterMultiplicateur);

    var multiplicateur=1;
    function augmenterMultiplicateur(){
        
        multiplicateur++
        console.log(multiplicateur);
        
    }
    

}
