/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var largoT;
var anchoT;
var CantidadDeAlambre;
largoT = parseInt(document.getElementById("Largo").value);
anchoT = parseInt(document.getElementById("Ancho").value);
function Rectangulo () 
{
    CantidadDeAlambre = (largoT + largoT + anchoT + anchoT) * 3;
    alert("La cantidad de alambre a comprar es " + CantidadDeAlambre);
  
}
function Circulo () 
{
	
}
function Materiales () 
{
	
}