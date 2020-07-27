var opcion=true;
  
var cantidad=0; 
var total=0;
var producto ={};
var precio ={};

while (opcion==true){  


    do{
        producto[cantidad]=prompt(" Digite el producto a ingresar");
    }while(producto[cantidad]===null || producto[cantidad]==="");

    do{
        precio[cantidad]=parseFloat( prompt(" Digite el precio"));
    }  while(isNaN(precio[cantidad] || precio[cantidad]==null ||precio[cantidad]=="" ));

total+=precio[cantidad];
    opcion=confirm('¿Desea ingresar otro producto? s/n');

    cantidad++;
    

}
with(document){
    write("<table class=\"tabla\">");
    write("<thead>");
    write("<tr><th>Producto</th>");
    write("<th>Precio</th>");
    write("</thead>");
    write("<tbody>");
    for(i=0; i<cantidad; i++){
        write("<tr><td>"+ producto[i] + " <br></td>");
        write("<td class=\"number\">" + precio[i] + "<br> </td></tr>");
    }
    write("<tr><td> total  <br></td>");
    write("<td class=\"number\">" + parseFloat(total).toFixed(2) + "<br> </td></tr>");
    write("</tbody>");
 

   
    write("</table>");
}