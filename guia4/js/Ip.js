function iniciar(){
    var boton =document.getElementById("validar");
    if(boton.addEventListener){
        boton.addEventListener("click",validar,false);
    }
    else if(boton.attachShadow){
        boton.attachShadow("onclick",validar);
    }
}

function validar(){
    var tipo = document.frmdatos.seltipo.options[frmdatos.seltipo.selectedIndex].value;
    var dato = document.frmdatos.txtdato.value;
    var valido = false;
    var re = null;
    //alert(dato + "|" + tipo);
    if(dato == null || dato == "" || dato.length == 0){
    alert("No se ha ingresado ningún valor en el campo de formulario");

}

switch(tipo){
    case "IPv4":
        re =/^[1-2]{1}[1-9]{2}\.[1-2]{1}[1-9]{2}\.[1-2]{1}[1-9]{2}\.[1-2]{1}[1-9]{2}$/;
        if(re.test(dato)){
            valido = true;
            }
            if(re>=256){
                alert("No debe ser mayor a 255");
                
            }
            break;

            default:
                alert("El tipo de dato seleccionado no puede ser procesado");
break;

case "Direccion":
    re =/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if(re.test(dato)){
        valido = true;
        }
        break;

        case "Correo":
           re= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
           if(re.test(dato)){
            valido = true;
            }
        break;
}

if(valido == true){
    alert("El valor " + dato + " de " + tipo + " ingresado es válido");
    }
    else if(valido == false){
    alert("El valor " + dato + " de " + tipo + " ingresado es inválido");
    }
}



//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
    }
    else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
    }
    