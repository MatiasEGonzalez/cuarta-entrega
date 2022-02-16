function calculadora(moneda, precioSinInt) {

    let impuestopais = 0.35;
    let impuestoCompra = 0.30;
    let precioConInt = (precioSinInt + (precioSinInt * (impuestopais + impuestoCompra)));

    alert("El precio oficial actual del " + moneda + " es: $" + precioConInt);

}



for (let i = 0; i <= 10; i++) {
    alert("Bienvenido a la calculadora de impuestos a la moneda extranjera");
    let calcular = prompt("Desea calcular impuestos?\nsi o no");

    if (calcular == "no") {
        break;
    } else if (calcular == "si") {
        let moneda = prompt("Ingrese que moneda desea calcular");
        let precioSinInt = parseInt(prompt("Ingrese el precio actual del " + moneda));
        calculadora(moneda, precioSinInt);
    } else {
        alert("Ingrese una opcion valida");
    }
}