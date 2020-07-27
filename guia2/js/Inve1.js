var numero;
var total;
var eje1=new Array;
var i,x;
function ejemplo1(){

        numero=parseFloat(prompt("Digite un numero"));
            if(!isNaN(numero) && numero!==null && numero!==""){
            total=Math.abs(numero);
            alert("Su numero con abs es" +" "+total);
            }
                else{
                    alert("Digite un valor valido");
                    
                }
}
function ejemplo2(){

        numero=parseFloat(prompt("Digite un numero"));
            if(!isNaN(numero) && numero!==null && numero!==""){
            total=Math.round(numero);
            alert("Su numero con round es" +" "+total);

             }
                else{
                alert("Digite un valor valido");
                
                }

}
function ejemplo3(){
    
        numero=parseFloat(prompt("Digite un numero"));
            if(!isNaN(numero) && numero!==null && numero!==""){
            total=Math.ceil(numero);
            alert("Su numero con ceil es" +" "+total);
                }
                else{
                    alert("Digite un valor valido");
                }
    
}
function ejemplo4(){
    
        numero=parseFloat(prompt("Digite un numero"));
            if(!isNaN(numero) && numero!==null && numero!==""){
            total=Math.floor(numero);
            alert("Su numero con floor es" +" "+total);
                }
                else{
                    alert("Digite un valor valido");
                }
    
}
function ejemplo5(){
    
    numero=parseFloat(prompt("Digite un numero"));
        if(!isNaN(numero) && numero!==null && numero!==""){
        total=Math.exp(numero);
        alert("Su numero con exp es" +" "+total);
            }
            else{
                alert("Digite un valor valido");
            }

}
function ejemplo6(){
    
    numero=parseFloat(prompt("Digite un numero"));
        if(!isNaN(numero) && numero!==null && numero!==""){
        total=Math.log(numero);
        alert("Su numero con log es" +" "+total);
            }
            else{
                alert("Digite un valor valido");
            }

}
function ejemplo7(){
    total=Math.random();
   
                alert(total);
            
}
function ejemplo8(){
    for(i=0; i<=2; i++){

    
eje1=prompt("Digite el nombre de 3 frutas");


document.write(" "+eje1+"");

}
    
    
    }
 

    

