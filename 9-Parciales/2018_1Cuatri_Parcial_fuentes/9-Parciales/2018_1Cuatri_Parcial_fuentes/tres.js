function mostrar()
{
    var precio;
    var descuento;
    var precioFinal;

    precio = parseInt(prompt("Ingrese precio"));
    descuento = parseInt(prompt("Ingrese descuento"));

    precioFinal = precio - ((descuento / 100) * precio);
    document.getElementById("elPrecioFinal").value = precioFinal;


}
