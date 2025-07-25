let colors = ['red', 'blue'];
colors.push('green');     // add to the end
colors.unshift('yellow'); // add to the beginning

colors.pop();   // removes last item
colors.shift(); // removes first item

console.log(colors.includes('red'));  // true
console.log(colors.indexOf('blue'));  // 1

colors.forEach(function(color) {
  console.log(color);
});
