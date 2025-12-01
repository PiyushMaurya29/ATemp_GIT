console.log("Hello, World!");

function add(a, b) {
    return a + b;
}

module.exports = { add };



let result = add(2, 3);
console.log("2 + 3 =", result);