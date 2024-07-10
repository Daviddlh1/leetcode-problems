function fizzBuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    result[i - 1] = "";
    if (i % 3 !== 0 && i % 5 !== 0) result[i - 1] += i;
    if (i % 3 === 0) result[i - 1] += "Fizz";
    if (i % 5 === 0) result[i - 1] += "Buzz";
  }
  return result;
}

console.log(fizzBuzz(3))
console.log(fizzBuzz(5))
console.log(fizzBuzz(15))

