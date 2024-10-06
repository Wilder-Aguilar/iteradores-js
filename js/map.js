//Map es identico a forEach, la diferencia es que map crea un arreglo nuevo 

const carrito = [
    {nombre: 'Monitor', precio: 500},  
    {nombre: 'TV', precio: 100}, 
    {nombre: 'TABLET', precio: 100}, 
    {nombre: 'Audifonos', precio: 300}, 
    {nombre: 'Teclado', precio: 400}, 
    {nombre: 'Celular', precio: 700}, 
  ]


const nuevoArreglo = carrito.forEach(producto => producto.nombre);
const nuevoArreglo2 = carrito.map(producto => producto.nombre);

console.log(nuevoArreglo); //forEach vacio, no crea un nuevo arreglo
console.log(nuevoArreglo2); // map crea un nuevo arreglo