const apiKey = "9fa3cd212554740c26e0f69975ab8dbd";  // Replace with your actual key
// const apiKey = "YOUR_API_KEY";  // Replace with your actual key
const weatherButton = document.getElementById("getWeather");
const resultDiv = document.getElementById("result");

weatherButton.addEventListener("click", () => {
    const city = document.getElementById("city").value;

    if (!city) {
        resultDiv.textContent = "Please enter a city name.";
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then((data) => {
            const { main, weather } = data;
            resultDiv.innerHTML = `
                <h2>Weather in ${city}</h2>
                <p>Temperature: ${main.temp}°C</p>
                <p>Condition: ${weather[0].description}</p>
            `;
        })
        .catch((error) => {
            resultDiv.textContent = error.message;
        });
});
