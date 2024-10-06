//Ideal para recorrer arreglos, al menos una vez

const pendientes = ['tarea', 'comer', 'proyecto', 'estudiar'];

pendientes.forEach((pendiente,indice) => 
    console.log(`${indice}:${pendiente}`)
)

//forEach con objetos

const carrito = [
    {nombre: 'Monitor', precio: 500},  
    {nombre: 'TV', precio: 100}, 
    {nombre: 'TABLET', precio: 100}, 
    {nombre: 'Audifonos', precio: 300}, 
    {nombre: 'Teclado', precio: 400}, 
    {nombre: 'Celular', precio: 700}, 
  ]

  carrito.forEach(producto => {
    console.log(producto);
    console.log(producto.nombre);
    console.log(producto.precio);
  })