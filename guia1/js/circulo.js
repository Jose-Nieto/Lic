/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Desarrollo de Aplicaciones Web con *
* Software Interpretado en el Cliente *
* Archivo: circulo.js *
* Uso: Calcular el área de un círculo. *
* * * * * * * * * * * * * * * * * * * * * * * * * * * */
while(true){
const PI = 3.1415926535;
var radio = parseFloat( prompt('Introduzca el radio del círculo:',''));
if(!isNaN(radio) && radio !=null && radio!="" ){



var area;
area = PI*radio*radio;
document.write("<header><h1>El área del círculo es: " + area + "</h1><hr /><br /></header>");
break;
}
else{
    alert("Ponga datos validos");
    continue;
}
}
