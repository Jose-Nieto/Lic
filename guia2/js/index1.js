var numero=new Array;

var i;
var opcion=-true;
var longuitud;
var pares=0, impares=0,SumaT;
var CantImpar;
var sumaPares=0;
var sumaImpares=0;
var sumaTotal

    numero= prompt("Digite el numero a evaluar");

    document.getElementById("NumeroPrincipal").innerHTML = numero;
    longuitud=numero.length;
    
    document.getElementById("Longuitud").innerHTML ="La longuitud de su numero es de: "+ longuitud;
for(i=0; i<=numero.length;i++)
{
    if(numero[i]%2===0 || numero[i]===0){
        pares++;
        sumaPares= sumaPares+parseInt(numero[i]);
        document.getElementById("Pares").innerHTML ="Cantidad de pares de su numero "+numero+ " es de: "+ pares;
        document.getElementById("SumaPares").innerHTML=" La suma de sus numeros pares es de: " +sumaPares;

    }
    else {
        impares++;
       SumaT=impares-1;

         sumaImpares= sumaImpares+parseInt(numero[i]);
        document.getElementById("Impares").innerHTML ="Cantidad de impares de su numero "+numero+ " es de: "+ SumaT;
        document.getElementById("SumaImpares").innerHTML="La suma de sus numero impares es de: "+ sumaImpares;

    }

      sumaTotal=parseInt(sumaImpares+sumaPares);
        document.getElementById("SumaTotal").innerHTML="La suma total es de: "+ sumaTotal;
}
