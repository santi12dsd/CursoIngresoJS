/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var num1;
    var num2;
    var resultado;
    num1 = parseFloat(document.getElementById("numeroUno").value);
    num2 = parseFloat(document.getElementById("numeroDos").value);
    resultado = num1 + num2;
    alert ("la suma es "+ resultado);
}

function restar()
{
	var num1;
    var num2;
    var resultado;
    num1 = parseFloat(document.getElementById("numeroUno").value);
    num2 = parseFloat(document.getElementById("numeroDos").value);
    resultado = num1 - num2;
    alert ("la resta es "+ resultado);
}

function multiplicar()
{ 
	var num1;
    var num2;
    var resultado;
    num1 = parseFloat(document.getElementById("numeroUno").value);
    num2 = parseFloat(document.getElementById("numeroDos").value);
    resultado = num1 * num2;
    alert ("la multiplicación es "+  resultado);
}

function dividir()
{
	var num1;
    var num2;
    var resultado;
    num1 = parseFloat(document.getElementById("numeroUno").value);
    num2 = parseFloat(document.getElementById("numeroDos").value);
    resultado = num1 / num2;
    alert ("la divición es "+  resultado);
}

