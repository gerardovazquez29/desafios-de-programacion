//* Funciones

function add (x,y) {
    return x + y;
}
let resultado = add(5,6);
//* console.log(resultado);

let func = add;
resultado = func(5,6);
//* console.log(resultado);

function operation (a,b,fn) {
    console.log('aqui va el desarrollo de otro codigo');
    let res = fn(a,b)
   console.log(res)
}
//* operation(10,2, func)

//* Funcion tradicional
let funcA = function() {
    console.log('Algo')
}
//* Funcion tipo flecha
 let funcBc = () => {  
    console.log('algo')
} 

//* sintaxis nueva y sin tanto codigo
let funcB = () => console.log('algo')
funcB()

operation(10,2,(x, y) =>x * y)
