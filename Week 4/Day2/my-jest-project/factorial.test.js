const factorial = require('./factorial');
test('factorial of 5 is 120', () => {
  expect(factorial(5)).toBe(120);
});