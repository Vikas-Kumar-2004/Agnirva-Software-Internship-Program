
console.log("O(1): Always same time");

let numbers = [10, 20, 30];
console.log(numbers[1]); // Instant

console.log("O(n): Time grows with array");

// 
numbers.forEach(num => console.log(num));

console.log("O(n²): Nested loops = slow");

// 
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    console.log(i, j);
  }
}

