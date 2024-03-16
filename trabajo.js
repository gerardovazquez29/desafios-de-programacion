//* tarea

let base = 10;
let limit = 50;


for (let i = 1; i <= limit; i++) {
    console.log(base, 'x', i, '=', base * i);
}



console.log('_________________________________');
let i = 1;
while (i <= limit) {
   console.log(base, 'x', i, '=', base * i);
   i++; 
}



console.log('_________________________________');

let j = 1
do {
    console.log( base, ' x ', j, ' = ', base * j );
    j++;
} while ( j <= limit );


