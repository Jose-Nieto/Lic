/* * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Desarrollo de Aplicaciones Web con *
* Software Interpretado en el Cliente *
* Archivo: rectangulo.js *
* Uso: Calcular el área de un rectángulo. *
* * * * * * * * * * * * * * * * * * * * * * * * * * */
while(true){


var base = parseFloat( prompt('Introduzca la base del rectángulo',''));
if(!isNaN(base)&& base!="" && base!=null){


var altura = parseFloat( prompt('Introduzca la altura del rectángulo',''));
if(altura!=null && !isNaN(altura ) && altura!=""){


var area;
area = base*altura
document.write("<header><h1>El área del rectángulo es: " + area + "</h1><hr/><br /></header>");
break;
}
else{
    alert("INGRESE DATOS CORRECTOS");
continue;

}

}
else{
    alert("INGRESE DATOS CORRECTOS");

    continue;
}
}