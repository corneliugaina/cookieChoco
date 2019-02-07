window.onload = function(){

<<<<<<< HEAD
=======
<<<<<<< HEAD
    let cli = document.getElementById('clic');
    let aff = document.getElementById('affichage');
    let score =0;
=======
<<<<<<< HEAD
     let cli = document.getElementById('clic');
     let aff = document.getElementById('affichage');
     let score =0;
=======
>>>>>>> 3d825ad326cb4a1e823a0ab1c43dece6309e19fa
    let score = 0;
    var multiplicateur =1 ;

    let pokemon = {
        clicking : function() {
                    score++;
                    console.log (score)
                    let txt = "Votre score est de " + score + " pikachu !"
                    console.log(txt)
                    aff.innerText = txt
        },
        bonus = {
            active : "false",
            activate : function() {
                // stackoverflow propose
                // document.getElementById('id').style.pointerEvents = 'none';
                // document.getElementById('id').style.pointerEvents = 'auto'; 
                // mais rendra aussi idispo le over à mon avis
            },
            augmenterMultiplicateur : function(){
                multiplicateur++
                console.log(multiplicateur);
            }

        },
        


    }

    let cli = document.getElementById('clic');
    let aff = document.getElementById('affichage');
<<<<<<< HEAD
    let multi= document.getElementById('multiplier'); 

=======
>>>>>>> devEmi
>>>>>>> e5c476c980a4b16603dcd98f9c788889f4cbba00



    //exo 4
>>>>>>> 3d825ad326cb4a1e823a0ab1c43dece6309e19fa

    // fonction affiche le score à chaque clic
    cli.addEventListener('click', pokemon.clicking)

<<<<<<< HEAD
    // fonction pour compter le nombre de multiplicateur utilisé
    multi.addEventListener("click", augmenterMultiplicateur);

=======
let multi= document.getElementById('multiplier');   
multi.addEventListener("click", augmenterMultiplicateur);

var multiplicateur=1;
function augmenterMultiplicateur(){
    
    multiplicateur++
    console.log(multiplicateur);
    
}

>>>>>>> 3d825ad326cb4a1e823a0ab1c43dece6309e19fa

}
