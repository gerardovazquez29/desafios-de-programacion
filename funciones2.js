//* Funciones

function add (x,y) {
    return x + y;
}
let resultado = add(5,6);
console.log(resultado);

console.log('________________________________');

let func = add;
resultado = func(5,6);
console.log(resultado);

console.log('__________________________________');

function operation (a,b,fn) {
    console.log('aqui va el desarrollo de otro codigo');
    let res = fn(a,b)
   console.log(res)
}

console.log('_________________________________________');


//* operation(10,2, func)

//* Funcion tradicional

let funcA = function() {
    console.log('hola')
}

console.log('_____________________________________________');

//* Funcion tipo flecha

 let funcBc = () => {  
    console.log('halgo')
} 

console.log('____________________________________________');


//* sintaxis nueva y sin tanto codigo

let funcB = () => console.log('algo de otro')
funcB()

operation(10,2,(x, y) =>x * y)

