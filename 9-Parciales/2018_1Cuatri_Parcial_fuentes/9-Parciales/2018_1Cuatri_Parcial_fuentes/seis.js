function mostrar() {
    var hora;

    hora = parseInt(document.getElementById("laHora").value);
    if (hora <6 || hora >24) {
        alert("ingrese una hora valida");
        }

    switch (hora) {
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            alert("Es de mañana");
            break;

    }
    switch (hora) {
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            alert("es de tarde");
            break;
    }
    switch (hora) {
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
            alert("es de noche");
            break;
    }
    if (hora >=20 && hora <=23 ) {
        alert("a dormir");
    }
    











}
