// Footnote
const year = document.querySelector("#currentYear");
const today = new Date();
let lastModDate = new Date(document.lastModified);

year.innerHTML = `&copy${today.getFullYear()}`;
document.getElementById("lastModified").textContent = `Last modified on: ${lastModDate.toDateString()} at ${lastModDate.toLocaleTimeString()}`;

// Menu
const menuBtn = document.querySelector('#menu');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});


// Slideshow
document.querySelectorAll('.slideshow-container').forEach((container) => {
    let index = 0;
    const slides = container.querySelector('.slides');
    const images = slides.querySelectorAll('img');
    const dots = container.querySelectorAll('.dot');
    const totalSlides = images.length;
    let autoplay;
  
    function showSlide(n) {
      index = (n + totalSlides) % totalSlides;
      slides.style.transform = `translateX(-${index * 100}%)`;
      updateDots();
    }
  
    function updateDots() {
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    }
  
    function startAutoplay() {
      return setInterval(() => {
        showSlide(index + 1);
      }, 4000);
    }
  
    function stopAutoplay() {
      clearInterval(autoplay);
    }
  
    container.querySelector('.prev').addEventListener('click', () => {
      stopAutoplay();
      showSlide(index - 1);
      autoplay = startAutoplay();
    });
  
    container.querySelector('.next').addEventListener('click', () => {
      stopAutoplay();
      showSlide(index + 1);
      autoplay = startAutoplay();
    });
  
    dots.forEach((dot, dotIndex) => {
      dot.addEventListener('click', () => {
        stopAutoplay();
        showSlide(dotIndex);
        autoplay = startAutoplay();
      });
    });
  
    container.addEventListener('mouseenter', () => {
      autoplay = startAutoplay();
    });
  
    container.addEventListener('focus', () => {
      autoplay = startAutoplay();
    });
  
    container.addEventListener('mouseleave', () => {
      stopAutoplay();
    });
  
    container.addEventListener('blur', () => {
      stopAutoplay();
    });
  
    showSlide(0);
  });


  function adjustSlideshowVisibility() {
    const slideshowContainers = document.querySelectorAll('.slideshow-container');
  
    if (window.innerWidth >= 720) {
      slideshowContainers.forEach(container => {
        container.style.display = 'block';
      });
    } else {
      slideshowContainers.forEach(container => {
        container.style.display = 'none'; 
      });
    }
  }
  
  window.addEventListener('load', adjustSlideshowVisibility);
  window.addEventListener('resize', adjustSlideshowVisibility);
  
function redirectToPlanner(destination) {
    const url = `planner.html?destination=${encodeURIComponent(destination)}`;
    window.location.href = url;
}

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

window.addEventListener('DOMContentLoaded', () => {
  const destination = getQueryParam('destination');
  if (destination) {
      const destinationSelect = document.getElementById('destination');
      const optionToSelect = Array.from(destinationSelect.options).find(option => option.value === destination);
      if (optionToSelect) {
          destinationSelect.value = destination;
      }
  }
});
  
//   Filter
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('button[data-category]');
  const destinations = document.querySelectorAll('.destination');

  function filterDestinations(category) {
    destinations.forEach(destination => {
      const destinationCategory = destination.getAttribute('data-category');
      if (category === 'all' || destinationCategory === category) {
        destination.style.display = 'block';
      } else {
        destination.style.display = 'none';
      }
    });
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');

      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      });

      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');

      filterDestinations(category);
    });
  });

  filterDestinations('all');
});

  
  
//   Planner

const destinationBudgetRanges = {
  Boracay: { min: 25, max: 50 },
  Nacpan: { min: 25, max: 50 },
  Siargao: { min: 25, max: 50 },
  Tubbataha: { min: 25, max: 50 },
  Intramuros: { min: 25, max: 50 },
  Vigan: { min: 25, max: 50 },
  Kawasan: { min: 25, max: 50 },
  Kayangan: { min: 25, max: 50 },
  "Underground River": { min: 25, max: 50 }
};

window.addEventListener('DOMContentLoaded', () => {
  const destinationSelect = document.getElementById('destination');
  const startDateInput = document.getElementById('start-date');
  const endDateInput = document.getElementById('end-date');
  const budgetInput = document.getElementById('budget');

  const urlParams = new URLSearchParams(window.location.search);
  const destination = urlParams.get('destination');

  if (destination) {
      destinationSelect.value = destination;
  }

  const calculateBudget = () => {
      const destination = destinationSelect.value;
      const startDate = new Date(startDateInput.value);
      const endDate = new Date(endDateInput.value);

      if (startDate && endDate && endDate >= startDate) {
          const days = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
          const { min, max } = destinationBudgetRanges[destination] || { min: 0, max: 0 };

          budgetInput.value = (days * ((min + max) / 2)).toFixed(2);
      } else {
          budgetInput.value = '';
      }
  };

  startDateInput.addEventListener('change', calculateBudget);
  endDateInput.addEventListener('change', calculateBudget);

  const itineraryForm = document.getElementById('itinerary-form');
  const confirmationPopup = document.getElementById('confirmation-popup');
  const popupDetails = document.getElementById('popup-details');

  itineraryForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const destination = destinationSelect.value;
      const startDate = startDateInput.value;
      const endDate = endDateInput.value;
      const estimatedBudget = budgetInput.value;

      popupDetails.innerHTML = `
          <strong>Destination:</strong> ${destination}<br>
          <strong>Start Date:</strong> ${startDate}<br>
          <strong>End Date:</strong> ${endDate}<br>
          <strong>Estimated Budget:</strong> $${estimatedBudget}
      `;
      confirmationPopup.style.display = 'block';
  });

  document.getElementById('save-itinerary').addEventListener('click', () => {
      const itinerary = {
          destination: destinationSelect.value,
          startDate: startDateInput.value,
          endDate: endDateInput.value,
          estimatedBudget: budgetInput.value
      };
      localStorage.setItem('itinerary', JSON.stringify(itinerary));
      alert('Itinerary saved!');
      confirmationPopup.style.display = 'none';
  });

  document.getElementById('cancel').addEventListener('click', () => {
      confirmationPopup.style.display = 'none';
  });
});


  