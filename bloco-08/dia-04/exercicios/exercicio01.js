
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  // Dada uma matriz de matrizes, transforme em uma única matriz.
  // escreva seu código aqui.
  const newArray = [];
  arrays.reduce((cont, actual) => newArray.push(cont + actual), []);
//   newArray = arrays
//     .forEach((element) => element)
//     .reduce((acc, curr) => acc + newArray.push(curr),[]);
   return newArray;
}

console.log(flatten());

//assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);