const fs = require('fs');

fs.writeFileSync('output.txt', 'Hello, World!', 'utf8');
console.log('File written successfully.');


let data = fs.readFileSync('output.txt', 'utf8');
console.log('File content:', data);

fs.unlinkSync('output.txt');
console.log('File deleted successfully.');

// Additional functionality: Check if file exists before reading or deleting
const filePath = 'output.txt';