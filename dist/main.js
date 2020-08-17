// Owl carosel

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 1, // Show only 1 item
      loop: true, // Items will always be displayed (after the last item the 1st will be re-displayed)
      nav: true, //Show navigation icons <>
      autoPlay: true, // Auto play carousel
      autoplayHover: false, // Stop plaing carousel on item(image) hover
    });
  });

// Typed.js

const options = {
    strings: ['UI Specialist', 'Marvel Sann', 'Web Designer'],
    typeSpeed: 80,
    fadeOut: true,
    loop: true,
    showCursor: false
};

const typed = new Typed('.element', options);


// Headroom.js

const navbar = document.querySelector(".navbar");
const headroom = new Headroom(navbar);
headroom.init();