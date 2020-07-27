while(true){

    var foto = document.getElementById("foto");
var celcius;


var farenheit;
celcius=parseFloat(prompt("Digite su temperatura en celcius"));

if(!isNaN(celcius) && celcius!="" && celcius!=null){
    
    farenheit=(celcius*9/5)+32;
    if(celcius<=1){
 document.write("<h1>El ambiete esta congelado</h1> <img class=photo src=recursos/1.jpg");

    }
    else if (celcius===2|| celcius<=15){

        document.write("<h1>El ambiete esta frio</h1> <img class=photo src= recursos/2.jpg");
      

    }
    else if(celcius===16 || celcius<=27){
    
document.write("<h1>El ambiete esta perfecto</h1> <div> <img class=photo src=recursos/3.jpg </div>");

    }
    else if(celcius>27){
    
document.write("<h1>El ambiete esta muy caliente</h1> <div> <img class=photo src= recursos/4.jpg </div");
    }
    alert(celcius +""+ " a farenheit es igual a: "+farenheit+" F");
    break;
}
else{
    alert("Debe ingresar datos validos");
    continue;
}
}