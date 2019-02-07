 window.onload = function(){

     let cli = document.getElementById('clic');
     let aff = document.getElementById('affichage');
     let score =0;



//exo 4


    let multi= document.getElementById('multiplier');   
    multi.addEventListener("click", augmenterMultiplicateur);

   
    function augmenterMultiplicateur(1){
        var multiplicateur=1;
        multiplicateur++
        // console.log(multiplicateur);
        
    }
    
    console.log(augmenterMultiplicateur(1));
}
