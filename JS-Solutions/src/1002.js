let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let r = lines.shift() * 1;
let area = Math.pow(r, 2) * 3.14159;

console.log(`A=${area.toFixed(4)}`);
