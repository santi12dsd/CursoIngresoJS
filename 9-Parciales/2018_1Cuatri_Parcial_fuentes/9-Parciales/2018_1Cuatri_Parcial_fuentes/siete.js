function mostrar()
{
    var nota
    var contador = 0;
    var acumulador = 0;
    var promedio;
    var sexo;
    var seguir;

    do {
    nota = parseInt(prompt("Ingrese nota"));
    while (isNaN(nota)){
        nota  = parseInt(prompt("Eso no es un numero"));
    }
    if (nota <0 || nota >10) {
        nota  = parseInt(prompt("Ingrese una nota valida"));
    }
    sexo = prompt("Ingrese sexo")
    if (!(sexo == f || m ) {
        alert("Ingrese un sexo valido");
    }
    acumulador = acumulador + nota
    contador = contador +1



    
    }while(contador < 5 ); 
    promedio = acumulador / contador;
    alert("El promedio es " + promedio);

}
