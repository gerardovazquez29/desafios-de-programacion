const datos = ['elemento1', 'elemento2', 'elemento3',]
datos.forEach(function(elemento) {
    console.log('elemento: ' + elemento.toUpperCase())
})

const numeros = [3,1,4,2]
numeros.sort()
console.log('Array ordenado: ' + numeros)

// funcion Anonima
/* const valores = [1,2,3,4,5]
const cuadrados = valores.map(function(numero) {
    return numero * numero;
})
console.log(valores)
console.log(cuadrados) */

// Funcion Flecha
const valores = [1,2,3,4,5]
const cuadrados = valores.map(numero => numero * numero)
console.log(cuadrados)    
 