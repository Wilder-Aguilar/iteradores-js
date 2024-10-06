// Los iteradores se ejecutan hasta que el codigo deja de ejecutar una función

//Incremento de 1 en 1:
for(let i = 0; i<=20 ; i++){
    console.log(`Este es el número:${i}`)
}


//Incremento de dos en dos:
for(let i = 0; i<=20 ; i+=2){
    console.log(`Este es el número:${i}`)
}

//Identificación de números pares e impares
for(let i = 1; i<=30 ; i++){
    if(i%2 === 0){
        console.log(`El número ${i} es par`)
    } else{
        console.log(`El número ${i} es impar `)
    }
}

//
const compras = [
    {nombre:"Monitor", precio: 1000},
    {nombre:"TV", precio: 1800},
    {nombre:"Celular", precio: 1500},
    {nombre:"Tablet", precio: 1800},
    {nombre:"Teclado", precio: 200},
    {nombre:"Mouse", precio: 100},
]

for( let i = 0; i < compras.length; i++ ){
    console.log(compras[i].nombre)
}
