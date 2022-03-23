let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let a = lines.shift() * 1;
let b = lines.shift() * 1;
let c = lines.shift() * 1;
let result = ((a * 2)+(b * 3)+(c * 5)) / 10;

console.log(`MEDIA = ${result.toFixed(1)}`);
