function mostrar() {
    var numero;
    var letra;
    var contadorPares = 0;
    var contadorImpares = 0;
    var contadorCeros = 0;
    var contadorPositivos = 0;
    var acumuladorNeg = 0;
    var acumuladorPos = 0;
    var seguir;
    var promedio;
    var flag = 0;
    var numMaximo;
    var letraMaxima
    var numMinimo;
    var letraMinima;


    do {
        letra = prompt("Ingrese letra");

        numero = parseInt(prompt("Ingrese numero"));
        while (numero < -100 || numero > 100 || isNaN(numero)) {
            numero = parseInt(prompt("Numero invalido. Ingrese un numero entre (-100-100)"));
        }

        if (numero % 2 == 0) {
            contadorPares = contadorPares + 1;
        }
        if (numero % 2 != 0) {
            contadorImpares = contadorImpares + 1;
        }
        if (numero == 0) {
            contadorCeros = contadorCeros + 1;
        }
        if (numero >= 1 && numero <= 100) {
            acumuladorPos = acumuladorPos + numero
            contadorPositivos = contadorPositivos + 1;
        }
        if (numero < 0) {
            acumuladorNeg = acumuladorNeg + numero;

        }
        if (flag == 0 || numero < numMinimo ) {
            numMinimo = numero;
            letraMinima = letra;
        }
        if (flag == 0 || numero > numMaximo) {
            numMaximo = numero;
            letraMaxima = letra;
            flag = 1
            
        }


         seguir = prompt("¿Desea ingresar mas datos?");
    } while (seguir == "si");

    promedio = acumuladorPos / contadorPositivos;



    document.write("La cantidad de numeros pares es " + contadorPares + "</br>");
    document.write("La cantidad de numeros impares es " + contadorImpares + "</br>");
    document.write("La cantidad de ceros es " + contadorCeros + "</br>");
    document.write("El promedio de loa numeros positivos es " + promedio + "</br>");
    document.write("La suma de los numeros negativos es " + acumuladorNeg + "</br>");
    document.write("El numero maximo es " + numMaximo + " y tiene la letra " + letraMaxima + "</br>");
    document.write("El numero minimo es " + numMinimo + " y tiene la letra " + letraMinima + "</br>");
    




}
