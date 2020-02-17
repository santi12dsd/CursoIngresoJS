function mostrar()
{

var sexo 
sexo = prompt("ingrese f ó m .").toLocaleLowerCase;

while (sexo != "f" && sexo != "m" ) {
    sexo = prompt("Sexo invalido,ingrese otra vez:");
}



document.getElementById('Sexo').value=sexo;


}//FIN DE LA FUNCIÓN