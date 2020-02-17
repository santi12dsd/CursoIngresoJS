/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar() {
    var Numero1;
    var Numero2;
    var Numero3;
    var Suma;

    Numero1 = parseInt(document.getElementById("PrecioUno").value);
    Numero2 = parseInt(document.getElementById("PrecioDos").value);
    Numero3 = parseInt(document.getElementById("PrecioTres").value);
    Suma = Numero1 + Numero2 + Numero3;
    alert("El resultado de la suma es " + Suma);

}
function Promedio() {
    var Numero1;
    var Numero2;
    var Numero3;
    var Promedio;
    Numero1 = parseInt(document.getElementById("PrecioUno").value);
    Numero2 = parseInt(document.getElementById("PrecioDos").value);
    Numero3 = parseInt(document.getElementById("PrecioTres").value);
    Promedio = (Numero1 + Numero2 + Numero3) / 3;
    alert("El promedio es " + Promedio);

}
function PrecioFinal() {
    var Numero1;
    var Numero2;
    var Numero3;
    var PrecioFinal;
    var iva;

    Numero1 = parseInt(document.getElementById("PrecioUno").value);
    Numero2 = parseInt(document.getElementById("PrecioDos").value);
    Numero3 = parseInt(document.getElementById("PrecioTres").value);
    iva = 100 / 21
    PrecioFinal = iva + (Numero1 + Numero2 + Numero3);
    alert("El precio final es " + PrecioFinal);
}
