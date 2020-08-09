document.getElementById("n1").addEventListener("click",n1);
document.getElementById("n2").addEventListener("click",n2);
document.getElementById("n3").addEventListener("click",n3);
document.getElementById("n4").addEventListener("click",n4);
document.getElementById("n5").addEventListener("click",n5);
document.getElementById("n6").addEventListener("click",n6);
document.getElementById("n7").addEventListener("click",n7);
document.getElementById("n8").addEventListener("click",n8);
document.getElementById("n9").addEventListener("click",n9);
document.getElementById("n0").addEventListener("click",n0);
/*Operaciones */ 
document.getElementById("Suma").addEventListener("click",Suma);
document.getElementById("Resta").addEventListener("click",Resta);
document.getElementById("Multi").addEventListener("click",Multi);
document.getElementById("Divi").addEventListener("click",Divi);
document.getElementById("Resi").addEventListener("click",Resi);
document.getElementById("Inver").addEventListener("click",Inver);
document.getElementById("Raiz").addEventListener("click",Raiz);
document.getElementById("Total").addEventListener("click",Operaciones);
document.getElementById("Limpiar").addEventListener("click",Limpiar);

function n1(){
var aux= document.getElementById('texto').innerHTML;
var almancen=document.getElementById('n1').innerHTML;

document.getElementById('texto').innerHTML = aux+almancen;
}
function n2(){
    var aux= document.getElementById('texto').innerHTML;
    var almancen=document.getElementById('n2').innerHTML;
    
    document.getElementById('texto').innerHTML = aux+almancen;
    }
function n3(){
    var aux= document.getElementById('texto').innerHTML;
    var almancen=document.getElementById('n3').innerHTML;
        
    document.getElementById('texto').innerHTML = aux+almancen;
    }
function n4(){
    var aux= document.getElementById('texto').innerHTML;
    var almancen=document.getElementById('n4').innerHTML;
        
    document.getElementById('texto').innerHTML = aux+almancen;
        }
function n5(){
        var aux= document.getElementById('texto').innerHTML;
        var almancen=document.getElementById('n5').innerHTML;
                
        document.getElementById('texto').innerHTML = aux+almancen;
                }
function n6(){
            var aux= document.getElementById('texto').innerHTML;
            var almancen=document.getElementById('n6').innerHTML;
                        
            document.getElementById('texto').innerHTML = aux+almancen;
                        }  
function n7(){
            var aux= document.getElementById('texto').innerHTML;
            var almancen=document.getElementById('n7').innerHTML;
                                
            document.getElementById('texto').innerHTML = aux+almancen;
                                }  
function n8(){
            var aux= document.getElementById('texto').innerHTML;
            var almancen=document.getElementById('n8').innerHTML;
                                        
            document.getElementById('texto').innerHTML = aux+almancen;
                                        } 
function n9(){
            var aux= document.getElementById('texto').innerHTML;
            var almancen=document.getElementById('n9').innerHTML;
                                                
            document.getElementById('texto').innerHTML = aux+almancen;
                                                } 
function n0(){
            var aux= document.getElementById('texto').innerHTML;
            var almancen=document.getElementById('n0').innerHTML;
                                                        
            document.getElementById('texto').innerHTML = aux+almancen;
             } 
function Suma(){
        var aux= document.getElementById('texto').innerHTML;
        var almancen=document.getElementById('Suma').innerHTML;
                                                            
        document.getElementById('texto').innerHTML = aux+almancen;
                 }                         
function Resta(){
         var aux= document.getElementById('texto').innerHTML;
         var almancen=document.getElementById('Resta').innerHTML;
                                                                
        document.getElementById('texto').innerHTML = aux+almancen;
                     }             
function Multi(){
        var aux= document.getElementById('texto').innerHTML;
        var almancen=document.getElementById('Multi').innerHTML;
                                                                    
        document.getElementById('texto').innerHTML = aux+almancen;
                         }             
function Divi(){
        var aux= document.getElementById('texto').innerHTML;
         var almancen=document.getElementById('Divi').innerHTML;
                                                                        
        document.getElementById('texto').innerHTML = aux+almancen;
                             }             
function Raiz(){
         var aux= document.getElementById('texto').innerHTML;
         var almancen=document.getElementById('Raiz').innerHTML;
                                                                            
        document.getElementById('texto').innerHTML = aux+almancen;
                                 }             
function Inver(){
        var aux= document.getElementById('texto').innerHTML;
        var almancen=document.getElementById('Inver').innerHTML;
                                                                                
        document.getElementById('texto').innerHTML = aux+almancen;
                                     }             
function Resi(){
        var aux= document.getElementById('texto').innerHTML;
        var almancen=document.getElementById('Resi').innerHTML;
                                                                                    
        document.getElementById('texto').innerHTML = aux+almancen;
                                         }  


function Limpiar(){
        document.getElementById('texto').innerHTML = "";

}
 function Operaciones(){
var aux= document.getElementById('texto').innerHTML;
let uno=1;
	let suma = aux.indexOf("+");
	let resta = aux.indexOf("-");
	let div = aux.indexOf("/");
        let mult = aux.indexOf("x");
        let raiz = aux.indexOf("√");
        let resi = aux.indexOf("%");
        let inver = aux.indexOf("%");

        
	if (suma !== -1) {
		arr = aux.split("+",2);
		res = parseInt(arr[0]) + parseInt(arr[1]);
		document.getElementById("texto").innerHTML = res;
	} else if (resta !== -1) {
		arr = aux.split("-",2);
		res = arr[0] - arr[1];
		document.getElementById("texto").innerHTML = res;
		
	} else if (div !== -1) {
		arr = aux.split("/",2);
		res = arr[0] / arr[1];
		document.getElementById("texto").innerHTML = res;
		
	} else if (mult !== -1) {
		arr = aux.split("x",2);
		res = arr[0] * arr[1];
		document.getElementById("texto").innerHTML = res;
		
        }
        else if(raiz!==1){
		arr = aux.split("√",2);
		res =  Math.sqrt(arr[1]);
		document.getElementById("texto").innerHTML = res;
		
        }
        else if(resi!==1){
		arr = aux.split("%",2);
                res = arr[0] % arr[1];
		document.getElementById("texto").innerHTML = res;
		
        }
        else if(inver!==1){
                arr = aux.split("1⁄x",2);
                res = uno / (arr[1]);
		document.getElementById("texto").innerHTML = res;
        }
 }                                                    