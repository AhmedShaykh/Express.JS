const path = require('path');

console.log('Filename: ', __filename);

console.log('Dir: ', __dirname);

var pathObj = path.parse(__filename);

console.log('Path OBJ: ', pathObj);

const f = path.extname(__filename);
console.log(__filename, f);