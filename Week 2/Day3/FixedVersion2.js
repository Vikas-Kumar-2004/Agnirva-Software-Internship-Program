function findLargest(numbers) {
  let largest = numbers[0]; // fixed starting value
  for (let num of numbers) {
    if (num > largest) {
      largest = num; // fixed assignment
    }
  }
  return largest;
}

let numbers = [3, 5, 2, 8, 1];
console.log("Largest number is", findLargest(numbers)); // fixed function call
