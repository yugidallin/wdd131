const year = document.querySelector("#currentYear");
const today = new Date();
let lastModDate = new Date(document.lastModified);

year.innerHTML = `&copy${today.getFullYear()}`;
document.getElementById("lastModified").textContent = `Last modified on: ${lastModDate.toDateString()} at ${lastModDate.toLocaleTimeString()}`;

document.addEventListener('DOMContentLoaded', function() {
    const reviewCountKey = 'reviewCount';
    const reviewCount = localStorage.getItem(reviewCountKey) || 0;
    document.getElementById('reviewCount').textContent = reviewCount;
});