const swiper = new Swiper(".foodSwiper", {
  slidesPerView: 4,
  spaceBetween: 25,

  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },


  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const btn = document.querySelector('.submit-btn');
  btn.innerText = 'Sent!';
  btn.style.backgroundColor = '#F57148';

  setTimeout(() => {
    btn.innerText = 'Submit';
    btn.style.backgroundColor = ''; 
  }, 3000);
  this.reset();
});
