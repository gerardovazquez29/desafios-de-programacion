

//* sacar el nombre mas largo

function largestNameofArray(nameArray) {
    let largestName = '';
    for (let i = 0; i < nameArray.length; i++) {
        let name = nameArray[i];
        if (name.length > largestName.length) {
            largestName = name;
        }
    }
    return largestName;
}

let heroes = ['Deadpool','Ciclope','Magneto','Charles Xavier'];
let hero = largestNameofArray(heroes);
console.log(hero);


console.log('_________________________________');

//* elige el numero con la letra D

function heroesThatStartsWith(nameList,letter) {
    letter = letter.toUpperCase();
    let newNameList = [];

    for( let name of nameList ) {
        if ( name.startsWith(letter) ) {
            newNameList.push( name );
        }
    }
    return newNameList;
}

let heroe = ['Doom','Dr.Strage','Hulk','She Hulk','Spiderman','Captain Marvel','Tormenta'];
let herosWithLetters = heroesThatStartsWith(heroe, 'C');
console.log(herosWithLetters);

