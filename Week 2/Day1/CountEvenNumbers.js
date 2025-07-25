let numbers = [1, 2, 3, 4, 5, 6];
let evenCount = 0;

numbers.forEach(num => {
  if (num % 2 === 0) evenCount++;
});

console.log("Even numbers count:", evenCount);
