
//* sacar los multiplos de los numeros del 1 al 5

for( let i = 1; i <= 5; i++ ) {
    
    let line = '';

    for( let j = 1; j <= 5; j++ ) {
        line += ` ${ j * i }`;
    }

    console.log( line );
}

//* calcular el maximo valor

function max(a,b,c) {
    if (a > b) {
        return (a > c) ? a : c;
    }
    if (b > c) {
        return b;
    }
    return (a > c) ? a : c;
}

let maxValue = max(11,22,55);
console.log(maxValue);


