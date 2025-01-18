const apiKey = "e07b52fe8f80bf73ebc29e5682c65ebd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const units = "&units=metric";
const appIdParam = "&appid=";

// Get DOM elements
const searchBox = document.querySelector("#location");
const searchButton = document.querySelector("#search");
const weatherIcon = document.querySelector(".weather-icon");
const errorDiv = document.querySelector(".error");
const weatherDiv = document.querySelector(".weather");

// Get DOM elements
const toggleModeButton = document.querySelector("#toggleMode");
const body = document.body;

// Event listener for toggle mode
toggleModeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});


// Function to update the background based on weather condition
function updateBackground(weatherCondition) {
    const body = document.body;

    // Clear existing background classes
    body.className = "";

    // Set background based on the weather condition
    if (weatherCondition === "Clouds") {
        body.style.background = "linear-gradient(135deg, #d7d2cc, #304352)";
    } else if (weatherCondition === "Clear") {
        body.style.background = "linear-gradient(135deg, #2ebf91, #8360c3)";
    } else if (weatherCondition === "Rain") {
        body.style.background = "linear-gradient(135deg, #667db6, #0082c8, #0082c8, #667db6)";
    } else if (weatherCondition === "Drizzle") {
        body.style.background = "linear-gradient(135deg, #89f7fe, #66a6ff)";
    } else if (weatherCondition === "Mist") {
        body.style.background = "linear-gradient(135deg, #e0eafc, #cfdef3)";
    } else {
        // Default background
        body.style.background = "linear-gradient(135deg, #f4f4f4, #cfd9df)";
    }
}

// Function to fetch and display weather
async function checkWeather(cityName) {
    const completeUrl = `${apiUrl}${cityName}${units}${appIdParam}${apiKey}`;
    console.log("Request URL:", completeUrl);

    try {
        const response = await fetch(completeUrl);

        if (response.status === 404) {
            // Show error and hide weather details
            errorDiv.style.display = "block";
            weatherDiv.style.display = "none";
        } else {
            const data = await response.json();

            // Update weather details
            document.querySelector(".city").innerText = data.name;
            document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerText = data.main.humidity + "%";
            document.querySelector(".wind-speed").innerText = data.wind.speed + " km/h";

            // Update weather icon
            const weatherCondition = data.weather[0].main;
            if (weatherCondition === "Clouds") {
                weatherIcon.src = "./images/clouds.png";
            } else if (weatherCondition === "Clear") {
                weatherIcon.src = "./images/clear.png";
            } else if (weatherCondition === "Rain") {
                weatherIcon.src = "./images/rain.png";
            } else if (weatherCondition === "Drizzle") {
                weatherIcon.src = "./images/Drizzle.png";
            } else if (weatherCondition === "Mist") {
                weatherIcon.src = "./images/mist.png";
            } else {
                weatherIcon.src = "./default.png"; // Fallback icon
            }

            // Update the background
            updateBackground(weatherCondition);

            // Show weather details and hide error
            weatherDiv.style.display = "block";
            errorDiv.style.display = "none";
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("An error occurred. Please try again later.");
    }
}

// Add event listener to search button
searchButton.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if (city) {
        checkWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});
