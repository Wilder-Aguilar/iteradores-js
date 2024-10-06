// // Se ejecuta al menos una vez

// let i = 100;  //Inicio
// do{
//     console.log(`Número ${i}`)
//     i++  //Incremento
// } while(i < 10);  //Condición



//FIZBUZZ

let i = 0;  //Inicio
do{
    if (i % 3 === 0 & i%5 === 0) {
        console.log(`${i} FIZZBUZZ`)
    } else if (i % 3 === 0) {
        console.log(`${i} fizz`)
    } else if (i % 5 === 0) {
        console.log(`${i} buzz`)
    }
    i++  //Incremento
} while(i < 100);  //Condición