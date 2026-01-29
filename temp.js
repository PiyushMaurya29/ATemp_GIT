let a = 'Hello, World!';
console.log(a);

function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('Alice'));
console.log(greet('Bob'));

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);