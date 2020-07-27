/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Desarrollo de Aplicaciones Web con *
* Software Interpretado en el Cliente *
* Archivo: triangulo.js *
* Uso: Calcular el área de un triángulo. *
* * * * * * * * * * * * * * * * * * * * * * * * * * * */
while(true){


var base =parseFloat( prompt('Introduzca la base del triángulo',''));
if(!isNaN(base)&&base!=null&& base!=""){


var altura = parseFloat( prompt('Introduzca la altura del triángulo',''));
if(!isNaN(altura)&&altura!=null&& altura!=""){
var area;
area = (base*altura)/2;
document.write("<header><h1>El área del Triángulo es: " + area + "</h1><hr /><br /></header>");
break;
}
else{
    alert("DIGITE VALORES CORRECTOS");
    continue;
}

}
else{
    alert("DIGITE VALORES CORRECTOS");
    continue;
}
}