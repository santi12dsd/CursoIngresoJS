/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var num1;
    var num2;
    var resultado;
    num1 = parseFloat(document.getElementById("numeroDividendo").value);
    num2 = parseFloat(document.getElementById("numeroDivisor").value);
    resultado = num1 % num2;
    alert ("El resto es "+  resultado);
}

