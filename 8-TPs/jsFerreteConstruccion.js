/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
    var largoT;
    var anchoT;
    var CantidadDeAlambre;
    largoT = parseInt(document.getElementById("Largo").value);
    anchoT = parseInt(document.getElementById("Ancho").value);
    CantidadDeAlambre = (largoT + largoT + anchoT + anchoT) * 3;
    alert("La cantidad de alambre a comprar es " + CantidadDeAlambre);

}
function Circulo() {
    var radio;
    var perimetro; 
    var cantidadAlambre; 
    radio = parseInt(document.getElementById("Radio").value);
    perimetro = 2 * 3.14 * radio; 
    CantidadAlambre = perimetro * 3; 
    alert("El perimetro es " + CantidadAlambre);
    
}
function Materiales() {
    var lado = 1;
    var area;
    var bolsaCemento;
    var bolsaCal;

    area = lado * lado; 
    bolsaCemento = area * 2;
    bolsaCal = area * 3;
    alert("Se necesitan " + bolsaCemento+ " bolsas de cemento y " + bolsaCal +" bolsas de cal" ); 

    

   



}