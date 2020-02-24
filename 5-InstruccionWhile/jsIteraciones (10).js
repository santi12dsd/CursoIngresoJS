function mostrar() {
	var numero;
	var contadorPos = 0 ;
	var contadorNeg = 0 ;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promedioPos;
	var promedioNeg;
	var diferencia;
	var respuesta;
	var positivo = 0 ;
	var negativo = 0 ;

 	do {
		numero = parseInt(prompt("Ingrese numero"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero. Reintente"));
		}

		if (numero >= 1) {
			positivo = positivo + numero;
			contadorPos = contadorPos + 1;
			
		}
		else if (numero <0) {
			contadorNeg = contadorNeg + 1;
			negativo = negativo + numero
		}
		else {
			contadorCeros = contadorCeros + 1

		}
		
	if (numero %2 == 0) {
		contadorPares = contadorPares + 1
	}

	
	respuesta = prompt("Quiere ingresar otro numero?");

	} while (respuesta == "si" );

	promedioPos = positivo / contadorPos;
	promedioNeg = negativo / contadorNeg;
	if (negativo ==0){
		promedioNeg = 0
	}
	diferencia = positivo - negativo


    document.write(" La suma de los numeros positivos es " + positivo  + "</br>"); 
	document.write(" La suma de los numeros negativos es " + negativo + "</br>");
	document.write(" La cantidad de positivos es " + contadorPos + "</br>");
	document.write(" La cantidad de negativos es " + contadorNeg + "</br>");
	document.write(" La cantidad de ceros es " + contadorCeros + "</br>");
	document.write(" El promedio de los numeros positivos es " + promedioPos + "</br>");
	document.write(" El promedio de los numeros negativos es " + promedioNeg + "</br>");
	document.write(" La cantidad de numeros pares es " + contadorPares + "</br>");
	document.write(" La diferencia entre los numeros positivos y negativos es " + diferencia + "</br>");

}//FIN DE LA FUNCIÓN