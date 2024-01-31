function fibonacci(num) {
  let [numOne, numTwo, fib] = [0, 1, 0];
  for (let i = 1; i < num; i++) {
    fib = numOne + numTwo
    numOne = numTwo
    numTwo = fib 
  }
return fib
}

module.exports = fibonacci;
