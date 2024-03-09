//* funciones 2
//* Imprime en consola a mayuscculas

let datos = ['elemento1', 'elemento2', 'elemento3',]
datos.forEach(function(elemento) {
    console.log('elemento: ' + elemento.toUpperCase())
});

console.log('____________________________________________');


//* este metodo ordena los numeros

let numeros = [3,1,4,2]
numeros.sort()
console.log('Array ordenado: ' + numeros)


//* funcion Anonima
//* esta funcion eleva los numeros al cuadrado

let valores = [1,2,3,4,5]
let cuadradoss = valores.map(function(numero) {
    return numero * numero;
})
console.log(valores);
console.log(cuadradoss);


console.log('_______________________________________________');


//* Funcion Flecha

let valor = [1,2,3,4,5]
let cuadrados = valor.map(numero => numero * numero)
console.log(cuadrados);    
 