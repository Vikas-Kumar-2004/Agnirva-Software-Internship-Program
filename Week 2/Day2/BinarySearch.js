function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return `Found at index ${mid}`;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return "Not found";
}

let sorted = [1, 3, 5, 7, 8, 9];
console.log(binarySearch(sorted, 7)); // Found at index 3
