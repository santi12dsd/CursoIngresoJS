function mostrar() {

	var contador = 0;
	var acumulador = 0;
	var respuesta;
	var numero;
	var promedio;
	var pregunta;

	while (respuesta = ("si".toLowerCase)) {

		pregunta = prompt("¿Desea pedir un numero?");
		numero = parseInt(prompt("Ingrese numero"))
		contador = respuesta 
		acumulador = acumulador + numero
		
	}



	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN