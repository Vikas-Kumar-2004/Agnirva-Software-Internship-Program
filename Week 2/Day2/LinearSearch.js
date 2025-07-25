function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return `Found at index ${i}`;
  }
  return "Not found";
}

console.log(linearSearch([5, 3, 7, 1, 8, 9], 7)); // Found at index 2
