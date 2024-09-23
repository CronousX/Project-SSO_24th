// Preload

document.addEventListener('DOMContentLoaded', () => {
  "use strict";
  const preloader = document.querySelector('#preloader');

  if (preloader) {
    window.addEventListener('load', () => {
      preloader.style.display = "none";
      preloader.remove();
      window.scrollTo(0, 0);
    });
  }
});

// sticky navbar

var wrapper = document.querySelector(".main-wrapper");

wrapper.addEventListener("scroll", function(){
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky", wrapper.scrollTop > 0);
});


// Nav Highlight

let section = document.querySelectorAll('.body-item');
let lists = document.querySelectorAll('.navbar a');

function activeLink(li) {
  lists.forEach((item) => item.classList.remove('active'));
  li.classList.add('active');
}

wrapper.addEventListener("scroll", function(){
  section.forEach(sec => {
    let top = wrapper.scrollTop;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset - 100 && top < offset + height) {
      const target = document.querySelector(`[href='#${id}']`);
      activeLink(target);
    }
  });
});


// Nav Burger

var navLinks = document.querySelector(".nav-links");
var navBurg = document.querySelector(".nav-burger");

function openNavBurger() {
  navBurg.classList.toggle("active");
  navLinks.classList.toggle("openned");
}

function closeNavBurger() {
  navBurg.classList.remove("active");
  navLinks.classList.remove("openned");
}

// Foot Links

var linkShort = document.querySelector(".foot-links-shorter");
var linksWrapper = document.querySelector(".foot-links-right");

function openFootLinks() {
  linksWrapper.classList.toggle("openned");
  linkShort.classList.toggle("fa-globe");
  linkShort.classList.toggle("fa-close");
}

function closeFootLinks() {
  linksWrapper.classList.remove("openned");
  linkShort.classList.add("fa-globe");
  linkShort.classList.remove("fa-close");
}

// Pop Ups

var closebtnPopUp = document.querySelector(".close-btn");
var popUpBg = document.querySelector(".popUp-wrapper");
var popUps = document.querySelector(".popUp");
var bblue = document.querySelector(".nav-bubble");

console.log(closebtnPopUp)

function closePopUp() {
  popUps.classList.remove("openned");
}
function openPopUp() {
  popUps.classList.add("openned");
}

// Event Listener

document.addEventListener("click", function(e) {
  if (e.target == navBurg) {
    openNavBurger();
  } else {
    closeNavBurger();
  }

  if (e.target == linkShort) {
    openFootLinks();
  } else {
    closeFootLinks();
  }

  // if (e.target == closebtnPopUp || e.target != popUpBg) {
  if (e.target == closebtnPopUp) {
    closePopUp();
  }
  if (e.target == bblue) {
    openPopUp();
  }
});


// About Nav

// ****************** OLD ONE **********
var aboutNav = document.querySelectorAll('.aboutNav-link');
var aboutItem = document.querySelectorAll('.about-item');

function activeAboutLink(li) {
  aboutNav.forEach((item) => item.classList.remove('active'));
  li.classList.add('active');
};

function activeAboutItem(li) {
  aboutItem.forEach((item) => item.classList.remove('active'));

  // li.classList.add('enteringItem');
  
  li.classList.add('active');
  // setTimeout(function () {
  //   li.classList.remove('enteringItem');
  //   console.log(li.offsetHeight)
  // }, 1000);
};

aboutNav.forEach((item) => item.addEventListener("click", function () {
  let id = item.getAttribute('href');
  const target = document.querySelector(id);

  activeAboutLink(item);
  activeAboutItem(target);
}));

// Timeline

const swiperTimeline = new Swiper('.timeline-items', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination-timeline',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

var swiperTestimoni = new Swiper(".testimoni-items", {
  effect: "coverflow",
  grabCursor: true,
  // centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true
  },
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination-testimoni",
    clickable: true,
  },
  breakpoints: {
    1000: {
      slidesPerView: 3
    }
  }
});

var imagepopup = jQuery('.gallery-wrapper');
imagepopup.magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery: {
      enabled: true
  }
});

var imagepopup = jQuery('.popUpImg');
imagepopup.magnificPopup({
  delegate: 'a',
  type: 'image'
});