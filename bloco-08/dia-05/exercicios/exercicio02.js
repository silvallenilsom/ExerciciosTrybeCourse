const assert = require('assert');
// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. use rest
// escreva sum abaixo
const sum = (...numbers) => {
  const result = numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return result;
}

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);