const fs = require('fs');

fs.writeFileSync('output.txt', 'Hello, World!', 'utf8');
console.log('File written successfully.');