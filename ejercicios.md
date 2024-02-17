Ejercicios de programación

Antes de realizar cada ejercicio, hay un video donde les doy TIPS útiles para resolver estos
ejercicios. Si desean aventurarse y hacerlos adelante, si no, antes de empezar, vean la clase
respectiva para los TIPS y la solución del mismo ejercicio.

1- Convertir de Libras a Kilogramos. ( 1 libra = 0.453592 Kilogramos )

    Ejemplo: 150 libras = 68.0388 kilogramos

2- Convertir de kilómetros a millas, sabiendo que: (1 kilómetro es igual a 0.62 millas )

    Ejemplo: 10 kilómetros = 6.21 millas

3- Calcule el área de un triangulo rectángulo que:

    Base 10 y altura 5

4- Dado el siguiente arreglo:

    let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
    Utilizando un ciclo FOR, barra todo el arreglo y determine ¿Cuál es el número mayor?

5- Dado el siguiente arreglo:

    let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];

    Haga una impresión en consola así:
    1 es un número impar
    2 es un número par
    3 es un número impar
    …
    6 es un número par

    Debe de utilizar un ciclo FOR para generar dicha impresión.

    Tip: usar el operador % para obtener el resultado, ejemplo:
    2%2; // 0
    3%2; // 1
    4%2; // 0
    5%2; // 1


6- Realice un algoritmo, que permita la impresión en consola de la siguiente tabla:

    El resultado será esperado es algo así:

    1 2 3 4 5
    2 4 6 8 10
    3 6 9 12 15
    4 8 12 16 20
    5 10 15 20 25


7- Crear una función que reciba 3 argumentos numéricos ( a, b, c), la función se debe de llamar
    max, la función debe de determinar cual es el mayor de los 3 y retornarlo… la función debe de
    trabajar así:

    let maxValue = max( 5, 2, 6);
    console.log( maxValue ); // 6

8- Crear una función que reciba como argumento un arreglo, la función debe de retornar el
    nombre que tenga más letras del arreglo, y debe de trabajar así:

    let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
    let hero = largestNameOfArray( heroes );
    console.log( hero ); //* Profesor Charles Xavier
    
    Tip:
    let hero = 'Strider';
    hero.length; //* 7


9- Crear una función que reciba un arreglo como argumento, la función debe de retornar un
    nuevo arreglo pero filtrando todos los nombres que empiezan con una determinada letra.
    Ejemplo:

    let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
    let herosWithLetterS = heroesThatStartsWith( heroes, 'S' );
    console.log( herosWithLetterS ); // She Hulk, Spiderman

    Tip:
     Para determinar si un string empieza con una letra
    let hero = ‘Spiderman';
    hero.startsWith(’S’); // true
    Si se tiene un arreglo vació, por ejemplo:
    let newHeroes = [];
    Se puede insertar en el arreglo así:
    newHeroes.push('Hulk');

Mucha suerte!