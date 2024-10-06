const pendientes = ['tarea', 'comer', 'proyecto', 'estudiar'];

for( let pendiente in pendientes ){
    console.log(pendiente);
  }

const automovil ={
    modelo:"Camaro",
    year:1970,
    motor: "6.0"
}

for( let propiedad in automovil ){
    console.log(propiedad)
  }

for( let propiedad in automovil ){
    console.log(`${automovil[propiedad]}`)
  }

for( let [llave,valor] of Object.entries(automovil)){
    console.log(valor);
    console.log(llave);
}