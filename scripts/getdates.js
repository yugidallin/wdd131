const year = document.querySelector("#currentYear");
const today = new Date();
let oLastModif = new Date(document.lastModified);

year.innerHTML = `&copy${today.getFullYear()}`;


// alert(document.lastModified)