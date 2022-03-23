let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let a = lines.shift() * 1;
let b = lines.shift() * 1;
let result = ((a * 3.5)+(b *7.5)) / 11;

console.log(`MEDIA = ${result.toFixed(5)}`);
