
//* calcular libras a kilogramos

let pounds = 150;

kgs = pounds * 0.453592;

console.log( `150 Libras es igual a ${kgs} kgs`);


//* Calcular kilometros a Millas

let kms = 10;
miles = kms * 0.62;

console.log(`10 Kilometros es igual a ${miles} millas`);


//* Calcular el Area de la base por la Altura de un Rectangulo

let base = 10;
let Altura = 5;
let area = (base * Altura) / 2;

console.log(`La Area es : ${area}`);

//* Calcular el numero mayor

let numero = [1,6,8,14,2,-47,-88,7,10,3,55];
let maxNumero = -9999999;

for (let i = 0; i < numero.length; i++) {
    if (numero[i] >= maxNumero) {
        maxNumero = numero[i];
    }
}
console.log(`El numero mayor es: ${maxNumero}`);


//* verifica que numeros son par o impar


let numbers = [1,6,8,4,2,7,9,10,14,18,19,3,5,88];

for (let i = 0; i < numbers.length; i++) {
    number = numbers[i];

    if ((number % 2) === 0) {
        console.log(`El numero ${number} es par`);
    } else {
        console.log(`El numero ${number} es impar`);
    }
}


