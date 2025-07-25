function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

while (true) {
  let choice = prompt("Convert Temperature:\n1. °F to °C\n2. °C to °F\n3. Exit");

  if (choice === "1") {
    let f = parseFloat(prompt("Enter °F:"));
    let c = fahrenheitToCelsius(f);
    alert(`${f}°F = ${c.toFixed(2)}°C`);
  } else if (choice === "2") {
    let c = parseFloat(prompt("Enter °C:"));
    let f = celsiusToFahrenheit(c);
    alert(`${c}°C = ${f.toFixed(2)}°F`);
  } else if (choice === "3") {
    alert("Goodbye!");
    break;
  } else {
    alert("Invalid option. Try again.");
  }
}
