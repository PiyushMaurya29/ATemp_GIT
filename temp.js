function addNumbers(a, b, c) {
  if (c === undefined) {
    return a + b;
  }
  return a + b + c;
}

const result2 = addNumbers(10, 20);
console.log(result2); // 30

