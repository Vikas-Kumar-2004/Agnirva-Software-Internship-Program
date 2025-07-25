let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  attempts++;

  if (isNaN(guess)) {
    document.getElementById("feedback").textContent = "Please enter a valid number.";
    return;
  }

  if (guess < secretNumber) {
    document.getElementById("feedback").textContent = "Too low. Try again.";
  } else if (guess > secretNumber) {
    document.getElementById("feedback").textContent = "Too high. Try again.";
  } else {
    document.getElementById("feedback").textContent = `🎉 You got it in ${attempts} attempts!`;
  }
}

// Limit the Number of Attempts
let maxAttempts = 10;

if (attempts >= maxAttempts) {
  document.getElementById("feedback").textContent = `Game Over! The number was ${secretNumber}.`;
}

//  Add a "Reset Game" Button
function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("feedback").textContent = "";
  document.getElementById("guessInput").value = "";
}

// Add Difficulty Levels
function setDifficulty() {
  const max = parseInt(document.getElementById("difficulty").value);
  secretNumber = Math.floor(Math.random() * max) + 1;
  resetGame();
}

