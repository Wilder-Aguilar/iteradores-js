const pendientes = ['tarea', 'comer', 'proyecto', 'estudiar'];

const carrito = [
    {nombre: 'Monitor', precio: 500},  
    {nombre: 'TV', precio: 100}, 
    {nombre: 'TABLET', precio: 100}, 
    {nombre: 'Audifonos', precio: 300}, 
    {nombre: 'Teclado', precio: 400}, 
    {nombre: 'Celular', precio: 700}, 
  ]


  for( let pendiente of pendientes ){
    console.log(pendiente);
  }

  for (let producto of carrito) {
    console.log(producto.nombre);
  }
