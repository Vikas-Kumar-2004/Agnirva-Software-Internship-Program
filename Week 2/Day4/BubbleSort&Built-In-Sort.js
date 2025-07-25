function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
      }
    }
  }
}

// Step 1: Make a Big Array
let numbers = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));

//  Step 2: Bubble Sort Time

let bubbleList = [...numbers]; // Clone it
let start = performance.now();

bubbleSort(bubbleList);

let end = performance.now();
console.log("Bubble Sort Time (ms):", (end - start).toFixed(2));


//  Step 3: Built-In Sort Time

let builtInList = [...numbers];
start = performance.now();

builtInList.sort((a, b) => a - b);

end = performance.now();
console.log("Built-In Sort Time (ms):", (end - start).toFixed(2));
