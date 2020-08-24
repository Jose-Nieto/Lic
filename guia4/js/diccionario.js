//Definir la matriz o arreglo con los datos
var textarea=document.querySelector("textarea");
var lista = new Array(
'abanico', 'aceituna','acuerdo',
'bacteria','ballet','bastón',
'cañón','cabaña','cadáver',
'danzar','débil','debate',
'edema','encéfalo','encuesta',
'factible','factura','falacia',
'garantizar','genocidio','geología',
'habilidad','habitación','heredar',
'identidad','ilusión','imparcial',
'jabalina','jabón', 'jaquetón',
'karaoke','karate', 'katiuska',
'laboratorio','lacerar','laguna',
'maíz','madriguera','manzana',
'narcótico','natillas','naturaleza',
'ñoño','ñora','ñu',
'oír','obedecer','objeción',
'país','paciencia','palet',
'química', 'quórum', 'quincalla',
'ratón','ratificar','rayo',
'sabor','salpicar','salvaje',
'tahona','técnica','tímido',
'ukelele','unicornio','usurero',
'valeriana', 'valla', 'vanidoso',
'waterpolista', 'web','whisky',
'xenófobo', 'xerografía','xifoides', 
'yak','yate','yodo',
'zafiro','zagal','zueco'
 );
 var definicion = new Array(
     'Objeto que sirve para dar aire.', 'Fruto del olivo. Las aceitunas son pequeñas, redondas, verdes o negras y tienen un hueso dentro.', 'Decisión que toman varias personas para expresar que piensan lo mismo sobre un tema.',
 'Organismo muy pequeño que a veces produce enfermedades.','Danza clásica que se representa en un escenario. Los bailarines tienen un control total sobre los movimientos de su cuerpo.','Vara o palo con puño que sirve para apoyase al andar.',
 'Arma de gran tamaño con forma de tubo. Dispara proyectiles de hierro con forma de bola.','Casa pequeña hecha de ramas, cañas o troncos que suele estar en el campo o playa.', 'Cuerpo sin vida. Puede ser de un animal o una persona.',
 'Bailar al ritmo de una música.','Persona o cosa que tiene poca fuerza o poca resistencia.','Discusión o intercambio de opiniones entre varias personas sobre un tema.',
'Inflamación de una parte del cuerpo que se produce por la acumulación de líquido.','Conjunto de órganos nerviosos del hombre y de algunos animales que están dentro del cráneo.','Conjunto de preguntas que tratan sobre un tema determinado y que son para una población concreta.',
'Posible o que puede hacerse realidad.','Documento en el que están explicados con detalle las cosas que alguien vende o los servicios que da.', 'Mentira, engaño.',
'Dar seguridad a alguien sobre algo.','Matanza sistemática de personas por ser de una raza, una religión, por sus ideas políticas.','Ciencia que estudia el origen de la Tierra, cómo es y cómo está formada.',
'Cualidad de la persona que puede hacer cosas bien y con mucha facilidad.', 'Parte de una vivienda o edificio que está separada de las demás por paredes.', 'Recibir dinero o bienes de una persona cuando muere.',
'Conjunto de características de una persona o cosa que la hacen distinta de otra.','Imagen falsa que surge de la imaginación o de una mala interpretación de la realidad.','Que no está a favor ni en contra de alguien o algo. Es independiente y justo. Garantiza la igualdad.',
'Vara parecida a una lanza utilizada en competiciones deportivas.', 'Producto que sirve para lavar.', 'Tiburón de gran tamaño y muy peligroso.',
'Entretenimiento que consiste en cantar canciones conocidas. La persona que canta con la pista','Arte marcial japonés que consiste en dar golpes secos con los pies, los codos y el borde de la mano.', '.Botas altas para protegerse de la lluvia.',
'Lugar en el que se hacen experimentos y trabajos generalmente relacionados con la ciencia.', 'Lastimar, herir o magullar la carne de una persona o un animal.', 'ta palabra tiene 2 definiciones:1.Masa de agua acumulada que hay en un terreno y que no tiene conexión con el mar o los ríos.',
'Planta de tallo largo y hojas grandes. La mazorca es la parte comestible de la planta.','Cueva donde viven y se esconden algunos animales, como los conejos.','Fruta redonda de piel fina y carne más o menos blanca que crece en los manzanos.',
'Sustancia que produce sueño, relajación del cuerpo o pérdida de la sensibilidad.', 'Crema dulce de color amarillo hecha con leche, huevos y azúcar.','Conjunto de todo lo que existe en el mundo o el universo sin que intervenga el ser humano.',
'Algo soso o con poca gracia', 'Pimiento pequeño, redondo y de color rojo. En algunos lugares puede ser picante.', 'Animal mamífero de gran tamaño, con cabeza de toro. Tiene pelo pardo o gris y una larga cola.',
'Percibir sonidos por medio del oido','Hacer caso a lo que dice u ordena una ley o una persona.','Razón o explicación para rechazar una idea o una acción.',
'Área geográfica que tiene su propio gobierno y sus leyes. Sus habitantes comparten la misma lengua.', 'Capacidad de aguantar situaciones desagradables, dolorosas, ofensivas o pesadas sin quejarse.','Plataforma de madera para colocar y transportar objetos con carretillas elevadoras',
'Ciencia que estudia la composición de las sustancias y cómo pueden cambiarse','Número mínimo de personas necesarias para tomar una decisión dentro de un grupo.','Conjunto de cosas que tienen poco valor.',
'Animal mamífero. Su tamaño es pequeño. Tiene la cola larga, las orejas grandes y el hocico puntia.', 'Confirmar la verdad o validez de algo.','Descarga eléctrica muy fuerte entre nubes o entre una nube y la tierra cuando hay tormenta.',
'Cualidad de las sustancias o los alimentos que se nota a través del gusto en la lengua.','Saltar las gotas de un líquido o de otra sustancia después de chocar contra algo.', 'Que ha crecido de forma silvestre. Sin cultivo ni cuidado.',
'Sitio donde los panaderos hacen el pan.','Conjunto de procedimientos que utiliza una ciencia, un arte, un oficio u otra actividad.','Que siente vergüenza con facilidad y le cuesta relacionarse con los demás.',
'Instrumento musical de cuerda. Es parecido a la guitarra, pero más pequeño y con 4 cuerdas.','Animal imaginario parecido al caballo con un cuerno en la frente.','Persona que presta dinero a otra y después le pide que le devuelva mucho más del dinero que le ha dado',
'Planta de tallo recto y hojas puntiagudas. Tiene flores blancas o rojizas. Sirve para hacer infusion.','Muro de metal o madera, de poca altura, que se coloca alrededor de un terreno para cerrarlo e impedir el ingreso.','Que es arrogante. Una persona vanidosa cree que es mejor que las demás ya sea desde un punto intelectual o fisico.',
'Jugador de waterpolo. Se pronuncia guaterpolista.','Red informática en la que hay mucha información repartida en páginas y sitios por la internet.','Bebida alcohólica fuerte y de color marrón. ',
'Que odia a los extranjeros o las cosas de otros países.','Proceso de copia de un texto o una imagen en papel mediante una máquina.','Parte blanda que está al final del esternón del ser humano',
'Animal parecido a un búfalo con un pelo largo similar a la lana.', 'Embarcación de recreo. Los yates pueden navegar a motor o a vela.','Sustancia de color oscuro usada para desinfectar heridas.',
'Piedra preciosa de color azul. Es tan valiosa como los diamantes.','Persona joven. Es una palabra que se usa todavía en pueblos para hablar de personas jóvenes o adolecentes.','Zapato abierto por detrás, con suela de corcho o de madera.'
     );
//Función iniciar desde donde se controlarán los manejadores de evento
//a utilizar
function iniciar(){
 //Creando el controlador de evento para el evento
 //doble clic sobre los elementos del cuadro de lista
 var lista = document.getElementById("lstsports");
 //Cargando los datos en el cuadro de lista al cargar la página
 cargarLista();
 var opciones=document.querySelectorAll('select option');
var valores=0;
opciones.forEach(opcion => {
    opcion.value=valores;
    valores++;
});
opciones.forEach(opcion => {
    opcion.addEventListener('click', function(){
textarea.value=definicion[opcion.value]});
});
 if(lista.addEventListener){
 lista.addEventListener("dblclick", function(){
 cargarTexto(this.options[this.selectedIndex].text);
 }, false);
 }
 else if(lista.attachEvent){
 lista.attachEvent("ondblclick", function(){
 cargarTexto(this.options[this.selectedIndex].text);
 });
 }
 //Capturando el campo de texto sobre el que se ingresan los deportes
 //mediante pulsasión de tecla
 var texto = document.getElementById("txtsport");
 if(texto.addEventListener){
 texto.addEventListener("keyup", buscar, false);
 }
 else if(texto.attachEvent){
 texto.attachEvent("onkeyup", buscar);
 }
}
function mostrar(){
    var imprimir=getElementById("lstsports");
  

}
function cargarLista() {
 // Cargamos el combo
 for(x=0;x<lista.length;x++)
 document.frmsearchsport.lstsports[x] = new Option(lista[x]);
}

function cargarTexto(elemento){
 if(elemento!=null && elemento!=undefined && elemento!="")
 document.frmsearchsport.txtsport.value = elemento;
}
function buscar() {
 limpiarLista();
 // Se obtiene el valor del texto
 var str = document.frmsearchsport.txtsport.value;
 // Crear la expresión regular
 var expr = new RegExp("^" + str,"i");
 // Recorrer la lista. Si la expresión regular es OK
 y = 0;
 for(x=0;x<lista.length;x++) {
 if(expr.test(lista[x])) {
 document.frmsearchsport.lstsports[y] = new Option(lista[x]);
 y++;
 }
 }
}
function limpiarLista() {
 for(x=document.frmsearchsport.lstsports.length;x>=0;x--)
 document.frmsearchsport.lstsports[x] = null;
}
//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
 window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
 window.attachEvent("onload", iniciar);
}
