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

const navLinks = document.querySelectorAll('.navi a');
const templeContainer = document.querySelector('#templeContainer');

const temples = [
    {
        templeName: "Manila Philippines",
        location: "Manila, Philippines",
        dedicated: "1984, September, 25-27",
        area: 26683,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/400x250/manila-philippines-temple-lds-129585-wallpaper.jpg"
    },
    {
        templeName: "Cebu Philippines",
        location: "Cebu, Philippines",
        dedicated: "2010, June, 13",
        area: 29556,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cebu-city-philippines/400x640/cebu-philippines-temple-lds-704567-wallpaper.jpg"
    },  
    {
        templeName: "Urndaneta Philippines",
        location: "Urdaneta, Philippines",
        dedicated: "2024, April, 28",
        area: 11500,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/urdaneta-philippines-temple/urdaneta-philippines-temple-43551-thumb.jpg"
    },    
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    }
  ];

  function displayTemples(templesArray) {
    templeContainer.innerHTML = '';

    templesArray.forEach((temple) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const name = document.createElement("h2");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;

        const area = document.createElement("p");
        area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);

        templeContainer.appendChild(card);
    });
}

function getDedicationYear(dedicationDate) {
    return parseInt(dedicationDate.split(', ')[0], 10);
}

const filters = {
    'Home': () => temples,
    'Old': () => temples.filter(temple => getDedicationYear(temple.dedicated) < 2000),
    'New': () => temples.filter(temple => getDedicationYear(temple.dedicated) >= 2000),
    'Large': () => temples.filter(temple => temple.area > 90000),
    'Small': () => temples.filter(temple => temple.area < 30000)
};

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        navLinks.forEach(link => link.classList.remove('active'));
        e.target.classList.add('active');

        const filterType = e.target.textContent.trim();
        console.log(`Filter Type: ${filterType}`);
        const filteredTemples = filters[filterType]();
        console.log(`Filtered Temples:`, filteredTemples);

        displayTemples(filteredTemples);

        document.querySelector('main h2').textContent = filterType;
    });
});

displayTemples(temples);