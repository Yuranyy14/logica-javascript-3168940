// // Ejercicio 1
// let numero = prompt("Ingrese un número:"); 
// console.log("El número ingresado es: " + numero); 

// if (numero > 0) {
//     console.log("Es positivo");
// } else if (numero < 0) { 
//     console.log("Es negativo");
// } else { 
//     console.log("Es cero");
// }

// // Ejercicio 2
// let num1 = prompt("Ingrese el primer número:");
// let num2 = prompt("Ingrese el segundo número:");

// if (num1 > 0) {
//     console.log(num1 + " es positivo");
// }
// if (num2 > 0) {
//     console.log(num2 + " es positivo");
// }

// //Ejercicio 3
// let a = prompt("Ingrese el primer número:");
// let b = prompt("Ingrese el segundo número:");

// if (a == b) { 
//     console.log("Multiplicación: " + (a * b));
// } else if (a > b) { 
//     console.log("Resta: " + (a - b));
// } else {
//     console.log("Suma: " + (parseFloat(a) + parseFloat(b)));
// }

// // Ejercicio 4
// let costo = prompt("Ingrese el costo del artículo:");
// let pago = prompt("Ingrese la cantidad entregada por el cliente:");

// let cambio = pago - costo; 
// console.log("El cambio es: " + cambio);

// // Ejercicio 5
// let cantidadVacunas = prompt("Ingrese el número de vacunas:");
// let costoVacuna = prompt("Ingrese el costo de cada vacuna:");
// let costoAplicacion = prompt("Ingrese el costo de aplicación por vacuna:");

// let total = cantidadVacunas * (parseFloat(costoVacuna) + parseFloat(costoAplicacion));
// console.log("El total gastado es: " + total);

// // Ejercicio 6
// let cantidadCamisas = prompt("Ingrese la cantidad de camisas:");
// let precioCamisa = prompt("Ingrese el precio por camisa:");

// let subtotal = cantidadCamisas * precioCamisa;
// let descuento;

// if (cantidadCamisas >= 3) { 
//     descuento = subtotal * 0.20;
// } else { 
//     descuento = subtotal * 0.10;
// }

// let totalPagar = subtotal - descuento;
// console.log("El total a pagar es: " + totalPagar);

// // Ejercicio 7
// let inicio = Number(prompt("Ingrese el dinero inicial del tendero:")); // X
// let ventas = 4 * 800000; 
// let total = inicio + ventas; 
// let pagoAcreedores = total * 0.10; 
// let final = total - pagoAcreedores; 

// console.log("Dinero inicial: $" + inicio);
// console.log("Dinero final: $" + final);
// console.log("Pago a acreedores: $" + pagoAcreedores);

// // Ejercicio 8
// let sumaVentas = 0;
// let dias = 5;

// for (let i = 1; i <= dias; i++) {
//   let venta = Number(prompt("Ingrese la venta del día " + i + ":"));
//   sumaVentas = sumaVentas + venta;
// }

// let promedio = sumaVentas / dias;

// console.log("Promedio de ventas: $" + promedio);

// // Ejercicio 9
// let num1 = Number(prompt("Ingrese el primer número:"));
// let num2 = Number(prompt("Ingrese el segundo número:"));
// let operacion = prompt("Ingrese la operación (+, -, *, /):");

// let resultado;

// if (operacion == "+") {
//   resultado = num1 + num2;
// } else if (operacion == "-") {
//   resultado = num1 - num2;
// } else if (operacion == "*") {
//   resultado = num1 * num2;
// } else if (operacion == "/") {
//   resultado = num1 / num2;
// } else {
//   console.log("Operación inválida");
// }

// console.log("Resultado: " + Math.floor(resultado)); 

// // Ejercicio 10
let a = Number(prompt("Ingrese el primer número:"));
let b = Number(prompt("Ingrese el segundo número:"));
let c = Number(prompt("Ingrese el tercer número:"));

let mayor, menor, medio;

if (a >= b && a >= c) {
  mayor = a;
} else if (b >= a && b >= c) {
  mayor = b;
} else {
  mayor = c;
}

if (a <= b && a <= c) {
  menor = a;
} else if (b <= a && b <= c) {
  menor = b;
} else {
  menor = c;
}

medio = a + b + c - mayor - menor;

console.log("Mayor: " + mayor);
console.log("Menor: " + menor);
console.log("Medio: " + medio);

if (a == b || b == c || a == c) {
  console.log("Hay números iguales.");
}

// // Ejercicio 11
// let edad = Number(prompt("Ingrese la edad del jugador:"));
// let estatura = Number(prompt("Ingrese la estatura en metros:"));
// let peso = Number(prompt("Ingrese el peso en kilogramos:"));

// if (edad >= 18 && estatura > 1.70 && peso >= 50 && peso <= 90) {
//   console.log("Jugador seleccionado.");
// } else {
//   console.log("No cumple con los requisitos.");
// }

// // Ejercicio 12
// let sueldo = Number(prompt("Ingrese el sueldo del trabajador:"));
// let minimo = Number(prompt("Ingrese el sueldo mínimo actual:"));
// let sueldoFinal;

// if (sueldo == minimo) {
//   sueldoFinal = sueldo * 1.10; 
// } else {
//   sueldoFinal = sueldo; 
// }

// console.log("Sueldo a devengar: $" + sueldoFinal);

// Ejercicio 13

// let datos = []; // Array vacío

// // Pedimos 3 nombres al usuario
// datos[0] = prompt("Ingresa el primer dato:");
// datos[1] = prompt("Ingresa el segundo dato:");
// datos[2] = prompt("Ingresa el tercer dato:");

// // Mostramos el array completo
// console.log("Contenido del array:", datos);

//Ejercicio 14

// let nombres = [];
// let nombre;

// do {
//     nombre = prompt("Ingresa un nombre (escribe 'salir' para terminar):");
//     if(nombre.toLowerCase() !== "salir") {
//         nombres.push(nombre);
//         console.log("Nombre ingresado:", nombre);
//     }
// } while(nombre.toLowerCase() !== "salir");

// console.log("Todos los nombres ingresados:", nombres);

