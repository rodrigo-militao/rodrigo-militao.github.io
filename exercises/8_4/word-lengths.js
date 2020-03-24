const assert = require('assert');
// escreva a função wordLengths para passar nos testes abaixo:
const wordLengths = (words) => {
    let lengths = [];
    for (let i = 0; i < words.length; i++){
        lengths.push(words[i].length)
    }
    return lengths;
}
//
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);

