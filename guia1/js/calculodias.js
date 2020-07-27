/* * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Desarrollo de Aplicaciones Web con *
* Software Interpretado en el Cliente *
* Archivo: calculodias.js *
* Uso: Calcular el número de días transcurridos *
* desde la fecha de nacimiento hasta la *
* fecha actual del calendario. *
* * * * * * * * * * * * * * * * * * * * * * * * * * */
while(true){

var year =  parseInt( prompt("Ingrese el año: ", ""));
if(!isNaN(year) && year!=null && year !=""){
    var mes = prompt("Ingrese el mes: ", "");

var diasdelmes;
var bisiesto = false;
if(year%4 == 0 && (year%100 != 0 || year%400 == 0)){
bisiesto = true;
}
switch(mes){
case "Enero":
case "enero":
case" ENERO":
case "Marzo":
case "marzo":
    case " MARZO":
case "Mayo":
case "mayo":
    case " MAYO":
case "Julio":
case "julio":
    case " JULIO":
case "Agosto":
case "agosto":
    case " AGOSTO":
case "Octubre":
case "octubre":
    case " OCTUBRE":
case "Diciembre":
case "diciembre":
    case " DICIEMBRE":
diasdelmes = 31;
break;
case "Abril":
case "abril":
    case " ABRIL":
case "Junio":
case "junio":
    case " JUNIO":
case "Septiembre":
case "septiembre":
    case " SEPTIEMBRE":
case "Noviembre":
case "noviembre":
    case " NOVIEMBRE":
diasdelmes = 30;
break;
case "Febrero":
case "febrero":
    case " FEBRERO":
if(!bisiesto)
diasdelmes = 28;
else
diasdelmes = 29;
break;
default:
alert("El mes " + mes + " no existe");
mes = "No existe";
diasdelmes = 0;
}
if(bisiesto == true){
var msg = "El año " + year + " es bisiesto.<br />El mes de " + mes + " tiene "
+ diasdelmes + " días.";
}
else{
var msg = "El año " + year + " no es bisiesto.<br />El mes de " + mes + " tiene " + diasdelmes + " días.";
}
//Variable para hacer referencia al elemento DIV
//donde se mostrará el número de años, meses y días
//que ha vivido la persona
var dias = document.getElementById('info');
dias.innerHTML = '<h3>' + msg + '</h3>';
break;
}
else{
    alert(" DIGITE UN AÑO VALIDO");
    continue;
}
}