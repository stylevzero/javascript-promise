

// Otra forma de crear promesas
function beginner(){
    if(Math.floor(Date.now() / 1000) % 2 == 0)
        return Promise.resolve("Hello World");
    return Promise.reject("Se ha producido un error");
}

beginner().then(console.log).catch(console.log);

Promise.resolve("Helllo World Promise Javascript").then(console.log);
//Promise.reject("Helllo World Promise Javascript").then(console.log).catch(console.log);