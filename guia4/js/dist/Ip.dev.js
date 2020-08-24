"use strict";

function iniciar() {
  var boton = document.getElementById("validar");

  if (boton.addEventListener) {
    boton.addEventListener("click", validar, false);
  } else if (boton.attachShadow) {
    boton.attachShadow("onclick", validar);
  }
}

function validar() {
  var tipo = document.frmdatos.seltipo.options[frmdatos.seltipo.selectedIndex].value;
  var dato = document.frmdatos.txtdato.value;
  var valido = false;
  var re = null; //alert(dato + "|" + tipo);

  if (dato == null || dato == "" || dato.length == 0) {
    alert("No se ha ingresado ningún valor en el campo de formulario");
  }

  switch (tipo) {
    //El formato de DUI en El Salvador es ########-#
    case "IPv4":
      re = /^[0-255]{3}-[0-255]{6}-[0-9]{3}-[0-9]{1}$/;

      if (re.test(dato)) {
        valido = true;
      }

      break;

    default:
      alert("El tipo de dato seleccionado no puede ser procesado");
      break;
  }
}