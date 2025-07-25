function findLargest(numbers) {
  let largest = 0; // ❌ Should be numbers[0]
  for (let num of numbers) {
    if (num > largest) {
      largest == num; // ❌ Should be =
    }
  }
  return largest;
}

let numbers = [3, 5, 2, 8, 1];
console.log("Largest number is", findLargestNumber(numbers)); // ❌ wrong name
