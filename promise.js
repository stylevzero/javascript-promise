
/*
let message = setTimeout(imAsync, 2000);

console.log(message);

function imAsync(){
    return "Hello promises"
}
*/

//let message = imAsync();

// Executor

let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        //return "Hello promises"
        //let confirma = confirm("¿Esta promesa se cumplió?");
        //if(confirma) {
            return resolve("Hello promises");
        //} else {
            return reject(new Error("Hubo un error"));
        //}
    }, 2000);
});

//promise.then(console.log).catch(console.log)

/*
promise.then(function(resultado){
    console.log(resultado);
}, function(error){
    console.log("Algo salió mal");
    console.log(error);
})
*/


// El objeto resultante o promesa puede estar en uno de 3 distintos estados.
// Pendiente = Estado inicial, la promesa no se ha cumplido
// Successfill o cumplido = La operación se ha completado de manera exitosa
// Rejected o rechazado = La operación de la promesa falló

promise.then(function(resultado){
    console.log(resultado);
}).catch(function(err) {
    console.log(err);
})

