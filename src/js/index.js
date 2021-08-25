// =========================================================================
//                 SWIPER 1
// =========================================================================
import Swiper from 'swiper/bundle';

const swiper1 = new Swiper('.swiper1', {
  slidesPerView: 1,
  spaceBetween: 24,
  freeMode: true,
  pagination: {
    el: '.swiper-pagination1',
    clickable: true,
    type: 'bullets',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  }
});

// =========================================================================
//                 SWIPER 3
// =========================================================================

const swiper3 = new Swiper('.swiper3', {
  slidesPerView: 1,
  spaceBetween: 24,
  freeMode: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination3',
    clickable: true,
  }
});

// =========================================================================
//                  SWIPER 4
// =========================================================================

const swiper4 = new Swiper('.swiper4', {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-button-next4',
    prevEl: '.swiper-button-prev4',
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
  }
});

// =========================================================================
//                  SWIPER 5
// =========================================================================

const swiper5 = new Swiper('.swiper5', {
  slidesPerView: 1,
  spaceBetween: 24,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// =========================================================================
//                 TYPE WRITER
// =========================================================================

import Typewriter from 'typewriter-effect/dist/core';
const typeFields = document.querySelector('.fields');

if(typeFields) {
  const typewriter = new Typewriter('.fields', {
    strings: [
      'SOP DEVELOPMENT',
      'PROCESS ORIENTED SOFTWARE', 
      'Web Development', 
      'Web Designing', 
      'UX/UI Design', 
      'ERP ENABLER',
      'LEGAL CONSULTATION'
    ],
    autoStart: true,
    loop: true,
  });
}

// =========================================================================
//                 JQUERY
// =========================================================================
import $ from "jquery";
import 'jquery-sticky/jquery.sticky';

// STICKY NAV
$(".navbar").sticky({
  topSpacing:0,
  zIndex: 999,
});

// =========================================================================
// VEGAS SLIDER
// =========================================================================

import vegas from 'vegas';
$(".banner").vegas({
  slides: [
      { src: "./images/banner2.jpg" },
      { src: "./images/banner3.jpg" },
      { src: "./images/banner1.jpg" },
      { src: "./images/banner4.jpg" }
  ],
  autoplay: true,
  loop: true,
  animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ],
  transition: 'fade'
});

// =========================================================================
//                 ACCORDIAN
// =========================================================================
import simpleParallax from 'simple-parallax-js';
var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
  maxTransition: 60,
  orientation: ' up right',
  delay: .6,
	transition: 'cubic-bezier(0,0,0,1)'
});


var image = document.getElementsByClassName('tes-thumbnail');
new simpleParallax(image, {
  maxTransition: 60,
  orientation: ' up right',
  delay: .6,
	transition: 'cubic-bezier(0,0,0,1)'
});


// =========================================================================
//                 ACCORDIAN
// =========================================================================

const accButton = document.querySelectorAll("#tab-button");
if(accButton) {
  for(let i = 0; i < accButton.length; i +=1 ) {
    accButton[i].addEventListener("click", () => {
      accButton[i].classList.toggle("active");
      let panel= accButton[i].nextElementSibling;
      if(panel.style.maxHeight) {
        panel.style.maxHeight= null;
      } else {
        panel.style.maxHeight= panel.scrollHeight + "px";
      }
    })
  }
}

// =========================================================================
//                 DESKTOP NAVBAR
// =========================================================================

$('.subnav--links').on('mouseover', function(e) {
  e.preventDefault();
  $(this).find('.nav-parent').addClass('rotate-active');
  $(this).find('.innernav').addClass('menu-active');
  e.stopPropagation();
});

$('.subnav--links').on('mouseleave', function(e) {
  e.preventDefault();
  $('.nav-parent').removeClass('rotate-active');
  $('.innernav').removeClass('menu-active');
  e.stopPropagation();
});

// =========================================================================
//              MOBILE NAV & TOGGLER
// =========================================================================
$('.sd--subnav').on('click', function(event) {
  event.preventDefault();
  if($(this).hasClass('js-subnav-rotate') && $('.sd--level1').hasClass('js-subnav--active')) {
    $('.sd--subnav').removeClass('js-subnav-rotate');
    $(".sd--level1").removeClass('js-subnav--active');
  } else {
    $('.sd--subnav').removeClass('js-subnav-rotate');
    $(".sd--level1").removeClass('js-subnav--active');
    $(this).addClass('js-subnav-rotate');
    $(this).next().addClass('js-subnav--active');
  }
  event.stopPropagation();
});

$("#toggler").on('click', function() {
  $(this).toggleClass("is-active");
  $(".sidebar").animate({ width: 'toggle',opacity: 'toggle', height: "100%"}, 500);
  // $(".sidebar").toggleClass("js-sidebar--active");
});

$(window).on('resize', function(){
  if ($(window).width() > 1023) {
    $(".sidebar").removeAttr('style');
    $("#toggler").removeClass('is-active');
  }
});


// =========================================================================
//             MODAL POPUP
// =========================================================================
 import 'jquery-modal/jquery.modal';



