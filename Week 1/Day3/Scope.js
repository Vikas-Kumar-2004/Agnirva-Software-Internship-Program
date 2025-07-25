function calculateArea(length, width) {
  let area = length * width;
  return area;
}

console.log(calculateArea(5, 3));  // ✅ Works
// console.log(area);  ❌ Error: 'area' is not defined outside the function
