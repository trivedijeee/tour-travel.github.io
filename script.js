// Smooth scrolling for navigation links

document.querySelector('.book-now-btn').addEventListener('click', function() {
  // Add your booking logic here, like opening a booking form or navigating to a booking page.
  alert('Booking functionality will be implemented here.');
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
  
    // Show  slide
    showSlide(currentIndex);
  
    // Next button click 
    nextBtn.addEventListener('click', function() {
      currentIndex++;
      if (currentIndex >= slides.length) {
        currentIndex = 0;
      }
      showSlide(currentIndex);
    });
  
    // Previous button click 
    prevBtn.addEventListener('click', function() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = slides.length - 1;
      }
      showSlide(currentIndex);
    });
  
    // Auto slide
    setInterval(function() {
      currentIndex++;
      if (currentIndex >= slides.length) {
        currentIndex = 0;
      }
      showSlide(currentIndex);
    }, 5000);
  
    // Function to show slide
    function showSlide(index) {
      slides.forEach(slide => slide.style.display = 'none');
      slides[index].style.display = 'block';
    }
  });
  