 window.onload = function(){

     let cli = document.getElementById('clic');
     let aff = document.getElementById('affichage');
     let score =0;



//exo 4


    let multi= document.getElementById('multiplier');   
    multi.addEventListener("click", augmenterMultiplicateur);

    var multiplicateur=1;
    function augmenterMultiplicateur(){
        
        multiplicateur++
        console.log(multiplicateur);
        
    }
    

}
