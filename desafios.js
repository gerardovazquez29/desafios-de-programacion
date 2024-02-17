//* DESAFIOS DE PROGRAMACION

//* realizar la tabla del numero 6 haciendo uso de ciclo 
//* ciclo do-while

let numero = 0;
let resultado 
do{
    resultado = numero * 6
    console.log('Resultado : ', numero, ' x  6 = ', resultado);
    numero++
}while (numero <= 10); 
    console.log('_____________');


//* ciclo while
let numeros = 0;
while (numeros <= 10) {
    resultado = numeros * 6;
    console.log('Resultado : ', numeros, ' x 6 = ', resultado);
    numeros++;
}
console.log('____________')


 //*ciclo for
for (let i = 0; i <= 10; i++) {
    resultado = i *6;
    console.log('Resultado : ', i , ' x 6 = ', resultado, );
}


// *1- Muestra una alerta con el mensaje "¡Bienvenida y bievenido a nuestro sitio web!".

let mensaje = 'bienvenidos a nuestro sitio web!';
alert(mensaje);


//* 2- Declara una variable llamada nombre y asígnale el valor "Luna".

let nombre = '';


//* 3- Crea una variable llamada edad y asígnale el valor 25.

let edad = 25;


//* 4- Establece una variable numeroDeVentas y asígnale el valor 50.

let numeroDeVentas = 50;


//* 5- Establece una variable saldoDisponible y asígnale el valor 1000.

let saldoDisponible = 1000;


/* //* 6- Muestra una alerta con el texto "¡Error! Completa todos los campos". */

alert('¡Error! Completa todos los campos.');


//* 7- Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos". Ahora muestra una alerta con el valor de la variable mensajeDeError .

let mensajeDeError = "¡Error! Completa todos los campos";
alert(mensajeDeError);


//* 8- Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre .

let nombre2 = prompt('ingresa tu nombre');


// *9- Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.

let edad2 = prompt('ingresa tu edad');


//* 10- Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!".

if (edad2 >= 18) {
    alert('¡Puedes obtener tu licencia de conducir!.');
}


//* 1- Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".

let diaSemana = prompt('¿Que dia de la semana es?');
if (diaSemana === 'sabado' || diaSemana == 'domingo') {
    alert('buen fin de Semana');
 } else {
    alert('buena semana');
}

//* 2- Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

let numeroAgregado = prompt('ingresa un numero');
if (numeroAgregado > 0 ) {
    alert(`el numero que ingresaste: ${numeroAgregado} es positivo`);
}else if (numeroAgregado < 0) {
    alert(`el numero que agregaste: ${numeroAgregado} es negativo`);
} else {
    alert(`el numero que agregaste: ${numeroAgregado} es neutro`);
}

//* 3- Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".

let puntos = 100;
if (puntos >= 100 ) {
    alert("¡Felicidades, has ganado!");
} else {
    alert("Intenta nuevamente para ganar.");
}

//* 4- Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.

let saldo = prompt('ingrese su saldo');
alert(`su saldo es: ${saldo}`);

//* 5- Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.

let nombreUsuario = prompt('introduse tu nombre de Usuario');
alert(`bienvenido ${nombreUsuario}`);

//* 1- Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.

let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}
console.log('____________________________');

//*2- Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.

let contador2 = 10;
while (contador2 >= 0) {
    console.log(contador2);
    contador2--;
}
console.log('____________________________');

//* 3- Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

let cuentaProgresiva = prompt('ingresa un numero');
cuentaProgresiva = parseInt(cuentaProgresiva);
let contador3 = 0;
while (contador3 <= cuentaProgresiva) {   
    console.log(contador3);
    contador3++;
}
//* 1- Crea un programa que utilice console.log para mostrar un mensaje de bienvenida. */



//* 2- Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en  la consola del navegador. */



//* 3- Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!". */



//* 4- Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador. */


//* 5- Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.



//* 6- Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.



//* Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.



//* Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.



//* Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.



//* Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.



//* Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.



//* Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.



//* Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.


