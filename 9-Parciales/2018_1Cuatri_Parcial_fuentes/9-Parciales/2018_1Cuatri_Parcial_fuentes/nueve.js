function mostrar() {
    var marca;
    var peso;
    var temperatura;
    var seguir;
    var contadorTempPares = 0;
    var masPesado;
    var marcaPesada;
    var flag = 0;
    var contadorCeroGrados = 0;
    var acumuladorPeso = 0;
    var contadorPeso = 0;
    var flag2 = 0;
    var maximo;
    var minimo;
    var promedio;

    do {
        marca = prompt("Ingrese marca");
        
        peso = parseInt(prompt("Ingrese peso"));
        while (isNaN(peso) || peso < 1 || peso > 100) {
            peso = parseInt(prompt("Peso invalido,Reingrese peso: "));
            
        }
          acumuladorPeso = acumuladorPeso + peso;
            contadorPeso = contadorPeso + 1;
        
        temperatura = parseInt(prompt("Ingrese temperatura del producto"));
        while (isNaN(temperatura) || temperatura < -30 || temperatura > 30) {
            temperatura = parseInt(prompt("Temperatura invalida, Reingrese temperatura"));
        }
        
        if (temperatura % 2 == 0) {
            contadorTempPares = contadorTempPares + 1;
        }
        if (peso > masPesado || flag == 0) {
            masPesado = peso;
            marcaPesada = marca;
            flag = 1;
        }
        if (temperatura < 0) {
            contadorCeroGrados = contadorCeroGrados + 1;
        }
        if (peso < minimo || flag2 == 0) {
            minimo = peso;
        }
        if (peso > maximo || flag2 == 0) {
            maximo = peso;
            flag2 = 1;
        }
        
        

       seguir = prompt("Desea seguir ingresando productos");
   
    } while (seguir == "si");

    promedio = acumuladorPeso / contadorPeso;

    document.write("La cantidad de temperaturas pares es " + contadorTempPares + "</br>");
    document.write("La marca del producto mas pesado es " + marcaPesada + "</br>");
    document.write("La cantidad de productos que se conservan a menos de cero grados es " +contadorCeroGrados+ "</br>");
    document.write("El promedio de todos los pesos es  " + promedio + "</br>");
    document.write("El peso maximo es " + maximo + "kg" + "</br>");
    document.write("El peso minimo es " + minimo + "kg" + "</br>");

   






 


}
