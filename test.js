let opciones = prompt("Bienvenido.\nSeleccione la Opción deseada.\n1- Calcular Interes por Préstamo (1 pago)\n2- Simular interés de prestamos hasta 6 Cuotas Fijas\n3-Salir."); 
let importe = 0;
let cuotas = 0;
const TNA = 0.45;
const TNACUOTAS = 0.50;
const none = "";


if (opciones==none){
    alert("Por favor, escoja una opción.");
}


while (opciones!=3){
    switch (opciones){
        case "1":
            importe = prompt ("Ingrese el importe a calcular");
            if (importe>0)
                alert ("Su interés a pagar por el prestamo de " + importe + " es de "+ importe * TNA);
            break;
        
        case "2":
            cuotas = prompt ("Seleccione el numero de cuotas\n3 Cuotas\n6 Cuotas.");
            importe = prompt ("Ahora ingrese su importe");
            if (cuotas !=0)
                alert("Su interes a pagar por el prestamo de "+ importe + " es de "+ cuotas + " de " + importe/cuotas*TNACUOTAS);
                break;

                default:
                    "Vuelva al menú inicial";
        }
        


        opciones = prompt("Bienvenido.\nSeleccione la Opción deseada.\n1- Calcular Interes por Préstamo (1 pago)\n2- Simular interés de prestamos hasta 6 Cuotas Fijas\n3-Salir.");
    }


