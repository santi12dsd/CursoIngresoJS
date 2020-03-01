function mostrar()
{
    var nota;
    var sexo;
    var acumulador = 0;
    var promedio;
    //El flag tambien tiene que estar igualado a 0 
    var flag = 0;
    var notaBaja;
    var sexoBajo;
    var contadorV6 = 0;
    


    for(var i = 0; i <5 ; i++ ){
        nota = parseInt(prompt("Ingrese una nota"));
        while(nota <0 || nota >10 || isNaN(nota) ) {
            nota = parseInt(prompt("Esa nota es invalida. Reingrese nota (0-10): "));
        }
        acumulador = acumulador + nota
        sexo = prompt("Ingrese sexo")
        while(sexo != "m" && sexo != "f") {
            sexo = prompt("Ese sexo es invalido. Ingrese un sexo entre (f-m) ");
        }
        acumulador = acumulador + nota
        // Como en el if ingresan sexo y nota tengo que poner como quedarian ambos.
        if(flag == 0 || nota < notaBaja ) {
            notaBaja = nota;
            sexoBajo = sexo;
            flag = 1;
        }
        if (sexo =="m" && nota >= 6) {
            contadorV6 = contadorV6 + 1;

        }

    }
    promedio = acumulador / 5;
    
    document.write("El promedio total de las notas es " + promedio + "</br>");
    document.write("La nota mas baja es " + notaBaja + " y pertenece al sexo " + sexoBajo +  "</br>");
    document.write("La cantidad de varones cuya nota fue mayor o igual a 6 es " + contadorV6);
    
          

}
