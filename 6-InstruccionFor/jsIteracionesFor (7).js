function mostrar()
{


    var numero;
    var contadorPares = 0;

    numero = parseInt(prompt("Ingrese numero"));
    
    while(isNaN(numero)){
        numero = parseInt(prompt("Eso no es un numero . ingrese otra vez:"));
     
    }
    for(var i =1; i<= numero ; i++) {
        if (i % i == 0) {
            console.log(i);
            contadorPares++
        }
    }
 console.log("Pares encontrados " + contadorPares);




}//FIN DE LA FUNCIÓN