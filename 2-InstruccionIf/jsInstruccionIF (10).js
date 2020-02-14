function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota; 
	var maximo = 10;
	var minimo = 1;

	nota = Math.floor(Math.random()*((maximo + 1)- minimo) + minimo );
    if (nota >= 9) {
		alert( nota  + " EXELENTE");
	}
	else if(nota >=4) {
		alert( nota  + " APROBÓ");
	}
	else {
		alert( nota  + " Vamos, la proxima se puede" );
	}

}//FIN DE LA FUNCIÓN