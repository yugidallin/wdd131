const year = document.querySelector("#currentYear");
const today = new Date();
let lastModDate = new Date(document.lastModified);

year.innerHTML = `&copy${today.getFullYear()}`;
document.getElementById("lastModified").textContent = `Last modified on: ${lastModDate.toDateString()} at ${lastModDate.toLocaleTimeString()}`;


const temperatureCelsius = 10;
const windSpeedKmH = 10;       

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature -  11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}


function displayWindChill() {
    let windChill = "N/A";  

    if (temperatureCelsius <= 10 && windSpeedKmH > 4.8) {
        windChill = calculateWindChill(temperatureCelsius, windSpeedKmH).toFixed(2);  
    }

    document.getElementById('windChill').textContent = windChill;
}

window.onload = displayWindChill;

