/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
// CHEQUEAR CUENTAS DE LOS DESCUENTOS
 */
function CalcularPrecio() {
    var lampara = 35;
    var cantidadLamparas;
    var marca;
    var descuento;
    var precioConDescuento;



    cantidadLamparas = parseInt(document.getElementById("Cantidad").value);
    marca = document.getElementById("Marca").value;


    if (cantidadLamparas >= 6) {
        descuento = 50;
    }
    else if (cantidadLamparas == 5) {
        descuento = 30;
        if (marca == "ArgentinaLuz") {
            descuento = 40
        }
    }
    else if (cantidadLamparas = 4) {
        descuento = 20;
       if (marca == "ArgentinaLuz" || "FelipeLamparas") {
            descuento = 25;
        }
    }
    else if (cantidadLamparas == 3) {
        descuento == 5;
        if (marca == "ArgentinaLuz" || "FelipeLamparas") {
            descuento = 10;
        }
    }
    
    precioConDescuento = descuento / 100 * (cantidadLamparas * lampara);
    if (precioConDescuento >= 120) {
        precioConDescuento = precioConDescuento * 100/10;
        alert("IIBB Usted pago "+ precioConDescuento);
    }



    document.getElementById("precioDescuento").value = precioConDescuento;





}
