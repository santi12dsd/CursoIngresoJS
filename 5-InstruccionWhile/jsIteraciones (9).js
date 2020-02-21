function mostrar() {
	var flag = 0;
	var minimo;
	var maximo;
	var numero;
	var respuesta;

	do {
		numero = parseInt(prompt("Ingrese numero"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero"));
		}

			if (flag == 0 || numero > maximo) {
				maximo = numero
			}
			if (flag == 0 || numero < minimo) {
				minimo = numero
				flag = 1
			}

			respuesta = prompt("Quiere ingresar otro numero?");

		} while (respuesta == "si");

		document.getElementById("maximo").value = maximo
		document.getElementById("minimo").value = minimo


}
//FIN DE LA FUNCIÓN