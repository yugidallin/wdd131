const year = document.querySelector("#currentYear");
const today = new Date();
let lastModDate = new Date(document.lastModified);

year.innerHTML = `&copy${today.getFullYear()}`;
document.getElementById("lastModified").textContent = `Last modified on: ${lastModDate.toDateString()} at ${lastModDate.toLocaleTimeString()}`;

// Define the static values for temperature and wind speed
const temperatureCelsius = 10;  // Temperature in Celsius (e.g., 5°C)
const windSpeedKmH = 10;       // Wind speed in km/h (e.g., 10 km/h)

// Function to calculate wind chill in Celsius (Metric system)
function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature -  11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

// Function to check if wind chill can be calculated based on the conditions
function displayWindChill() {
    let windChill = "N/A";  // Default value

    // Check if the conditions for wind chill calculation are met
    if (temperatureCelsius <= 10 && windSpeedKmH > 4.8) {
        windChill = calculateWindChill(temperatureCelsius, windSpeedKmH).toFixed(2);  // Calculate and round to 2 decimal places
    }

    // Update the wind chill value in the HTML
    document.getElementById('windChill').textContent = windChill;
}

// Call the function when the page loads
window.onload = displayWindChill;

