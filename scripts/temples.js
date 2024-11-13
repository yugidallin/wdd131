const year = document.querySelector("#currentYear");
const today = new Date();
let lastModDate = new Date(document.lastModified);

year.innerHTML = `&copy${today.getFullYear()}`;
document.getElementById("lastModified").textContent = `Last modified on: ${lastModDate.toDateString()} at ${lastModDate.toLocaleTimeString()}`;


const hamBtn = document.querySelector('#menu');
const navigation = document.querySelector('.navi');

hamBtn.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamBtn.classList.toggle('open');
})