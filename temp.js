function addNumbers(a, b, c) {
  if (c === undefined) {
    return a + b;
  }
  return a + b + c;
}

const result2 = addNumbers(10, 20);
console.log(result2); // 30

const result3 = addNumbers(10, 20, 30);
console.log(result3); // 60

function printStringLetters(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}

