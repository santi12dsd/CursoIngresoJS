function mostrar()
{
    var num1;
    var num2;
    var suma;

    num1 = parseInt(prompt("Ingrese el primer numero"));
    num2 = parseInt(prompt("Ingrese el segundo numero"));

    if (num1 == num2) {
        alert("Los numero ingresados fueron " + num1 + " y "+ num2);
    }
    if (num1 > num2) {
        alert(num1 - num2);
    }
    if (num1 < num2) {
        suma = (num1 + num2);
        alert(suma);
    }
    if (suma > 10) {
        alert("la suma es " + suma + " y supero el 10");
    }
   


}
