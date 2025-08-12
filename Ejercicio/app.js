// let i = 0;

// while (i < 0) {
//   console.log("Escribe un numero mayor a 0");
//   i = i + 1;
// }

// console.log("Bucle finalizado");
//Ejercicio 1

// let num = Number (prompt("Introduce un numero"))
// let counter = 1

// //Sumemos 1 a counter

// while (counter <= num){
//   if(counter % 5 === 0){
//     console.log(counter)
//   }
//   counter++
// }

// //Ejercicio 

// //Primero evalua y luego ejecuta 
// do {
//   if(counter % 5 === 0){
//     console.log(counter)
//   }
//   counter++
// }
// while (counter <= num)

// //Ejercicio 3 (for)

// for(let i = 1; i <= 50; i++){
//     if ( i % 2 !=0){
//       console.log(i)
//     }
// }

//Cree un ciclo for que imprima la tabla de multiplicar del 7 

for(let i = 1; i <=10; i++){
      console.log(`7 x ${i} = ${7*1}`)
    }

//Ejercicio 5
for(let i = 1; i <=100; i++){
      if( i >= 20 && i <= 30){
          continue
      }
  console.log(i)
    }