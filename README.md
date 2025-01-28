# Weather App using OpenWeather API
The Weather App is a web application that fetches real-time weather data from the OpenWeather API and presents it to the user in a user-friendly UI. Features
- Display the current weather conditions including temperature, humidity, wind speed, and weather description.
- Allow users to search for weather data of different cities.
- Automatically detect and display the weather data of the user's current location (optional).
- Responsive design to ensure a seamless experience across devices.

# live:https://openweathercom.netlify.app/
# Weather App Screenshot 📷
![Screenshot (253)](https://github.com/user-attachments/assets/05d13990-a943-45b2-b385-bd2cc8eb4aae) ![Screenshot (254)](https://github.com/user-attachments/assets/79c035b1-2355-4b73-8c52-7ccdc2dc33f9)


# Video 🎥


https://github.com/user-attachments/assets/9ea2fb4c-15d9-4e40-a801-1ca34aea685e

# Technologies Used
- HTML, CSS, and JavaScript for the frontend user interface.
- OpenWeather API to fetch real-time weather data.

# cd weather-app
- Open index.html in your preferred web browser.

- Enter the name of the city you want to check the weather for in the search box.

- Press the "Search" button to fetch and display the weather data for the specified city.

- (Optional) Allow the app to use your device's location to automatically fetch the weather data for your current location.

# API Key Setup
To use the OpenWeather API, you need to sign up on their website to obtain an API key. Once you have the API key, create a file named config.js in the project directory and store your API key in it as follows:

#E javascript

// config.js const API_KEY = 'YOUR_API_KEY_HERE';

Replace 'YOUR_API_KEY_HERE' with your actual API key.

Note: Do not share your API key publicly or commit it to version control. Use environment variables or other secure methods to manage the API key in production.

