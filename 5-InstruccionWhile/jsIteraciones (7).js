function mostrar() {

	var contador = 0;
	var acumulador = 0;
	var seguir;
	var numero;
	var promedio;
	var pregunta;


	do { 
		numero = parseInt(prompt("Ingrese numero"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero"))
		}
        contador = contador + 1;
		acumulador = acumulador + numero;
		seguir = prompt ("Quiere ingresar otro numero?");

   }while (seguir == "si")
    promedio = acumulador / contador 

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN