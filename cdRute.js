const fs = require('fs');
const path = require('path');

let dir = 'cd /home/toni/software libre';
let count = dir.split(' /');
let format = '/' + count[1];
console.log(dir.split(' /'));
console.log(format);
