function fibonacci(num) {
  let [numOne, numTwo, sum] = [0, 1, 0];
  for (let i = 1; i < num; i++) {
    sum = numOne + numTwo
    numOne = numTwo
    numTwo = sum 
  }
return sum
}
module.exports = fibonacci;