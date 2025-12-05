const fs = require("fs");
fs.writeFileSync("temp.txt", "This is a temporary file NEW LOL.");
console.log("Temporary file created.");

setTimeout(() => {
  fs.unlinkSync("temp.txt");
  console.log("Temporary file deleted.");
}, 5000);

// This script creates a temporary file and deletes it after 5 seconds.

// To run this script, use the command: node temp.js