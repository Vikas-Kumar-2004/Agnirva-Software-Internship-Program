function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swap
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

let numbers = [50, 20, 40, 10, 30];
console.log("Sorted list:", bubbleSort(numbers));
