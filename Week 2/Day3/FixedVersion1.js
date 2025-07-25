function calculateAverage(numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  let average = total / numbers.length;
  return average; // fixed typo
}

let nums = [10, 20, 30, 40];
console.log("Average is", calculateAverage(nums)); // fixed name
