let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let a = lines.shift() * 1;
let b = lines.shift() * 1;

console.log(`SOMA = ${(a+b)}`);
