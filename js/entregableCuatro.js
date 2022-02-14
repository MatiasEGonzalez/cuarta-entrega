alert("Bienvenido a la calculadora de impuestos a la moneda extranjera")

function calculadora(precioSinInt, PrecioConInt){


let moneda = prompt("Ingrese que moneda desea calcular");
precioSinInt = parseInt(prompt("Ingrese el precio actual del " + moneda));
let impuestopais = 0.35;
let impuestoCompra = 0.30;
PrecioConInt = (precioSinInt + (precioSinInt * (impuestopais + impuestoCompra)));


alert("El precio oficial actual del " + moneda + " es: $" + PrecioConInt);

}



for (let i = 1; i <= 10; i++) {
    let calcular = prompt("Desea calcular impuestos?\nSi o No");

    if(calcular == "no"){
        break;
    }
    else if (calcular == "si"){
        calculadora();
    }else{
        alert("Ingrese una opcion valida")
    }
}