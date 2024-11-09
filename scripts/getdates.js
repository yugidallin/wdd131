const year = document.querySelector("#currentYear");
const today = new Date();

year.innerHTML = `&copy${today.getFullYear()}`;

let lastModDate = new Date(document.lastModified);

document.getElementById("lastModified").textContent = `Last modified on: ${lastModDate.toDateString()} at ${lastModDate.toLocaleTimeString()}`;
