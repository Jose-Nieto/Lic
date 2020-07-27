//declaracion de variables a usar
var i,num,nota,notaactual,promedio;

//captura de la cantidad de notas a ingresar

num=parseInt(prompt("¿Cuantas notas va a ingresar?",""));
//definiendo un valor de inicializacion para la variable que almacenara el promedio
nota=0;
header = "<header class=\"masked\">";
header+="<h1>Selectable Text</h1>";
header+="</header>";
document.write(header);

//Ciclo o lazo que permitira ingresar cada nota
document.write("<section>");
document.write("<article>");
for(i=1; i<=num; i++){
notaactual=parseFloat(prompt("Ingrese la nota"+i +":",""));

document.write("<h3>La nota " + i + ": " + Math.round(notaactual * Math.pow(10,2))/ Math.pow(10,2) + "</h3>");


nota+=notaactual;
}
//obteniendo el calculo del promedio 
promedio=nota/(i-1);
//imprimit el valor redondeado a dos decimales
document.write("<h3>El promedio de las notas es: " +Math.round(promedio*Math.pow(10,2))/Math.pow(10,2)+"</h3");
document.write("</article>");
document.write("</section>");